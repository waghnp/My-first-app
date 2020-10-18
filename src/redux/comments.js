
import * as ActionsTypes from './ActionsTypes';

export const Comments=(state={errMess:null,comments:[]},action )=>{
    switch(action.type){
        case ActionsTypes.ADD_COMMENTS:
            return {...state,errMess:null,comments:action.payload};
        case ActionsTypes.COMMENTS_FAILED:
            return {...state,errMess:action.payload};
        case ActionsTypes.ADD_COMMENT:
            var comment=action.payload;
            return {...state,comments:state.comments.concat(comment)};
        default:
            return state;
    }
}