import React from "react";
import './css/App.css';

import { Switch, Route } from "react-router-dom";
import Main from './pages';

function App() {
  return (
    <switch>
      <Route path="/" component={Main} />
    </switch>
  );
}

export default App;
