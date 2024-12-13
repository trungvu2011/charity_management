import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import campaignController from "../controllers/campaignController";
import donationController from "../controllers/donationController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);
    router.get('/crud', homeController.getCRUD);

    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-crud', homeController.displayGetCRUD);
    router.get('/edit-crud', homeController.getEditCRUD);

    router.post('/put-crud', homeController.putCRUD);
    router.get('/delete-crud', homeController.deleteCRUD);

    router.post('/api/login', userController.handleLogin);
    router.post('/api/register', userController.handleRegister);

    router.get('/api/get-all-users', userController.handleGetAllUsers);
    router.post('/api/create-new-user', userController.handleCreateNewUser);
    router.put('/api/edit-user', userController.handleEditUser);
    router.delete('/api/delete-user', userController.handleDeleteUser);

    router.get('/api/get-all-campaigns', campaignController.handleGetAllCampaigns);
    
    router.post('/api/create-new-donation',donationController.handleCreateNewDonation);
    router.get('/api/get-donation-information',donationController.handleGetDonationInfo);
    
    return app.use("/", router);
}

module.exports = initWebRoutes;