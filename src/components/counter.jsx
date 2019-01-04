import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
        
    };

    styles = {
        fontSize: '50x',
        fontWeight:'bold'
    };

    render() {
        return (
            <div>                
                <span style ={this.styles}className="badge badge-primary m-1">{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Counter</button>
            </div>
        );
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? <h6>Zero</h6> : count;
    }
}
export default Counter;