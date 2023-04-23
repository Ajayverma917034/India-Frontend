import React from 'react'
import Navbar from './Component/Navbar/Navbar.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Component/Home/Home.jsx"
import { Box } from '@mui/material';
import Footer from './Component/Footer/Footer.jsx';
import Notification from './Component/Alert/Notification.jsx';
import DetailedView from './Component/ProductDetails/DetailedView.jsx';
import AllProducts from './Component/AllProducts/AllProducts.jsx';
const App = () => {
    return (

        <BrowserRouter>
            <Navbar />
            <Notification />
            <Box style={{ padding: '0 10', backgroundColor: '#f2f2f2' }}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/product/:id' element={<DetailedView />} />
                    <Route path='/products' element={<AllProducts />} />
                    <Route path='/products/:keyword' element={<AllProducts />} />
                </Routes>
            </Box>
            <Footer />
        </BrowserRouter>
    )
}

export default App