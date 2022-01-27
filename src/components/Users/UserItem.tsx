import React, {FC} from 'react';
import {IUser} from "../../type/type";

interface UserItemProps {
    user: IUser
}

const UserItem: FC<UserItemProps> = ({user}) => {
    return (
        <div style={{padding: 15, margin: 10, border: '1px solid gray'}}>
            <div>
                {user.id}. {user.name}
            </div>
            <div>
                User Name: {user.username}
            </div>
            <ul>
                Contacts:
                <li>{user.email}</li>
                <li>{user.phone}</li>
            </ul>
            <ul>
                Address:
                <li>City: {user.address.city}</li>
                <li>Street: {user.address.street}</li>
                <li>Zipcode: {user.address.zipcode}</li>
                <li>Suite: {user.address.suite}</li>
            </ul>
            <ul>
                Company:
                <li>{user.company.name}</li>
                <li>{user.company.bs}</li>
                <li>{user.company.catchPhrase}</li>
            </ul>
            <div>
                Website: {user.website}
            </div>
        </div>
    );
};

export default UserItem;