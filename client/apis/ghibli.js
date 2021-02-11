import request from 'superagent'

const serverURL = 'http://localhost:3000/api/v1/ghibli'

export function getGhibli(){
    return request
    .get(`${serverURL}/movieList`)
    .then(response => {
        console.log(response.body.title)
    
    })
}