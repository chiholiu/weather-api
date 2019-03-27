const items = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM': 
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        default: 
            return state
    }
}

export default items;