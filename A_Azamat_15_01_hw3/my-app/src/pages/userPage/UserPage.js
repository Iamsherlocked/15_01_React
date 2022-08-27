import React from "react";
import classes from "./userPage.module.css";

class UserPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <ul className={classes.users}>
                    <li>name: {this.props.name}</li>
                    <li>age: {this.props.age}</li>
                </ul>
            </>
        );
    }
}
export default UserPage;