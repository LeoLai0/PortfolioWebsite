import React from 'react';
import '../App.css';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import {
  Typography,
  Container,
} from '@mui/material';
import { styled } from '@mui/system';

import projectsData from '../data/ProjectsData';

const addOnData = [
  "Programming Languages",
  "Skills",
  "UNSW FABSOC",
  "UNSW FINSOC"
]

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

const Box = styled('div')({
  display: 'flex',
  height: '100%',
  border: '1px solid #6D8472',
  borderRadius: '15px',
  padding: '10px'
});

const FlexDiv = styled('div')({
  display: 'flex',
  height: '100%',
})

const ExitButton = styled('block')({
  position: 'relative',
  top: '10',
  right: '0',
  backgroundColor: 'transparent',
  color: '#dcdcdc',
  fontSize: '1.1rem',
  border: 'none',
  cursor: 'pointer',
})

const Item = styled('div')(({ selected }) => ({
  backgroundColor: selected ? '#6D8472' : '#09110B',
  border: '1px solid #6D8472',
  color: selected ? '#09110B' : '#e8e5df',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  textAlign: 'left',
  width: '80%',
  padding: '20px',
  margin: '10px',
  transition: 'background-color 0.2s, color 0.2s'
}));

const Modal = styled('div') (({ toggle, top, width, height, modalName }) => ({
  display: toggle ? 'flex' : 'none',
  flexDirection: 'column',
  alignItems: 'flex-end',
  position: 'fixed',
  backgroundColor: 'rgb(8, 23, 11, 0.8)',
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
}))

const Overlay = styled('div') (({ addOnToggle, errorToggle }) => ({
  position: (addOnToggle || errorToggle) ? "fixed" : "hidden",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: "1"
}))

const AddOnButton = styled('button') (({ selected }) => ({
  width: "100%",
  height: "100px",
  border: "none",
  borderRadius: "15px",
  backgroundColor: selected ? "rgba(256, 256, 256, 0.3)" : "rgba(256, 256, 256, 0.6)"
}))

const ProjectsBox = ({ id, title, description, onClick, selected }) => (
  <Item className="projects-box" id={id} onClick={onClick} selected={selected}>
    <Typography sx={{ fontSize: "1.75rem", fontWeight: "500" }}>
      {title}
    </Typography>
    <Typography sx={{ fontSize: ".8rem" }}>
      {description}
    </Typography>
  </Item>
)

const AddOn = ({ primary, secondary, onClick, selected }) => (
  <AddOnButton className="add-on-box" onClick={() => onClick(primary)} selected={selected}>
    <Typography sx={{ fontSize: "1.75rem", fontWeight: "500", color: "#e8e5df" }}>
      {primary}
    </Typography>
    <Typography sx={{ fontSize: ".8rem", color: "#e8e5df" }}>
      {secondary}
    </Typography>
  </AddOnButton>
)

function Projects({ token, setTokenFunction }) {
  const navigate = useNavigate();
  
  const [selectedProject, setSelectedProject] = React.useState(null);
  const [selection, setSelection] = React.useState(new Set());
  const [addOnSelection, setAddOnSelection] = React.useState(new Set());
  const [projectURL, setProjectURL] = React.useState(null);
  const [imageLocation, setImageLocation] = React.useState(null);
  const [selectAll, setSelectAll] = React.useState(false);
  const [selectAllAddOns, setSelectAllAddOns] = React.useState(false);
  const [toggleErrorModal, setToggleErrorModal] = React.useState(false);
  const [toggleAddOnModal, setToggleAddOnModal] = React.useState(false);
  const [toggleAddOnErrorModal, setToggleAddOnErrorModal] = React.useState(false);

  const handleProjectClick = (id, url) => {
    if (selection.has(id)) {
      selection.delete(id);
    } else {
      selection.add(id);
    }
    setSelection(new Set(selection));
    setSelectedProject(id === selectedProject ? null : id);
    setProjectURL(url);
    setImageLocation(`/images/${id}.jpg`)
  }

  const handleSelectAll = (event) => {
    const checked = event.target.checked;
    setSelectAll(checked);

    if (checked) {
      const allProjectIds = projectsData.map((project) => project.id);
      setSelection(new Set(allProjectIds));
    } else {
      setSelection(new Set());
    }
  }

  const handleAddOnClick = (id) => {
    if (addOnSelection.has(id)) {
      addOnSelection.delete(id);
    } else {
      addOnSelection.add(id);
    }
    setAddOnSelection(new Set(addOnSelection));
  }

  const handleSelectAllAddOns = (event) => {
    const checked = event.target.checked;
    setSelectAllAddOns(checked);

    if (checked) {
      setAddOnSelection(new Set(addOnData));
    } else {
      setAddOnSelection(new Set());
    }
  }
  
  // open on click of next.
  const openModals = () => {
    if (selection.size !== projectsData.length) {
      setToggleErrorModal(!toggleErrorModal);
    } else if (selection.size === projectsData.length) {
      setToggleAddOnModal(!toggleAddOnModal);
    }
  }


  React.useEffect(() => {
    if (selection.size === 4) {
      setSelectAll(true);
    } else {
      setSelectAll(false);
    }
  }, [selection])

  React.useEffect(() => {
    if (addOnSelection.size === 4) {
      setSelectAllAddOns(true);
    } else {
      setSelectAllAddOns(false);
    }
  }, [addOnSelection])

  const goToCart = () => {
    navigate('/cart')
  }

  const openAddOnError = () => {
    if (addOnSelection.size !== addOnData.length) {
      setToggleAddOnErrorModal(!toggleAddOnErrorModal);
    } else {
      goToCart();
    }
  }

  return <>
    <div sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <Container component="main" sx={{ display: "flex", flexDirection:"column" }}>
        <Grid
          sx={{
            flexGrow: 1, height: "600px", width: "1122px",
          }}
          container spacing={2}
        >
          <Grid item xs={8}>
            <Typography sx={{ fontSize: "1rem", color: "#a7a396" }}>
              Step <b>2</b> of <b>3</b>
            </Typography>
        
            <Typography sx={{ fontSize: "2rem", fontWeight: "500" }}>
              Choose Projects
            </Typography>
            <Box sx={{ height: "412px", position: "relative" }}>
              {imageLocation && (
                <img
                src={imageLocation}
                alt="preview of a background describing the project name: {imageLocation}"
                style={{ height: "100%", width: "100%", borderRadius: "15px" }}
                />
              )}
              {projectURL && (
                <div
                style={{ height: "100%", cursor: "pointer", position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
                onClick={() => window.open(projectURL, '_blank')}
                >
                </div>
              )}
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Typography id="empty-spacer1" sx={{ fontSize: "1rem", color: "#a7a396" }}>
              &nbsp;
            </Typography>
            <Typography id="empty-spacer2" sx={{ fontSize: "1.75rem", fontWeight: "500" }}>
              &nbsp;
            </Typography>
            <FlexDiv className="projects-container" sx={{ height: "412px", flexDirection:"column", padding: "0", overflow: "scroll", msOverflowStyle: "none" }}>
              <Typography sx={{ fontSize: "1.75rem", fontWeight: "500" }}>
                Projects.
                <Typography component="span" sx={{ fontSize: "1.75rem", fontWeight: "500", color: "#a7a396" }}>
                  Which interests you?
                </Typography>
              </Typography>
              {projectsData.map((project) =>(
                <ProjectsBox
                  key={project.id}
                  {...project}
                  onClick={() => handleProjectClick(project.id, project.url)}
                  selected={selection.has(project.id)}
                />
              ))}
              <FlexDiv sx={{ flexDirection: "row", alignItems: "center" }}>
                <input type="checkbox" id="add-all-check" checked={selectAll} onChange={handleSelectAll}/>
                <span>
                  Add all to cart?
                </span>
              </FlexDiv>
            </FlexDiv>
          </Grid>
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: "50px"}}>
            <ProgButton onClick={openModals}>Next</ProgButton>
          </div>
        </Grid>

      </Container>
    </div>
    <Overlay addOnToggle={toggleAddOnModal} errorToggle={toggleErrorModal}>
      <Modal className="error-modal" toggle={toggleErrorModal} top="10%" width="350px" modalName="animateErrorModal">
        <ExitButton onClick={openModals}>
          &#215;
        </ExitButton>
        <Typography sx={{ width: '100%', textAlign: 'center', }}>
          Please select all projects to continue!
        </Typography>
      </Modal>
      <Modal className="add-on-modal" toggle={toggleAddOnModal} top="50%" width="900px" modalName="animateAddOnModal">
        <ExitButton onClick={openModals}>
          &#215;
        </ExitButton>
        <Typography sx={{ fontSize: "1.75rem", fontWeight: "500" }}>
          Add Ons.&nbsp;
          <Typography component="span" sx={{ fontSize: "1.75rem", fontWeight: "500", color: "#a7a396" }}>
            See some of my skills and extra curriculars here.
          </Typography>
        </Typography>
        <Grid sx={{ flexGrow: 1, width: "100%", margin: "10px 0px" }} container spacing={2}>
          <Grid item xs={6}>
            <AddOn onClick={handleAddOnClick}
              primary="Programming Languages"
              secondary="Java, Python, JavaScript/TypeScript, HTML, CSS, C, SQL"
              selected={addOnSelection.has("Programming Languages")}
            />
          </Grid>
          <Grid item xs={6}>
            <AddOn onClick={handleAddOnClick}
              primary="Skills"
              secondary="Microsoft Excel, Web Development, Analytics, Leadership"
              selected={addOnSelection.has("Skills")}
            />
          </Grid>
        </Grid>
        <Grid sx={{ flexGrow: 1, width: "100%" }} container spacing={2}>
          <Grid item xs={6}>
            <AddOn onClick={handleAddOnClick}
              primary="UNSW FABSOC"
              secondary="UNSW Fashion and Beauty Society: Executive (Treasurer)"
              selected={addOnSelection.has("UNSW FABSOC")}
            />
          </Grid>
          <Grid item xs={6}>
            <AddOn onClick={handleAddOnClick}
              primary="UNSW FINSOC"
              secondary="UNSW Finance and Banking Society: Director (HR)"
              selected={addOnSelection.has("UNSW FINSOC")}
            />
          </Grid>
        </Grid>
        <input type="checkbox" id="add-on-all-check" checked={selectAllAddOns} onChange={handleSelectAllAddOns}/>
        <span>
          Add all to cart?
        </span>
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <ProgButton onClick={openAddOnError}>Next</ProgButton>
        </div>
      </Modal>
      <Overlay errorToggle={toggleAddOnErrorModal} sx={{ zIndex: "3" }}>
        <Modal
          className="error-modal"
          toggle={toggleAddOnErrorModal}
          top="10%"
          width="350px"
          modalName="animateErrorModal"
          sx={{ zIndex: "4" }}
        >
          <ExitButton onClick={openAddOnError}>
            &#215;
          </ExitButton>
          <Typography sx={{ width: '100%', textAlign: 'center', }}>
            Please select all add-ons to continue!
          </Typography>
        </Modal>
      </Overlay>
    </Overlay>
  </>
}

export default Projects;
