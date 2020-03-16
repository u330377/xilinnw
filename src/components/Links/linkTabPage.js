import 'babel-polyfill';
import Promise from 'promise-polyfill';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel, resetIdCounter } from 'react-tabs';
import ReactTable from 'react-table';
import HeadLine from '../HeadLine'
import 'core-js/es6/number';
import 'core-js/es6/array';

import styles from 'react-tabs/style/react-tabs.css';
import './linkTabPage.scss'
import '../OnlineAudio/audioTabPage.scss'

class LinkTabPage extends Component {
    constructor(props) {
        super(props);
    }

    mappedColumns = [{
        Header: null,
        accessor: "linkItem",
        Cell: row => (
            <div>
                {row.value.imageFileName !== '' &&
                    <img className="img-index-links_item" src={`${row.value.imageFilePath}${row.value.imageFileName}`} alt="" />
                }
                {row.value.imageFileName !== '' && row.value.description !== '' &&
                    <br />
                }
                {row.value.description !== '' &&
                    <span>{row.value.description}</span>
                }
                <br />
                <a className="a-index-links_item" target="_blank" href={row.value.url}>{row.value.title}</a>
            </div>
        )
    }];

    injectThProps = (state, rowInfo, column) => {
        return {
            style: { display: 'none' }
        }
    }

    render() {
        if (this.props == null || this.props.linkItems == null || this.props.linkItems.length === 0) {
            return null;
        }

        const mappedLinkItems = this.props.linkItems.map(item => {
            const imageFilePath = item.imageFilePath == null || item.imageFilePath === "" ? "/commonFiles/images/" : item.imageFilePath;
            return {
                linkItem: {
                    sequence: item.sequence,
                    description: item.description,
                    title: item.title,
                    url: item.url,
                    imageFilePath: imageFilePath,
                    imageFileName: item.imageFileName
                }
            };
        });

        return (
            <div>
                <Tabs className='vertical-tabs'>
                    <TabList>
                        <div className='tab-header-img'>
                            <div className='tab-xilin-img'></div>
                        </div>
                        <Tab key={`tab0`} vertical='true' className='none-display'></Tab>
                        <div className='tab-footer-extend'></div>
                        <div className='tab-footer-img'></div>
                    </TabList>
                    <TabPanel>
                        <HeadLine>{this.props.title}</HeadLine>
                        <div id="links-table">
                            <ReactTable
                                data={mappedLinkItems}
                                columns={this.mappedColumns}
                                showPagination={false}
                                defaultPageSize={this.props.linkItems.length}
                                getTheadThProps={this.injectThProps}
                            />
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
}

LinkTabPage.propTypes = {
    state: PropTypes.object
};

export default LinkTabPage;