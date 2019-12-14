import React, { Component} from 'react';

import Header from './NavBar/Header';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Forum from './ForumComponent';
import HeaderLinks from './NavBar/HeaderLinks'
import SingIn from './ModalSingIn';

import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            isNotloged: true,
            isModalSinginOpen: false
        };
    };

    singinModal = () => {
        this.setState({
            isModalSinginOpen: !this.state.isModalSinginOpen
        })
    };

    render() {
        const { ...rest } = this.props;
        return (
            <div>
                {this.state.isNotloged &&
                    <Header
                        brand="ENSIAS"
                        rightLinks={<HeaderLinks singinModal={() => this.singinModal()}/>}
                        fixed
                        color="transparent"
                        changeColorOnScroll={{
                            height: 40,
                            color: "dark"
                        }}
                        {...rest}
                    />
                }
                <Switch>
                    <Route path="/home" component={() => <Home />} />
                    <Route exact path="/aboutus" component={() => <About />} />
                    <Route exact path="/forum" component={() => <Forum />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer/>
                {this.state.isModalSinginOpen &&
                    <SingIn 
                        isModalSinginOpen={this.state.isModalSinginOpen}
                        singinModal={() => this.singinModal()}
                    />
                }
            </div>
        );
    }
}

export default Main;