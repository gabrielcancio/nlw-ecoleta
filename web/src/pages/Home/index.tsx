import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import { Container, Image } from './styles';

import logo from '../../assets/logo.svg';
import ecoleters from '../../assets/home-background.svg';

const Home = () => {
    return(
        <Container>
            <div className="content">
                <header>
                    <img src={logo} alt="Ecoleta"/>
                </header>

                <main>
                    <h1>Seu marketplace de resíduos.</h1>
                    <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>

                    <Link to="/create-point">
                        <span>
                            <FiLogIn />
                        </span>

                        <strong>Cadastre um ponto de coleta</strong>
                    </Link>
                </main>
            </div>
            <Image src={ecoleters}/>
        </Container>
    );
}

export default Home;