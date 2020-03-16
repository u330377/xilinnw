import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel, resetIdCounter } from 'react-tabs';
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import School from './School'
import FrequentAskQuestion from './FrequentAskQuestion'
import Links from './Links'
import OnlineAudio from './OnlineAudio'

import styles from 'react-tabs/style/react-tabs.css';
import './header.scss'

class Header extends Component {
    constructor() {
        super();
        this.state = { tabIndex: 0 };
    }

    render() {
        return (
                <nav id='navigation' role='navigation'>
                <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                    <TabList>
                        <Tab>Home</Tab>
                        <Tab>School</Tab>
                        <Tab>Classes</Tab>
                        <Tab>News</Tab>
                        <Tab>FAQ</Tab>
                        <Tab>Links</Tab>
                        <Tab>Online Audio</Tab>
                    </TabList>
                    <TabPanel>
                        <AddTodo />
                        <VisibleTodoList />
                    </TabPanel>
                    <TabPanel>
                        <School />
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 3</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 4</h2>
                    </TabPanel>
                    <TabPanel>
                        <FrequentAskQuestion />
                    </TabPanel>
                    <TabPanel>
                        <Links />
                    </TabPanel>
                    <TabPanel>
                        <OnlineAudio />
                    </TabPanel>
                </Tabs>
            </nav>
        );
    }
}

Header.propTypes = {
    color: PropTypes.string,
    shadowSize: PropTypes.number
};

export default Header;