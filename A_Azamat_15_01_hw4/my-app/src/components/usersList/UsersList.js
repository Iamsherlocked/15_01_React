import React from 'react';

function UsersList({usersList}) {
    const getInfo = (e) => {
        console.log(e.target.dataset.id)
    }

    return (
        <ul>
            {usersList.map((user, key)=>
                <li key={key}>
                    age: {user.age}
                    name: {user.name}
                    <button data-id={user.id} onClick={getInfo}>Show</button>
                </li>)}

        </ul>
    );
}

export default UsersList;