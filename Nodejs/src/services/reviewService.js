import db from '../models/index';

let getAllReview = async () => {
    return new Promise((resolve, reject) => {
        try {
            let reviews = db.Report.findAll();
            resolve(reviews);
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    getAllReview: getAllReview
};
