import {combineReducers} from 'redux'

//引入主页面数据
import leftMovie from './hh/reducer'

//详细页面数据
import details from './details/reducer'

const reducer = combineReducers({
    leftMovie,details
})

export default reducer;