import React from "react";
import "./Interest.css";
import Heading from "../../utils/Heading/Heading";
import staticData from "../../data/staticData";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box, IconButton, ImageListItemBar } from "@mui/material";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
function Interest() {
  return (
    <div name="interest" className="interest">
      <div className="container">
        <Heading questionNo="3" heading={staticData.interest.heading} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 4,
          }}
        >
          {/* <ImageList
            sx={{ width: "90%", height: 550 }}
            variant="quilted"
            cols={4}
            rowHeight={121}
          >
            {itemData.map((item) => (
              <ImageListItem
                key={item.img}
                cols={item.cols || 1}
                rows={item.rows || 1}
              >
                <img
                  {...srcset(item.img, 121, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar title={"Sprituality"} subtitle={item.author} />
              </ImageListItem>
            ))}
          </ImageList> */}
        </Box>
        <div className="interest_content">
          <div className="item1 medium">
            <h3>{staticData.interest.medium[0]}</h3>
          </div>
          <div className="item2 large">
            <h3>{staticData.interest.large}</h3>
          </div>
          <div className="item3 medium">
            <h3>{staticData.interest.medium[1]}</h3>
          </div>
          <div className="item4 small">
            <h3>{staticData.interest.small}</h3>
          </div>
          <div className="item5 tall">
            <h3>{staticData.interest.tall}</h3>
          </div>
          <div className="item6 wide">
            <h3>{staticData.interest.wide}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interest;

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",

    rows: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    rows: 2,
  },
  // {
  //   img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
  //   title: "Coffee",
  //   cols: 2,
  // },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    rows: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    cols: 2,
    rows: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    cols: 2,
  },
];
