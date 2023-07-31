import React , {useState,setState} from 'react'
import {useDispatch,useSelector} from "react-redux"
import {Redirect,Link} from 'react-router-dom'
import ajcl from "../../../image/ajcl.png"
import pub from "../../../image/123456.gif"
import '../../dashboard/index.css'
import FormGroup from 'react-bootstrap/FormGroup'

import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Navbar from '../navbar'
import Sidebar from '../sidebar'
import { createclient } from '../../../actions/creat.js'
import Alerts from '../shared/alert'
import client from '../../../reducers/client'
import { cleanup } from '@testing-library/react'





export default function Index() {
  
    const dispatch = useDispatch();
    const clients = useSelector(state => state.clients)
    const [isLogged,setIsLogger] = useState(false)
    const numclient = JSON.parse(localStorage.getItem('numclient'));
    const [id,setId] = useState(numclient+1)
    const [nometpren,setNometpren] = useState('')
    const [numcha,setNumcha] = useState('')
    const [tel,setTel] = useState('')
    const [email,setEmail] = useState('')
    
   
    if(isLogged === true) {
        return <Redirect to='/ajoutclient' />
    }
    const addClient = (clients) =>
    {  setId(id+1)
      localStorage.setItem('numclient', JSON.stringify(id));
      return (dispatch(createclient(clients)))
    }
    
   
 


   
      
    
    return (
        <>
       

      <div className="App-div2">
          <Navbar/>
          
        <header className="">
        
          <Form className="ajout-f" name='clientdata' > 
          <FormGroup>
            <Col sm={10}>
            <div>
              <img src={ajcl} className="" alt="logo" />
            </div>
            </Col>
            </FormGroup>
    <FormGroup controlId="formHorizontalEmail">
    
       <Col sm={20}>
         <Form.Control name="id" type="Number" value={id}
         />
       </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalEmail">
    
       <Col sm={20}>
        <Form.Control name="nometpren" type="text" placeholder="Non Et Prenon {client}  " required
       
       onChange={event => setNometpren(event.target.value)}/>
       <Form.Control.Feedback type='invalid' > saisir Nom et prenom</Form.Control.Feedback>
      </Col>
  </FormGroup>
  <FormGroup controlId="formHorizontalEmail">
    
    <Col sm={20}>
      <Form.Control name="numcha" type="text" placeholder="Matricule {voiture} " required
      onChange={event => setNumcha(event.target.value)}/>
       <Form.Control.Feedback type='invalid'> saisir matricule</Form.Control.Feedback>

    </Col>
  </FormGroup>
  <FormGroup controlId="formHorizontalEmail">
    
    <Col sm={20}>
      <Form.Control name="email" type="email" placeholder="email {client}"  requiredonChange={event => setEmail(event.target.value)}  />
    <Form.Control.Feedback type ="invalid" >saisir votre email</Form.Control.Feedback>
    </Col>
  
  </FormGroup>
 

  <FormGroup controlId="formHorizontalEmail">
    
    <Col sm={20}>
      <Form.Control name="tel" type="Tel" placeholder="Tel {client}" required 
      onChange={event => setTel(event.target.value)} />
         <Form.Control.Feedback type ="invalid" ></Form.Control.Feedback>
    </Col>
  </FormGroup>
           
  <FormGroup>
    <Col smOffset={2} sm={10}>
      <Button type="submit" 
     
      
      onClick={() => 
        nometpren!=="" && numcha!==""&&tel!==""&&email!==""? 
  
        addClient({
        
         
          id,
          nometpren,
          numcha,
          tel,
          email
         
      }
      ):''}>Ajouter Client </Button>
    </Col>
  </FormGroup>
   
    <FormGroup>
     <Col smOffset={2} sm={10}>
         <Button type="submit" >Annuler</Button>
      </Col>
          
      <p style={{color:'red'}}>{clients && clients.onSuccess === true ?  
       <div Style={"Background-color: #79ff9894;"} class="alert alert-success" role="alert">
       <h4 class="alert-heading"></h4>
       <p> Clients add</p>
       <p class="mb-0"></p>
     </div> :  ''} </p>
     
     
   </FormGroup>


            
</Form>
          
        

  </header>
 
      </div>
      <FormGroup >
           
           <div >
           <br/><br/>
             <img src={pub} className="" alt="logo" Style={"Width:100%"}/>
           </div>
           
           </FormGroup>
      </>
    )
}
