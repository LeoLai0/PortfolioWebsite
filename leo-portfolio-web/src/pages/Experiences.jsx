import React from 'react';
import '../App.css';
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

const ExperienceBox = ({ id, title, subtitle, description, items, selected, onClick }) => (
  <Grid item xs={4}>
    <Box className="plan-container" idName={id} onClick={() => onClick(id)} selected={selected}>
      <Grid sx={{ flexGrow: 1, height: "100%" }} container spacing={2}>
        <Grid item xs={12} sx={{ height: "20%" }}>
          <Item className="subscription-head" id={id}>
            {subtitle && <Typography sx={{ fontSize: ".6rem" }}>
              {subtitle}
            </Typography>}
            <Typography sx={{ fontSize: "1.2rem" }}>
              {title}
            </Typography>
            <Typography sx={{ fontSize: ".6rem" }}>
              {description}
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sx={{ height: "390px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <List sx={{ padding: "0", width: "100%", maxWidth: "500px"}}>
            {items.map((item, index) => (
              <React.Fragment key={index}>
                <ListItem alignItems="flex-start">
                  <ListItemText
                    primary={item.primary}
                    secondary={
                      <>
                        {item.secondary && <Typography style={{ color: "#e8e5df", fontStyle:"italic", fontSize: ".7rem" }}>
                          {item.secondary}
                        </Typography>}
                        <Typography style={{ color: "#e8e5df", fontWeight:"lighter", fontSize: ".7rem"}}>
                          {item.details}
                        </Typography>
                      </>
                    }
                  />
                </ListItem>
                {index < items.length - 1 && <Divider variant="middle" component="li" sx={{ backgroundColor: "#6D8472" }} />}
              </React.Fragment>
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  </Grid>
)

function Experiences({ token, setTokenFunction }) {
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
    <div sx={{ display: "flex", flexDirection: "column", alignContent: "center", justifyContent: "center"}}>
      <Container component="main" maxWidth="md" sx={{ display: "flex", flexDirection:"column", paddingBottom: "50px" }}>
        <Typography sx={{ fontSize: ".8rem", color: "#a7a396" }}>
          Step <b>1</b> of <b>3</b>
        </Typography>
        <Typography sx={{ fontSize: "1.75rem", fontWeight: "500" }}>
          Choose an Experience
        </Typography>
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
          {experiencesData.map((experience) => (
            <ExperienceBox 
              onClick={handleSelectPlan}
              key={experience.id}
              selected={selected} {...experience} />
          ))}
        </Grid>
      </Container>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <ProgButton onClick={toggleModal}>Next</ProgButton>
      </div>
      <Overlay errorToggle={modalToggle}>
        <Modal
          className="error-modal"
          toggle={modalToggle}
          top="10%"
          width="350px"
          modalName="animateErrorModal"
        >
          <ExitButton onClick={toggleModal}>
            &#215;
          </ExitButton>
          <Typography sx={{ width: '100%', textAlign: 'center', }}>
            {selected === ""
              ? "Please select a subscription plan to continue!"
              : "Only the Premium subscription plan is valid. Select it to continue"
            }
          </Typography>
        </Modal>
      </Overlay>
    </div>
  );
}

export default Experiences;
