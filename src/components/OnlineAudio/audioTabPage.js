import 'babel-polyfill';
import Promise from 'promise-polyfill';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel, resetIdCounter } from 'react-tabs';
import AudioItem from './audioItem';
import HeadLine from '../HeadLine'
import 'core-js/es6/number';
import 'core-js/es6/array';

import styles from 'react-tabs/style/react-tabs.css';
import './audioTabPage.scss'

class AudioTabPage extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            tabIndex: 0,
            title: props.title,
            data: props.data
        };
    }

    render() {
        return (
            <div>
                <Tabs className='vertical-tabs' selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                    <TabList>
                        <div className='tab-header-img'>
                            <div className='tab-xilin-img'></div>
                        </div>
                        { this.props.data.map(item => <Tab key={`tab${item.id}`} vertical='true'>{item.category}</Tab>) }
                        <div className='tab-footer-extend'></div>
                        <div className='tab-footer-img'></div>
                    </TabList>
                    { this.props.data.map(item => 
                        <TabPanel key={`tabPanel${item.id}`}>
                            <HeadLine>{this.props.title}</HeadLine>
                            <AudioItem 
                                data={item}
                            />
                        </TabPanel>) 
                    }
                </Tabs>
            </div>
        );
    }
}

AudioTabPage.propTypes = {
    state: PropTypes.object
};

export default AudioTabPage;