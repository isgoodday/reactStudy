import * as type from './type'
import state from './state'

let _ = require('lodash');

const reducer = (prestate=state,action)=>{
    let newState = {
        ...prestate
    }
    switch (action.type) {
        case type.LEFT_MOVIE_LIST:
            newState.movieLeft=action.payload.movieList;
            let movieId =_.chunk(action.payload.movieIds,12);
            newState.movieId=movieId;
            break;

        case type.LEFT_MORE_MOVIE:
            newState.movieLeft.push(...action.payload);
            break;


        case type.RIGHT_SIDER:
            newState.rightSider=action.payload;
            break;

        case type.RIGHT_LIST:
            newState.rightlist =action.payload.data.coming;
            newState.rightMovieId = _.chunk(action.payload.data.movieIds.slice(12),10);
            
            break;

        case type.RIGHT_MORE_LIST:
            newState.rightlist.push(...action.payload)
            break;

        default:
            break;

    }

    return newState
}

export default reducer