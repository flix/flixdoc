import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Menu extends Component {

    getNamespaces() {
        return this.props.namespaces.sort((x, y) => x.localeCompare(y))
    }

    getMenuItems() {
        return this.getNamespaces().map(name =>
            <li key={name}><Link to={"/" + name}>{name}</Link></li>
        )
    }

    render() {
        return <div className="menu">
            <div className="title">
                {this.props.title}
            </div>

            <ul>
                {this.getMenuItems()}
            </ul>
        </div>
    }

}

export default Menu
