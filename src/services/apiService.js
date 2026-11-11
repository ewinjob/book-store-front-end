import axiosInstance from "../api/axiosInstance";




export const registerAPI=async(reqBody)=>{
 return await axiosInstance.post('/api/register',reqBody)
}

export const loginAPI=async(reqBody)=>{
 return await axiosInstance.post('/api/login',reqBody)
}


export const getAllBooksAPI = async (searchKey,reqHeader) => {
  return await axiosInstance.get(`/api/getAllBooks?search=${searchKey}`, {
    headers: reqHeader,
  })
}

export const latestBooksAPI=async()=>{
    return await axiosInstance.get('/api/latestBooks')
}


export const viewBooksAPI=async(id,reqHeader)=>{
    return await axiosInstance.get(`/api/viewBooks/${id}`,{headers:reqHeader})
}

export const googleLoginAPI=async(reqBody)=>{
    return await axiosInstance.post('/api/googleLogin',reqBody,{})
}

export const addBooksAPI=async(reqBody,reqHeader)=>{
    return await axiosInstance.post('/api/addBook',reqBody,{
        headers:reqHeader
    })
}


//admin
export const getAllBooksAdminAPI=async(reqHeader)=>{
 return await axiosInstance.get('/api/admin-getBooks',{},{
    headers:reqHeader
 })
}

export const getAllUsersAdminAPI=async(reqHeader)=>{
 return await axiosInstance.get('/api/admin-getUsers',{},{
    headers:reqHeader
 })
}

