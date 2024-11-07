import e from 'express';
import db from '../models/index';
import bcrypt from 'bcryptjs';

const salt = bcrypt.genSaltSync(10);

let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (error) {
            reject(error);
        }
    });
};


let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};

            let isExist = await checkUserEmail(email);
            if (isExist) {
                let user = await db.User.findOne({
                    // attributes: ['email', 'name', 'address', 'userType', 'password'],
                    where: { email: email },
                    raw: true
                });
                if (user) {
                    let check = await bcrypt.compareSync(password, user.password);
                    if (check) {
                        userData.errCode = 0;
                        userData.errMessage = `OK!`;
                        delete user.password;
                        userData.user = user;
                    } else {
                        userData.errCode = 3;
                        userData.errMessage = `Wrong password!`;
                    }
                } else {
                    userData.errCode = 2;
                    userData.errMessage = `User's not found!`;
                }
            } else {
                userData.errCode = 1;
                userData.errMessage = `Your's email is not exist in your system. Please try another email!`;
            }
            resolve(userData);
        } catch (error) {
            reject(error);

        }
    });
};

let checkUserEmail = (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { email: email }
            });
            if (user) {
                resolve(true);
            } else {
                resolve(false);
            }
        } catch (error) {
            reject(error);
        }
    });
};

let getAllUsers = (user_id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = '';
            if (user_id == 'ALL') {
                users = await db.User.findAll({
                    attributes: {
                        exclude: ['password']
                    }
                });
            }
            if (user_id && user_id !== 'ALL') {
                users = await db.User.findOne({
                    where: { user_id: user_id },
                    attributes: {
                        exclude: ['password']
                    }
                });
            }
            resolve(users);
        } catch (error) {
            reject(error);
        }
    });
};

let createNewUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let check = await checkUserEmail(data.email);
            if (check === true) {
                resolve({
                    errCode: 1,
                    errMessage: 'Your email is already in used, please try another email!'
                });
            } else {
                let hashPasswordFromBcrypt = await hashUserPassword(data.password);
                await db.User.create({
                    email: data.email,
                    password: hashPasswordFromBcrypt,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    address: data.address,
                    phonenumber: data.phonenumber,
                    gender: data.gender === '1' ? true : false,
                    userType: data.userType
                });

                resolve({
                    errCode: 0,
                    errMessage: 'OK!'
                });
            }

        } catch (error) {
            reject(error);
        }
    })
};

let deleteUser = (user_id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { user_id: user_id },
                raw: false
            });
            if (!user) {
                resolve({
                    errCode: 2,
                    errMessage: 'The user is not exist!'
                });
            }

            await user.destroy();

            resolve({
                errCode: 0,
                message: 'The user is deleted!'
            });
        } catch (error) {
            reject(error);
        }
    });
}

let updateUserData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.user_id) {
                resolve({
                    errCode: 2,
                    message: 'Missing required parameters!'
                });
            }
            let user = await db.User.findOne({
                where: { user_id: data.user_id },
                raw: false
            });
            if (user) {
                user.firstName = data.firstName;
                user.lastName = data.lastName;
                user.address = data.address;
                await user.save();
                resolve({
                    errCode: 0,
                    errMessage: 'Update the user success!'
                });
            } else {
                resolve({
                    errCode: 1,
                    message: 'The user is not found!'
                });
            }
        } catch (error) {
            reject(error);
        }
    })
}

module.exports = {
    handleUserLogin: handleUserLogin,
    checkUserEmail: checkUserEmail,
    getAllUsers: getAllUsers,
    createNewUser: createNewUser,
    deleteUser: deleteUser,
    updateUserData: updateUserData
};