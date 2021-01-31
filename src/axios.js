import axios from 'axios';


const instance=axios.create({
    baseURL:"https://tiktok1999.herokuapp.com/"
})


export default instance;