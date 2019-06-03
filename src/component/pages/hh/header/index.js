import React,{Component,Fragment} from 'react'
import './index.scss'
import {withRouter} from 'react-router-dom'

class Headertitle extends Component {
    render() {
        return (
             <Fragment>
                 <header className="header">
                    {this.props.location.state ? this.props.location.state:'猫眼电影' }
                 </header>
             </Fragment>
        );
    }
}

export default withRouter(Headertitle)