import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import Switch from 'react-switch';

import logo from '../../assets/logo.svg';
import logoDark from '../../assets/logo-dark.svg';
import HeaderContainer from './styles';
import { ThemeContext } from 'styled-components';

const Header: React.FC = () => {
    const { colors } = useContext(ThemeContext);
    return(
        <HeaderContainer>
                <img src={logo} alt="Ecoleta"/>

                <Switch 
                  onChange={() => {}}
                  checked={true}
                  checkedIcon={false}
                  uncheckedIcon={false}
                  onColor={colors.primary}
                  offColor={colors.title}
                  offHandleColor={colors.blocks}
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