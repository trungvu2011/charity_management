import axios from '../axios';

let getAllCampaignsAPI = () => {
    return axios.get('http://localhost:8080/api/get-all-campaigns');
}

export {
    getAllCampaignsAPI,
};