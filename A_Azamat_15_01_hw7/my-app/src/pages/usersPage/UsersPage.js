import {useEffect, useState} from "react";

function UsersPage () {
    const [users, setUsers] = useState([]);
    const [update, setUpdate] = useState(false)

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
    }, [])

    const updateFunc = () => {
        setUpdate(!update)
    }

    return (
        <div>
            <button onClick={updateFunc}>Reset</button>
            <h1>Users</h1>
            <ul>
                {
                    users.map(user => <li key={user.id}>{user.name}</li> )
                }
            </ul>
        </div>
    )
}

export default UsersPage;