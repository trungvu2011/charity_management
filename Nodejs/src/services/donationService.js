import e from 'express';
import db from '../models/index';

let createNewDonation = async (data) => {
    try {
        // Kiểm tra dữ liệu đầu vào
        if (!data.campaign_id || !data.user_id || !data.amount) {
            throw new Error('Thiếu thông tin cần thiết!');
        }

        // Tạo donation
        await db.Donation.create({
            campaign_id: data.campaign_id,
            user_id: data.user_id,
            amount: data.amount,
            donation_date: new Date(),
            message: data.message || '' // Nếu message không có, sử dụng chuỗi rỗng
        });

        // Trả về kết quả thành công
        return {
            errCode: 0,
            errMessage: 'OK!'
        };

    } catch (error) {
        // Log lỗi nếu cần thiết
        console.error('Error creating donation:', error.message);

        // Trả về lỗi
        return {
            errCode: 1,
            errMessage: 'Error creating donation:'
        };
    }
};


let getDonationInfo = (campaign_id) => {
    return new Promise(async (resolve, reject) => {
        try {
            // Tìm donation theo donation_id
            let donationList = await db.Donation.findAll({
                where: { campaign_id: campaign_id },
                attributes: { exclude: ['createdAt', 'updatedAt'] } // Loại bỏ createdAt, updatedAt
            });

            for (let i = 0; i < donationList.length; i++) {
                // Tìm thông tin người ủng hộ
                let user = await db.User.findOne({
                    where: { user_id: donationList[i].user_id },
                    attributes: ['lastName', 'firstName']
                });

                // Thêm thông tin người ủng hộ vào donation
                donationList[i].setDataValue('name', user.lastName + ' ' + user.firstName);
            }

            // Trả về thông tin donation tìm được
            resolve({
                errCode: 0,
                errMessage: 'OK!',
                donationList: donationList
            });

        } catch (error) {
            // Bắt lỗi nếu có ngoại lệ và reject promise
            reject({
                errCode: 1,
                errMessage: error.message || 'Có lỗi xảy ra!'
            });
        }
    });
};


module.exports = {
    createNewDonation: createNewDonation,
    getDonationInfo: getDonationInfo,
};
