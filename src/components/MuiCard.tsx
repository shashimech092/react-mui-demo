import React from "react";
import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia } from "@mui/material";

const MuiCard = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia component='img' height='140' image="https://source.unsplash.com/random" alt="unspalsh image"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            React is Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Sit, explicabo quisquam nulla odio qui nesciunt! Saepe, enim et
            architecto eaque, autem perspiciatis, labore corporis fuga fugit in
            delectus. Minus, incidunt.
          </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;
