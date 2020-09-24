import React, { Component } from "react";
import "../styles/wrapper.css";

//its a function that returns higer order compoent
import { connect } from "react-redux";
import ActiveList from "./ActiveList";
import CompletedList from "./CompletedList";
import { toggleTodo } from "../actions"
class TodoWrapper extends Component {
    componentDidMount() {
        this.props.showTodos()
    }
    render() {
        return (
            <div className="row">
                <div className="column">
                    <ActiveList todos={this.props.todos} toggleTodo={this.props.toggleTodo} />
                </div>
                <div className="column">
                    <CompletedList todos={this.props.todos} toggleTodo={this.props.toggleTodo} />
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
        toggleTodo: (id) => dispatch(toggleTodo(id))
    };
};
export default connect(
    mapStateToProps,
    mapDispachToProps
)(TodoWrapper);