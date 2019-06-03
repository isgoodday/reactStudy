import React,{Component,Fragment} from 'react'
import './index.scss'
import './right.scss'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actionCreators from 'store/hh/actions'
import Swiper from 'swiper'
//引入swiper样式
import 'swiper/dist/css/swiper.css'

import Bscroll from 'better-scroll'


const ListSider = (props) =>{
    // console.log('列表数据',props.ele);
    
    return (
        <Fragment>
              <li className="expected-item swiper-slide">

                <div className="poster default-img-bg">
                    <img src={props.ele.img.replace('w.h','170.230')}  alt={props.ele.nm} />

                    <span className="wish"><span className="wish-num">{props.ele.wish}</span>人想看</span>

                    <div className="toggle-wish">

                    <span></span>
                    </div>
                </div>
                <p className="name line-ellipsis">{props.ele.nm}</p>

                <p className="date">{props.ele.comingTitle}</p>

            </li>
        </Fragment>
    )
}

const ListBody=(props)=>{
    return (
        <Fragment>
          <li className="main-block">

            <div className="avatar">

                <div className="default-img-bg">

                    <img src={props.ele.img.replace('w.h','128.180')} alt={props.ele.nm} />		

                </div>

            </div>

            <div className="mb-outline-b content-wrapper">
                
                <div className="column content">

                    <div className="box-flex movie-title">

                        <div className="title line-ellipsis v3dimax_title">{props.ele.nm}</div>

                        <span className="version v3d imax"></span>                

                    </div>

                    <div className="detail column">  

                        <div className="score line-ellipsis"> 
                        
                            <span className="score-suffix">观众评 </span>

                            <span className="grade">{props.ele.sc}</span>

                        </div>
                        
                        <div className="actor line-ellipsis">主演: {props.ele.star}</div>
            
                        <div className="show-info line-ellipsis">{props.ele.showInfo}</div>

                    </div>

                </div>

                <div className={ props.ele.globalReleased ? 'button-block' : 'Nbutton-block'}>

                    <div className="btn normal">

                       <span className="fix">

                           { props.ele.globalReleased ? '想看' :'预售'}
                           
                       </span>

                    </div>  

                </div>

            </div>
         </li>
        </Fragment>
    )
}


class BodyRight extends Component {
    i = 0;
    Item= () =>{
        return this.props.leftMovie.rightSider && this.props.leftMovie.rightSider.map(ele=>{
            return <ListSider ele={ele} key={ele.id}></ListSider>
        })
    }
    ItemList=()=>{
        return this.props.leftMovie.rightlist && this.props.leftMovie.rightlist.map((ele,index)=>{
            return <ListBody ele={ele} key={index}></ListBody>
        })
    }
   componentDidMount(){
    
    this.props.getRigheSider();  
    this.props.getRightList();

   }  


   componentDidUpdate(){
    // let that =this;
    this.mySwiper = new Swiper (this.box, {
        loop: false, // 循环模式选项，false 到最后一张不会从头再来
        slidesPerView :4,
        slidesPerGroup : 4,
        resistanceRatio : 0,
        on: {
            reachEnd: function(){ 
              }
          },
      }) 

   if(!this.scroll){
    this.scroll = new Bscroll(this.wrapper,{
        click: true, 
        bounce: {   
            top: false,
            bottom: false,
            left: false,
            right: false
        },
        pullUpLoad: {
        threshold: 10,
        }
    })

    this.scroll.on('pullingUp',()=>{  //当触发pullingUp事件，触发回调

         if(this.i===14) return;

         let movieIds = this.props.leftMovie.rightMovieId[this.i].join();
         
         this.i++;
         this.props.rightmoreList(movieIds);

         this.scroll.finishPullUp();
     })
   }
 

   }
 
    render() {
        return (
             <Fragment>
                 <div className='right-list' ref={el=>this.wrapper=el}>

                    <section>

                    <div className="most-expected">

                        <p className="title">近期最受期待</p>

                        <div className="most-expected-list swiper-container" ref={el=>this.box=el}>

                            <ul className="swiper-wrapper">

                              {this.Item()}

                            </ul>

                        </div>

                    </div>

                    <div className='right-body' >

                        <ul>

                        {this.ItemList()}

                        </ul>

                    </div>
                    
                    </section>

                 </div>
             </Fragment>
        );
    }
}

export default connect(state=>state,dispatch=>bindActionCreators(actionCreators,dispatch))(BodyRight)