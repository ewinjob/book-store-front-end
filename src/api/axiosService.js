import axios from'axios'

const axiosInstance =  axios.create({
    baseURL:'http://localhost:3000',
    timeout:10000
})


axiosInstance.interceptors.request.use(

)

axiosInstance.interceptors.response.use(
    function (response){
        console.log('API responce Recieved.......');
        return response
    },
    function (error){ 
    if (error.response) {
      // Server responded with a status code
      const status = error.response.status;

      console.log("Status:", status);
      console.log("Server Response:", error.response.data);

      if (status === 401) {
        console.log("Unauthorized error");
      } 
      else if (status === 404) {
        console.log("API is not found");
      } 
      else if (status === 500) {
        console.log("Something went wrong on server");
      }
    } 
    
    else if (error.request) {
      // Request was sent but server did not respond
      console.log("No response from the server");
    } 
    
    else {
      // Error while setting up the request
      console.log("Error:", error.message);
    }
    }
);

export default axiosInstance