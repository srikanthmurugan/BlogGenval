import axios from "axios";
//import { useSelector } from "react-redux";

axios.defaults.baseURL = 'http://localhost:3001';


let refresh = false;

axios.interceptors.response.use(resp => resp, async error => {
    //const token = useSelector((state) => state.user.token.token)
    if (error.response.status === 401 && !refresh) {

        refresh = true;
        const response = await axios.post('/users/tokens/refresh', {}, { withCredentials: true });

        if (response.status === 200) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data['token']}`;

            return axios(error.config);
        }
    }
    refresh = false;
    return error;
});


//response.data['token']