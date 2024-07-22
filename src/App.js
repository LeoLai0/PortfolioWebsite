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

const SideBar = styled('div') ({
  display: "flex",
  position: "absolute",
  flexDirection: "column",
  left: "30px",
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: "rgb(200, 200, 200, 0.2)",
  width: "80px",
  borderRadius: "50px"
})

const pages = ['Dashboard', 'Experiences', 'Projects'];

const AnimatedRoutes = () => {
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
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/experiences" element={<Experiences/>} />
            <Route path="/cart" element={<Contact/>} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

function App() {
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
          <AnimatedRoutes/>
        </div>
      </Router>
      <SideBar>
          <img
            className="contact-link-button"
            src="/images/linkedIn.webp"
            alt="linkedIn logo"
            style={{ borderRadius: "50px", padding: "10px", margin: "10px 0" }}
            onClick={() => window.open("https://www.linkedin.com/in/Leo-Lai1/", '_blank')}
          />
          <img
            className="contact-link-button"
            src="/images/github-black.webp"
            alt="github logo"
            style={{ borderRadius: "50px", padding: "10px", margin: "10px 0" }}
            onClick={() => window.open("https://github.com/LeoLai0", '_blank')}
          />
          <img
            className="contact-link-button"
            src="/images/mail.png"
            alt="email logo"
            style={{ borderRadius: "50px", padding: "10px", margin: "10px 0" }}
            onClick={() => window.open("mailto:leo.lai2610@gmail.com", '_blank')}
          />
      </SideBar>
    </div>
  );
}

export default App;