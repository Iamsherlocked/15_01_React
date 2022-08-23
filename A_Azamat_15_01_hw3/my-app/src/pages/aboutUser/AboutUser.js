import React from "react";
import classes from "./aboutUser.module.css";

class AboutUser extends React.Component {

    constructor(props) {
        super(props);
    }

    render  () {
        return (
            <>
                <ul className={classes.users}>
                    <li>name: {this.props.name} </li>
                    <li>age: {this.props.age}</li>
                </ul>
            </>
        )
    }
}

export default AboutUser