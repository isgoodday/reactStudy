import state from './state'
import * as type from './type'
const reducer = (preState = state , action) => {
       let newState = {
           ...preState
       }   
     switch (action.type) {
         case type.DETAILS_DATA:
             newState.details = action.payload
             break;
     
         default:
             break;
     }
     return newState;              
}

export default reducer