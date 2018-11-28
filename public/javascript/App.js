import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import QAList from './QAList';
import QAInfo from './QAInfo';
import NavBar from './NavBar';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            fruits: [],
            fruitDetails: null,
            showFruitInfo: false
        };
    }

    componentDidMount() {
        axios.get('/api/qa')
        .then(response => {
            this.setState({
                fruits: response.data.results
            });
        });
    }

    onSelectFruit = e => {        
        axios.get(`/api/qa/${e.target.getAttribute('data-qa-id')}`)
        .then(response => {
            this.setState( {
                showFruitInfo: true,
                fruitDetails: response.data,
                fadeOut: true
            });
        });
    }

    handleGoBack = () => {
        this.setState({
            showFruitInfo: false
        });
    }

    render() {
        return(
            <div>
                <div className="container">
                    <NavBar />
                    <div className="row">
                        <div id="qa-container" className="col-12 col-md-8 offset-md-2 col-lg-5 offset-lg-3">
                            {
                                this.state.showFruitInfo ? (
                                    <QAInfo fruitDetails={this.state.fruitDetails} handleGoBack={this.handleGoBack} />
                                ) : (
                                    <QAList fruits={this.state.fruits} onSelectFruit={this.onSelectFruit} />
                                )
                            }
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));