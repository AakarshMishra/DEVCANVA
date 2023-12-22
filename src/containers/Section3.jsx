import { Container, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import Title from "../components/Title";
import { section3Content } from "../utils/content";

const { title, ITEMS ,ITEMS2,ITEMS3} = section3Content;

const Section3 = () => {
  return (
    <Container sx={{ mt: { xs: 10, md: 20 } }}>
      <Container maxWidth="md">
        <Title variant={{ xs: "h3", md: "h2" }} sx={{ textAlign: "center" }}>
          {title}
        </Title>
      </Container>
      
      <h2 style={{marginTop:"80px",marginBottom:"10px"}}>Website-Development Technologies:</h2>

      <Grid container spacing={5} sx={{ mt: 4 }} justifyContent="center">
        {ITEMS.map(({ name, logo }) => (
          <Grid item xs={4} md={3} lg={2.4} key={name}>
            <Stack alignItems="center">
              <img
                src={logo}
                style={{ height: "120px", objectFit: "contain" }}
              />

              <Typography variant="body2" color="text.secondary">
                {name}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>

      <h2 style={{marginTop:"80px",marginBottom:"10px"}}>Application-Development Technologies:</h2>

      <Grid container spacing={5} sx={{ mt: 4 }} justifyContent="center">
        {ITEMS2.map(({ name, logo }) => (
          <Grid item xs={4} md={3} lg={2.4} key={name}>
            <Stack alignItems="center">
              <img
                src={logo}
                style={{ height: "120px", objectFit: "contain" }}
              />

              <Typography variant="body2" color="text.secondary">
                {name}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
      <h2 style={{marginTop:"80px",marginBottom:"10px"}}>Backend Technologies:</h2>

<Grid container spacing={5} sx={{ mt: 4 }} justifyContent="center">
  {ITEMS3.map(({ name, logo }) => (
    <Grid item xs={4} md={3} lg={2.4} key={name}>
      <Stack alignItems="center">
        <img
          src={logo}
          style={{ height: "120px", objectFit: "contain" }}
        />

        <Typography variant="body2" color="text.secondary">
          {name}
        </Typography>
      </Stack>
    </Grid>
  ))}
</Grid>
    </Container>
  );
};

export default Section3;
