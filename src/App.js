import './App.css';
import './StackStyle.css';
import './QueueStyle.css';
import { Queue } from './Queue';
import { Stack } from './Stack';
 
function App() { 

  return (
    <div className='App'>
      <Stack /> { /*  Just made a change here  */}
      <Queue />
    </div>
  );
}

export default App;
