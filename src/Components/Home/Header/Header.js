import React from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import Menu from '../Menu/Menu'
import './Header.css';

const Header = () => {
    return (
        <div className="headerArea">
            <Menu></Menu>
            <HeaderMain></HeaderMain>
            <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Header;