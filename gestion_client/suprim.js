import React , {useState} from 'react'
import {Redirect} from 'react-router-dom'
import ajcl from "../../../image/drop.png"
import '../../dashboard/index.css'
import FormGroup from 'react-bootstrap/FormGroup'
import FormControl  from 'react-bootstrap/FormControl'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/FormFile'
import Button from 'react-bootstrap/Button'
import Navbar from '../navbar'
import pub from "../../../image/123456.gif"


export default function Index() {
    const [isLogged,setIsLogger] = useState(false)
    
    if(isLogged === true) {
        return <Redirect to='/' />
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
         <FormControl name="id" type="id" placeholder="ID {client}"  />
       </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalEmail">
    
       <Col sm={20}>
        <FormControl name="nometpren" type="text" placeholder="Non Et Prenon {client}" />
      </Col>
  </FormGroup>
  <FormGroup controlId="formHorizontalEmail">
    
    <Col sm={20}>
      <FormControl name="numcha" type="text" placeholder="numero chassis {voiture}" />
    </Col>
  </FormGroup>
  <FormGroup controlId="formHorizontalEmail">
    
    <Col sm={20}>
      <FormControl name="email" type="email" placeholder="email {client}" />
    </Col>
  </FormGroup>
 

  <FormGroup controlId="formHorizontalEmail">
    
    <Col sm={20}>
      <FormControl name="tel" type="Tel" placeholder="Tel {client}" />
    </Col>
  </FormGroup>
           



  <FormGroup>
    <Col smOffset={2} sm={10}>
      <Button type="submit"  onClick={()=> {setIsLogger(true)}}>suprimer Client </Button>
    </Col>
  </FormGroup>
   
    <FormGroup>
     <Col smOffset={2} sm={10}>
         <Button type="submit"  onClick={()=> {setIsLogger(true)}}>Annuler</Button>
      </Col>
   </FormGroup>
   <br/><br/>
   <FormGroup >
           
            <div >
              <img src={pub} className="" alt="logo" Style={"Width:100%"}/>
            </div>
            
            </FormGroup>
          </Form>
          
          
            

  </header>

      </div>
      
      </>
    )
}
