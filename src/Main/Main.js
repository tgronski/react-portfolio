import React from 'react'
import './Main.css'
import bigsursmall from './bigsursmall.jpeg'
import citysmall from './citysmall.jpeg'
import oceanbeachsmall from './oceanbeachsmall.jpeg'
import Learn from './Learn'
import Img from 'react-image';
import LazyLoad from 'react-lazyload';



class Main extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
       
       return(<LazyLoad height={300} once offset={100}> 
       <section className='container'>
       {/* <form className="side">
           <p>Hi there: <input type='text' placeholder='Madison' value={this.state.name}></input></p>
           <p className='bio'>Welcome to my portfolio site, {this.state.name}! </p>
           
       </form> */}
        {/* <p className='blackSquare'></p> */}
       <section className='img-banner'>
        <p>B A Y <br /> A R E A </p>
        <span className='photo-style1'><Img src={bigsursmall} alt='big sur'loader={<p className='mainImgLoader'></p>}/></span>
        <span className='photo-style2'> <Img src={citysmall} alt='sf-city-skyline'loader={<p className='mainImgLoader'></p>}/></span>  
        <span className='photo-style3'><Img src={oceanbeachsmall} alt='ocean beach'loader={<p className='mainImgLoader'></p>}/></span>      
       </section>
       <Learn />
       </section>
       </LazyLoad>)
       
    }
}
export default Main;