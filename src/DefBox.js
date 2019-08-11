import React, {Component} from 'react';
import reactStringReplace from 'react-string-replace'
import nl2br from 'react-nl2br';

class DefBox extends Component {

    /**
     * Returns the type parameters of the definition.
     */
    getTypeParams() {
        return this.props.def.tparams.map(tparam => <span key={tparam.name}>{tparam.name}</span>)
    }

    /**
     * Returns the formatted type parameters of the definition.
     */
    getFormattedTypeParams() {
        return this.surround(this.intersperse(this.getTypeParams(), ", "), "[", "]", true)
    }

    /**
     * Returns the formal parameters of the definition.
     */
    getFormalParams() {
        return this.props.def.fparams.map(fparam =>
            <span key={fparam.name}>{fparam.name}: <span className="type">{fparam.type}</span></span>
        )
    }

    /**
     * Returns the formatted formal parameters of the definition.
     */
    getFormattedFormalParams() {
        return this.surround(this.intersperse(this.getFormalParams(), ", "), "(", ")", false)
    }

    /**
     * Returns the return type.
     */
    getFormattedReturnType() {
        return <span className="type">{this.props.def.result}</span>
    }

    /**
     * Formats the given documentation comment.
     */
    getFormattedComment(comment) {
        return reactStringReplace(nl2br(comment), /`([^`]+)`/g, (txt, id) =>
            <span key={id} className="code">{txt}</span>
        );
    }

    /**
     * Returns the given array of elements surrounded by `a` and `b`.
     */
    surround(arr, b, e, withEmpty) {
        if (arr.length === 0 && withEmpty)
            return arr;

        const result = [];
        result.push(b);
        arr.forEach(item => result.push(item));
        result.push(e);

        return result;
    }

    /**
     *  Return an array with the separator interspersed between each element of the input array.
     */
    intersperse(arr, sep) {
        if (arr.length === 0) {
            return [];
        }

        return arr.slice(1).reduce(function (xs, x) {
            return xs.concat([sep, x]);
        }, [arr[0]]);
    }

    render() {
        return <div className="def-decl">
            <div className="signature">
                <span className="keyword">def</span>
                <span className="name">{this.props.def.name}</span>
                <span className="tparams">{this.getFormattedTypeParams()}</span>
                <span className="fparams">{this.getFormattedFormalParams()}</span>
                <span className="result">: {this.getFormattedReturnType()}</span>
            </div>
            <div className="comment">
                {this.getFormattedComment(this.props.def.comment)}
            </div>
        </div>
    }


}

export default DefBox
