import React from 'react'
import './Main.css'
import bigsur from './bigsur.jpeg'
import city from './city.jpeg'
import oceanbeach from './oceanbeach.jpeg'
import Learn from './Learn'
import Img from 'react-image';




export default class Main extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
       
       return(<section className='container'>
       {/* <form className="side">
           <p>Hi there: <input type='text' placeholder='Madison' value={this.state.name}></input></p>
           <p className='bio'>Welcome to my portfolio site, {this.state.name}! </p>
           
       </form> */}
        {/* <p className='blackSquare'></p> */}
       <section className='img-banner'>
        <p>B A Y <br /> A R E A </p>
        <span className='photo-style1'><Img src={bigsur} alt='big sur'loader={<p className='mainImgLoader'></p>}/></span>
        <span className='photo-style2'> <Img src={city} alt='sf-city-skyline'loader={<p className='mainImgLoader'></p>}/></span>  
        <span className='photo-style3'><Img src={oceanbeach} alt='ocean beach'loader={<p className='mainImgLoader'></p>}/></span>      
       </section>
       <Learn />
       </section>)
       
    }
}