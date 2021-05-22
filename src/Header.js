import React from 'react'
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import {Avatar} from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Header() {
    return (
        <div className="header">
            <Link to="/">
            <img src="https://cdn.worldvectorlogo.com/logos/airbnb.svg" alt="" className="header__icon" />
            </Link>
            

            <div className="header__center">
                <input type="text" />
                <SearchIcon />
            </div>

            <div className="header__right">
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>

        </div>
    )
}

export default Header
