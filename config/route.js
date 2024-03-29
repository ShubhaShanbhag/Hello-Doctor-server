 const express = require('express');
 const route = express.Router();
 //const postController = require('../controller/postController')
 const appointmentController = require('../controller/appointmentController')
 const doctorController = require('../controller/doctorController')
 const userController = require('../controller/userController')
 //const auth = require('../middleware/auth')

//login  and reg
 route.post('/register/Doctor', doctorController.doctorRegister)
 route.post('/login/Doctor', doctorController.doctorLogin)
 route.post('/register/client', userController.userRegister)
 route.post('/login/client', userController.userLogin)

 // get all doctors
 route.get("/doctors/git-all-doctors", userController.getAllDocotrsController);
 route.get("/doctors/:id", userController.getDoctorByIdController);

 //BOOK APPOINTMENT
 route.post('/pages/BookAppointment', appointmentController.bookAppointmentController);
 route.post('/set-appointment', appointmentController.setNewAppointment);
 route.get('/get-doctor-appointments/:id', appointmentController.getDoctorAppointment)


 module.exports= route;