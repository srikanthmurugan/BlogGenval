import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';



const initialState = {
    // msg:"",
    // user:"",
    // email:"",
    // token:"",
    // loading:false,
    // error: ""
    user: [],
    token: [],
    error:""
}

export const signUpUser = createAsyncThunk('signupuser',async(body)=>{
    const res = await fetch('http://localhost:3001/users/tokens/sign_up',{
        method:'post',
        headers:{
            'Content-Type':"application/json",

        },
        body: JSON.stringify(body)
    })
    
    return await res.json();
})


//Login

export const signInUser = createAsyncThunk('signinuser',async(body)=>{
    const res = await fetch('http://localhost:3001/users/tokens/sign_in',{
        method:'post',
        headers:{
            'Content-Type':"application/json",

        },
        body: JSON.stringify(body)
    })
    
    return await res.json();
})


const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{

        addToken: (state, action)=>{
             state.token = localStorage.getItem("token")
            // state.token = token;
            //localStorage.setItem('token', state.payload.token);
            Cookies.set('token', action.payload.token, { expires: 7 });
        },
        addUser: (state, action)=>{
            state.user = localStorage.getItem("user")
           // state.user = user;
        },
        logout: (state, action)=>{
            state.token = [];
            state.user = [];
            localStorage.clear();
            Cookies.remove('token');
        } 

    },
    extraReducers:{
        //Login
        [signInUser.pending]:(state,action)=>{
            state.loading = true
        },
        //{payload:{error,msg,token,resource_owner}}
        [signInUser.fulfilled]:(state,action)=>{
            state.loading = false
            if(action.payload.resource_owner){
                
                state.user = action.payload.resource_owner;
                state.token = action.payload
                state.error = []
                localStorage.setItem("user", JSON.stringify(action.payload.resource_owner))
                localStorage.setItem("token", JSON.stringify(action.payload.token))
            }
            else{
                state.error = action.payload.error_description
            }
            
            
            
        },
        [signInUser.rejected]:(state,action)=>{
            state.loading = false
        },

        //Signup

        [signUpUser.pending]:(state,action)=>{
            state.loading = true
        },
        [signUpUser.fulfilled]:(state,action)=>{
            state.loading = false
            if(action.payload.error){
                state.error = action.payload.error_description
            }
        },
        [signUpUser.rejected]:(state,action)=>{
            state.loading = false
        }
    }
})

export const{addToken,addUser,logout} = authSlice.actions;






export default authSlice.reducer

