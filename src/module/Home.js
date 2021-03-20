import React, { useState } from 'react';
import CustomButton from '../components/Button';
import styled from 'styled-components';
import { connect } from 'react-redux';

const StyledDiv = styled.div`

`;

const StyledCounterDiv = styled.div`
    text-align:center;
    font-size: 100px;
    color: blue;
    margin-top:30px;
`;

const Home = (props) => {

    return (
        <StyledDiv>
            <StyledCounterDiv>
                {props.ctr}
            </StyledCounterDiv>
            <CustomButton
                color="primary"
                text='+5'
                size='large'
                clicked={props.INC_5}>
            </CustomButton>
            <CustomButton
                color="secondary"
                text='-5'
                size='large'
                clicked={props.DEC_5}>
            </CustomButton>
            <CustomButton
                color="default"
                text="+10"
                clicked={props.INC_10}
                size='large'>
            </CustomButton>
            <CustomButton
                color="primary"
                text="-10"
                clicked={props.DEC_10}
                size='large'>
            </CustomButton>
        </StyledDiv>
    )
}

const mapStateToProps = state => {
    return {
        ctr: state.counter
    }
}

const mapDispatchoProps = dispatch => {
    return {
        INC_5: () => dispatch({ type: 'INC_5_REQUESTED' }),
        DEC_5: () => dispatch({ type: 'DEC_5' }),
        INC_10: () => dispatch({ type: 'INC_10' }),
        DEC_10: () => dispatch({ type: 'DEC_10' })
    }
}

export default connect(mapStateToProps, mapDispatchoProps)(Home);