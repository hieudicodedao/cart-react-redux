import React, { Component } from 'react';

class Messages extends Component {
    render() {
        let {content} = this.props
        return (
            <div>
                <span className="badge amber darken-2">{content}</span>
            </div>
        );
    }
}

export default Messages;