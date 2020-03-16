import 'babel-polyfill';
import Promise from 'promise-polyfill';
import React, { Component } from 'react';
import ReactTable from 'react-table';
import PropTypes from 'prop-types';
import axios from 'axios';
import { take, cancel, call, put, select, takeLatest } from 'redux-saga/effects';
import AudioTabPage from './audioTabPage';

class OnlineAudio extends Component {
     _isMounted = false;

    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            tabItems: []
        };
    }

    componentDidMount() {  
        const _this = this;
        _this._isMounted = true;
        if (!_this.state.loaded) {
            const requestURL = "http://localhost/XilinApi/api/audiocategories";
            axios.get(
                requestURL
            ).then(function(response) {
                if (_this._isMounted) {
                    _this.setState({
                        loaded: true,
                        tabItems: response.data.audioCategoryList
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
            <AudioTabPage
                title={'Learn Chinese Online'}
                data={this.state.tabItems}
            />
        );
    }
}

OnlineAudio.propTypes = {
};

export default OnlineAudio;