const ReviewModel = require("../models/ReviewModel");


const usersController = {
    postReview : async (req,res)=>{
        try {
            const {fullname,email,rating,reviewMessage} = req.body;
            
            const review = await ReviewModel.findOne({email: email});
            if(review){
                return res.status(310).json({msg: "Review Already Exists"})
            }
            const newReview = await new ReviewModel({
                fullname, email,rating, reviewMessage
            }).save();

            res.status(201).json(newReview);
        } catch (error) {
            res.status(500).json({msg: "something went wrong"});
        }
    },
    getReviews : async (req,res)=>{
        try {
            const reviews = await ReviewModel.find({}).sort({createdAt:-1});
            res.status(200).json(reviews);
        } catch (error) {
            console.log(error)
            res.status(500);
        }
            
    }
}

module.exports = usersController;