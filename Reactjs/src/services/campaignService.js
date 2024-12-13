import axios from '../axios';

let getAllCampaignsAPI = () => {
    return axios.get('/api/get-all-campaigns');
}

export {
    getAllCampaignsAPI,
};