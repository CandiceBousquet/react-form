import React, {Component} from "react";
import FilterInput from "../components/FilterInput";
import Artists from "../components/Artists";

export default class extends Component {
	constructor(props) {
		console.log(props);
		super(props);
		this.state = { inputValue: "" };
		this.updateArtistList = this.updateArtistList.bind(this);
	}

	updateArtistList(artist) {
		this.setState({ inputValue: artist});
	}

	render() {
		const filteredArtists = this.props.artists.filter((elem) => {
			return elem.name.toLowerCase().match(this.state.inputValue.toLowerCase())
		});
		return (
			<div>
				<FilterInput updateArtistList={this.updateArtistList}/>
				<Artists artists={filteredArtists} />
			</div>
			)
	}
}
