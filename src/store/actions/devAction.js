//ajax
import axios from 'axios'
import { toastr } from 'react-redux-toastr'

const Url = process.env.REACT_APP_API_URL

export const get = () => {
    const request = axios.get(Url)
    return {
        type: 'LIST_GET',
        payload: request
    }
}

export const getDev = (row) => {
    return {
        type: 'LIST_GET_DEV',
        payload: row
    }

}

export const add = (values) => {
    values.preventDefault()
    const formData = new FormData(values.target)
    const btn = document.querySelector('#btnSubmit')
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
            })
            .catch(_ => toastr.error('Falha!', 'Operação não realizada.'))

    }
}

