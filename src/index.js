import React, { Component } from "react";
import { render } from 'react-dom';

class app extends Component {
    render() {
        return(
            <h1> Hola Southtrip </h1>
        )
    }
};

render(
    <App/>,
    document.getElementById('app')
);

