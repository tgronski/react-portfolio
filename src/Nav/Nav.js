import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'


export default class Nav extends Component{
    constructor(props){
        super(props)
        this.state={ 
           showLead:false,
          
        }
    }   
    handleLead=()=>{
        this.setState({showLead: true})
    }
    handleUnhover=()=>{
        this.setState({showLead: false})
    }

    render(){
       
    return(
        
        <span className='background-color' >
            <nav role='banner'>
              
                    <ul className='mainNav'> 
                    <li ><Link className='routerLink' to= '/home' ><h2 className='a'>Home</h2></Link> </li>
                        <li ><Link className='routerLink' to='/code' ><h2 className='a' >Code</h2></Link></li>
                        <li><Link className='routerLink'  to='/leadership' onMouseOver={this.handleLead} ><h2 className='a' >Leadership</h2> </Link>
                        {
                                        this.state.showLead
                                    ?(

                                        <ul id='nav-leader'onMouseOver={this.handleLead} onMouseLeave={this.handleUnhover} >
                                        <li><Link className='dropDownLink'  to='/leadership/1' ><h3>Management</h3></Link></li>
                                        <li><Link className='dropDownLink' to='/leadership/2' ><h3>Code Resources</h3></Link></li>
                                        </ul>
                                    )
                                    :(
                                        null
                                    )
                            }
                              
                       </li>
                       {/* <li ><Link className='routerLink' to='/engineers' onClick={(event)=>this.setEngineerState(event)}><h2 className='a' >Engineers</h2></Link></li> */}
                       {/* <li ><Link className='routerLink' to='/tech' ><h2 className='a'>Tech</h2></Link></li> */}
                   
                    </ul> 
                    

            </nav>
            
           
        
        </span>
       
    )
    }
}
