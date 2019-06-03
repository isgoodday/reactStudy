import React,{Component,Fragment} from 'react'
import './index.scss'
import {NavLink} from 'react-router-dom'

class Bodytitle extends Component {
    render() {
        return (
             <Fragment>
                 <section className='bodyHeader'>
                    <div className='cityName'>
                        <span>上海</span>
                        <span></span>
                    </div>
                        
                    <div className='bodyNav'>
                        <NavLink to='/movie/n-hot' activeClassName='active'>正在热映</NavLink>
                        <NavLink to='/movie/f-hot' activeClassName='active'>即将上映</NavLink>
                    </div>
                    <div className='search'>

                    </div>
                 </section>
             </Fragment>
        );
    }
}

export default Bodytitle