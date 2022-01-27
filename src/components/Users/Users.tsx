import React, {FC, useEffect, useState} from 'react';
import axios from "axios";
import List from "../List";
import {IUser} from "../../type/type";
import UserItem from "./UserItem";

const Users: FC = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        fetchUsers()
    }, [users])

    const fetchUsers = async () => {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        } catch (e) {
            alert(e)
        }
    }
    return (
        <div>
            <List items={users}
                  renderItem={(users: IUser) =>
                <UserItem user={users}
                          key={users.id}/>}
            />
        </div>
    );
};

export default Users;