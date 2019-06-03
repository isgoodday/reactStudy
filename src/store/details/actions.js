import * as type from './type';
import axios from 'axios';

const action = {
    detailsDate(movieId){
        return dispatch => {
           axios({
               url:'/maoyan/ajax/detailmovie',
               params:{
                movieId: `${movieId}`
               }
           }).then(data =>{
               let actions = {
                   type:type.DETAILS_DATA,
                   payload:data.data.detailMovie
               }
               dispatch(actions);
           })
        }
    }
}

export default action