import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import axios from '../../../utils/axios';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { setPostedReview, setReviews } from '../../../Redux/store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddReview({ movieDetails }) {

    const reviews = useSelector(state => state.reviews);
    const dispatch = useDispatch();

    const [rating, setRating] = useState(0)
    const [reviewMessage, setReviewMessage] = useState('')
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [characterCount, setCharacterCount] = useState(0)
    const notify = () => toast.success("Review posted")
    const notifyMinimun = () => toast.warn("Review should be at least 5 character.", {
        position: toast.POSITION.TOP_RIGHT
      });
    const notifyEmptyRating = () => toast.error("Please rate the movie", {
        position: toast.POSITION.TOP_RIGHT
      });
    const notifyReviewExists = (msg) => toast.error(msg, {
        position: toast.POSITION.TOP_RIGHT
      });



    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            if(rating===0){
                notifyEmptyRating();
                return;
            }
            
            if(reviewMessage ==='' || reviewMessage.trim().length <5)
            {
                notifyMinimun();
                return;
            }
            
            
            const result = await axios.post(`/api/user/review`,{
                fullname: fullname,
                email : email,
                rating : rating,
                reviewMessage: reviewMessage
            });
            if(result?.status<310){
                notify();
                dispatch(setPostedReview({postedReview : true}));
                dispatch(setReviews({reviews: [result.data,...reviews] }));
            }            
        } catch (error) {
            notifyReviewExists(error.response.data.msg);
        }

        handleClose();
    }

    const handleReviewChange = (e) => {
        if (e.target.value.length <= 200) {
            setReviewMessage(e.target.value);
            setCharacterCount(e.target.value.length);
        }
    };
    
    const handleClose = ()=>{
        setRating(0);
        setEmail('');
        setFullname('');
        setReviewMessage(''); 
        setCharacterCount(0); 
    }

    return (
        <div>
            <ToastContainer autoClose={1300} />
            <span  className="" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Add Review</span>
            <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog ">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-1 m-0 p-0" id="exampleModalLabel">{movieDetails?.title}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" >
                            <form onSubmit={handleSubmit}>


                                <div className="mb-3">
                                    <input className="form-control" type='text' placeholder='Full Name' value={fullname} onChange={(e)=>setFullname(e.target.value)} required></input>
                                </div>
                                <div className="mb-3">
                                    <input className="form-control" type='email' placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}required></input>
                                </div>


                                <div className="mb-3">
                                    {/*  */}
                                    <Typography component="legend" >Rating</Typography>
                                    <Rating
                                        style={{ fontSize: '40px' }}
                                        name="simple-controlled"
                                        value={rating}
                                        onChange={(event, newValue) => {
                                            setRating(newValue);
                                        }}
                                    />

                                </div>

                                <div className="mb-5">
                                    <label htmlFor="message-text" className="col-form-label w-100">
                                        <div className="d-flex justify-content-between w-100">
                                            <span className="">
                                                Review: 
                                            </span>
                                            <span className="">{characterCount}/200</span>
                                        </div>
                                        </label>
                                    <textarea className="form-control" value={reviewMessage} onChange={handleReviewChange} id="message-text"></textarea>
                                </div>
                                <div className="modal-footer ">
                                    <button type="button" onClick={handleClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-success primary-color-bg" data-bs-dismiss='modal'>Post Review</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddReview