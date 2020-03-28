import React from 'react';
import './index.css';

export default class Page extends React.Component {

    render = () => {
        return (
            <div className='body-container'>
                {this.props.children}
            </div>
        );
    }
}
