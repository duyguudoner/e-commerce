import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'
import { Header, Kategoriler, Siparisler } from './components/index'
import './css/index.scss'

function App() {
  return (
    <div className="mainApp">
      <Router>
        <div>
          <nav>
            <ul>
            <li>
                <Link to="/">Ana Sayfa</Link>
              </li>
              <li>
                <Link to="/kategoriler">Kategoriler</Link>
              </li>
              <li>
                <Link to="/siparisler">Siparişler</Link>
              </li>
              <li>
                <Link to="/uyeler">Üyeler</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          {/* <Route path="/"><AnaSayfa /></Route> */}
          <Route path="/kategoriler"><Kategoriler /></Route>
          <Route path="/siparisler"><Siparisler /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
