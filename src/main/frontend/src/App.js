import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Alisveris, AnaSayfa, Iletisim, Hakkimizda, Register, Login, Admin } from './pages/index'
import { TunaLogoImage } from './img/index'
import { Menu, Segment, Icon } from 'semantic-ui-react'
import './css/index.scss'

function App() {
  const [activeItem, setActiveItem] = useState('ana_sayfa');

  function handleItemClick(e, { name }) {
    setActiveItem(name);
  }

  return (
    <Router>
      <Segment>
        <Menu stackable icon="labeled">
          <Link to="/ana_sayfa">
            <Menu.Item name="ana_sayfa" to="/ana_sayfa" onClick={handleItemClick} className="navLogoLink">
              <img src={TunaLogoImage} className="tunaLogoHeader" alt="tunaLogoHeader" />
            </Menu.Item>
          </Link>

          <Link to="/ana_sayfa">
            <Menu.Item name="ana_sayfa" to="/ana_sayfa" active={activeItem === "ana_sayfa"} style={{ color: activeItem === "ana_sayfa" ? "#2a97ae" : "" }} onClick={handleItemClick} className="navLink">
              <Icon name='home' className="headerIcon" />
              Ana Sayfa
            </Menu.Item>
          </Link>

          <Link to="/alisveris">
            <Menu.Item name="alisveris" to="/alisveris" active={activeItem === "alisveris"} style={{ color: activeItem === "alisveris" ? "#2a97ae" : "" }} onClick={handleItemClick} className="navLink">
              <Icon name='shop' className="headerIcon" />
              Alışveriş
            </Menu.Item>
          </Link>

          <Link to="/iletisim">
            <Menu.Item name="iletisim" to="/iletisim" active={activeItem === "iletisim"} style={{ color: activeItem === "iletisim" ? "#2a97ae" : "" }} onClick={handleItemClick} className="navLink">
              <Icon name='phone' className="headerIcon" />
              İletişim
            </Menu.Item>
          </Link>

          <Link to="/hakkimizda">
            <Menu.Item name="hakkimizda" to="/hakkimizda" active={activeItem === "hakkimizda"} style={{ color: activeItem === "hakkimizda" ? "#2a97ae" : "" }} onClick={handleItemClick} className="navLink">
              <Icon name='info' className="headerIcon" />
              Hakkımızda
            </Menu.Item>
          </Link>


          <Menu.Menu position="right">
            <Link to="/register">
              <Menu.Item name="register" to="/register" active={activeItem === "register"} style={{ color: activeItem === "register" ? "#2a97ae" : "" }} onClick={handleItemClick} className="navLink">
                <Icon name='add user' className="headerIcon" />
              Kayıt Ol
            </Menu.Item>
            </Link>

            <Link to="/login">
              <Menu.Item name="login" to="/login" active={activeItem === "login"} style={{ color: activeItem === "login" ? "#2a97ae" : "" }} onClick={handleItemClick} className="navLink">
                <Icon name='user' className="headerIcon" />
              Giriş Yap
            </Menu.Item>
            </Link>
          </Menu.Menu>
        </Menu>
      </Segment>

      <Switch>
        <Route path="/ana_sayfa"><AnaSayfa /></Route>
        <Route path="/alisveris"><Alisveris /></Route>
        <Route path="/iletisim"><Iletisim /></Route>
        <Route path="/hakkimizda"><Hakkimizda /></Route>
        <Route path="/register"><Register /></Route>
        <Route path="/login"><Login /></Route>
        <Route path="/macdell/admin"><Admin /></Route>

      </Switch>
    </Router >
  );
}

export default App;
