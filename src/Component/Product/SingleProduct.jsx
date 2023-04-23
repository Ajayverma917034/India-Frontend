import { Box, Rating, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import "./product.css"


const SingleProduct = ({ product }) => {
    return (
        <Link to={`product/${product._id}`} className='productCard'
        >
            <img src={product.images[0].public_url} alt={product.heading} style={{ width: '16vmax' }} />
            <Typography style={{ fontSize: '1.2vmax', color: '878787', fontWeight: 600 }} sx={{ fontsize: { xs: '1.7vmax' } }}>{product.heading}</Typography>
            <Box style={{ margin: '0.5vmax 0', display: 'flex', alignItems: 'center', justifyContent: 'flex-between' }}>
                <Rating name="half-rating-read" value={product.ratings} precision={0.5} readOnly size={window.innerWidth < 600 ? '20' : "medium"} />
                <Typography variant='span' margin={'0.5vmax'} >{product.numOfReviews} Reviews</Typography>
            </Box>
            <Typography style={{ fontSize: '1vmax', color: '#05d2ff' }}>`₹ {product.price}`</Typography>
        </Link>
    )
}

export default SingleProduct