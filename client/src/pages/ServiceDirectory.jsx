import React from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import {
  LocalPolice,
  HomeWork,
  Commute,
  Event,
  LocalHospital,
  AttachMoney,
} from "@mui/icons-material";

const services = [
  {
    id: 1,
    title: "Public Safety",
    description:
      "Ensuring the safety of citizens through police and fire services.",
    icon: <LocalPolice fontSize="large" color="primary" />,
  },
  {
    id: 2,
    title: "Housing & Development",
    description: "Providing affordable housing and urban development programs.",
    icon: <HomeWork fontSize="large" color="secondary" />,
  },
  {
    id: 3,
    title: "Transportation",
    description:
      "Improving public transport and road maintenance for better connectivity.",
    icon: <Commute fontSize="large" color="success" />,
  },
  {
    id: 4,
    title: "Community Events",
    description: "Hosting local events and public engagement programs.",
    icon: <Event fontSize="large" color="error" />,
  },
  {
    id: 5,
    title: "Healthcare & Hospitals",
    description:
      "Providing healthcare facilities and emergency medical services.",
    icon: <LocalHospital fontSize="large" color="primary" />,
  },
  {
    id: 6,
    title: "Tax & Revenue",
    description: "Handling local taxes and ensuring fair revenue distribution.",
    icon: <AttachMoney fontSize="large" color="secondary" />,
  },
];

const ServiceDirectory = () => {
  return (
    <Box sx={{ maxWidth: 900, margin: "auto", textAlign: "center", mt: 5 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        City Services
      </Typography>

      <Grid container spacing={3}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.id}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  pt: 2,
                }}
              >
                {service.icon}
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6">{service.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServiceDirectory;
