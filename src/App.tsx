import './App.css';
import {  useRoutes } from 'react-router-dom';
import { appRoutes } from './app.routes';


const App = () => {
  const routing = useRoutes([appRoutes]);

  return <>{ routing }</> ;
}

export default App;
