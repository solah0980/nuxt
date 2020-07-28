import Api from 'axios'

export default function(){
    return Api.create({
        baseURL:'api/'
    })
}