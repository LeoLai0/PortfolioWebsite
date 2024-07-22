import '../App.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Typography,
  Container,
} from '@mui/material';

function Dashboard() {
  const navigate = useNavigate();

  // this should save the experience selected.
  const goToExperience = () => {
    navigate('/experiences')
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <Container component="main" maxWidth="md" sx={{ display: "flex", flexDirection:"column" }}>
        <Typography sx={{ textAlign: "center", fontSize: "15rem", fontWeight: "300", letterSpacing: "-2px", paddingTop: "50px" }}>
          Leo Lai
        </Typography>
        <Typography sx={{ textAlign: "center", fontSize: "1.6rem", fontWeight: "300", letterSpacing: "-1.5px" }}>
          Driven by a deep passion for computer science, I thrive on creating innovative solutions.
        </Typography>
        <Typography
          className="dashboard-to-experiences-button"
          sx={{
            textAlign: "center",
            fontSize: "1rem",
            fontWeight: "300",
            letterSpacing: ".5px",
            cursor: "pointer",
            textDecoration: "underline"
          }}
          onClick={goToExperience}>
          Come and take a look at my experiences to &#34;build&#34; your own Leo &gt;
        </Typography>
      </Container>
    </div>
  )
}

export default Dashboard;
