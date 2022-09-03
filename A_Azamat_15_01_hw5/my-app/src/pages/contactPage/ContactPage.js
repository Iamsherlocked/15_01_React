import React from "react";

class ContactPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            form: {
                name: "",
                price: "",
                count: 0
            }
        }
    }

    changeInput = (e) => {
        this.setState({form: {
            ...this.state.form,
                [e.target.name]: e.target.value

            }
        })
    }

    submit = () => {
        console.log(this.state)

    }

    render  () {
        return (
            <div>
                <h1>Задайте вопрос</h1>
                <input
                    type="text"
                    placeholder="product"
                    name="name"
                    onChange={this.changeInput}
                />
                <input
                    type="number"
                    placeholder="price"
                    name="price"
                    onChange={this.changeInput}
                />
                <input
                    type="number"
                    placeholder="count"
                    name="count"
                    onChange={this.changeInput}
                />
                <div>
                    <button onClick={this.submit}>submit</button>
                </div>

                <ul>
                    <li>Name: {this.state.form.name}</li>
                    <li>Price: {this.state.form.price}</li>
                    <li>Count: {this.state.form.count}</li>
                </ul>

            </div>

        )
    }
}



export default ContactPage