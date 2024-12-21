import express from "express";
import multer from "multer";
import path from "path";

import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import campaignController from "../controllers/campaignController";
import donationController from "../controllers/donationController";
import reviewController from "../controllers/reviewController.js";

let router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../uploads'));
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage });

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
    router.get('/api/get-campaign-by-id', campaignController.handleGetCampaignById);
    router.post('/api/create-new-campaign', upload.single('img'), campaignController.handleCreateNewCampaign);

    router.post('/api/create-new-donation', donationController.handleCreateNewDonation);
    router.get('/api/get-donation-information', donationController.handleGetDonationInfo);

    router.get('/api/get-all-review', reviewController.handleGetAllReview);

    router.get('/api/get-notifications', userController.handleGetNotifications);

    return app.use("/", router);
}

module.exports = initWebRoutes;