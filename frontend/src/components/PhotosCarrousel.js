import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { PoseGroup } from "react-pose";

import Box from "../animations/Box";

function PhotosCarrousel(props) {
  return (
    <div className={props.classes.container}>
      <PoseGroup>
        {props.photos.map((photo, index) => {
          return (
            <Box key={photo.id} position={index} className={props.classes.card}>
              <Card>
                <img
                  src={photo.baseUrl}
                  className={props.classes.img}
                  alt="imagen"
                />
                <CardContent>
                  <Typography variant="caption" component="p">
                    {photo.filename}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          );
        })}
      </PoseGroup>
    </div>
  );
}

export default withStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: "1em 0",
  },
  img: {
    maxWidth: "100%",
    height: "auto",
  },
  card: {
    minWidth: "300px",
    marginRight: "1em",
  },
})(PhotosCarrousel);
