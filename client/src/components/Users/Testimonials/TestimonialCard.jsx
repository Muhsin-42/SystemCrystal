import React from 'react'
import Rating from '@mui/material/Rating';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Popover from '@mui/material/Popover';
import moment from 'moment'
function TestimonialCard({review}) {
  const currentDate = moment();
  
  return (
    <div className="testimonials-card shadow-lg">
            <div className="level1">
                <div className="left">
                    <Rating className="rating" name="read-only" value={parseInt(review?.rating)} readOnly />
                    <span className="date">{moment(review.createdAt).from(currentDate, true)}</span>
                </div>
                <div className="right">
                  <MoreVertIcon className='cursor-pointer'></MoreVertIcon>
                </div>
            </div>
            <div className="level2">
                {
                  review?.reviewMessage
                }
            </div>
            <span className="level3">
            - {review?.fullname}
            </span>
    </div>
  )
}

export default TestimonialCard