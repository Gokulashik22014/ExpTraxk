import axios from "axios";


const axiosSecure=axios.create({
    baseURL:"http://localhost:3000"
})
function useAxiosSecure(){
    axiosSecure.interceptors.request.use(
        config => {
          config.headers['Authorization'] = `Bearer ${localStorage.getItem('access-token')}`;
              return config;
          },
          error => {
              return Promise.reject(error);
          }
      );
    return axiosSecure
}


export default useAxiosSecure