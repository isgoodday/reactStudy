import React,{Component,Fragment} from 'react'
import Bodytitle from './bodyheader'
import Bodyleft from './bodycontext/left'
import Bodyright from './bodycontext/right'
import {Route,Switch} from 'react-router-dom'
import './index.scss'
class BodyContext extends Component{
    render() {
        return (
             <Fragment>
                 <div className='bodyContext'>
                 <Route path='/movie' component={Bodytitle}></Route>
                    <Switch>
                    <Route exact path='/movie/n-hot' component={Bodyleft}></Route>
                    <Route path='/movie/f-hot' component={Bodyright}></Route>
                    </Switch>
                 </div>
             </Fragment>
        );
    }
}

export default BodyContext