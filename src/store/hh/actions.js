import axios from 'axios'
import * as type from './type'

const action = {
    getLeft(){
        return dispatch =>{
            axios({
                url:"/maoyan/ajax/movieOnInfoList",
                params:{
                    token: '',
                }
               
            }).then(data=>{
                // console.log('左边列表~~',data.data);
                let actions = {
                    type:type.LEFT_MOVIE_LIST,
                    payload:data.data
                } 
                dispatch(actions);
            })
        }
    },
    getMore(id){
        return dispatch => {
            axios({
                url:'/maoyan/ajax/moreComingList',
                params:{
                    token:'',
                    movieIds: `${id}`
                }
            }).then(data=>{
                // console.log('新增数据~~',...data.data.coming)
                
                let actions = {
                    type:type.LEFT_MORE_MOVIE,
                    payload:data.data.coming
                }

                dispatch(actions);
                
              }).catch(error=>{
                  if (error) console.log(error);
               })
        }
    },
    getRigheSider(){
        return dispatch =>{
            axios({
                url:'/maoyan/ajax/mostExpected',
                params:{
                    ci: 10,
                    limit: 10,
                    offset: 0,
                    token:''
                }
            }).then(data=>{
             
                let actions = {
                    type:type.RIGHT_SIDER,
                    payload:data.data.coming
                }
                dispatch(actions)
            }).catch(error=>{
                if(error) console.log(error);
            })
        }
    },
    getRightList(){
        return dispatch=>{
            axios({
                url:'/maoyan/ajax/comingList',
                params:{
                    ci: 10,
                    token: '',
                    limit: 10
                }
            }).then(data=>{   
                // console.log('更多数据~~~~~~~~~',data)
                let actions = {
                    type:type.RIGHT_LIST,
                    payload:data
                }
                dispatch(actions)
            }).catch(error=>{
                if(error) console.log(error);
            })
        }
    },
    rightmoreList(movieIds){
        return dispatch=>{
            axios({
                url:'/maoyan/ajax/moreComingList',
                params:{
                    ci: 10,
                    token: '',
                    limit: 10,
                    movieIds:`${movieIds}`
                }
            }).then(data=>{   
                let actions = { 
                    type:type.RIGHT_MORE_LIST,
                    payload:data.data.coming
                }
                dispatch(actions)
            }).catch(error=>{
                if(error) console.log(error);
            })
        }
    }
}

export default action