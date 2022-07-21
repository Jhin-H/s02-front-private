import React from "react";

export default class userInfo extends React.Component{
    render(){
        return(
            <div onClick={this.props.onClick}>{this.props.contact.name}</div>
        );
    }
}