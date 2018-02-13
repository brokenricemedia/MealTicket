import React from 'react';

class foodItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <img src={this.props.imageurl}></img>
            </div>
        );
    }
}

export default foodItem;