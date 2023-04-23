

import { Box, createTheme, ThemeProvider } from '@mui/material';
import Pagination from '@mui/material/Pagination';

import React from 'react'

const dartTheme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#fff',
        },
    },
})

const CustomPagination = ({ currentPage, setCurrentPage }) => {
    const handlePageChange = (page) => {

        setCurrentPage(page);
        window.scroll(0, 0)
    }
    return (
        <Box
            style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                marginTop: 10,
            }}
        >
            <ThemeProvider theme={dartTheme}>
                <Pagination count={5} onChange={(e) => handlePageChange(e.target.textContent)}
                    hideNextButton
                    hidePrevButton
                    color='primary'

                />
            </ThemeProvider>
        </Box>
    )
}

export default CustomPagination