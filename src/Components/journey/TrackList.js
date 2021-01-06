import React, { Fragment } from "react"
import { Link } from 'react-router-dom'

function TrackList(props) {
  const renderTracks = () => {
    return props.tracks.map(track => {
      return (
        <>
          <li key={track.id} class="uk-closed ">
            <a class="uk-accordion-title uk-text-lighter" href="#">{track.skill.title}</a>
            <div class="uk-accordion-content">
              <p></p>
              {renderSessions(track)}
            </div>
          </li>
        </>)
    })
  }

  const renderSessions = (track) => {
    return track.sessions.map(session => {
      return (<p key={session.id}><Link class="uk-link-text" to={`sessions/${session.id}`}>{session.date}</Link></p>);
    })
  }

  return (
    <>
      <ul data-uk-accordion="multiple: true">
        {console.log(props)}
        {renderTracks()}
      </ul>
    </>
  );


}

export default TrackList