import campaignService from '../services/campaignService';

let handleGetAllCampaigns = async (req, res) => {
    let data = await campaignService.getAllCampaigns();
    return res.status(200).json(data);
}

let handleGetCampaignById = async (req, res) => {
    let campaignId = req.query.id;
    let data = await campaignService.getCampaignById(campaignId);
    return res.status(200).json(data);
}

let handleCreateNewCampaign = async (req, res) => {
    let data = req.body;
    let img = req.file; // Dữ liệu file ảnh từ form

    // user_id, title, img, description, goal_amount, start_date, end_date, status, BANK_ID, BANK_NO
    // Kiểm tra dữ liệu
    if (!data.user_id || !data.title || !img || !data.description || !data.goal_amount || !data.start_date || !data.end_date || !data.status || !data.BANK_ID || !data.BANK_NO) {
        let missingFields = [];
        if (!data.user_id) missingFields.push('user_id');
        if (!data.title) missingFields.push('title');
        if (!img) missingFields.push('img');
        if (!data.description) missingFields.push('description');
        if (!data.goal_amount) missingFields.push('goal_amount');
        if (!data.start_date) missingFields.push('start_date');
        if (!data.end_date) missingFields.push('end_date');
        if (!data.status) missingFields.push('status');
        if (!data.BANK_ID) missingFields.push('BANK_ID');
        if (!data.BANK_NO) missingFields.push('BANK_NO');
        return res.status(400).json({ message: 'Missing required information', missingFields: missingFields });
    }

    // Lưu đường dẫn ảnh (file path)
    data.img = `/uploads/${img.filename}`;

    let result = await campaignService.createNewCampaign(data);
    return res.status(200).json(result);
}

module.exports = {
    handleGetAllCampaigns: handleGetAllCampaigns,
    handleGetCampaignById: handleGetCampaignById,
    handleCreateNewCampaign: handleCreateNewCampaign
}