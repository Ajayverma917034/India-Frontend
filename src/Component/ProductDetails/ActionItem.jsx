
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import { Box, Button, styled } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('lg')]: {
        padding: '20px 40px',
        alignItem: 'center',
    }

}))

const Image = styled('img')({
    padding: '15px'
});

const StyledButton = styled(Button)(({ theme }) => ({
    width: '48%',
    height: '50px',
    borderRadius: '2px',
    [theme.breakpoints.down('lg')]: {
        width: '45%',
    },
    [theme.breakpoints.down('sm')]: {
        width: '48%',
    }

}))



const ActionItem = ({ product }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = product;

    // const addItemToCart = () => {


    //     navigate('/cart');
    // }

    const buyNow = () => {

        navigate('/payment');
    }
    return (
        <LeftContainer>
            <Box stletyle={{ padding: '15px 20px', border: '1px solid #f0f0f0', width: '90%', marginBottom: '10px' }}>
                {
                    product.images &&
                    <Image src={product.images[0].public_url} alt="product" style={{ width: '22vmax' }} />
                }
            </Box>
            <StyledButton variant='contained'> <Cart />Add to cart</StyledButton>
            <StyledButton variant='contained' onClick={() => buyNow()} style={{ background: '#fb541b' }}><Flash /> Buy now</StyledButton>
        </LeftContainer>
    )
}

export default ActionItem;