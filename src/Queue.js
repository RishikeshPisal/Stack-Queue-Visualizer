import { useState, useEffect } from 'react';
import { handleOverFlowIn } from './Utilities';


export function Queue() {
  const [queue, setQueue] = useState([]);
  const [element, setElement] = useState(0);

  const add = () => {
    const input_field = document.getElementById('queue-input');

    if (element===''){
      alert('Nothing to add')
      return;
    }
    setQueue([...queue, parseInt(element)])    
    input_field.value = '';
  }
    
  const deque = () => {
    const temp = [...queue];
    temp.shift()
    setQueue(temp);
  }


  useEffect(() => {
    setElement(''); 
    handleOverFlowIn('queue');
  },[queue])

  return (
    <div className='visuals'>
      <h1>Queue </h1>
      <div className='container' id ='queue-container'>

        <div className='queue'>
            {
              [...queue].reverse().map((x, index) => <div className='list-item' key={index}>{x}</div>)
            }
        </div>
      </div>
      <div className='controls'>
        <input type='number' id='queue-input' onChange={(event) => setElement(event.target.value)}/>
        <button onClick={add} >Add</button> 
        <button onClick={deque} >Deque</button> 

    </div>

  </div>
  );
} 