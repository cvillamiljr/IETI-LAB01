import React from 'react';
import {Todo} from './Todo'

export class TodoList extends React.Component {

    render(){

        const data = this.props.todoList;

        const listData = data.map((i) =>
            <li> text : {i.text} , Priority : {i.priority} , Date : {i.dueDate.toString()} </li>
         );

        return (
            <ul>{listData}</ul>
        );

    };
}