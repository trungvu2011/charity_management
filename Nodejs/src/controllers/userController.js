import userService from '../services/userService';

let handleLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            errMessage: 'Missing input parameter!'
        });
    }

    let userData = await userService.handleUserLogin(email, password);

    return res.status(200).json(userData);
}

let handleRegister = async (req, res) => {
    let message = await userService.handleUserRegister(req.body);
    return res.status(200).json(message);
}

let handleGetAllUsers = async (req, res) => {
    let id = req.query.id; // ALL or userID

    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing required parameter!',
            users: []
        });
    }

    let users = await userService.getAllUsers(id);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'OK',
        users
    });
}

let handleCreateNewUser = async (req, res) => {
    let message = await userService.createNewUser(req.body);
    return res.status(200).json(message);
}

let handleEditUser = async (req, res) => {
    let data = req.body;
    let message = await userService.updateUserData(data);
    return res.status(200).json(message);
}

let handleDeleteUser = async (req, res) => {
    if (!req.body.user_id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing required parameter!'
        });
    }
    let message = await userService.deleteUser(req.body.user_id);
    return res.status(200).json(message);
}

let handleGetNotifications = async (req, res) => {
    if (!req.query.user_id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing required parameter!'
        });
    }
    let data = await userService.getNotifications(req.query.user_id);
    return res.status(200).json(data);
}

module.exports = {
    handleLogin: handleLogin,
    handleRegister: handleRegister,
    handleGetAllUsers: handleGetAllUsers,
    handleCreateNewUser: handleCreateNewUser,
    handleEditUser: handleEditUser,
    handleDeleteUser: handleDeleteUser,
    handleGetNotifications: handleGetNotifications
}