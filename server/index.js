const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
const morgan = require('morgan');
const adminRoute = require('./routes/admin.js');
const connectDB = require('./utils/connection.js');
// const userRouter = require('./routes/user.')

const router = express.Router();


const app = express();
dotenv.config();

// Connect to database
connectDB();

app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(morgan('common'))



// routes
// app.use('/api/user',userRoute);
app.use('/api/admin',adminRoute);



const server = app.listen(process.env.PORT, () =>{
    console.log(`server is ready at ${process.env.PORT}`);
})