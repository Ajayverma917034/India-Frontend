import React, { Fragment, useEffect } from 'react'
import NavB from './Carousel/CarouselBar'
import { Box, Typography } from '@mui/material'
import LogoBar from './LogoBar/LogoBar'
import Products from '../Product/Products'
import MetaData from '../metaData/MetaData'
import { getProduct } from "../../Stores/actions/productAction.js"

import { useSelector, useDispatch } from "react-redux"
import Loading from '../Loading/Loading'
import { alertOption } from '../../Stores/actions/notificationAction'

const Home = () => {
    const dispatch = useDispatch();
    const { loading, error, products, productsCount } = useSelector((state) => state.products)
    useEffect(() => {
        if (error) {
            dispatch(alertOption({ open: true, severity: 'error', message: error }))
            return;
        }
        dispatch(getProduct())
    }, [dispatch, error])

    return (
        <Fragment>
            {
                loading ?
                    <Loading />
                    :
                    <Box sx={{ padding: { xs: '20px 10px', md: '20px 40px', display: 'flex', flexDirection: 'column' } }}>
                        <MetaData title={"IEH"} />  
                        <NavB />
                        <Typography margin={'0 auto'} fontSize={40} fontWeight={600} color={'#2c0ca3d9'}>  Our Services</Typography>
                        <LogoBar />
                        <Products products={products} />
                    </Box>
            }
        </Fragment>
    )
}

export default Home