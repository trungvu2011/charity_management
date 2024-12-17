import userService from '../services/campaignService';

let handleGetAllCampaigns = async (req, res) => {
    let data = await userService.getAllCampaigns();
    return res.status(200).json(data);
}


module.exports = {
    handleGetAllCampaigns: handleGetAllCampaigns,
    
}