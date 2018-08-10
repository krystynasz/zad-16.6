import React from 'react';
import uuid from 'uuid';

class TodoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
    }
    
    render() {
        return (
           <ul>Lista od myślników</ul>
        );
    }
}

export default TodoList;