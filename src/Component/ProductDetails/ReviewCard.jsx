import { Box, Rating, Typography } from '@mui/material'
import React from 'react'
import profilepg from "../../img/sociel_img/facebook.png"

const ReviewCard = ({ review }) => {
    return (
        <Box>
            <img src={profilepg} alt='review' />
            <Typography>{review.name}</Typography>
            <Rating name="half-rating-read" value={review.rating} precision={0.5} readOnly></Rating>
            <Typography>{review.comment}</Typography>
        </Box>
    )
}

export default ReviewCard