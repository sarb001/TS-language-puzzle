import { createSlice  ,PayloadAction } from '@reduxjs/toolkit' ;

const initialState : StateType = {
        loading : false,
        words : [],
        result : [],
}

const rootSlice = createSlice({
    name : "root",
    initialState ,
    reducers : {
        getWordsRequest : (state) => {
            state.loading = true;
        },
           // <WordType>  Datatype is defined with Specific data
        getWordsSuccess : (state , action : PayloadAction<WordType[]>) => {
            state.loading = false;
            state.words = action.payload;
        },
                // <string>  Datatype is defined 
        getWordsFail    : (state , action : PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
})


export default rootSlice.reducer;