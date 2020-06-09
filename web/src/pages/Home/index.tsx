import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import Header from '../../components/Header';
import { Container, Image, LayoutAjust } from './styles';

import logo from '../../assets/logo.svg';
import ecoleters from '../../assets/home-background.svg';

const Home = () => {
    return(
        <Container>
         <Header />
         <LayoutAjust>
            <div className="content">
                

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
         </LayoutAjust>
        </Container>
    );
}

export default Home;