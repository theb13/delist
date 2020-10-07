const initialState = {
    search: '',
    list: [],
    row: null,
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LIST_GET':
            return (
                { ...state, list: action.payload.data, search: '', loading:false }
            )

        case 'LIST_GET_DEV':
            return (
                { ...state, row: action.payload }
            )

        case 'LIST_LOADING':
            return (
                { ...state, loading: action.payload }
            )

        case 'CHANGE_SEARCH_DEV':
            return (
                { ...state, search: action.payload }
            )

        case 'SEARCH_DEV':
            return (
                { ...state, list: action.payload.list, search: action.payload.value }
            )

        default:
            return state
    }
}