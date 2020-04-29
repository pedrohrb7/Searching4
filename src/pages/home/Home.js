import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import './Home.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCoffee, faArrowUp } from '@fortawesome/free-solid-svg-icons'

library.add(
    faArrowUp
)

const seta = <FontAwesomeIcon icon={faArrowUp} />


function Home() {
    return (
        <main>

            <form className="main-busca" id="busca">
                <input type="text" id="input-busca" class="main-busca-input" placeholder="Digite sua pesquisa" autofocus />
                <button type="submit" class="main-busca-botao">
                    <i className="fas fa-search" id="img-busca"></i>
                </button>
            </form>



            <div className="mensagem-erro">
                <p>Digite um texto para pesquisa</p>
            </div>


            <div className="main-inicio-backgound">
                <FontAwesomeIcon icon={faArrowUp} />
                <p>Pesquise algo interessante</p>
            </div>



            <section className="media-posts-container">
                <div className="media-post">
                    <div className="media-info">

                        <div className="media-post-info">
                            <div className="img-perfil">
                                {/* <img src="" alt="" class="post-imagem-perfil"> */}
                            </div>

                            <div className="info-usuario">
                                <h3 className="perfil-usuario"></h3>
                                <p className="id-usuario">@</p>
                                <p className="data-usuario"></p>
                            </div>
                        </div>

                        <div className="media-mensagem">
                            <p className="mensagem"></p>

                            <div>
                                {/* <img src="" alt="Imagem de Perfil 1"> */}
                            </div>

                            {/* <a class="link" target="_blank"
            [href]="'https://twitter.com/' + item.user.screen_name + '/status/' + item.id_str">Visualizar mais no
            Twitter
          </a> */}
                        </div>

                    </div>
                </div>
            </section>


            <div>
                {/* <ng-image-slider [images]="imageObject" #nav  class="slider"></ng-image-slider> */}
            </div>

        </main>
    );
}

export default Home;