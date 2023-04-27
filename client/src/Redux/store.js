import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : null,
    token : null,
    admin : null,
    reviewPosted : false,
    reviews : [],
    updates: [],
    gallery : []
};


export const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        setLogin : (state,action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout : (state) =>{
            state.user = null;
            state.token = null;
        },
        setReviewPosted : (state,action) => {
            state.reviewPosted = action.payload.reviewPosted;
        },
        setUser : (state,action)=>{
            state.user = action.payload.user;
        },
        setToken : (state,action)=>{
            state.token = action.payload.token;
        },
        // Reviews
        setReviews : (state,action) =>{
            state.reviews = action.payload.reviews;
        },
        setNewReview : (state,action) =>{
            const newReview = action.payload.newReview;
            state.reviews.unshift(newReview);
        },

        // Gallery
        setGallery : (state,action) =>{
            state.gallery = action.payload.gallery;
        },
        setNewImage : (state,action) => {
            const newImage = action.payload.newImage;
            state.gallery.unshift(newImage);
        },

        // Updates
        setUpdates : (state,action) =>{
            state.updates = action.payload.updates;
        },
        setNewUpdate : (state,action) =>{
            state.updates.unshift(action.payload.newUpdate);
        }

    }
})



export const { setLogin, setLogout, setUser, setToken, setReviewPosted, setReviews, setNewReview, setGallery, setNewImage, setUpdates,setNewUpdate} = authSlice.actions;

export default authSlice.reducer;