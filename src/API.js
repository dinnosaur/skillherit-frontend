const BASE_URL = "http://localhost:3000/"

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

const parseJson = (resp) => {
    if (resp.ok) {
        return resp.json()
    }
    else {
        throw resp.json()
    }
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
export default {
    signUpUser,
    logInUser,
    parseJson,
    validation,
    postSkill
}