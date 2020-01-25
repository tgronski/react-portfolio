import React from 'react'
import './Main.css'
import bigsursmall from './bigsursmall.jpeg'
import citysmall from './citysmall.jpeg'
import oceanbeachsmall from './oceanbeachsmall.jpeg'
import Learn from './Learn'
import Img from 'react-image';
import LazyLoad from 'react-lazyload';



class Main extends React.Component {
 

    render(){
       
       return(<LazyLoad  > 
       <section className='container'>
       <section className='img-banner' >
        <span className='photo-style1'><Img src={bigsursmall} alt='big sur'/></span>
        <span className='photo-style2'> <Img src={citysmall} alt='sf-city-skyline'/></span>  
        <span className='photo-style3'><Img src={oceanbeachsmall} alt='ocean beach'/></span>      
       </section>
       <Learn />
       </section>
      
       </LazyLoad>)
       
    }
}
export default Main;