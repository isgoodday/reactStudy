import React,{Fragment,Component} from 'react'
import {connect} from 'react-redux'
import action from 'store/details/actions'
import DetailsHeader from './detailsheader'
import {bindActionCreators} from 'redux'

class Details extends Component {
    componentDidMount () {
         let movieId=this.props.location.pathname.slice(14)
           this.props.detailsDate(movieId)  
    }

    people = ()=>{  //人数计算
        let num = this.props.details.details.snum
           if(num<1000){
               return num;
           }
       
           if(num>1000){
               let newNum = num/10000
               return Math.round(newNum * 100) / 100
           }
     }

    render() {

        //当拿到请求结果将this.props.details.details解构赋值给props
        let props =this.props.details.details && {
            ...this.props.details.details
        };

        console.log('props新对象',props);
        
        return (
             <Fragment>
                {
                 // 判断props是否存在
                    props ?
                    <DetailsHeader data={props}
                     people={this.people}
                     ></DetailsHeader>
                    :null
                }
                
           </Fragment>
        );
    }

  
}

export default connect( state=>state , dispatch =>bindActionCreators(action,dispatch) )(Details) 