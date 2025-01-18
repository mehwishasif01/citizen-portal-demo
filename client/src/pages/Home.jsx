import React, { useState } from "react";
import {
  Button,
  Container,
  Typography,
  TextField,
  Card,
  CardContent,
  Grid,
  CardMedia,
} from "@mui/material";
import { useNavigate } from "react-router-dom"; // For navigation

const HomePage = () => {
  const [articles] = useState([
    {
      id: 1,
      title: "How Local Governments Improve Public Safety",
      description:
        "A deep dive into how city councils and police work together to ensure safety.",
      image: "https://picsum.photos/400/250?random=1",
    },
    {
      id: 2,
      title: "Understanding City Taxes: Where Does Your Money Go?",
      description:
        "Learn how local tax collection supports public services like education and healthcare.",
      image: "https://picsum.photos/400/250?random=2",
    },
    {
      id: 3,
      title: "Upcoming Community Events in 2025",
      description:
        "Check out the latest festivals, meetings, and public engagements in your city.",
      image: "https://picsum.photos/400/250?random=3",
    },
  ]);
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/chat"); // Redirect to chat page
  };

  return (
    <Container maxWidth="lg" style={{ textAlign: "center", padding: "2rem" }}>
      <Typography variant="h3" gutterBottom>
        Simplifying Citizen Services for Everyone.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Search, explore, and access services and information from city, state,
        and federal government portals.
      </Typography>
      <TextField
        variant="outlined"
        placeholder="Search services or FAQs"
        fullWidth
        style={{ margin: "1rem 0" }}
      />
      <Button
        variant="contained"
        color="primary"
        style={{ margin: "0.5rem" }}
        onClick={handleRedirect}
      >
        Ask a Question
      </Button>
      <Button
        onClick={() => navigate("/services")}
        variant="outlined"
        color="secondary"
        style={{ margin: "0.5rem" }}
      >
        Explore Services
      </Button>

      <Grid marginTop={"12px"} container spacing={3}>
        {articles.map((article) => (
          <Grid item xs={12} sm={6} md={4} key={article.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="200"
                image={article.image}
                alt={article.title}
              />
              <CardContent>
                <Typography variant="h6">{article.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {article.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
