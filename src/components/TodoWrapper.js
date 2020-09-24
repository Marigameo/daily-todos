import React, { Component } from "react";
import "../styles/wrapper.css";

//its a function that returns higer order compoent
import { connect } from "react-redux";
import ActiveList from "./ActiveList";
import CompletedList from "./CompletedList";
import { toggleTodo, moveToTop } from "../actions"

class TodoWrapper extends Component {
    componentDidMount() {
        this.props.showTodos()
    }
    render() {
        return (
            <div className="row">
                <div className="column">
                    <ActiveList todos={this.props.todos} toggleTodo={this.props.toggleTodo} moveToTop={this.props.moveToTop} />
                </div>
                <div className="column">
                    <CompletedList todos={this.props.todos} toggleTodo={this.props.toggleTodo} moveToTop={this.props.moveToTop} />
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        todos: state,
    };
};

const mapDispachToProps = dispatch => {
    return {
        showTodos: () => dispatch({ type: "SHOW_TODOS" }),
        toggleTodo: (id) => dispatch(toggleTodo(id)),
        moveToTop: (id) => dispatch(moveToTop(id)),
    };
};
export default connect(
    mapStateToProps,
    mapDispachToProps
)(TodoWrapper);