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

module.exports = {
    handleGetAllCampaigns: handleGetAllCampaigns,
    handleGetCampaignById: handleGetCampaignById
}