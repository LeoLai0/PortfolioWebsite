import '../App.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
// import axios from 'axios';
import {
  Typography,
  Container,
  List,
  ListItem,
  Divider,
  ListItemText,
} from '@mui/material';
import { styled } from '@mui/system';

import experiencesData from '../data/ExperienceData';

const Box = styled('div')(({ selected, idName }) => ({
  display: 'flex',
  height: '100%',
  border: (selected === idName) ? '3px solid #6D8472' : '1px solid #6D8472',
  borderRadius: '15px',
  padding: '10px'
}));

const Item = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  padding: '10px',
});

const ProgButton = styled('button')({
  backgroundColor: '#0171e3',
  width: '430px',
  height: '50px',
  margin: '10px',
  color: 'white',
  padding: '5px 10px',
  border: 'none',
  borderRadius: '5px',
  alignSelf: 'center',
  cursor: 'pointer',
});

const Modal = styled('div') (({ toggle, top, width, height, modalName }) => ({
  display: toggle ? 'flex' : 'none',
  flexDirection: 'column',
  alignItems: 'flex-end',
  position: 'fixed',
  backgroundColor: 'rgb(90, 165, 107, 0.9)',
  zIndex: '2',
  top: top,
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '20px',
  width: width,
  height: height,
  padding: "10px 10px",
  animationName: modalName,
  animationDuration: '0.1s'
}));

const Overlay = styled('div') (({ addOnToggle, errorToggle }) => ({
  position: (addOnToggle || errorToggle) ? "fixed" : "hidden",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: "1"
}));

const ExitButton = styled('block')({
  position: 'relative',
  top: '10',
  right: '0',
  backgroundColor: '#529761',
  color: '#dcdcdc',
  fontSize: '1.1rem',
  border: 'none',
  cursor: 'pointer',
});

function Dashboard({ token, setTokenFunction }) {
  const navigate = useNavigate();
  const [selected, setSelected] = React.useState("");
  const [modalToggle, setModalToggle] = React.useState(false);

  const handleSelectPlan = (id) => {
    setSelected(id);
  }

  // this should save the experience selected.
  const goToProjects = () => {
    navigate('/projects')
  }

  const toggleModal = () => {
    if (selected !== "premium-subscription") {
      setModalToggle(!modalToggle);
    } else {
      goToProjects();
    }
  }

  return (
    <div sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <Container component="main" maxWidth="md" sx={{ display: "flex", flexDirection:"column" }}>
        <Typography sx={{ textAlign: "center", fontSize: "15rem", fontWeight: "300", letterSpacing: "-2px", paddingTop: "50px" }}>
          Leo Lai
        </Typography>
        <Typography sx={{ textAlign: "center", fontSize: "2rem", fontWeight: "300", letterSpacing: "-1.5px" }}>
          Welcome to my portfolio website where you can build your own Leo
        </Typography>
      </Container>
    </div>
  )
}

export default Dashboard;
