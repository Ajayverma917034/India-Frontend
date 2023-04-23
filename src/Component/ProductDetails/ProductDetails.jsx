
import { Box, Typography, styled, TableCell, Table, TableBody, TableRow, Rating, Divider, Button } from '@mui/material';
import { LocalOffer as Badge, Reviews } from '@mui/icons-material';
import './product.css'
import ReviewCard from './ReviewCard';

const StyledBadge = styled(Badge)`
    font-size: 15px;
    margin-top: 10px;
    color: green;
`

const Discount = styled(Box)`
    vertical-align: baseline;
    margin-bottom: 10px;
`
const ColumnText = styled(TableRow)`
    font-size: 14px;
        vertical-align: baseline;
    &>td{
        font-size: 14px;
        border: none;
    }
`
const ProductDetails = ({ product }) => {

    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));
    let shippingcharge = 0;
    // if (product.ShippingCharge == "1")
    //     shippingcharge = 40;

    return (
        <>{
            product && <>
                <Typography style={{ marginTop: 5, color: '#878787', fontWeight: 600 }} sx={{ fontSize: { xs: 20, md: 30 } }}>{product.heading}</Typography>
                <Box style={{ display: 'flex', alignItems: 'center' }}>

                    <Rating name="half-rating-read" value={product.ratings} precision={0.5} readOnly></Rating>
                    {
                        product.reviews &&
                        <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14, paddingLeft: 5 }}>  {product.reviews.length} Reviews</Typography>
                    }
                </Box>
                <Typography>
                    <Box component="span" style={{ fontSize: 28 }}>₹{product.price - (product.price * product.discount) / 100}</Box>&nbsp;&nbsp;&nbsp;
                    <Box component="span" style={{ color: "#878787" }}><strike>₹{product.price}</strike></Box>&nbsp;&nbsp;&nbsp;
                    <Box component="span" style={{ color: "#388e3c" }}>{product.discount}%</Box>

                </Typography>
                <Discount>
                    <Typography><StyledBadge />Buy 2 Get 5% Off, Buy 3 Get 10% Off</Typography>
                    <Typography><StyledBadge />5% Instant Discount + Upto 5% Back on Amazon Pay ICICI Bank Credit Card Trxns. Min purchase value INR 2500</Typography>
                    <Typography><StyledBadge />10% Instant Discount up to INR 750 on ICICI Bank Debit Card Trxns. Min purchase value INR 2500</Typography>
                    <Typography><StyledBadge />10% Instant Discount up to INR 1000 on ICICI Bank Credit Card Trxns. Min purchase value INR 2500</Typography>
                    <Typography><StyledBadge />10% Instant Discount up to INR 1250 on ICICI Bank Credit Card EMI Trxns. Min purchase value INR 2500</Typography>
                </Discount>
                <Divider />
                <p style={{ fontSize: 25, paddingTop: 10, color: '#868787' }}>
                    Status:
                    <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                        {product.Stock < 1 ? "OutOfStock" : "InStock"}
                    </b>
                </p>
                <Table style={{ marginTop: '30px' }}>
                    <TableBody>
                        <ColumnText>
                            <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                            <TableCell>Deliver by {date.toDateString()} | Shipping Charge - ₹{shippingcharge}</TableCell>
                        </ColumnText>
                        <ColumnText>
                            <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
                            <TableCell>1 year Warranty</TableCell>
                        </ColumnText>
                        <ColumnText>
                            <TableCell style={{ color: '#878787' }}>Discription</TableCell>
                            <TableCell>{product.title}</TableCell>
                        </ColumnText>
                    </TableBody>
                </Table>
                <Button >Submit a review</Button>
                <Box>
                    {
                        product.reviews && product.reviews.map((review, index) => (
                            <ReviewCard review={review} key={index} />
                        ))
                    }
                </Box>
            </>
        }

        </>
    )
}

export default ProductDetails;