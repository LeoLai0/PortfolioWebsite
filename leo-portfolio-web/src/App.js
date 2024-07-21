import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';

import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Experiences from './pages/Experiences';
import Contact from './pages/Contact';
import { Typography } from '@mui/material';

const NavigationMenu = styled('div')({
  display:"flex",
  justifyContent:"space-around",
})

const NavButton = styled('button')({
  padding: "5px 20px",
  border: 'none',
  borderRadius: '5px',
  background: 'none',
  cursor: 'pointer',
  '&:hover' : {
    background: 'rgb(240 242 245)',
    transitionDuration: '0.15s',
  },
  color: "#e8e5df",
})

const pages = ['Dashboard', 'Experiences', 'Projects', 'Cart']

function App() {
  let lsToken = null;

  if (localStorage.getItem('token')) {
    lsToken = localStorage.getItem('token');
  }
  const [token, setToken] = React.useState(lsToken);
  // const [anchorNav, setAnchorNav] = React.useState(null);
  // const [anchorUser, setAnchorUser] = React.useState(null);
  // const [modalOpen, setModalOpen] = React.useState(false);

  // const toggleModal = (modalOpen) => {
  //   setModalOpen(!modalOpen);
  // }

  const setTokenAbstract = (token) => {
    setToken(token);
    localStorage.setItem('token', token);
  }

  return (
    <div className="app-container">
      <BrowserRouter>
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <Typography sx={{ fontSize: "1.4rem", fontWeight: "500", padding: '0px 75px'}}>
              Leo Lai 
            </Typography>
          </div>
          <NavigationMenu
            sx={{
              justifySelf: 'flex-end',
              padding: '0px 75px'
            }}
          >
            {pages.map((page) => (
              <Link to={`/${page.toLowerCase()}`}>
                <NavButton color="inherit" key={page}>
                  {page}
                </NavButton>
              </Link>
              
            ))}
          </NavigationMenu>
        </Toolbar>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard"/>}/>
          <Route path="/dashboard" element={<Dashboard token={token} setTokenFunction={setTokenAbstract}/>}/>
          <Route path="/projects" element={<Projects token={token} setTokenFunction={setTokenAbstract}/>}/>
          <Route path="/experiences" element={<Experiences token={token} setTokenFunction={setTokenAbstract}/>}/>
          <Route path="/cart" element={<Contact token={token} setTokenFunction={setTokenAbstract}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
