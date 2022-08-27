import React from "react";
import Menu from "../../components/menu/Menu";

class PortfolioPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {menu: false}
    }

    handleMenu = () => {
        this.setState({menu: !this.state.menu})
    }

    render() {
        return (
            <div>
                <h2>menu change</h2>
                <button onClick={this.handleMenu}>menu</button>
                {
                    this.state.menu && <Menu/>

                }
            </div>
        )

    }
}

export default PortfolioPage
