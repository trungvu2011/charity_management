import userService from '../services/campaignService';

let handleGetAllCampaigns = async (req, res) => {
    let data = await userService.getAllCampaigns();
    return res.status(200).json(data);
}

let handleGetCampaignById = async (req, res) => {
    let campaignId = req.query.id;
    let data = await userService.getCampaignById(campaignId);
    return res.status(200).json(data);
}

let handleCreateNewCampaign = async (req, res) => {
    let data = req.body;
    let img = req.file; // Dữ liệu file ảnh từ form

    // user_id, title, img, description, goal_amount, start_date, end_date, status, BANK_ID, BANK_NO
    // Kiểm tra dữ liệu
    if (!data.user_id || !data.title || !img || !data.description || !data.goal_amount || !data.start_date || !data.end_date || !data.status || !data.BANK_ID || !data.BANK_NO) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    // Lưu đường dẫn ảnh (file path)
    data.img = `/uploads/${Date.now()}-${img.originalname}`;

    let result = await userService.createNewCampaign(data);
    return res.status(200).json(result);
}

module.exports = {
    handleGetAllCampaigns: handleGetAllCampaigns,
    handleGetCampaignById: handleGetCampaignById,
    handleCreateNewCampaign: handleCreateNewCampaign
}