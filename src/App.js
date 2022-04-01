import Home from "./page/home/Home";
import Login from "./page/login/Login";
import List from "./page/list/List";
import Single from "./page/single/Single";
import New from "./page/new/New";

import { BrowserRouter as BrowserRouter,Router,Routes, Switch, Route,Link } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />}/>
          <Route path="login" element={<Login />}/>
          <Route path="users">
            <Route index element={<List/>}/>
            <Route path=":userId" element={<Single/>}/>
            <Route path="new" element={<New/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
