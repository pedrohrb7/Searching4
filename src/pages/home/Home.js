import React, { Component, Suspense, lazy } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./Home.css";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(faArrowUp);

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { value: "" };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleSubmit(event) {
		var busca = this.state.value;

		let pesquisa = document.querySelector("div#search");
		pesquisa.classList.add("fechar");

		console.log("Busca", busca);
		this.pesquisar();
		event.preventDefault();
	}

	state = {
		tweets: [],
	};

	pesquisar = async () => {
		const api = axios.create({
			baseURL:
				"https://cors-anywhere.herokuapp.com/api.twitter.com:443/1.1/search/tweets.json?include_entities=true&count=10&q=",
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization:
					"Bearer AAAAAAAAAAAAAAAAAAAAAPDWDQEAAAAAwhC8wAmvbpYad%2BFYLqXv4ep%2BWrE%3DoghUarbwC9b00RNDR5cK64XIt7qyWTm2j3StEjzaAxeASwfady",
			},
		});
		const res = await api.get(this.state.value);

		this.setState({ tweets: res.data.statuses });
		console.log("Statuses", this.state.tweets);
	};

	render() {
		
		const { tweets } = this.state;

		return (
			<div>
				<form className="main-busca" id="busca" onSubmit={this.handleSubmit}>
					<input
						type="text"
						id="input-busca"
						className="main-busca-input"
						placeholder="Digite sua pesquisa"
						value={this.state.value}
						onChange={this.handleChange}
					/>
					<button type="submit" className="main-busca-botao">
						<FontAwesomeIcon icon={faSearch} />
					</button>
				</form>

				{/* <!-- Mensagem inicial, fica visível antes do conteudo ser pesquisado --> */}
				<div class="main-inicio-backgound" id="search">
					<FontAwesomeIcon icon={faArrowUp} />
					<p>Pesquise algo interessante</p>
				</div>

				{tweets &&
					tweets.map((tweet) => (
						<div className="media-posts-container">
							<div className="media-post">
								<div className="media-info">
									<div className="media-post-info">
										<div className="img-perfil">
											<img
												className="post-imagem-perfil"
												src={tweet.user.profile_image_url}
											/>
										</div>

										<div className="info-usuario">
											<div key={tweet.user.id}>
												<h3 className="perfil-usuario">{tweet.user.name}</h3>
												<p className="id-usuario">@{tweet.user.screen_name} </p>
											</div>
										</div>
									</div>

									<div className="media-mensagem">
										<p className="mensagem"> {tweet.text} </p>
										<a
											className="link"
											target="_blank"
											href={
												"https://twitter.com/" +
												tweet.user.screen_name +
												"/status/" +
												tweet.id_str
											}
										>
											Visualizar mais no Twitter
										</a>
									</div>
								</div>
							</div>
						</div>
					))}
			</div>
		);
	}
}
