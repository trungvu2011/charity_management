import reviewService from '../services/reviewService.js';

let handleGetAllReview = async (req, res) => {
    let data = await reviewService.getAllReview();
    return res.status(200).json(data);
};

module.exports = {
    handleGetAllReview: handleGetAllReview
};