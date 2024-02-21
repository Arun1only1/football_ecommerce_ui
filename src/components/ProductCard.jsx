import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack, Chip } from "@mui/material";
const ProductCard = () => {
  return (
    <Card
      sx={{
        width: "25%",
        boxShadow:
          " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
      }}
    >
      <img
        src="https://www.hindustantimes.com/ht-img/img/2023/09/18/1600x900/32_inch_LED_TV_1695036349175_1695036371179.JPG"
        alt=""
        style={{
          width: "100%",
          marginTop: "1rem",
        }}
      />
      <CardContent>
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <Typography gutterBottom variant="h5" component="div">
            F55
          </Typography>
          <Chip label="Samsung" color="secondary" variant="outlined" />
        </Stack>

        <Typography variant="body2" color="text.secondary" textAlign="justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aperiam
          doloremque laudantium mollitia repellendus facilis tenetur doloribus
          officiis consequuntur hic porro eius amet deserunt, saepe tempora
          quidem provident voluptatem nihil.
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="success" fullWidth>
          Explore
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
