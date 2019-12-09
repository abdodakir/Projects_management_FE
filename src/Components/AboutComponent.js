import React from 'react';
import styled from "styled-components";
import { Card, CardBody, CardHeader } from 'reactstrap';

function About(props) {

    return(
        <div className="container">
            <div className="row">
                <AboutDiv className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </AboutDiv>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                    <p>L’École Nationale Supérieure d’Informatique et d’Analyse des Systèmes (ENSIAS) est l'une des grandes écoles d'ingénieurs marocaines rattachée à l'université Mohammed V de Rabat. Les étudiants et diplômés sont appelés les Ensiastes.</p>
                </div>
                <div className="col-12 col-md-6">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">1992</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice.</p>
                                <footer className="blockquote-footer">Brian Herbert</footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}

const AboutDiv = styled.div`
  margin-top: 2rem;
`;

export default About; 
