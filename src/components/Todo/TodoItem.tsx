import React, {FC, useState} from 'react';
import {ITodo} from "../../type/type";
import s from './todo.module.css'
import {Checkbox} from "antd";
import {CheckboxChangeEvent} from "antd/es/checkbox";

interface TodoItemProps {
    todo: ITodo
}

const TodoItem: FC<TodoItemProps> = ({todo}) => {
    const [complete, setComplete] = useState(false)
    const changeHandler = (e: CheckboxChangeEvent) => {
        if(complete) {
            setComplete(false)
        }
        else {
            setComplete(true)
        }
    }
    return (
        <div className={s.todo}>
            {todo.id}. {todo.title}
            <Checkbox onChange={changeHandler} checked={complete}/>

        </div>
    );
};

export default TodoItem;