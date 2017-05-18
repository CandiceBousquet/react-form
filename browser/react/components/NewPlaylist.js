import React from "react";

export default function (props) {
	return (
		<div className="well">
		  <form className="form-horizontal" onSubmit={props.handleOnSubmit}>
		    <fieldset>
		      <legend>New Playlist</legend>
		      <div className="form-group">
		        <label className="col-xs-2 control-label">Name</label>
		        <div className="col-xs-10">
		          <input className="form-control" type="text" value={props.playlistTitle} onChange={props.handleUserInput} />
		        </div>
		      </div>
		      <div className="form-group">
		        <div className="col-xs-10 col-xs-offset-2">
		          <button type="submit" className="btn btn-success" to="/albums">Create Playlist</button>
		        </div>
		      </div>
		    </fieldset>
		  </form>
		</div>
		)
}