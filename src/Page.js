import React from 'react';
import {Route} from "react-router";
import Namespace from "./Namespace";

class Page extends React.Component {

    render() {
        return (
            <div className="namespace">
                {this.props.namespaces.map(ns =>
                    <Route key={ns} path={"/" + ns} exact render={() => {
                        let namespace = this.props.page[ns];
                        if (namespace === undefined) {
                            namespace = this.props.page[""];
                        }
                        return <Namespace title={this.props.title} name={ns} namespace={namespace}/>
                    }
                    }/>
                )}
            </div>
        )
    }

}

export default Page
