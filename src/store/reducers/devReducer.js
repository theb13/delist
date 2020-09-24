const initialState = {
    list: [],
    row: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LIST_GET':
            return (
                { ...state, list: action.payload.data }
            )
        case 'LIST_GET_DEV':
            return (
                { ...state, row: action.payload }
            )
        default:
            return state
    }
}