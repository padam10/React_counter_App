import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
        
    };
   

    render() {
        return (
            <div>                
                <span style ={{fontSize:30}}className="badge badge-primary m-1">{this.formatCount()}</span>
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