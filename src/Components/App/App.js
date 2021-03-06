import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';
import SearchBar from '../SearchBar/SearchBar';
import Spotify from '../../util/Spotify';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchResults: [name, album, artist, id],
      playlistName: "New Playlist",
      playlistTracks: []
  };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(addTrack => addTrack.id === track.id)) {
      return;
    }

    let tracks = this.state.playlistTracks;
    tracks.push(track);
    this.setState({playlistTracks: tracks});
  }
  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks.push(track);
    this.setState({playlistTracks: tracks});
  }
  savePlaylist (){
    const trackUris = this.state.playlistTracks.map(playlistTrack => playlistTrack.uri);
    Spotify.savePlsylist(this.state.playlistName, trackUris);

    this.setState({
      searchResults: []
    });
    this.updatePlaylistName('New Playlist');
  }
    search(term) {
      Spotify.search(term).then(searchResults = > {
        this.setState({searchResults: searchResults})
      });
    }

  render() {
    return (
      <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar onSearch = {this.search}/>
    <div className="App-playlist">
      <SearchResults searchResults = {this.state.searchResults} onAdd = {this.addTrack}/>
      <Playist playlistName = {this.state.playlistName}
      playlistTracks = {this.state.playlistTracks}
      onRemove = {this.removeTrack}
      onNameChange = {this.updatePlaylistName}
      onSave = {this.savePlaylist} />
    </div>
  </div>
</div>

    );
  }
}

export default App;
