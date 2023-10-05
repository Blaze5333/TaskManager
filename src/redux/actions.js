export const SET_USER_ID='SET_USER_ID'
export const SET_DATA_PERMISSION='SET_DATA_PERMISSION'

export const setUserId=userId=>dispatch=>{
    dispatch({
        type:SET_USER_ID,
        payload:userId
    })
}
export const setDataPermisson=permission=>dispatch=>{
    dispatch({
        type:SET_DATA_PERMISSION,
        payload:permission
    })
}