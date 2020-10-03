import React, { Component } from "react"
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
                <button class="uk-button uk-button-default uk-margin-small-right" type="button" data-uk-toggle="target: #offcanvas-slide">Slide</button>
                <div id="offcanvas-slide" data-uk-offcanvas="overlay: true">
                    <div class="uk-offcanvas-bar">

                        <button class="uk-offcanvas-close" type="button" data-uk-close></button>

                        <h3>Title</h3>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                    </div>
                </div>
            </div>

        );
    }
}

export default Journey