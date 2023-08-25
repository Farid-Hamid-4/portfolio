import SpotifyWebApi from "spotify-web-api-node";

export default function Playlists() {
    var scopes = ['playlist-read-private'];

    var spotifyApi = new SpotifyWebApi({
        clientId: "8af7a48b7a3e4560916aaca03247d088",
        clientSecret: "5db9d358ddf247da88bb6a1e6d61e0f8",
        redirectUri: "http://localhost:3000/",
    });
    
    var authorizeURL = spotifyApi.createAuthorizeURL(scopes);
    console.log(authorizeURL);
}
