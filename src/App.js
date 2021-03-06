import Chat from './components/Chat/Chat';
import { useEffect, useState } from 'react';
import './App.css';
const ws= new WebSocket( window.location.host)
function App() {
 
  ws.onopen=()=>{
    setStatus('Онлайн')
  }
  ws.onclose=()=>{
    setStatus('Нет соеденения')
  }
  useEffect(()=>{
    ws.onmessage=response=>{
             
      if(response.data){
        
  
        setMasseges([...masseges,response.data])
      }
    }
  })
  
  
  
      
 
  let [status,setStatus] = useState('Онлайн')

  let [masseges,setMasseges]=useState([])
  let [valueText,setValueText]=useState('')
  

  let Text=(e)=>{
    if(e.code==='Enter'){
      
          
           
            
            ws.send(valueText)
            setValueText('')

            
            
            
        
    }
    }
    


  let Change=(e)=>{
      setValueText(e.target.value)
    
  }
  


  
  return (
    <div >
     <h1>ЧАТ</h1>
     <p>{status}</p>
     <Chat masseges={masseges} valueText={valueText} change={Change} text={Text} />
    </div>
  );
}

export default App;
