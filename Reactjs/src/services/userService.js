import axios from '../axios';

const handleLoginApi = (email, password) => {
    return axios.post('/api/login', { email, password });
};

const handleRegisterApi = (data) => {
    return axios.post('/api/register', data);
};

const getAllUsers = (inputId) => {
    return axios.get(`/api/get-all-users?id=${inputId}`);
};

const createNewUserService = (data) => {
    return axios.post('/api/create-new-user', data);
};

const deleteUserService = (userId) => {
    return axios.delete(`/api/delete-user`, {
        data: {
            user_id: userId
        }
    });
};

const editUserService = (inputData) => {
    return axios.put('/api/edit-user', inputData);
};

const handleEditUserApi = (data) => {
    return axios.put('/api/edit-user', data);
}

export {
    handleLoginApi, getAllUsers,
    createNewUserService, deleteUserService,
    editUserService, handleRegisterApi,
    handleEditUserApi
};