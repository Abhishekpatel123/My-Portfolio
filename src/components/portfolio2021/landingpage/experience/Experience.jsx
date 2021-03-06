import Heading from "utils/Heading/Heading";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      style={{ width: "100%" }}
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const ExprienceInfo = ({
  company,
  timeInterval = "avaliable soon.",
  skill,
}) => {
  return (
    <Grid container maxWidth>
      <Grid item xs={3}>
        <div
          style={{
            width: "60px",
            height: "60px",
            backgroundColor: "black",
          }}
        ></div>
      </Grid>
      <Grid item xs={9}>
        <Typography>{skill}</Typography>
        <Typography>{company}</Typography>
        <Typography>{timeInterval}</Typography>
      </Grid>
    </Grid>
  );
};

function Experience() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Heading heading="Experience" />
      <Box
        my={4}
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          <Tab label="Doof Research Private Limited" {...a11yProps(0)} />
          <Tab label="Auric Touch LLP" {...a11yProps(1)} />
          <Tab label="Solera Life Science Private Limited" {...a11yProps(2)} />
          <Tab label="Dr. Goyal's Dental and TMJ Care." {...a11yProps(3)} />
          <Tab label="Medisure Incinerators" {...a11yProps(4)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <ExprienceInfo
            company="Doof Reaserach Private Limited. Internship"
            timeInterval="Jan 2021 - Present (11 month)"
            skill="MERN STACK DEVELOPER"
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ExprienceInfo
            company="Auric Touch LLP"
            skill="MERN STACK DEVELOPER"
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ExprienceInfo
            company="Solera Life Science Private Limited"
            skill="React Developer"
          />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <ExprienceInfo
            company="Dr. Goyal's Dental and TMJ Care."
            skill="MERN STACK DEVELOPER"
          />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <ExprienceInfo
            company="Medisure Incinerators"
            skill="NODE DEVELOPER"
          />
        </TabPanel>
      </Box>
    </div>
  );
}

export default Experience;
