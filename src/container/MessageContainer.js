import React, { Component } from 'react';
import Messages from '../components/Messages'
import {connect} from 'react-redux'
class MessageContainer extends Component {
    render() {
        let {content} = this.props
        return (
            <div>
                <Messages content = {content}/>
            </div>
        );
    }
}

let mapStateToProps = state =>{
    return {
        content :state.content
    }
}

export default connect(mapStateToProps,null)(MessageContainer);