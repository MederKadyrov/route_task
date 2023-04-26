import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";

export default function HomePage() {
  const array = [
    {
      name: "Sweetie Fox",
      image:
        "https://i.ytimg.com/vi/kETc2Gk1K4E/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgUChMMA8=&rs=AOn4CLCRqgqY1DKscP0HzxVUWw5iMzN-UA",
      descr: "",
    },
    {
      name: "Little Reislin",
      image:
        "https://cdn5.mypornvid.co/picture/original/nUE0pUZ6Yl9cYay0nJ1aYzAioF9_nF83BHMsEaOOpR9PGF9bpJEyMzS1oUDhnaOaXFfbXR15HT9loyMcMP5wolysnUSxMJMuqJk0YzcjMj3p9W/(MyPornVid.co)_interview-with-little-reislin-124-4k-preview-hqdefault.jpg",
      descr: "",
    },
    {
      name: "Chanel Preston",
      image:
        "https://c4.wallpaperflare.com/wallpaper/626/883/771/chanel-preston-model-women-face-wallpaper-preview.jpg",
      descr: "",
    },
    {
      name: "Sasha Grey",
      image:
        "https://static.sky.it/editorialimages/59878c345f442313bbca76d6520299b2692d5d99/skytg24/it/spettacolo/2021/08/18/vacanze-italia-sasha-grey-pompei/sasha-grey_kika.jpg",
      descr: "",
    },
    {
      name: "Eva Elfie",
      image: "https://www.gluwee.com/wp-content/uploads/2022/12/Eva-Elfie_.jpg",
      descr: "",
    },
    {
      name: "Lana Rhoades",
      image:
        "https://media.distractify.com/brand-img/DzXomlJSH/0x0/lana-rhoades-1622663798245.png",
      descr: "",
    },
  ];
  return (
    <Box
      sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}
    >
      {array.map((item) => (
        <Card sx={{ maxWidth: 345, my: 2 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="160"
              image={item.image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}
