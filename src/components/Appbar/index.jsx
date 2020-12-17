import React from "react";
import { MenuItems } from "./Appbar";
import Logo from "../../assets/images/logo-refactory.png";
import "./index.css";

class index extends React.Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          <img src={Logo} alt="logo" />
        </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, idx) => {
            return (
              <li key={idx}>
                <a className={item.cName} href={item.url}>
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default index;
