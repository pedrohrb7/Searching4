import React from "react";

// import "./About.css";                                
//import Header from "../../components/Header";

import BackgroundCard from "../../images/background-card.jpg";

export default function About() {
  return (
    <div className="estilo-geral">
      <div className="texto-sobre">
        <div className="container-sobre">
          <div className="explicação-proj">
            <h1>Sobre</h1>
            <p>
              Somos a <strong>4-Front!</strong>
            </p>
            <p>
              Uma equipe formada por quatro desenvolvedores que estão em busca
              de novos conhecimentos e desafios profissionais. Cada integrante
              tem suas habilidades e áreas de especialidade, e unidos formamos
              um time capacitado para desenvolvimento web completo. Nossos
              projetos priorizam a responsividade e a qualidade de interação
              para que seu site seja acessível nos diferentes dispositivos de
              seus usuários. Nossos serviços contemplam desde o design da
              interface até toda a programação Front-End. Fazemos aplicação de
              HTML, CSS e JavaScript puros, ou com os frameworks Angular e
              React.
            </p>
            <p>
              <strong>
                Este site é resultado de um dos projetos da Capacitação em
                Front-end da Cocreare Academy, que teve como objetivo o
                desenvolvimento de um site responsivo integrado com a API da
                rede social Twitter.
              </strong>
            </p>
          </div>

          <div className="img-sobre">
            <img alt="" src={Computerimg} />
          </div>
        </div>
      </div>

      <div className="equipe" id="equipe">
        <h1 className="título"> Nossa Equipe</h1>
        <div className="container">
          <div className="equipe-conteudo" id="equipe_conteudo">
            <div className="fechar mirela">
              <div className="card">
                <img
                  src={BackgroundCard}
                  alt="background card"
                  className="card-img"
                />
                <img alt="imagem perfil mirela" className="img-perfil-sobre" />

                <h2>Mirela De Giuli</h2>
                <p className="introducao">
                  Oie! Sou a Mirela, designer de produto e desenvolvedora
                  front-end Jr, tenho 24 anos e moro em Bauru. Sou apaixonada
                  por livros, café e inovação!
                </p>

                <ul className="redes-sociais">
                  <li>
                    <a
                      href="https://github.com/mirelagiuli"
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      <button>Github</button>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:mireladegiuli@gmail.com">
                      <button>email</button>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/mirela-de-giuli"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <button>Linkedin</button>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="fechar pedro">
              <div className="card">
                <img
                  src={BackgroundCard}
                  alt="background card"
                  className="card-img"
                />
                <img alt="imagem perfil pedro" className="img-perfil-sobre" />
                <h2>Pedro H.R. Borges</h2>
                <p className="introducao">
                  Opa! Sou Pedro, sou desenvolvedor front-end jr e acredito que
                  é de madrugada que o café se transforma nos melhores códigos.
                </p>

                <ul className="redes-sociais">
                  <li>
                    <a
                      href="https://github.com/pedrohrb7"
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      <button>Github</button>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:pedrohenriquer77@hotmail.com">
                      <button>email</button>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/pedrohrb/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <button>Linkedin</button>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="fechar rafael">
              <div className="card">
                <img
                  src={BackgroundCard}
                  alt="background card"
                  className="card-img"
                />
                <img alt="imagem perfil rafael" className="img-perfil-sobre" />
                <h2>Rafael Rodrigues</h2>
                <p className="introducao">
                  Oi, sou o Rafael, desenvolvedor front-end entusiasta por
                  tecnologia e inovação. Nos tempos livres curto um bom livro e
                  games.{" "}
                </p>

                <ul className="redes-sociais">
                  <li>
                    <a
                      href="https://github.com/rafael-rodrigues-santos"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <button>Github</button>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:rafaelrodrigues_@outlook.com">
                      <button>email</button>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/rafael-rodrigues-santos/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <button>linkedin</button>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
