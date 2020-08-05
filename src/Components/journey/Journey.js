import React, { Component, Fragment } from "react"
import Bio from './bio';
import TrackList from './TrackList';
import Analytics from './Analytics';

import moment from 'moment';

import API from "../../API.js"

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
            </div>

        );
    }
}

export default Journey