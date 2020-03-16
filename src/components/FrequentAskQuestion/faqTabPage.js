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
import './faqTabPage.scss'
//import '../OnlineAudio/audioTabPage.scss'

class FaqTabPage extends Component {
    constructor(props) {
        super(props);
    }

    mappedColumns = [{
        Header: null,
        accessor: "faqItem",
        width: "100%",
        Cell: row => (
            <div stype="width: 100%">
                {row.value.question != null && row.value.question !== '' &&
                    <h3>Q: {row.value.question}</h3>
                }
                {row.value.answer != null && row.value.answer !== '' &&
                    <p><b>A:</b> {row.value.answer}</p>
                }
            </div>
        )
    }];

    injectThProps = (state, rowInfo, column) => {
        return {
            style: { display: 'none' }
        }
    }

    render() {
        if (this.props == null || this.props.faqs == null || this.props.faqs.length === 0) {
            return null;
        }

        const mappedFaqItems = this.props.faqs.map((item, idx) => {
            return {
                faqItem: {
                    index: item.idx,
                    question: item.key,
                    answer: item.value
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
                        <div id="faqs-table">
                            <ReactTable
                                data={mappedFaqItems}
                                columns={this.mappedColumns}
                                showPagination={false}
                                defaultPageSize={mappedFaqItems.length}
                                getTheadThProps={this.injectThProps}
                                getTdProps={(state, rowInfo, column, instance) => {
                                        return {
                                            style: {
                                                width: "1000px"
                                            }
                                        };
                                    }
                                }
                            />
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
}

FaqTabPage.propTypes = {
    state: PropTypes.object
};

export default FaqTabPage;