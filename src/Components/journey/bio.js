import React, { Fragment, useReducer } from "react"


function Bio({ user: { username, motto } }) {

    return (
        <>
            <article class="uk-comment uk-comment-primary uk-margin-top uk-border-pill ">
                <header class="uk-comment-header uk-grid-medium uk-flex-middle" data-uk-grid>
                    <div class="uk-width-auto">
                        <img class="uk-comment-avatar" src="https://img.icons8.com/material-two-tone/48/000000/user.png" width="40" height="40" alt="" />
                    </div>
                    <div class="uk-width-expand">
                        <h4 class="uk-comment-title uk-margin-remove">{username}</h4>
                    </div>
                </header>
                <div class="uk-comment-body">
                    <p class="uk-text-bold">{motto}</p>
                </div>
            </article>
            <h4 class="uk-text-light">Here you can find all your completed Tracks:</h4>
            <hr class="uk-divider-icon" />
        </>
    );

}

export default Bio