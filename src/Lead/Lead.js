import React, {Component} from 'react'
import '../Engineers.css'
import './Lead.css'
import leadership from './leadership.jpg'
import computersmall from './computersmall.jpg'
import { Link } from 'react-router-dom';
import Img from 'react-image';
import LazyLoad from 'react-lazyload'
import MediaQuery from 'react-responsive'

export default class Lead extends Component {

  

    render(){
        return(
            
            <LazyLoad once offset={100} height={300}>
            <MediaQuery minDeviceWidth={700} >
            {(matches) =>
             matches
            ?(  <section className="leadPage"> 
                <span className='contain'>  
                <br/>    
                {/* <section className='leadNotes'> <p>I love studying and practicing different leadership styles. I am most passionate about constructive feedback, career coaching, and performance management. </p></section> */}
                <section className='articles'>
                    <Link  to='/leadership/1' ><Img src={leadership} className='photo' alt='desktop'loader={<p className='articleImgLoader'></p>}></Img> <br/><b >An Actionable Guide to Managing Introverts</b></Link>
                    <p>Aug 18, 2019 ||  3 min Read</p>
                </section>
                <section className='articles'>
                    <Link to='/leadership/2' ><Img src={computersmall}  className='photo' alt='computerdesk'loader={<p className='articleImgLoader'></p>}></Img> <br/><b >A Running List of Newbie Resources</b></Link>
                    <p>Nov 3, 2019 ||  3 min Read</p>
                </section>
                <p className='leadQuote'>“If you want to build a ship, don’t herd people together to collect wood and don’t <br/> assign them tasks and work, but rather teach them to long for the endless immensity of the sea.” <br/>-Antoine de Saint-Exupery<br/>---<br/><br/></p>
                </span>
                </section>)
            :(<section className="leadPage"> 
                <span className='contain'>  
                <br/>    
                {/* <section className='leadNotes'> <p>I love studying and practicing different leadership styles. I am most passionate about constructive feedback, career coaching, and performance management. </p></section> */}
                <section >
                    <Link  to='/leadership/1' ><Img src={leadership} className='photoSmall' alt='desktop'loader={<p className='articleImgLoader'></p>}></Img> <br/><b >An Actionable Guide to Managing Introverts</b></Link>
                    <p>Aug 18, 2019 ||  3 min Read</p>
                </section>
                <section className='articles'>
                    <Link to='/leadership/2' ><Img src={computersmall} className='photoSmall' alt='computerdesk'loader={<p className='articleImgLoader'></p>}></Img> <br/><b >A Running List of Newbie Resources</b></Link>
                    <p>Nov 3, 2019 ||  3 min Read</p>
                </section>
                <p className='leadQuote'>“If you want to build a ship, don’t herd people together to collect wood and don’t <br/> assign them tasks and work, but rather teach them to long for the endless immensity of the sea.” <br/>-Antoine de Saint-Exupery<br/>---<br/><br/></p>
                </span>
                </section>)
            }
            </MediaQuery>
            </LazyLoad>
        )

        
        
    }
}