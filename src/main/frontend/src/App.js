import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Alisveris, AnaSayfa, Iletisim, Hakkimizda, Register, Login, Admin } from './pages/index'
import { TunaLogoImage } from './img/index'
import { Menu, Segment, Icon } from 'semantic-ui-react'
import './css/index.scss'
import { getCurrentUser, logout } from './actions/authenticationAction'
import { Profile } from './components/index'

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
      activeItem: 'ana_sayfa'
    };
  }

  componentDidMount() {
    const user = getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN")
      });
      console.log(user);
    }
  }

  logOut() {
    logout();
  }

  handleItemClick(name) {
    this.setState({ activeItem: name })
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard, activeItem } = this.state;

    return (
      <Router>
        <Segment>
          <Menu stackable icon="labeled">
            <Menu.Item name="ana_sayfa" as={Link} to="/ana_sayfa" onClick={() => this.handleItemClick("ana_sayfa")} className="navLogoLink">
              <img src={TunaLogoImage} className="tunaLogoHeader" alt="tunaLogoHeader" />
            </Menu.Item>

            <Menu.Item name="ana_sayfa" as={Link} to="/ana_sayfa" active={activeItem === "ana_sayfa"} style={{ color: activeItem === "ana_sayfa" ? "#2a97ae" : "" }} onClick={() => this.handleItemClick("ana_sayfa")} className="navLink">
              <Icon name='home' className="headerIcon" />
              Ana Sayfa
              </Menu.Item>

            <Menu.Item name="alisveris" as={Link} to="/alisveris" active={activeItem === "alisveris"} style={{ color: activeItem === "alisveris" ? "#2a97ae" : "" }} onClick={() => this.handleItemClick("alisveris")} className="navLink">
              <Icon name='shop' className="headerIcon" />
              Alışveriş
            </Menu.Item>

            <Menu.Item name="iletisim" as={Link} to="/iletisim" active={activeItem === "iletisim"} style={{ color: activeItem === "iletisim" ? "#2a97ae" : "" }} onClick={() => this.handleItemClick("iletisim")} className="navLink">
              <Icon name='phone' className="headerIcon" />
              İletişim
            </Menu.Item>

            <Menu.Item name="hakkimizda" as={Link} to="/hakkimizda" active={activeItem === "hakkimizda"} style={{ color: activeItem === "hakkimizda" ? "#2a97ae" : "" }} onClick={() => this.handleItemClick("hakkimizda")} className="navLink">
              <Icon name='info' className="headerIcon" />
              Hakkımızda
            </Menu.Item>

            {showModeratorBoard &&
              <Menu.Item name="hakkimizda" as={Link} to="/moderator" active={activeItem === "moderator"} style={{ color: activeItem === "moderator" ? "#2a97ae" : "" }} onClick={() => this.handleItemClick("hakkimizda")} className="navLink">
                <Icon name='info' className="headerIcon" />
                Moderatör
              </Menu.Item>
            }

            {showAdminBoard &&
              <Menu.Item name="admin" as={Link} to="/macdell/admin" active={activeItem === "admin"} style={{ color: activeItem === "admin" ? "#2a97ae" : "" }} onClick={() => this.handleItemClick("admin")} className="navLink">
                <Icon name='info' className="headerIcon" />
                Admin
              </Menu.Item>
            }

            {currentUser ?
              <Menu.Menu position="right">
                <Menu.Item name="logout" as={Link} to="/logout" active={activeItem === "logout"} style={{ color: activeItem === "logout" ? "#2a97ae" : "" }} onClick={this.logOut} className="navLink">
                  <Icon name='add user' className="headerIcon" />
                  Çıkış Yap
              </Menu.Item>
                <Menu.Item name="profile" as={Link} to="/profile" active={activeItem === "profile"} style={{ color: activeItem === "profile" ? "#2a97ae" : "" }} onClick={() => this.handleItemClick("profile")} className="navLink">
                  <Icon name='add user' className="headerIcon" />
                  {currentUser.username}
                </Menu.Item>
              </Menu.Menu>
              :
              <Menu.Menu position="right">
                <Menu.Item name="register" as={Link} to="/register" active={activeItem === "register"} style={{ color: activeItem === "register" ? "#2a97ae" : "" }} onClick={() => this.handleItemClick("register")} className="navLink">
                  <Icon name='add user' className="headerIcon" />
                  Kayıt Ol
                </Menu.Item>

                <Menu.Item name="login" as={Link} to="/login" active={activeItem === "login"} style={{ color: activeItem === "login" ? "#2a97ae" : "" }} onClick={() => this.handleItemClick("login")} className="navLink">
                  <Icon name='user' className="headerIcon" />
                  Giriş Yap
                </Menu.Item>
              </Menu.Menu>}

          </Menu>
        </Segment>

        <Switch>
          <Route path="/ana_sayfa"><AnaSayfa /></Route>
          <Route path="/alisveris"><Alisveris /></Route>
          <Route path="/iletisim"><Iletisim /></Route>
          <Route path="/hakkimizda"><Hakkimizda /></Route>
          <Route path="/register"><Register /></Route>
          <Route path="/login"><Login /></Route>
          <Route path="/profile"><Profile /></Route>
          <Route path="/macdell/admin"><Admin /></Route>

        </Switch>
      </Router >
    )
  }

}

export default App;
