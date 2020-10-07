//ajax
import axios from 'axios'
import { toastr } from 'react-redux-toastr'

const Url = process.env.REACT_APP_API_URL

const getData = () => {
    const request = axios.get(Url)
    return {
        type: 'LIST_GET',
        payload: request
    }
}
const loading=()=>{
    return {
        type: 'LIST_LOADING',
        payload: true
    }
}

export const get =()=>{
    return dispatch=>{
        dispatch(loading())
        dispatch(getData())
    }
}

export const getDev = (row) => {
    return {
        type: 'LIST_GET_DEV',
        payload: row
    }
}

function eachIndex(e, value) {
    return e.name.toLowerCase().includes(value.toLowerCase())
}

export const searchDev = (value, data) => {
    const list = data.filter(data => eachIndex(data, value))
    
    return {
        type: 'SEARCH_DEV',
        payload: { value, list:list }
    }
}
export const changeSearch = (value) => {
    return {
        type: 'CHANGE_SEARCH_DEV',
        payload: value
    }
}

export const add = (values) => {
    values.preventDefault()
    const formData = new FormData(values.target)
    const btn = document.querySelector('#btnSubmit')
    const btnBack = document.querySelector('#btnBack')
   
    const data = {}
    for (var pair of formData.entries()) {
        data[pair[0]] = pair[1]
    }
    return dispatch => {

        axios.post(Url, { ...data })
            .then(_ => {
                toastr.success('Sucesso!', 'Operação realizada com sucesso.')
                btn.disabled = true
                btn.classList.add('disable')
                btnBack.innerHTML='Ver na lista!'
            })
            .catch(_ => toastr.error('Falha!', 'Operação não realizada.'))

    }
}

