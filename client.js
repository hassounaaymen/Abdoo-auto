export default(client = {
  onSuccess : '',
  onError:'',
  clients : []
} , action ) => {
 switch (action.type){
   case 'DELETE':
     return client.filter(client._id === action.payload._id ) ;
   case 'UPDATE':
       return client.map((client)=>client._id=== action.payload._id ? action.payload :client);
    case 'FETCH_ALL_CLIENTS':
        return {...client,onSuccess:true,clients:client.clients.concat(action.payload)};
  case 'CREATE':
    return {...client,onSuccess:true};

      default:
        return client;
 } 


}