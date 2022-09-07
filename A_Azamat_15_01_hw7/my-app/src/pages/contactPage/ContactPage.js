import React, {useState} from 'react';


function ContactPage () {
    const [user, setUser] = useState({
        name: "",
        email: ""
    })

    const changeInput = (e) => {
        setUser(
            {
                ...user,
                [e.target.name]: e.target.value
            }
        )
    }
    function inputValue () {
        if (!user.name.trim()){
            alert("Name is empty!")
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
        console.log(e)
    }



    return(
        <form onSubmit={addUser}>
            <input
                type="text"
                placeholder="name"
                name="name"
                onChange={changeInput}
            />
            <input
                type="email"
                placeholder="email"
                name="email"
                onChange={changeInput}
            />
            <button onClick={inputValue} onSubmit={addUser}>Add user</button>

        </form>
    )
}

export default ContactPage;