const { LoginValidate } = require('../utils/LoginValidate');
const { Admin, validate } = require('../models/AdminModel');
const TokenModel = require('../models/TokenModel');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const adminController = {
    
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
        try {
            const content  = req.body.content;
            const imageName  = req.body.data;
            const id  = Object(req.params.userId);
            const newPost = new PostsModel({
                content,
                author: id,
                image: imageName,
                likes:{}
            });
    
            const savedPost = await newPost.save();
            const populatedPost = await PostsModel.findById(savedPost._id)
                .populate('author', 'username profilePicture')
                .populate('comments.author', 'username profilePicture')
                .exec();
            
            res.status(201).json(populatedPost);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
}

module.exports = adminController;
