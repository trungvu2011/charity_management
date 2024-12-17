import e from 'express';
import db from '../models/index';

let createNewDonation = async (data) => {
    try {
        // Kiểm tra dữ liệu đầu vào
        if (!data.donation_id || !data.campaign_id || !data.user_id || !data.amount || !data.donation_date) {
            throw new Error('Thiếu thông tin cần thiết!');
        }

        // Tạo donation
        await db.Donation.create({
            donation_id: data.donation_id,
            campaign_id: data.campaign_id,
            user_id: data.user_id,
            amount: data.amount,
            donation_date: data.donation_date,
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


let getDonationInfo = (donation_id) => {
    return new Promise(async (resolve, reject) => {
        try {
            // Tìm donation theo donation_id
            let donation = await db.Donation.findOne({
                where: { donation_id: donation_id },
                attributes: { exclude: ['createdAt', 'updatedAt'] } // Loại bỏ createdAt, updatedAt
            });

            // Nếu không tìm thấy donation, trả về lỗi
            if (!donation) {
                return reject({
                    errCode: 1,
                    errMessage: `Không tìm thấy donation với donation_id: ${donation_id}`
                });
            }

            // Trả về thông tin donation tìm được
            resolve({
                errCode: 0,
                errMessage: 'OK!',
                donation: donation
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


module.exports ={
    createNewDonation:createNewDonation,
    getDonationInfo: getDonationInfo,
};
