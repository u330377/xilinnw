import 'babel-polyfill';
import Promise from 'promise-polyfill';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel, resetIdCounter } from 'react-tabs';
import HeadLine from '../HeadLine'
import 'core-js/es6/number';
import 'core-js/es6/array';

import styles from 'react-tabs/style/react-tabs.css';
import '../OnlineAudio/audioTabPage.scss'

class SchoolTabPage extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            tabIndex: 0,
            tabs: props.tabs
        };
    }

    render() {
        if (this.props.tabs == null || this.props.tabs.length === 0) {
            return null;
        }
        return (
            <div>
                <Tabs className='vertical-tabs' selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                    <TabList>
                        <div className='tab-header-img'>
                            <div className='tab-xilin-img'></div>
                        </div>
                        {
                            this.props.tabs.map(item => 
                        <Tab key={`tabSchool${item.sequence}`} vertical='true'>{item.name}</Tab>
                            )
                        }
                        <div className='tab-footer-extend'></div>
                        <div className='tab-footer-img'></div>
                    </TabList>
                    {
                        this.props.tabs.map(item => 
                    <TabPanel key={`tabPanelSchool${item.sequence}`}>
                        <HeadLine>
                            {
                                item.titles.map((title, idx) => 
                            <div key={`divSchool${item.sequence}_${idx}`}><span style={{fontSize: title.item2}}>{title.item1}</span></div>
                                )
                            }
                        </HeadLine>
                    </TabPanel>
                        )
                    }
                </Tabs>
            </div>
        );
    }
}

SchoolTabPage.propTypes = {
    state: PropTypes.object
};

export default SchoolTabPage;