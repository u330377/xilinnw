import 'babel-polyfill';
import Promise from 'promise-polyfill';
import React, { Component } from 'react';
import ReactTable from 'react-table';
import PropTypes from 'prop-types';
import axios from 'axios';
import { take, cancel, call, put, select, takeLatest } from 'redux-saga/effects';
import SchoolTabPage from './schoolTabPage';

class School extends Component {
     _isMounted = false;

    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            tabs: []
        };
    }

    componentDidMount() {  
        const _this = this;
        _this._isMounted = true;
        if (!_this.state.loaded) {
            const requestURL = "http://localhost/XilinApi/api/schooltab";
            axios.get(
                requestURL
            ).then(function(response) {
                if (_this._isMounted) {
                    _this.setState({
                        loaded: true,
                        tabs: response.data
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
            <SchoolTabPage
                tabs={this.state.tabs}
            />
        );
    }
}

School.propTypes = {
};

export default School;