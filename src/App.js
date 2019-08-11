import React, {Component} from 'react';
import './App.css';

import Menu from './Menu.js';
import Page from './Page.js';
import Data from './Data.js';

class App extends Component {

    getNamespaces() {
        return Object.keys(Data.namespaces);
    }

    render() {
        return (
            <div className="App">
                <Menu title={Data.title} namespaces={this.getNamespaces()}/>
                <Page title={Data.title} namespaces={this.getNamespaces()} page={Data.namespaces}/>
            </div>
        );
    }
}

export default App;
