import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState={
    searchData: null,
    isLoading: true,
    search:{
        text: '',
        product: '',
        city: '',
        gender: '',
        vendor: ''
    }
}

export const searchGetSetData=createAsyncThunk(
    'seller/searchGetSetData',
    async(args,thunkAPI)=>{
        try {
            const response = await fetch('http://localhost:8000/seller/search', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(args),
              });
            if(response.ok){
                const resbody=await response.json()
                console.log(resbody);
                thunkAPI.dispatch(sellerAction.setSearchProductData(resbody));
            }
        } catch (error) {
            console.log(error);
        }
    }
);

export const getSearchData=createAsyncThunk(
    'seller/getSearchData',
    async(args,thunkAPI)=>{
        try {
            thunkAPI.dispatch(sellerAction.setLoading(true))
            const response= await fetch('http://localhost:8000/seller/getdetails')
            if(response.ok){
                const resbody=await response.json()
                // console.log(resbody);
                thunkAPI.dispatch(sellerAction.setSearchData(resbody))
            }
            thunkAPI.dispatch(sellerAction.setLoading(false))
        } catch (error) {
            thunkAPI.dispatch(sellerAction.setLoading(false))

        }
    }
)

const sellerSlice= createSlice({
    name: 'seller',
    initialState,
    reducers:{
        setSearchData:(state,action)=>{
            state.searchData=action.payload
        },
        setLoading:(state,action)=>{
            state.isLoading=action.payload;
        },
        setSearchText:(state,action)=>{
            state.search.text=action.payload;
        },
        setSearchCategory:(state,action)=>{
            state.search.product=action.payload.product;
            state.search.city=action.payload.city;
            state.search.gender=action.payload.forc;
            state.search.vendor=action.payload.vendors;
        },
        setSearchProductData:(state,action)=>{
            state.searchData.products=action.payload;
        }
    }
})

export const sellerReducer=sellerSlice.reducer
export const sellerAction=sellerSlice.actions
export const sellerSelector=(state)=>state.sellerReducer