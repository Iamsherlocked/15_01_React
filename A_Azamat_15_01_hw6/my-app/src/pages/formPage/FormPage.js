import React, {useState} from 'react';
import {logDOM} from "@testing-library/react";

function FormPage(props) {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: ""
    })

    const changeInput = (e) => {
        setUser(
            {
            // ...user,
                [e.target.name] : e.target.value
        }
        )
    }

    function inputValue () {
        if (!user.name.trim()){
            alert("Name is empty!")
        } else if (!user.username.trim()){
            alert("Username is empty")
        } else if (!user.email.trim()) {
            alert("Email is empty")
        } else {
            fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                body: changeInput
            }).then(response => response.json()).then(res => setUser(res)
            )
        }
        
    }



    const addUser = (e) => {
        e.preventDefault()

        console.log(user)
        // console.log(e)
    }


    return (
        <form>
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
            <button type="submit" onClick={inputValue} onSubmit={addUser}>add user</button>
        </form>
    );
}

export default FormPage;