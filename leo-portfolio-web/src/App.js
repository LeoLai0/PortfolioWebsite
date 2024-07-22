import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Experiences from './pages/Experiences';
import Contact from './pages/Contact';
import { Typography } from '@mui/material';

const NavigationMenu = styled('div')({
  display: "flex",
  justifyContent: "space-around",
});

const NavButton = styled('button')({
  padding: "5px 20px",
  border: 'none',
  borderRadius: '5px',
  background: 'none',
  cursor: 'pointer',
  '&:hover': {
    background: 'rgb(240 242 245)',
    transitionDuration: '0.15s',
  },
  color: "#e8e5df",
});

const pages = ['Dashboard', 'Experiences', 'Projects', 'Cart'];

const AnimatedRoutes = ({ token, setTokenFunction }) => {
  const location = useLocation();
  return (
    <TransitionGroup component={null}>
      <CSSTransition
        key={location.key}
        classNames="fade"
        timeout={500}
      >
        <div className="transition-wrapper">
          <Routes location={location}>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard token={token} setTokenFunction={setTokenFunction} />} />
            <Route path="/projects" element={<Projects token={token} setTokenFunction={setTokenFunction} />} />
            <Route path="/experiences" element={<Experiences token={token} setTokenFunction={setTokenFunction} />} />
            <Route path="/cart" element={<Contact token={token} setTokenFunction={setTokenFunction} />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

function App() {
  let lsToken = null;

  if (localStorage.getItem('token')) {
    lsToken = localStorage.getItem('token');
  }
  const [token, setToken] = React.useState(lsToken);

  const setTokenAbstract = (token) => {
    setToken(token);
    localStorage.setItem('token', token);
  };

  return (
    <div className="app-container">
      <Router>
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <Typography sx={{ fontSize: "1.4rem", flexGrow: 1, fontWeight: "500", paddingLeft: '75px' }}>
              Leo Lai
            </Typography>
          </div>
          <NavigationMenu
            sx={{
              justifySelf: 'flex-end',
              paddingRight: '75px'
            }}
          >
            {pages.map((page) => (
              <Link to={`/${page.toLowerCase()}`} key={page}>
                <NavButton color="inherit">
                  {page}
                </NavButton>
              </Link>
            ))}
          </NavigationMenu>
        </Toolbar>
        <div className="main-content">
          <AnimatedRoutes token={token} setTokenFunction={setTokenAbstract}/>
        </div>
      </Router>
    </div>
  );
}

export default App;