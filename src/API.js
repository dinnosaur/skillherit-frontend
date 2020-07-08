const BASE_URL = "http://localhost:3000/"

//Unauthorized fetches 
const signUpUser = (user) => {
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(user)
    }

    return fetch(BASE_URL + "/users", configurationObject)
    
}

const logInUser = (user) => {
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(user)
    }

    return fetch(BASE_URL + "/users/sign-in", configurationObject)
}



const validation = () => {
return fetch(BASE_URL + "validate", {headers: {AUTHORIZATION: localStorage.token}})
}

const postSkill = (skill) => {
    console.log(localStorage.token)
    const configurationObject = {
        method: "POST",
        headers: {
            AUTHORIZATION: localStorage.token,
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(skill)
    }

    return fetch(BASE_URL + "skills", configurationObject)
}

//Skillls
const fetchAllSkills =() => {
    return fetch(BASE_URL +"skills")
}

const fetchSkill = (id) => {
    return fetch(BASE_URL + "skills/" + `${id}` )
}


//Error handling
const parseJson = (resp) => {
    if (resp.ok) {
        return resp.json()
    }
    else {
        throw resp.json()
    }
}

//Track and session 
const createTrack = (data) => {
    const configurationObject = {
        method: "POST",
        headers: {
            AUTHORIZATION: localStorage.token,
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    }
    return fetch(BASE_URL +"tracks", configurationObject )
}

const fetchTrack = () => {
    return fetch(BASE_URL + "tracks/user-track", {headers: {AUTHORIZATION: localStorage.token}})
}

const postSession = (data) => {
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    }
    return fetch(BASE_URL + "sessions", configurationObject)
}

const updateTrack = (trackid) => {
    const configurationObject = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({id:trackid})
    }
    return fetch(BASE_URL + "tracks/" + `${trackid}`, configurationObject)
}

const fetchCompletedTracks = () => {
    return fetch(BASE_URL + "tracks/user-tracks",{headers: {AUTHORIZATION: localStorage.token}})
}

const fetchSession = (sessionId) => {
    return fetch(BASE_URL + `sessions/${sessionId}`, {headers: {AUTHORIZATION: localStorage.token}})
}


export default {
    signUpUser,
    logInUser,
    parseJson,
    validation,
    postSkill, 
    fetchAllSkills,
    fetchSkill,
    createTrack,
    fetchTrack,
    postSession,
    updateTrack,
    fetchCompletedTracks,
    fetchSession
}