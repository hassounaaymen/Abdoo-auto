
import * as api from '../api/index.js'

export const getclient = () => async (dispatch) => {

  try {
   const { data } = await api.fetchclients({});

   dispatch ({ type: 'FETCH_ALL_CLIENTS' , payload :data });

 } catch (error)
{
  console.log(error);
}


}

export const createclient = (newClient) => async (dispatch) => {
  try {
      const {data } = await api.createclient(newClient);

      dispatch ({type: 'CREATE',payload:data});
  } catch (error) {
      console.log(error)
  }
}


export const updateclient=(_id,client)=>async(dispatch)=>{
try {
  
  const {data}=await api.updateclient(_id,client);

  dispatch(({type: 'UPDATE',payload:data}));
} catch (error) {
  console.log(error);

}




}
export const deleteclient =(_id) => async(dispatch) =>{
 try {
  const {_id}= await api.deleteclient(_id);
   dispatch(({ type : 'DELETE' ,payload:{_id}}))
 } catch (error) {
   console.log(error)
 }




}