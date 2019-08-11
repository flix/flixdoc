import React, {Component} from 'react';
import DefBox from "./DefBox";
import {Input, InputGroup, InputGroupAddon, Row} from "reactstrap";

class Namespace extends Component {

    constructor(props) {
        super(props);
        this.state = {filter: ""}
    }

    notifyFilterChanged(e) {
        let filter = e.target.value;
        this.setState({filter: filter})
    }

    notifyFilterClear() {
        this.setState({filter: ""})
    }

    notifyEscapeKey(event) {
        if (event.keyCode === 27) {
            this.notifyFilterClear();
        }
    }

    getSortedDefs() {
        return this.props.namespace.defs.sort((x, y) => x.name.localeCompare(y.name));
    }

    getSortedAndFilteredDefs() {
        function matches(x, y) {
            return x.toLowerCase().indexOf(y.toLowerCase()) !== -1;
        }

        function matchesDef(def, needle) {
            return matches(def.name, needle) || matches(def.comment, needle);
        }

        if (this.state.filter.trim().length === 0)
            return this.getSortedDefs();
        else
            return this.getSortedDefs().filter(def => matchesDef(def, this.state.filter))
    }

    componentDidMount() {
        document.addEventListener("keydown", this.notifyEscapeKey.bind(this), false);
        document.title = this.props.title + " | " + this.props.name
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.notifyEscapeKey.bind(this), false);
    }

    render() {
        return <div>
            <Row className="mb-3">
                <h1>{this.props.name}</h1>
            </Row>

            <Row className="mb-3">
                <InputGroup>
                    <InputGroupAddon addonType="prepend">Search</InputGroupAddon>

                    <Input type="text" value={this.state.filter} onChange={this.notifyFilterChanged.bind(this)}/>
                </InputGroup>
            </Row>

            <Row className="mb-3">
                <div className="def-list">
                    {this.getSortedAndFilteredDefs().map(def => <DefBox key={def.name} def={def}/>)}
                </div>
            </Row>

        </div>
    }

}

export default Namespace
