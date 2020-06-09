import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import Switch from 'react-switch';

import logo from '../../assets/logo.svg';
import HeaderContainer from './styles';

const Header: React.FC = () => {
    return(
        <HeaderContainer>
                <img src={logo} alt="Ecoleta"/>

                <Switch 
                  onChange={() => {}}
                  checked={true}
                  checkedIcon={false}
                  uncheckedIcon={false}
                />
        </HeaderContainer>
    );
}

export default Header;

/**
 * 
 *              <Link to="/">
                    <FiArrowLeft />
                    Voltar para home
                </Link>
 */