import logo from './logo.svg';
import './App.css';
import { Form, Input, Button, Checkbox, Upload } from 'antd';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UploadPage from './UploadPage';
import Search from './Search';
import Display from './Display';
import Homepage from './Homepage';


const App = () => {

  return (
    <div>
      <BrowserRouter>  
        <Switch>
          <Route path='/' exact component={Homepage}></Route>
          <Route path='/upload' exact component={UploadPage}></Route>
          <Route path='/search' exact component={Search}></Route>
          <Route path='/display' exact component={Display}></Route>

        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
