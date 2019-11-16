import React from 'react'
import './Main.css'
import bigsur from './bigsur.jpeg'
import city from './city.jpeg'
import oceanbeach from './oceanbeach.jpeg'
import Learn from './Learn'



export default class Main extends React.Component {
    constructor(props){
        super(props);
        this.state={ 
        
        }
    }

    render(){
       
       
       return(<section className='container'>
       {/* <form className="side">
           <p>Hi there: <input type='text' placeholder='Madison' value={this.state.name}></input></p>
           <p className='bio'>Welcome to my portfolio site, {this.state.name}! </p>
           
       </form> */}
       <section className='img-banner'>
        <p>B A Y <br /> A R E A </p>
        <span className='photo-style1'><img src={bigsur} alt='big sur'/></span>
        <span className='photo-style2'> <img src={city} alt='sf-city-skyline'/></span>  
        <span className='photo-style3'><img src={oceanbeach} alt='ocean beach'/></span>      
       </section>
       <Learn />
       </section>)
       
    }
}