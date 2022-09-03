import React from "react";
import {useState} from "react";
import UsersList from "../../components/usersList/UsersList";

function UsersPage () {
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState([])
    const [user, setUser] = useState({})

    const increment = () => {
        setCount(count +1)
    }
    const decrement = () => {
        setCount(count -1)
    }

    const getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
    }

    const getUserInfo = (e) => {
        const id = e.target.dataset.id
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(data => setUser(data))
    }

    return (
        <div>
            <h1>{count}</h1>

            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <div>
                <button onClick={getUsers}>get users</button>
            </div>
            <ul>
                <li>name: {user.name}</li>
                <li>username: {user.username}</li>
                <li>email: {user.email}</li>
            </ul>

            <UsersList usersList={users} getUserInfo={getUserInfo}/>
        </div>
    )
}



export default UsersPage;