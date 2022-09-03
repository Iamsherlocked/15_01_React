import React, {useState} from 'react';

function FormPage(props) {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: ""
    })

    const changeInput = (e) => {
        setUser(
            {
            ...user,
                [e.target.name] : e.target.value
        }
        )
    }


    const addUser = (e) => {
        e.preventDefault()
        console.log(user)
        console.log(e)
    }


    return (
        <form onSubmit={addUser}>
            <input
                type="text"
                placeholder="name"
                name="name"
                onChange={changeInput}

            />
            <input
                type="text"
                placeholder="username"
                name="username"
                onChange={changeInput}
            />
            <input
                type="text"
                placeholder="email"
                name="email"
                onChange={changeInput}
            />
            <button type="submit">add user</button>
        </form>
    );
}

export default FormPage;