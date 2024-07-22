import React from 'react';
import '../App.css';
import Grid from '@mui/material/Grid';
import {
  Typography,
} from '@mui/material';
import { styled } from '@mui/system';


const Box = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  borderRadius: '15px',
  padding: '10px'
});

const PurchaseItem = styled('li')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  height: '110px',
  padding: '20px 0',
  borderBottom: '1px solid #adaba6',
  fontSize: '0.7rem',
})

const SendButton = styled('button')({
  width: '100%',
  border: '2px solid transparent',
  boxSizing: 'content-box',
  fontSize: '.7rem',
  padding: '1px 2px',
  borderRadius: '1px'
})

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "91a9dd82-1a04-4e11-9ea1-0fbbe9ae3f8b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return <>
  <Grid
    sx={{
      flexGrow: 1, height: "500px",
      px: { xs: "10px", sm: "25px", lg: "150px", xl: "200px" }
    }}
    container spacing={2}
  >
    <Grid item xs={8}>
      <Typography sx={{ fontSize: "1rem", color: "#a7a396" }}>
        Step <b>3</b> of <b>3</b>
      </Typography>
      <Typography sx={{ fontSize: "2rem", fontWeight: "500" }}>
        Checkout and Summary
      </Typography>
      <Box sx={{ height: "80%", position: "relative" }}>
        <div className='cart-item-headers'
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            borderBottom: "1px solid #adaba6",
            height: "25px"
          }}
        >
          <div className="cart-item-column" style={{ marginLeft: "100px", width: "60%", fontSize: ".7rem", color: "#adaba6" }}>
            ITEM
          </div>
          <div className="cart-total-column" style={{ width: "40%", textAlign: "right", fontSize: ".7rem", color: "#adaba6" }}>
            TOTAL
          </div>
        </div>
        <ul style={{ padding: "0px", margin: "0px" }}>
          <PurchaseItem>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
              <div style={{ width: "100px" }}>
                <img src="/images/experiences.png" alt="all experiences and their logos" style={{width: "100%"}}/>
              </div>
              <div className="cart-item-container" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <Typography sx={{ fontSize: ".7rem" }}>
                    EXPERIENCE LEVEL: PREMIUM
                  </Typography>
                  <Typography sx={{ fontSize: ".7rem" }}>
                    Ernst & Young, JB HI-FI, UNIQLO
                  </Typography>
                </div>
                <div>
                  <Typography sx={{ fontSize: ".7rem" }}>
                    <u>Cannot be removed from cart</u>
                  </Typography>
                </div>
              </div>
            </div>
            <div>
              $XXXXXX
            </div>
          </PurchaseItem>
          <PurchaseItem>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
              <div style={{ width: "100px" }}>
                <img src="/images/projects.png" alt="all projects and their logos" style={{width: "100%"}}/>
              </div>
              <div className="cart-item-container" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <Typography sx={{ fontSize: ".7rem" }}>
                    PROJECTS
                  </Typography>
                  <Typography sx={{ fontSize: ".7rem" }}>
                    Presentation Tool, Toohak, Forum Application, Sneaky Savings Strategies
                  </Typography>
                </div>
                <div>
                  <Typography sx={{ fontSize: ".7rem" }}>
                    <u>Cannot be removed from cart</u>
                  </Typography>
                </div>
              </div>
            </div>
            <div>
              $XXXXXX
            </div>
          </PurchaseItem>
          <PurchaseItem>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
              <div style={{ width: "100px" }}>
                <img src="/images/add-ons.png" alt="add on logo" style={{width: "100%"}}/>
              </div>
              <div className="cart-item-container" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <Typography sx={{ fontSize: ".7rem" }}>
                    Add-Ons
                  </Typography>
                  <Typography sx={{ fontSize: ".7rem" }}>
                    Programming Languages, Skills, UNSW FABSOC, UNSW FINSOC
                  </Typography>
                </div>
                <div>
                  <Typography sx={{ fontSize: ".7rem" }}>
                    <u>Cannot be removed from cart</u>
                  </Typography>
                </div>
              </div>
            </div>
            <div>
              $XXXXXX
            </div>
          </PurchaseItem>
          <PurchaseItem sx={{ border: "none", height: '70px'}}>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
              <div style={{ width: "100px" }}>
                &nbsp;
              </div>
              <div className="cart-item-container" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <Typography sx={{ fontSize: ".7rem" }}>
                    Total
                  </Typography>
                  <Typography sx={{ fontSize: ".7rem" }}>
                    Shipping estimate
                  </Typography>
                </div>
              </div>
            </div>
            <div>
              <u>$XXXXXX * 3</u>
            </div>
          </PurchaseItem>
        </ul>
      </Box>
    </Grid>
    <Grid item xs={4}>
      <Typography id="empty-spacer1" sx={{ fontSize: "1rem", color: "#a7a396" }}>
        &nbsp;
      </Typography>
      <Typography id="empty-spacer2" sx={{ fontSize: "2rem", fontWeight: "500" }}>
        &nbsp;
      </Typography>
      <Box sx={{ height: "80%", position: "relative" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ marginBottom: "25px" }}>
            <Typography sx={{ fontSize: ".7rem", paddingBottom: "10px"}}>
              CHECKOUT
            </Typography>
            <Typography sx={{ fontSize: ".7rem" }}>
              Enter your email address and feel free to send inquiries below:
            </Typography>
          </div>
          <div style={{
            display: "flex",
            flexDirection: "column"
          }}>
            <form onSubmit={onSubmit} style={{ display: "flex", width: '100%', flexDirection: "column"}}>
              <input type="hidden" name="access_key" value="91a9dd82-1a04-4e11-9ea1-0fbbe9ae3f8b"/>
              <input className="form-input-box" type="text" name="name" placeholder="Name" required/>
              <input className="form-input-box" type="email" name="email" placeholder="Email Address" required/>
              <textarea className="form-input-box" name="message" placeholder="Your Message" rows="10" required/>
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }}/>
              <SendButton className="send-button" type="submit">Send</SendButton>
              <span style={{ fontSize: ".7rem" }}>{result}</span>
            </form>
          </div>
        </div>
      </Box>
    </Grid>
  </Grid>
  </>
}

export default Contact;
