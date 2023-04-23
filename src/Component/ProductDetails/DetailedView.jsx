
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid, styled } from '@mui/material';

import { useParams } from "react-router-dom";
import { getProductDetails } from "../../Stores/actions/productAction";
import ActionItem from "./ActionItem";
import ProductDetails from "./ProductDetails";
import Loading from "../Loading/Loading"
import { alertOption } from "../../Stores/actions/notificationAction";

const Component = styled(Box)`
background: #f2f2f2;
min-height: 81.2vh;

`


const Container = styled(Grid)(({ theme }) => ({
    display: 'flex',
    background: 'white',
    [theme.breakpoints.down('lg')]: {
        justifyContent: 'center'
    }
}))
const RightContainer = styled(Grid)`
    margin-top: 55px;
    padding-left: 14px;
`
const DetailedView = () => {
    const { id } = useParams()

    const dispatch = useDispatch();
    const { product, loading, error } = useSelector((state) => state.productDetails);

    useEffect(() => {
        if (error) {
            dispatch(alertOption({ open: true, severity: 'error', message: error }))
        }
        dispatch(getProductDetails(id))
    }, [dispatch, id, error])

    return (
        <>
            {
                loading ? <Loading /> : <Container>
                    {
                        product && <Container container >
                            <Grid item lg={6} md={4} sm={8} xs={12}>
                                <ActionItem product={product} />
                            </Grid>
                            <RightContainer item lg={6} md={8} sm={8} xs={12}>
                                <ProductDetails product={product} />
                            </RightContainer>

                        </Container>
                    }
                </Container>
            }

        </>
    )
}

export default DetailedView;