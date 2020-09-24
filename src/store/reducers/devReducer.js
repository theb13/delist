const initialState = {
    search: '',
    list: [],
    row: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LIST_GET':
            return (
                { ...state, list: action.payload.data,search: '' }
            )
        case 'LIST_GET_DEV':
            return (
                { ...state, row: action.payload }
            )
        case 'CHANGE_SEARCH_DEV':
            return (
                { ...state, search: action.payload}
            )
        case 'SEARCH_DEV':
            return (
                { ...state, list: action.payload.list, search: action.payload.value }
            )
        default:
            return state
    }
}