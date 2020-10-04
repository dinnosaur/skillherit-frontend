import React, { Component } from "react"
import Bio from './bio';
import {Link } from 'react-router-dom';
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
                <button class="uk-button uk-button-default uk-margin-small-right" type="button" data-uk-toggle="target: #modal-full">Open</button>
            
                <div id="modal-full" class="uk-modal-full" data-uk-modal>
                    <div class="uk-modal-dialog">
                        <button class="uk-modal-close-full uk-close-large" type="button" data-uk-close></button>
                        <div class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" data-uk-grid>
                            <div class="uk-background-cover" data-uk-height-viewport></div>
                            <div class="uk-padding-large">
                                <h1>Headline</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Journey