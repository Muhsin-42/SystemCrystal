const { LoginValidate } = require('../utils/LoginValidate');
const { Admin, validate } = require('../models/AdminModel');
const UpdatesModel = require('../models/UpdatesModel')
const TokenModel = require('../models/TokenModel');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const adminController = {
    
    verifyToken: async (req, res,next) => {
        try {
          const authHeader = req.headers.authorization;
          const Token = authHeader ? authHeader.split(' ')[1].trim() : null;
          const decoded = jwt.verify(Token, process.env.JWT_SECRET_KEY);
          const email = decoded.email;
          const user = await Admin.findOne({ email: email });
          next();
        } catch (error) {
          console.log('err ',error)
          res.status(400).json({ status: "error", error: "invalid token" });
        }
    },

    adminLogin : async(req,res) =>{
        try{
            let {error} = LoginValidate(req.body);
            if(error) return res.status(400).send({message: error.details[0].message});

            let admin = await Admin.findOne({email : req.body.email});
            if(!admin) res.status(401).send({message: "Invalid Email or Password"});

            const validPassword = await bcrypt.compare(req.body.password, admin.password);
            if(!validPassword) return res.status(401).send({message: "Invalid Email or password"}) 

            let token = admin.generateAuthToken();
            res.status(200).json({token,user: admin});
        }catch(error){
            console.log('admin login error ',error);
            res.status(500);
        }
    },
    postUpdate : async(req,res) =>{
        console.log('heheheh')
        try {
            const content  = req.body.content;
            const imageName  = req.body.data;
            const id  = Object(req.params.userId);
            const newPost = new UpdatesModel({
                content,
                author: id,
                image: imageName,
            });
    
            const savedPost = await newPost.save();
            const populatedPost = await UpdatesModel.findById(savedPost._id)
                .populate('author', 'username profilePicture')
                .exec();
            
            res.status(201).json(populatedPost);
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error.message });
        }
    },
    deleteUpdate: async (req, res) => {
        try {
          const updateId = req.params.updateId;
      
          // Find the post by ID and delete it
          const deletedPost = await UpdatesModel.findByIdAndDelete(updateId);
      
          if (!deletedPost) {
            return res.status(404).json({ message: 'Post not found' });
          }
      
          res.status(200).json({ message: 'Post deleted successfully' });
        } catch (error) {
          console.log(error);
          res.status(500).json({ message: error.message });
        }
      },
      
    getUpdates : async(req,res)=>{
        try {
            const updates = await UpdatesModel.find()
            .sort({ createdAt: -1 })
            .exec();
            
            res.status(200).json(updates)
        } catch (error) {
            res.status(500);
        }
    },
}

module.exports = adminController;
