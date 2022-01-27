import React, {FC, useEffect, useState} from 'react';
import {ITodo} from "../../type/type";
import axios from "axios";
import List from "../List";
import TodoItem from "./TodoItem";
import {Input} from "antd";


const Todo: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        fetchTodos()
    }, [])

    const fetchTodos = async () => {
        try {
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
            setTodos(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div>
            <List items={todos}
                  renderItem={(todo: ITodo) =>
                      <TodoItem todo={todo}
                                key={todo.id}/>}
            />
        </div>
    );
};

export default Todo;