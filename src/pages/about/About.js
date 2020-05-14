import React, {Component} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';

import './About.css';
import Computerimg from '../../images/computerimg.png';
import BackgroundCard from '../../images/background-card.jpg';
import Mirela from '../../images/mirela-profile.png';
import Pedro from '../../images/pedro-profile.jpg';
import Rafael from '../../images/rafael-profile.jpg';
import Thiago from '../../images/user-img.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(
    faGithub,
    faLinkedin,
    faEnvelope
);

//TypeScript do Angular do Grupo

// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-sobre',
//   templateUrl: './sobre.component.html',
//   styleUrls: ['./sobre.component.css']
// })
// export class SobreComponent implements OnInit {

//   pessoa: any = null;

//   isMobile = false;
//   getIsMobile(): boolean {
//     const w = document.documentElement.clientWidth;
//     const breakpoint = 1024;
//     console.log(w);
//     if (w <= breakpoint) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   constructor() { }


//   ngOnInit(): void {

//     this.isMobile = this.getIsMobile();
//     window.onresize = () => {
//       this.isMobile = this.getIsMobile();
//     };


//   }



// }

//HTML do Angular do Grupo

export default class About extends Component {

    render () {

        // var nome = ['mirela', 'pedro', 'rafael', 'thiago'];

        // escolhePessoa(nome){
        //     this.props.nome;
        // }

        return (
            <div className="estilo-geral">
                <div className="texto-sobre">
                    <div className="container-sobre">
                        <div className="explicação-proj">
                            <h1>Sobre</h1>
                            <p>Somos a 4-Front!</p>
                            <p>Uma equipe formada por quatro desenvolvedores que estão em busca de novos conhecimentos
                            e desafios profissionais. Cada integrante tem suas habilidades e áreas de especialidade, e unidos formamos um time
                            capacitado para desenvolvimento web completo. Nossos projetos priorizam a responsividade e a qualidade de interação
                            para que seu site seja acessível nos diferentes dispositivos de seus usuários. Nossos serviços contemplam desde o 
                            design da interface até toda a programação Front-End, e fazemos aplicação de HTML, CSS e JavaScript tanto puros quanto 
                            usando Bootstrap, Angular e React.                            
                            </p>
                            {/*Explicação do trabalho proposto pela cocreare academy de um web site resposivo com integração com rede social,
                            realizado pelo grupo composto por Carlos Alberto, Fabrício, Valéria e Wesley.
                            A descrição do projeto será incrementatada conforme o andamento do projeto e novas camadas forem sendo adicionadas.*/}
                        </div>

                        <div className="img-sobre">
                            <img src={Computerimg}/>
                        </div>
                    </div>
                </div>

        
                {/* Espaço reservado o bloco de "cards" */}
                <div className= "equipe" id="equipe">
                    <h1 className="título"> Nossa Equipe</h1>
                    <div className="container">
                        <div className="menu" id="menu-perfil">
                            <div className="mini-card">
                                    <img src={Mirela} alt="imagem perfil Mirela" className="img-perfil-icone"/>
                                    <p>Mirela De Giuli</p>
                                    <a className="btn" onClick="this.escolhePessoa('mirela')">Saiba mais</a>
                            </div>

                            <div className="mini-card">
                                <div>
                                    <img src={Pedro} alt="imagem perfil Pedro" className="img-perfil-icone"/>
                                    <p>Pedro H. Borges</p>
                                    <a className="btn" onClick= "escolhePessoa('pedro')">Saiba mais</a>
                                </div>
                            </div>

                            <div className="mini-card">
                                <div>
                                    <img src={Rafael} alt="imagem perfil Rafael" className="img-perfil-icone"/>
                                    <p>Rafael Rodrigues</p>
                                    <a className="btn" onClick= "escolhePessoa('rafael')">Saiba mais</a>
                                </div>
                            </div>

                            <div className="mini-card">
                                <div>
                                    <img src={Thiago} alt="imagem perfil Thiago" className="img-perfil-icone"/>
                                    <p>Thiago Dutra</p>
                                    <a className="btn" onClick= "escolhePessoa('thiago')">Saiba mais</a>
                                </div>
                            </div>
                        </div>

                        <div className="equipe-conteudo" id="equipe_conteudo">

                            <div id="mirela" if= "pessoa == 'mirela' || isMobile == true">
                                <div className="card">
                                    <img src={BackgroundCard} alt="background card" className="card-img"/>
                                    <img src={Mirela} alt="imagem perfil mirela" className="img-perfil-sobre"/>
                                    <h2>Mirela De Giuli</h2>
                                    <p className="introducao">Oie! Sou a Mirela, designer de produto e desenvolvedora front-end Jr, tenho 24 anos e 
                                    moro em Bauru. Sou apaixonada por livros, café e inovação!</p>

                                    <ul className="redes-sociais">
                                        <li><a href="https://github.com/mirelagiuli" target="_blank"><FontAwesomeIcon icon={faGithub} style={{color: '#334459'}} size="3x"/></a></li>
                                        <li><a href="mailto:mireladegiuli@gmail.com"><FontAwesomeIcon icon={faEnvelope} style={{color: '#334459'}} size="3x"/></a></li>
                                        <li><a href="https://www.linkedin.com/in/mirela-de-giuli" target="_blank"><FontAwesomeIcon icon={faLinkedin} style={{color: '#334459'}} size="3x"/></a></li>
                                    </ul>
                                </div>
                            </div>

                            <div id="pedro">
                                <div className="card" if= "pessoa == 'pedro' || isMobile == true">
                                    <img src={BackgroundCard} alt="background card" className="card-img"/>
                                    <img src={Pedro} alt="imagem perfil pedro" className="img-perfil-sobre"/>
                                    <h2>Pedro H. Borges</h2>
                                    <p className="introducao">Olá! Sou Pedro</p>

                                    <ul className="redes-sociais">
                                        <li><a href="https://github.com/pedrohrb7" target="_blank"><FontAwesomeIcon icon={faGithub} style={{color: '#334459'}} size="3x"/></a></li>
                                        <li><a href="mailto:pedrohenriquer77@hotmail.com"><FontAwesomeIcon icon={faEnvelope} style={{color: '#334459'}} size="3x"/></a></li>
                                        <li><a href="https://www.linkedin.com/in/pedrohrb/" target="_blank"><FontAwesomeIcon icon={faLinkedin} style={{color: '#334459'}} size="3x"/></a></li>
                                    </ul>
                                </div>
                            </div>

                            <div id="rafael" if= "pessoa == 'rafael' || isMobile == true">
                                <div className="card">
                                    <img src={BackgroundCard} alt="background card" className="card-img"/>
                                    <img src={Rafael} alt="imagem perfil rafael" className="img-perfil-sobre"/>
                                    <h2>Rafael Rodrigues</h2>
                                    <p className="introducao">Sou Rafael</p>

                                    <ul className="redes-sociais">
                                        <li><a href="https://github.com/rafael-rodrigues-santos" target="_blank"><FontAwesomeIcon icon={faGithub} style={{color: '#334459'}} size="3x"/></a></li>
                                        <li><a href="mailto:rafaelrodrigues_@outlook.com"><FontAwesomeIcon icon={faEnvelope} style={{color: '#334459'}} size="3x"/></a></li>
                                        <li><a href="https://www.linkedin.com/in/rafael-rodrigues-santos/" target="_blank"><FontAwesomeIcon icon={faLinkedin} style={{color: '#334459'}} size="3x"/></a></li>
                                    </ul>
                                </div>
                            </div>

                            <div id="thiago" if= "pessoa == 'thiago' || isMobile == true">
                                <div className="card">
                                    <img src={BackgroundCard} alt="background card" className="card-img"/>
                                    <img src={Thiago} alt="imagem perfil thiago" className="img-perfil-sobre"/>
                                    <h2>Thiago Dutra</h2>
                                    <p className="introducao">Oi! Sou Thiago</p>

                                    <ul className="redes-sociais">
                                        <li><a href="https://github.com/thiagosilvadtr" target="_blank"><FontAwesomeIcon icon={faGithub} style={{color: '#334459'}} size="3x"/></a></li>
                                        <li><a href="mailto:"><FontAwesomeIcon icon={faEnvelope} style={{color: '#334459'}} size="3x"/></a></li>
                                        <li><a href="#" target="_blank"><FontAwesomeIcon icon={faLinkedin} style={{color: '#334459'}} size="3x"/></a></li>
                                    </ul>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}