import request from 'superagent'

const serverURL = '/api/v1/ghibli'

export function getGhibli(){
    return request
    .get(`${serverURL}/movieList`)
    .then(response => {
        return response
    })
}