import { useState, useEffect } from 'react'
import { handleOverFlowIn } from './Utilities';

export function Stack() {
  const [stack, setStack] = useState([]);
  const [element, setElement] = useState(0);

  const push = () => {
    const input_field = document.getElementById('stack-input');

    if (element===''){
      alert('Nothing to push')
      return;
    }
    setStack([...stack, parseInt(element)])    
    input_field.value = '';
  }
  
    
    const pop = () => {
    const temp = [...stack];
    temp.pop();
    setStack(temp);
  }
  
  useEffect(() => {
    setElement(()=> '');
    handleOverFlowIn('stack');
  },[stack])

  return (
    <div className='visuals'>
      <h1>Stack </h1>
      <div className='container' id='stack-container'>

        <div className='stack'>
            {
              [...stack].reverse().map((x, index) => <div className='list-item' key={index}>{x}</div>)
            }
        </div>
      </div>
      <div className='controls'>
        <input type='number' id='stack-input' onChange={(event) => setElement(event.target.value)}/>
        <button onClick={push} >Push</button> 
        <button onClick={pop} >Pop</button> 

    </div>

  </div>
  );
} 