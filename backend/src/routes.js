const express = require('express');
const multer = require('multer');

const uploadConfig = require('../config/upload');
const SessionControllers = require('./controllers/SessionController');
const SpotControllers = require('./controllers/SpotControllers');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingControllers')

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/session', SessionControllers.store);                       
routes.post('/spots', upload.single('thumbnail'), SpotControllers.store);              
routes.get('/spots', SpotControllers.index);     
routes.get('/list', DashboardController.show);                                       
routes.post('/spots/:spot_id/bookings', BookingController.store);

module.exports = routes; 