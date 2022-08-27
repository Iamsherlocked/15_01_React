import React from 'react';
import UsersList from "../../components/usersList/UsersList";

function MainPage (props) {
    const users = [
        {
            id: 1,
            name: "Dastan",
            age: 26
        },
        {
            id: 2,
            name: "Amir",
            age: 54
        }
    ];

    return (
        <div>
            <h1>users list</h1>
            <UsersList usersList={users}/>
        </div>
    );
}

export default MainPage;