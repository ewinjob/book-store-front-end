
import axiosInstance from "../api/axiosService";


export const registerAPI=async(reqBody)=>{
 return await axiosInstance.post('/api/register',reqBody)
}

export const loginAPI=async(reqBody)=>{
 return await axiosInstance.post('/api/login',reqBody)
}


export const getAllBooksAPI=async()=>{
 return await axiosInstance.get('/api/getAllBooks',{},{})
}

export const latestBooksAPI=async()=>{
    return await axiosInstance.get('/api/latestBooks')
}


export const viewBooksAPI=async(id)=>{
    return await axiosInstance.get(`/api/viewBooks/${id}`)
}

export const googleLoginAPI=async(reqBody)=>{
    return await axiosInstance.post('/api/googleLogin',reqBody,{})
}