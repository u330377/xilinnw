import 'babel-polyfill';
import Promise from 'promise-polyfill';
import React, { Component } from 'react';
import ReactTable from 'react-table';
import PropTypes from 'prop-types';
import axios from 'axios';
import 'core-js/es6/number';
import 'core-js/es6/array';

import styles from 'react-table/react-table.css';

class AudioItem extends Component {
     _isMounted = false;

    constructor(props) {
        super(props);

        this.state = {
            audioItems: []
        };
    }

    componentDidMount() {  
        this._isMounted = true;
        const _this = this;
        if (!_this.state.loaded) {
            const requestURL = `http://localhost/XilinApi/api/audios/${this.props.data.id}`;
            axios.get(
                requestURL
            ).then(function(response) {
                if (_this._isMounted) {
                    _this.setState({
                        audioItems: response.data.audioList
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
            <section>
                <ul>
                { this.state.audioItems.map(item => 
                    <li key={`audioItem_${item.categoryId}_${item.subCategoryId}_${item.level}_${item.id}`}>
                        {item.name}
                    </li>) 
                }
                </ul>
            </section>
        );
    }
}

AudioItem.propTypes = {
    color: PropTypes.string,
    shadowSize: PropTypes.number
};

export default AudioItem;