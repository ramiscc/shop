import {createSlice} from "@reduxjs/toolkit";

interface dataState{
    popup: boolean
}

const initialState: dataState = {
    popup: false
}

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        changePopup(state){
            state.popup = !state.popup
        }
    }
})


export const {changePopup} = dataSlice.actions;
export default dataSlice.reducer;
