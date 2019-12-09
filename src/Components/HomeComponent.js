import React from 'react';
import styled from 'styled-components';

function Home(props) {
    return (
        <HomeDiv className="container">
            <div className="row justify-content-center" >
                <h1>Welcome to Projects management.</h1>
            </div>
        </HomeDiv>
    );
}

const HomeDiv = styled.div`
    height: 30rem;
    h1 {
        margin-top: 12rem;
    }
`;

export default Home