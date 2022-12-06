import './App.css';
import Menu from './Menu/Menu'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter} from 'react-router-dom';
 
function App() {

  return (
    <BrowserRouter>
       <Menu></Menu>      
    </BrowserRouter>
  );
}

export default App;
