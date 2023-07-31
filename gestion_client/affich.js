  import React , {useState,useEffect} from 'react'
  import {useSelector,useDispatch} from "react-redux"
import {Redirect,Link} from 'react-router-dom'
import ajcl from "../../../image/aff.png"
import '../../dashboard/index.css'
import {Row} from 'react-bootstrap'
import FormGroup from 'react-bootstrap/FormGroup'
import FormControl  from 'react-bootstrap/FormControl'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/FormFile'
import Button from 'react-bootstrap/Button'
import Navbar from '../navbar'
import Sidebar from '../sidebar'
import Affichclients from '../shared/affichage/affichbase'
import { getclient } from '../../../actions/creat.js'
import pub from "../../../image/123456.gif"
//1.impôrt action
//2.li jey ml action (db) 7otu fel state

import store from '../../../store'




export default function Index() {


  const [numcha,setNumcha]=useState('')
 
  
  
      
  const getnumcha=(numcha)=>
  {
    localStorage.setItem('numchac', JSON.stringify(numcha));
  }
        
  
  

     
  

  
    return (
        <>
       

      <div className="App-div2">
          <Navbar/>
          
        <header className="">
           
          <Form className="ajout-f"  > 
          <FormGroup>
            <Col sm={10}>
            <div>
              <img src={ajcl} className="" alt="logo" />
            </div>
            </Col>
    
            </FormGroup>

            <FormGroup controlId="formHorizontalEmail">
    
    <Col sm={20}>
      <FormControl name="numcha" type="text" placeholder="numero chassis {voiture}" 
      onChange={event=>setNumcha(event.target.value)}
      />
    </Col>
  </FormGroup>

  <FormGroup>
    <Col smOffset={2} sm={10}>
    <Link to='/affichclients' > <Button type="submit" 
   onClick={()=>getnumcha({

     numcha
   })
    }> afficher Client </Button></Link>
    </Col>
  </FormGroup>
   
    <FormGroup>
     <Col smOffset={2} sm={10}>
         <Button type="submit" >Annuler</Button>
      </Col>
   </FormGroup>
   
 
     <Col>
    
     
   
     
     </Col>
   
 
   
          </Form>
         
   
          
            

  </header>
  <FormGroup >
           
            <div >
              
     <br/><br/>
     <br/><br/>
     <br/><br/>
     <br/><br/>
     <br/><br/>
              <img src={pub} className="" alt="logo" Style={"Width:100%"}/>
            </div>
            
            </FormGroup>
      </div>
      
      </>
    )
}
