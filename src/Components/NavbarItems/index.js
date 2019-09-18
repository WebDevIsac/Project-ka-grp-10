import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import SearchIcon from '../../Images/icon.png';
import Logo from '../../Images/logo.png';
import BurgerIcon from '../../Images/burger-menu.png';

export class NavbarItems extends Component {
    render() {
        const { toggleMenu } = this.props
        return (
            <Fragment>
                <img className="search-icon navbar-item" src={ SearchIcon } alt="search icon" />
                <Link to="/"><img className="logo navbar-item" src={ Logo } alt="logo" /></Link>
                <img onClick={ toggleMenu } className="burger-icon navbar-item" src={ BurgerIcon } alt="buger icon" />
            </Fragment>
        )
    }
}

export default NavbarItems;