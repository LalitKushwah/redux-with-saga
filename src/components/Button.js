import React from 'react';
import { Button } from '@material-ui/core';
import styled, { ThemeProvider } from 'styled-components';

const StyledDiv = styled.div`
    padding: 10px;
    margin: 10px;
    display: inline-block;
`;

const CustomButton = ({ clicked, color, text, size, handler, value }) => {
    return (
        <StyledDiv>
            <ThemeProvider theme={{ main: "royalblue" }}>
                <Button
                    variant='contained'
                    color={color}
                    size={size}
                    onClick={() => clicked()}
                >{text}</Button>
            </ThemeProvider>
        </StyledDiv>
    )
}
export default CustomButton;