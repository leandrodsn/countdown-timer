import styled from 'styled-components';

export const Container = styled.div``;

export const TimerWrapper = styled.div`
    background-color: #8adba0;
    color: #ffffff;
    padding: 1rem 0;
    text-align: center;
    width: 400px;
    min-height: 200px;
    .EventName {
        font-size: 1.2rem;
        text-transform: uppercase;
    }
   
`;

export const TimeList = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: nowrap;
    padding: 20px 0;
    margin: 20px 0;
    justify-content: space-around;
    border-top: 1px solid #ffffff;
    border-bottom: 1px solid #ffffff;
    li  {
        padding: 5px;
        flex-grow: 0;
        flex-basis: 25%;
        min-height: 74px;
    }
    .ItemTime {
        font-size: 2rem;
    }
`;