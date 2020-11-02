import { SET_NEW_TODO, SET_COMPLETED, SET_CURRENT_TEXT } from './../actions';

const reducer = (state, action) =>{
    switch(action.type) {
        case(SET_NEW_TODO):
            const newTodo = {item:action.payload, completed: false, id: new Date()};
            return({...state, list:{...state.list, newTodo}});
        case(SET_COMPLETED):
            return({...state, });
        case(SET_CURRENT_TEXT):
            return({...state, currentText:action.payload})
        default:
    }
}

export default reducer;