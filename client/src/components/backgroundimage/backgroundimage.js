import React from 'react';
import "./backgroundimage.css"

class BackgroundImage extends React.Component{

    componentWillMount(){
      var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth,
      y = w.innerHeight|| e.clientHeight|| g.clientHeight;
      
      this.setState({x:x,y:y});
    };

    render(){
      return (<div><img className='bg' src={'https://source.unsplash.com/'+this.state.x+'x'+this.state.y+'/?food'} /></div>)
    }  
  };
  
export default BackgroundImage;