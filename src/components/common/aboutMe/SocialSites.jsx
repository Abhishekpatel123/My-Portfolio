import { makeStyles } from "@mui/styles";
import React from "react";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
// import loadData from "services/loadData";
// import { useQuery } from "react-query";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "auto",
    borderRadius: 5,
  },
}));

function SocialSites() {
  const classes = useStyles();
  const { global } = useSelector((state) => state.global);
  console.log(global, "global");
  // const URL = `http://localhost:1337/global`;
  // const { data, isLoading } = useQuery("global", loadData(URL));
  // useEffect(() => !isLoading && dispatch(setGlobal(data)), [isLoading]);

  return (
    <Box
      p={2}
      sx={{
        bgcolor: "#fdfddf",
        boxShadow: 2,
        mt: 4,
        width: { xs: "96%", md: "80%" },
      }}
      className={classes.root}
    >
      <Box>
        <h3 style={{ marginBottom: 10 }}>Social Icons</h3>
        <ul>
          {
            // isLoading ? (
            //   <h1>Loading</h1>
            // ) :
            global?.socialNetworks?.map(({ id, title, url, icon }) => (
              <li
                key={id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 4,
                }}
              >
                <img
                  width="20px"
                  height="20px"
                  src={"http://localhost:1337" + icon.url}
                />
                <h6 style={{ marginLeft: 10 }}>
                  <a style={{ letterSpacing: 2 }} href={url} target="_blank">
                    {title}
                  </a>
                </h6>
              </li>
            ))
          }
        </ul>
      </Box>
      <Box>
        {[
          "Creative",
          "Team Work",
          "The Learner",
          "Remote working hire me abhipatel8719@mgmail.com",
        ].map((item) => (
          <h5 key={item}>{item}</h5>
        ))}
      </Box>
    </Box>
  );
}

// <PersonSvg />

export default SocialSites;
