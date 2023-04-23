import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../Stores/actions/productAction';
import Loading from '../Loading/Loading';
import { Box, Typography } from '@mui/material';
import SingleProduct from '../Product/SingleProduct';
import './AllProducts.css'
import CustomPagination from '../pagination/CustomPagination';
import { useParams } from 'react-router-dom';


const AllProducts = () => {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1)
    const { products, error, loading, productCount, resultPerPage } = useSelector((state) => state.products)

    const { keyword } = useParams()

    useEffect(() => {
        dispatch(getProduct(keyword, currentPage));
    }, [dispatch, keyword, currentPage])
    return (
        <Fragment>
            {
                loading ? <Loading /> :
                    <Fragment>
                        <Typography className='productHeading'> Products </Typography>
                        <Box style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                            {
                                products && products.map((product) => (
                                    <SingleProduct product={product} key={product._id} />
                                ))
                            }
                        </Box>
                    </Fragment>
            }
            <CustomPagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </Fragment>
    )
}

export default AllProducts