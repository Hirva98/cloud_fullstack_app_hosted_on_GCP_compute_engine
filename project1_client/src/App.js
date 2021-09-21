import logo from './logo.svg';
import './App.css';
import { Form, Input, Button, Checkbox, Upload } from 'antd';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UploadPage from './UploadPage';



const App = () => {

  return (
    <div>
      <BrowserRouter>  
        <Switch>
          <Route path='/' exact component={UploadPage}></Route>

        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
