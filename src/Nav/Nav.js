import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'
import '../App/App.css'
import MediaQuery from 'react-responsive'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { slide as Menu } from "react-burger-menu";



export default class Nav extends Component{
    constructor(props){
        super(props)
        this.state={ 
           showLead:false,
           showDropDown:false
        }
    }   
    handleLead=()=>{
        this.setState({showLead: true})
        console.log('hi')


    }
    handleUnhover=()=>{
        this.setState({showLead: false})
    }
    handleDropDown=()=>{
        this.setState({showDropDown: true})
        console.log('hi')
    }
    handleUnDrop=()=>{
        this.setState({showDropDown: false})
        console.log('bye')
    }

    render(){
       
    return(
        <MediaQuery minDeviceWidth={800}>
         {(matches) =>
            matches
        ?(
        <span className='background-color' >
            
            <nav role='banner'>                    
            <span className='mainNav'>
                    <ul className='navMenu'>
                        <li ><Link className='routerLink' to= '/home' ><h2 className='a'>Home </h2></Link></li>
                        <li><Link className='routerLink' to='/code' ><h2 className='a' >Code</h2></Link></li>
                        <li><Link className='routerLink'  to='/leadership' onMouseEnter={this.handleLead} ><h2 className='a' >Leadership</h2> </Link>
                        {this.state.showLead
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

            </span>
               
                

            </nav>
            
           
            
        </span>)
        :(
            <span className='background-color' >
            
            <nav role='banner'>                    
            <span className='mainNav'>
            <button className='burgerIcon' onMouseEnter={this.handleDropDown}><FontAwesomeIcon  icon={faBars}/></button>
            {this.state.showDropDown
                ?( 
                    // <Menu {...this.props}>
                    <ul className='navDropDownList' onMouseOver={this.handleDropDown} onMouseLeave={this.handleUnDrop}>
                    <li ><Link className="menu-item" to= '/home' ><h2 className='a'>Home </h2></Link></li>
                    <li><Link className="menu-item" to='/code' ><h2 className='a' >Code</h2></Link></li>
                    <li><Link  className="menu-item" to='/leadership' onMouseEnter={this.handleLead} ><h2 className='a' >Leadership</h2> </Link>
                    {this.state.showLead
                        ?(

                            <ul id='nav-leader'onMouseOver={this.handleLead} onMouseLeave={this.handleUnhover} >
                            <li><Link className='dropDownLink'  to='/leadership/1' ><h3>Management</h3></Link></li>
                            <li><Link className='dropDownLink' to='/leadership/2' ><h3>Code Resources</h3></Link></li>
                            </ul>
                   
                  
                        )
                        :(null)
                    }
            
                </li>
                </ul>
                // </Menu>
                )
                :  null
            }

            </span>
               
                

            </nav>
            
           
            
        </span>  
        )}
        </MediaQuery>
       
    )
    }
}
