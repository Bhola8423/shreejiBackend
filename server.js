const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")

dotenv.config();

const app = express();

app.use(cors())
app.use(express.json())

// routes 
app.get("/" , (req, res) =>{
    res.send("Api started working")
})


const studentRoutes = require('./routes/studentRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
const contactRoutes = require('./routes/contactRoutes');
app.use('/api/contact', contactRoutes);
app.use('/api/teachers', teacherRoutes);
app.use('/api/students', studentRoutes);


// Static files for uploaded resumes
app.use('/uploads', express.static('uploads'));

// MONGODB connection ;

mongoose.connect(process.env.MONGO_URI).then(() => console.log('mongoDB connected')).catch((err) => console.error("error" , err));

const PORT = process.env.PORT || 5000 ;

app.listen(PORT , () => console.log(`Server running on port ${PORT}`))