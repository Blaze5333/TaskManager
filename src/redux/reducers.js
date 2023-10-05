import { SET_USER_ID,SET_DATA_PERMISSION } from "./actions";
const initialState={
    userId:'',
    permission:1
}
function userReducer(state=initialState,action){
    switch(action.type){
        case SET_USER_ID:
            return {userId:action.payload,permission:1}
            
        case SET_DATA_PERMISSION:
            return {userId:state.userId,permission:action.payload}    
        default:
            return state
    }
   
}
export default userReducer