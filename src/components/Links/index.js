import 'babel-polyfill';
import Promise from 'promise-polyfill';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { take, cancel, call, put, select, takeLatest } from 'redux-saga/effects';
import LinkTabPage from './linkTabPage';

class Links extends Component {
     _isMounted = false;

    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            linkItems: []
        };
    }

    componentDidMount() {  
        const _this = this;
        _this._isMounted = true;
        if (!_this.state.loaded) {
            const requestURL = "http://localhost/XilinApi/api/links";
            axios.get(
                requestURL
            ).then(function(response) {
                if (_this._isMounted) {
                    _this.setState({
                        loaded: true,
                        linkItems: response.data.links
                    });
                }
            });
        }
    } 

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        console.log(this.state);
        return (
            <LinkTabPage
                title={'Links'}
                linkItems={this.state.linkItems}
            />
        );
    }
}

Links.propTypes = {
};

export default Links;