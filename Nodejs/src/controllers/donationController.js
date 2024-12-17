import donationService from '../services/donationService';

let handleGetDonationInfo = async (req,res) => {
    let id = req.query.donation_id;
    if(!id){
        return res.status(200).json({
            errCode: 1,
            errMessage:'Missing required parameter!',
            user: []
        });
    }
    let donations = await donationService.getDonationInfo(id);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'OK',
        donations
    });
}

let handleCreateNewDonation = async (req,res) => {
    let message = await donationService.createNewDonation(req.body);
    return res.status(200).json(message);
}
module.exports ={
    handleGetDonationInfo: handleGetDonationInfo,
    handleCreateNewDonation: handleCreateNewDonation,
};