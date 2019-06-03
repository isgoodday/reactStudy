import React,{Component,Fragment} from 'react'
import './index.scss'
import './left.scss'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actionCreators from 'store/hh/actions'
import BScroll from 'better-scroll'
import {Link} from 'react-router-dom'

const MovieList=(props)=>{
    return (
        <Fragment>
             <Link 
             to ={{
                 pathname:`/cinema/movie/${props.ele.id}`,
                 state:`${props.ele.nm}`
             }}
             title={`${props.ele.nm}`}
             >
                <li className="main-block">
                    <div className="avatar">
                        <div className="default-img-bg">
                            <img src={props.ele.img.replace('w.h','128.180')}  alt={props.ele.nm} />		
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
                                { props.ele.globalReleased ? '购票' :'预售'}
                            </span>
                            </div>  
                        </div>

                    </div>
                 </li>
            </Link>
        </Fragment>
    )
}


class BodyLeft extends Component {
    i =0;
    Item=()=>{
        return this.props.leftMovie.movieLeft&&this.props.leftMovie.movieLeft.map((ele)=>{
            return <MovieList ele={ele}  key={ele.id} ></MovieList>
        })
    }
    
    render() {  
        // console.log('left',this);
        
        return (
             <Fragment>
                 <div className='left-list' ref={el=>this.wrapper=el}>
                     <ul>
                        {this.Item()}
                     </ul>
                 </div>
             </Fragment>
        );
    }
    componentDidMount(){
        this.props.getLeft()
    }

    componentDidUpdate () {
      if(!this.scroll){
        this.scroll = new BScroll(this.wrapper,{
            click: true, //页面是否可以点击,
            bounce: {
                top: false,
                bottom: false,
                left: false,
                right: false
            },
            pullUpLoad: {
            threshold: 10,
            noMoreTxt:'没有更多了'
            }
        })
      }
     
        this.scroll.on('pullingUp',()=>{
            this.i++
            if(this.i>5) return;
            let id=this.props.leftMovie.movieId[this.i].join()
            this.props.getMore(id)
            this.scroll.finishPullUp()
        })
    
    }

}



export default connect(state=>state,dispatch=>bindActionCreators(actionCreators,dispatch))(BodyLeft)