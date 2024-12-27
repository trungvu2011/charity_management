import e from 'express';
import db from '../models/index';
import { Op } from 'sequelize';

let createNewCampaign = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let campaign = await db.Campaign.create({
                user_id: data.user_id,
                title: data.title,
                img: data.img, // Đường dẫn ảnh
                description: data.description,
                goal_amount: data.goal_amount,
                start_date: data.start_date,
                end_date: data.end_date,
                status: data.status,
                BANK_ID: data.BANK_ID,
                BANK_NO: data.BANK_NO,
            });
            resolve({
                message: "Create campaign successfully",
                newCampaign: campaign
            });
        } catch (error) {
            reject(error);
        }
    });
}


let getAllCampaigns = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let campaigns = await db.Campaign.findAll({
                attributes: { exclude: ['createdAt', 'updatedAt'] }
            });
            for (let i = 0; i < campaigns.length; i++) {
                let user = await db.User.findOne({
                    where: { user_id: campaigns[i].user_id },
                    attributes: ['firstName', 'lastName', 'userType', 'email', 'phonenumber']
                });
                campaigns[i].setDataValue('type', user.userType);
                campaigns[i].setDataValue('creator', user.lastName + ' ' + user.firstName);
                campaigns[i].setDataValue('creatorEmail', user.email);
                campaigns[i].setDataValue('creatorPhone', user.phonenumber);

                // raisedAmount
                // progress
                // remainingDays
                let donations = await db.Donation.findAll({
                    where: { campaign_id: campaigns[i].campaign_id },
                    attributes: ['amount']
                });

                let raisedAmount = 0;
                for (let j = 0; j < donations.length; j++) {
                    raisedAmount += donations[j].amount;
                }

                campaigns[i].setDataValue('raisedAmount', raisedAmount);
                campaigns[i].setDataValue('progress', Math.round(raisedAmount / campaigns[i].goal_amount * 100));

                let remainingDays = campaigns[i].end_date ? Math.ceil((new Date(campaigns[i].end_date) - new Date()) / (1000 * 60 * 60 * 24)) : null;
                campaigns[i].setDataValue('remainingDays', Math.max(remainingDays, 0));
            }
            resolve(campaigns);
        } catch (error) {
            reject(error);
        }
    })
}

let getCampaignById = async (campaignId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let campaign = await db.Campaign.findOne({
                where: { campaign_id: campaignId },
                attributes: { exclude: ['createdAt', 'updatedAt'] }
            });
            if (!campaign) {
                resolve({});
            }
            let user = await db.User.findOne({
                where: { user_id: campaign.user_id },
                attributes: ['firstName', 'lastName', 'userType', 'email', 'phonenumber']
            });
            campaign.setDataValue('type', user.userType);
            campaign.setDataValue('creator', user.lastName + ' ' + user.firstName);
            campaign.setDataValue('creatorEmail', user.email);
            campaign.setDataValue('creatorPhone', user.phonenumber);

            // raisedAmount
            // progress
            // remainingDays
            let donations = await db.Donation.findAll({
                where: { campaign_id: campaign.campaign_id },
                attributes: ['amount']
            });

            let raisedAmount = 0;
            for (let j = 0; j < donations.length; j++) {
                raisedAmount += donations[j].amount;
            }

            campaign.setDataValue('raisedAmount', raisedAmount);
            campaign.setDataValue('progress', Math.round(raisedAmount / campaign.goal_amount * 100));

            let remainingDays = campaign.end_date ? Math.ceil((new Date(campaign.end_date) - new Date()) / (1000 * 60 * 60 * 24)) : null;
            campaign.setDataValue('remainingDays', Math.max(remainingDays, 0));

            resolve(campaign);
        } catch (error) {
            reject(error);
        }
    });
}

let updateNotificationOfCampaign = async () => {
    try {
        console.log("Update notification of campaign");
        let campaigns = await db.Campaign.findAll({
            where: {
                status: 0,  // Trạng thái chiến dịch là 0
            },
        });
        campaigns.forEach(async (campaign) => {
            // Kiểm tra xem chiến dịch đã kết thúc chưa
            if (new Date(campaign.end_date) <= new Date()) {
                await db.Campaign.update({
                    status: 1  // Cập nhật trạng thái chiến dịch thành 1 (đã kết thúc)
                }, {
                    where: { campaign_id: campaign.campaign_id }
                });
                // Tạo thông báo cho người tạo chiến dịch
                await db.Notification.create({
                    user_id: campaign.user_id,
                    campaign_id: campaign.campaign_id,
                    noti: `Chiến dịch ${campaign.title} đã kết thúc`
                });
            } else {
                // Kiểm tra số tiền
                let donations = await db.Donation.findAll({
                    where: { campaign_id: campaign.campaign_id },
                    attributes: ['amount']
                });
                let raisedAmount = 0;
                for (let j = 0; j < donations.length; j++) {
                    raisedAmount += donations[j].amount;
                }
                if (raisedAmount >= campaign.goal_amount) {
                    await db.Campaign.update({
                        status: 2  // Cập nhật trạng thái chiến dịch thành 2 (đã đạt mục tiêu)
                    }, {
                        where: { campaign_id: campaign.campaign_id }
                    });

                    // Tạo thông báo cho người tạo chiến dịch
                    await db.Notification.create({
                        user_id: campaign.user_id,
                        campaign_id: campaign.campaign_id,
                        noti: `Chiến dịch ${campaign.title} đã đạt mục tiêu`
                    });
                }
            }
        });

    } catch (error) {
        throw error;
    }
}

// Thiết lập để kiểm tra mỗi 5 phút (300,000 ms)
setInterval(updateNotificationOfCampaign, 300000);  // 5 phút

module.exports = {
    getAllCampaigns: getAllCampaigns,
    getCampaignById: getCampaignById,
    createNewCampaign: createNewCampaign,
    updateNotificationOfCampaign: updateNotificationOfCampaign
}