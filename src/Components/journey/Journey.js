import React, { Component } from "react"
import Bio from './bio';
import { Link } from 'react-router-dom';
import TrackList from './TrackList';
import Analytics from './Analytics';

import API from "../../API.js"
// import Example from "./Example";

class Journey extends Component {
    state = {
        tracks: []
    }

    fetchdata = () => {
        API.fetchCompletedTracks()
            .then(API.parseJson)
            // .then(data => console.log(data))
            .then(data => this.setState({ tracks: data }))
            .catch(error => console.log(error))
    }
    
    componentDidMount() {   
        this.props.showStatistics(true)
        this.fetchdata()
    }
 
    componentWillUnmount() {
        this.props.showStatistics(false)
    }


    render = () => {
        return (
            <>
                <div class="uk-container">
                    <Bio user={this.props.user} />
                    <TrackList tracks={this.state.tracks} />
                    <div id="modal-full" class="uk-modal-full" data-uk-modal data-uk-overflow-auto>
                        <div class="uk-modal-dialog" >
                            <button class="uk-modal-close-full uk-close-large " type="button" data-uk-close></button>
                            <Analytics tracks={this.state.tracks} />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Journey