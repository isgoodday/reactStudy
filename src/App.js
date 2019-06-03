import React,{Component,Fragment} from 'react';
import Headertitle from './component/pages/hh/header'
import 'assets/css/reset.css'
import {withRouter,Route,Switch,Redirect} from 'react-router-dom'
import Bodycontext from 'pages/hh/body'
import FooterNav from 'pages/hh/footer';
import Details from 'pages/hh/details'


class App extends Component {
  render() {
    return (
      <Fragment>
        <Headertitle></Headertitle>
        <Switch>
          <Route exact path='/' render={()=>(<Redirect to='/movie/n-hot'></Redirect>)}></Route>
          <Route path='/movie' component={Bodycontext}></Route>
          <Route to = '/cinema/movie' component={Details}></Route>
   
        </Switch>
        <FooterNav></FooterNav>
      </Fragment>
    )
  }
}


export default withRouter(App);
