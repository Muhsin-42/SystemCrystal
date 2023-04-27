import React from 'react'
import Rating from '@mui/material/Rating';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Popover from '@mui/material/Popover';
function TestimonialCard() {
  return (
    <div className="testimonials-card shadow-lg">
            <div className="level1">
                <div className="left">
                    <Rating className="rating" name="read-only" value={4} readOnly />
                    <span className="date">2 days ago</span>
                </div>
                <div className="right">
                  <MoreVertIcon className='cursor-pointer'></MoreVertIcon>
                </div>
            </div>
            <div className="level2">
                Very professional and did a good job of kitchen deep cleaning. Highly recommend them for deep cleaning
            </div>
            <span className="level3">
            - raghusubash n
            </span>
    </div>
  )
}

export default TestimonialCard