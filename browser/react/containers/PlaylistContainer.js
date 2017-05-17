import React, {Component} from "react";
import NewPlaylist from "../components/NewPlaylist";

export default class extends Component {
	constructor(props) {
		super(props);
		this.state = { playlistTitle: "" };
		this.updateArtistList = this.updateArtistList.bind(this);
		this.handleUserInput = this.handleUserInput.bind(this);
	}

	handleOnSubmit(event) {
		// create playlist
		event.preventDefault();
		console.log(this.state.playlistTitle);
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
				}
				<Artists artists={filteredArtists} />
			</div>
			)
	}
}