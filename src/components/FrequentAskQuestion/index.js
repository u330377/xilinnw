import 'babel-polyfill';
import Promise from 'promise-polyfill';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { take, cancel, call, put, select, takeLatest } from 'redux-saga/effects';
import FaqTabPage from './faqTabPage';

class FrequentAskQuestion extends Component {
     _isMounted = false;

    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            faqs: []
        };
    }

    componentDidMount() {  
        const _this = this;
        _this._isMounted = true;
        if (!_this.state.loaded) {
            const requestURL = "http://localhost/XilinApi/api/frequentaskquestion";
            axios.get(
                requestURL
            ).then(function(response) {
                if (_this._isMounted) {
                    console.log('response, ', response);
                    _this.setState({
                        loaded: true,
                        faqs: response.data
                    });
                }
            });
        }
    } 

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <FaqTabPage
                title={'Frequently Asked Questions'}
                faqs={this.state.faqs}
            />
        );
    }
}

FrequentAskQuestion.propTypes = {
};

export default FrequentAskQuestion;