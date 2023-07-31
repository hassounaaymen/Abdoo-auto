import React  from 'react'
import {Route , Switch} from 'react-router-dom'
import Login from './layouts/login'
import Dashboard from './layouts/dashboard'
//client
import ajoutc from './layouts/components/gestion_client/ajout'
import modifc from './layouts/components/gestion_client/modif'

//agent
import ajouta from './layouts/components/gestion_agent/ajout'
import modifa from './layouts/components/gestion_agent/modif'

//ordermis
import ajouto from './layouts/components/gestion_ordrmis/ajout'
import modifo from './layouts/components/gestion_ordrmis/modif'

//vehicule
import ajoutv from './layouts/components/gestion_vehicule/ajout'
import modifv from './layouts/components/gestion_vehicule/modif'
import suprimv from './layouts/components/gestion_vehicule/suprim'
import affichv from './layouts/components/gestion_vehicule/affich'
//stock
import ajouts from './layouts/components/gestion_stock/ajout'
import modifs from './layouts/components/gestion_stock/modif'

//facture
import ajoutf from './layouts/components/gestion_facture/ajout'
import modiff from './layouts/components/gestion_facture/modif'

//devis
import ajoutd from './layouts/components/gestion_devis/ajout'
import modifd from './layouts/components/gestion_devis/modif'



//parmetre
import param from './layouts/components/gestion-par/parametre'
import imprimer from './layouts/components/imprimer/imprim'


import afficherlesclient from './layouts/components/shared/affichage/afficherClients.js'
import afficherlesagent from './layouts/components/shared/affichage/affichagent'
import afficherlesdevis from './layouts/components/shared/affichage/affichdevis'
import afficherlesfacture from './layouts/components/shared/affichage/affichfacture'
import afficherlesvoiture from './layouts/components/shared/affichage/affichvoiture'
import afficherlesstocks from './layouts/components/shared/affichage/affichstock.js'
import afficherlesordermision from './layouts/components/shared/affichage/afichordermision'
import oubliermdp from './layouts/components/gestion-par/oublier'
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
 
  return (
    <div className="App">
      <Switch>
        <Route path='/' component={Login} exact />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/parametre'component={param}/>
 //client
        <Route path='/ajoutclient'component={ajoutc}/>
        <Route path='/modifclient/:id'component={modifc}/>
  
        
 //agent
        <Route path='/ajoutagent'component={ajouta}/>
        <Route path='/modifieragent'component={modifa}/>
        
      
  //ordremission
        <Route path='/ajoutordremission'component={ajouto}/>
        <Route path='/modifierordremission'component={modifo}/>
        
        
  //vhecule
        <Route path='/ajoutvhecule'component={ajoutv}/>
        <Route path='/modifiervhecule'component={modifv}/>
        <Route path='/affichvhecule'component={affichv}/>
        <Route path='/suprimvhecule'component={suprimv}/>
  //stock
        <Route path='/ajoutstock'component={ajouts}/>
        <Route path='/modifierstock'component={modifs}/>
    
      
 //devis
        <Route path='/ajoutdevis'component={ajoutd}/>
        <Route path='/modifierdevis'component={modifd}/>
        
       
  
  //facture
        <Route path='/ajoutfacture'component={ajoutf}/>
        <Route path='/modifierfacture'component={modiff}/>
      
        
          
        <Route path='/Imprimer' component={imprimer}/>
 
      
        <Route path='/oubliermdp' component={oubliermdp}/>
        <Route path='/afficherlesclient' component={afficherlesclient}/>
        <Route path='/afficherlesdevis' component={afficherlesdevis}/>
        <Route path='/afficherlesstocks' component={afficherlesstocks}/>
        <Route path='/afficherlesordermision' component={afficherlesordermision}/>
        <Route path='/afficherlesfacture' component={afficherlesfacture}/>
        <Route path='/afficherlesagent' component={afficherlesagent}/>
        <Route path='/afficherlesvoiture' component={afficherlesvoiture}/>
        
      </Switch>

    

    </div>
  );
}

export default App;
