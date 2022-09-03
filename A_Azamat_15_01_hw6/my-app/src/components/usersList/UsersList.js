import React from 'react';

function UsersList({usersList, getUserInfo}) {
    return (
        <ul>
            {
                usersList.length > 0
                ?
                usersList.map(user=> <li key={user.id} style={{marginBottom: "15px"}}>
                    <div>name: {user.name}</div>
                    <div>email: {user.email}</div>
                    <div>
                        <button onClick={getUserInfo} data-id={user.id}>show user info</button>
                    </div>
                </li>)
                :
                    <li>Нет пользователей</li>
            }
        </ul>
    );
}

export default UsersList;