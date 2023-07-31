import React , {useState,useEffect} from 'react'
import {Redirect,useParams} from 'react-router-dom'
import {useDispatch, useSelector } from 'react-redux'
import ajcl from "../../../image/upd.png"
import '../../dashboard/index.css'
import FormGroup from 'react-bootstrap/FormGroup'
import FormControl  from 'react-bootstrap/FormControl'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/FormFile'
import Button from 'react-bootstrap/Button'
import Navbar from '../navbar'
import Sidebar from '../sidebar'
import pub from "../../../image/123456.gif"


import {  updateclient } from '../../../actions/creat.js'
import classes from 'module'
import client from '../../../reducers/client'

 
export default function Index() {

 
  


  
  const [nometpren,setNometpren] = useState('')
  const [numcha,setNumcha] = useState('')
  const [tel,setTel] = useState('')
  const [email,setEmail] = useState('')
 
  const params = useParams()

  // yuo can find all params from here
     

   
  
     
      useEffect(()=>{


         },[])
  const dispatch =useDispatch();

    const addClient = (id,clients) =>
      {
        return (dispatch(updateclient(id,clients)))
      
      }
      const addedSuccess = () => {
        window.alert('user modified successfully')
        window.location.reload()
      }
 
    


    const [isLogged,setIsLogger] = useState(false);
    
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
         <FormControl name="id"  placeholder="ID {client}" value={params.id} />
       </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalEmail">
    
       <Col sm={20}>
        <FormControl name="nometpren" type="text" placeholder="Non Et Prenon {client}"  onChange={event=>setNometpren(event.target.value)}  />
      </Col>
  </FormGroup>
  <FormGroup controlId="formHorizontalEmail">
    
    <Col sm={20}>
      <FormControl name="numcha" type="text" placeholder="numero chassis {voiture}" onChange={event=>setNumcha(event.target.value)} />
    </Col>
  </FormGroup>
  <FormGroup controlId="formHorizontalEmail">
    
    <Col sm={20}>
      <FormControl name="email" type="email" placeholder="email {client}" onChange={event=>setEmail(event.target.value)} />
    </Col>
  </FormGroup>
 

  <FormGroup controlId="formHorizontalEmail">
    
    <Col sm={20}>
      <FormControl name="tel" type="Tel" placeholder="Tel {client}" onChange={event=>setTel(event.target.value)}/>
    </Col>
  </FormGroup>
           



  <FormGroup>
    <Col smOffset={2} sm={10}>
      <Button type="submit"  onClick={()=>{
        addClient(params.id,

    { 
      _id: params.id,
     nometpren,
     numcha,
     email,
     tel} )
     addedSuccess()
      }}>modifier Client </Button>
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
