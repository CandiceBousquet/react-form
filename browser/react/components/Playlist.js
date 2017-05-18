import React from 'react'
import Songs from './Songs'

export default class Playlist extends React.Component {
    constructor(){
        super()
        this.state ={
            selectedSong: null
        }
    }

    componentDidMount(){
      this.props.selectPlaylist(this.props.routeParams.playlistId)
    }

    componentWillReceiveProps(){
            // console.log(this.props.routeParams.playlistId , this.props.selectedPlaylist.id)

        const playlistId = +this.props.routeParams.playlistId
        if(playlistId !== this.props.selectedPlaylist.id){
            this.props.selectPlaylist(playlistId)
        }

    }

    handleSelectSong(event){
        this.setState({
            selectedSong: event.target.value
        })
    }
    handleOnSubmit(event){
        
    }

    render(){
        const playlist = this.props.selectedPlaylist
        console.log(this.props)
        if(!playlist.id) return null
        return (
            <div>
                <h3>{ playlist.name }</h3>
                    <Songs songs={playlist.songs} /> {/** Hooray for reusability! */}
                    { playlist.songs && !playlist.songs.length && <small>No songs.</small> }
                <hr />
                  <div className="well">
                    <form className="form-horizontal" noValidate name="songSelect" onSubmit={handleOnSubmit}>
                    <fieldset>
                        <legend>Add to Playlist</legend>
                        <div className="form-group">
                        <label htmlFor="song" className="col-xs-2 control-label">Song</label>
                        <div className="col-xs-10">
                            <select className="form-control" name="song" onChange={handleSelectSong}>
                                {
                                    this.props.songs.map( (song)=>{
                                        return <option key={song.id} value={song.id}>{song.name}</option>
                                    })
                                }
                            </select>
                        </div>
                        </div>
                        <div className="form-group">
                        <div className="col-xs-10 col-xs-offset-2">
                            <button type="submit" className="btn btn-success">Add Song</button>
                        </div>
                        </div>
                    </fieldset>
                    </form>
                </div>
            </div>
            
        )
    }
}