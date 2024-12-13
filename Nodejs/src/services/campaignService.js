import e from 'express';
import db from '../models/index';

let getAllCampaigns = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let campaigns = await db.Campaign.findAll({
                attributes: { exclude: ['createdAt', 'updatedAt'] }
            });
            for (let i = 0; i < campaigns.length; i++) {
                let user = await db.User.findOne({
                    where: { user_id: campaigns[i].user_id },
                    attributes: ['firstName', 'lastName', 'userType']
                });
                campaigns[i].setDataValue('type', user.userType);
                campaigns[i].setDataValue('creator', user.lastName + ' ' + user.firstName);
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

module.exports = {
    getAllCampaigns: getAllCampaigns,
}