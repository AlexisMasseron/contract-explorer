import React, { Component } from "react";
import Home from "../../components/Home/Home";

class Container extends Component {
    state = {
        address: ""
    };
    handleAddress = event => {};

    updateAddress = event => {
        event.persist();
        this.setState({ address: event.target.value });
    };

    render() {
        return (
            <Home
                handleAddress={this.handleAddress}
                updateAddress={this.updateAddress}
            />
        );
    }
}

export default Container;
