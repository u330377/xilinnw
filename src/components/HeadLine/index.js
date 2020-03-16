import React, { Component } from 'react';
import ReactTable from 'react-table';
import PropTypes from 'prop-types';
import './index.scss';

class HeadLine extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='panel-headline'>
                {this.props.children}
            </div>
        );
    }
}

HeadLine.propTypes = {
    color: PropTypes.string,
    shadowSize: PropTypes.number
};

export default HeadLine;