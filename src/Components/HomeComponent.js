import React from 'react';
import styled from 'styled-components';

function Home(props) {
    return (
        <HomeSection data-stellar-background-ratio="0.5">
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                        <div className="offset col-md-6 col-sm-12">
                            <div className="home-info">
                                <h3>professional landing page</h3>
                                <h1>We help you manage your website successfully!</h1>
                                <button className="button-control">Get started</button>
                            </div>
                        </div>

                </div>
            </div>
        </HomeSection>
    );
}

const HomeSection = styled.section`
    background: url('assets/images/StockSnap.jpg') no-repeat center center;
    background-size: cover;
    vertical-align: middle;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    min-height: 100vh;
    position: relative;
    padding-top: 12em;
    text-align: center;
    h1 {
        color: #ffffff;
        margin-top: 10px;
        margin-bottom: 40px;
    }
    .overlay {
        background: #536976;
        background: -webkit-linear-gradient(to right, #292E49, #536976);
        background: linear-gradient(to right, #292E49, #536976);
        opacity: 0.9;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .offset {
        margin-left: 25%;
        .home-info {
            margin-top: 7em;
            h3 {
                color: #f0f0f0;
                font-size: 11px;
                font-weight: bold;
                letter-spacing: 4px;
                text-transform: uppercase;
                margin: 10px 0;
            }
            .button-control {
                border-color: #f0f0f0;
                display: inline-block;
                vertical-align: top;
                border-radius: 50px;
                box-shadow: none;
                height: 50px;
                margin-right: 0.5em;
                padding-left: 15px;
            }
            button {
                background: #29ca8e;
                border: 0;
                color: #ffffff;
                right: 6em;
                width: 25%;
            }
            button:hover {
                background: #202020;
                color: #ffffff;
            }
            @media screen and (max-width: 480px) {

                .button-control {
                    width: 85%;
                    display: block;
                    margin: 20px auto;
                }
                button {
                    position: relative;
                    right: 0;
                }
            }
        }
    }
    @media only screen and (max-width: 992px) {
        section {
          padding: 60px 0;
        }
    }
`;

export default Home