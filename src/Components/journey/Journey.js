import React, { Component} from "react"
import Bio from './bio';
import TrackList from './TrackList';
import Analytics from './Analytics';

import API from "../../API.js"
// import Example from "./Example";

class Journey extends Component {
    state = {
        tracks: []
    }
    componentDidMount() {
        API.fetchCompletedTracks()
            .then(API.parseJson)
            .then(data => this.setState({ tracks: data }))
            .catch(error => console.log(error))
    }


    render = () => {

        return (
            <div class=" uk-container">
                <Bio user={this.props.user} />
                <TrackList tracks={this.state.tracks} />
                <Analytics tracks={this.state.tracks} /> 
                {/* <Example tracks={this.state.tracks} /> */}
            </div>

        );
    }
}

export default Journey