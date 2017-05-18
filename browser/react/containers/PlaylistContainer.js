import React, {Component} from "react";
// import { Redirect } from "react-router";
import NewPlaylist from "../components/NewPlaylist";
import Songs from "../components/Songs";
import axios from 'axios';

export default class extends Component {
	constructor(props) {
		super(props);
		this.state = { playlistTitle: "", redirect: false, playlistId: null};
		this.handleOnSubmit = this.handleOnSubmit.bind(this);
		this.handleUserInput = this.handleUserInput.bind(this);
	}

	handleOnSubmit(event) {
		// create playlist
		event.preventDefault();
		axios.post('/api/playlists', { name: this.state.playlistTitle })
		.then(res => res.data)
		.then(playlist => {
			this.props.updatePlaylistsAndRedirect(playlist);
		});
	}

	handleUserInput(event) {
		const playlistTitle = event.target.value;
		console.log(playlistTitle);
		this.setState({playlistTitle});
	}

	render() {


		return (
			<div>
				<NewPlaylist handleOnSubmit={this.handleOnSubmit} handleUserInput={this.handleUserInput}
					playlistTitle={this.state.playlistTitle} />
				<Songs artists={this.props.songs} />
			</div>
			)
	}
}