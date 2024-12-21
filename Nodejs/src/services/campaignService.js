import e from 'express';
import db from '../models/index';

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
                campaigns[i].setDataValue('remainingDays', remainingDays);
            }
            resolve(campaigns);
        } catch (error) {
            reject(error);
        }
    })
}

let checkCampaignID = (ID) => {
    return new Promise(async (resolve, reject) => {
        try {

            let user = await db.User.findOne({
                where: { ID: ID }
            });
            if (user) {
                resolve(true);
            } else {
                resolve(false);
            }
        } catch (error) {
            reject(error);
        }
    });
};


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
            campaign.setDataValue('remainingDays', remainingDays);

            resolve(campaign);
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = {
    getAllCampaigns: getAllCampaigns,
    getCampaignById: getCampaignById,
    createNewCampaign: createNewCampaign
}