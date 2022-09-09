import Heading from "utils/Heading/Heading";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import workExperience from "data/workExperience";
import EjectIcon from "@mui/icons-material/Eject";

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    orientation="vertical"
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "#635ee7",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(13),
    //
    textDecoration: "none",
    textDecorationSkipInk: "auto",
    position: "relative",
    transition: "all 0.25s cubic-bezier(0.645,0.045,0.355,1)",
    display: "flex",
    WebkitBoxAlign: "center",
    alignItems: "center",
    width: "100%",
    // height: "var(--tab-height)",
    // padding: "0px 20px 2px",
    borderLeft: "2px solid var(--lightest-navy)",
    backgroundColor: "transparent",
    color: theme.palette.slate.main,
    // whiteSpace: "nowrap",
    outline: "0px",
    "&.Mui-selected": {
      color: theme.palette.secondary.main,
      // color: "#64ffda",
      backgroundColor: "rgba(116, 113, 192, 0.32)",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);

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

const ExperienceInfo = ({
  company,
  timeInterval = "avaliable soon.",
  skill,
  points,
}) => {
  return (
    <Grid container>
      {/* <Grid item xs={3}>
        <div
          style={{
            width: "60px",
            height: "60px",
            backgroundColor: "black",
          }}
        ></div>
      </Grid> */}
      <Grid item xs={12}>
        <Typography color="whitesmoke" variant="h6">
          {skill}
        </Typography>
        <Typography color="secondary">{`@${company}`}</Typography>
        <Typography variant="subtitle2" sx={{ mb: 3 }}>
          {timeInterval}
        </Typography>
        {points?.map((point, idx) => (
          <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
            <EjectIcon
              fontSize="20px"
              color="secondary"
              sx={{ transform: "rotate(90deg)", mr: 1, mb: 0 }}
            />
            <Typography variant="subtitle2" component="p">
              {point}
            </Typography>
          </Box>
        ))}
      </Grid>
    </Grid>
  );
};

function Experience() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => setValue(newValue);

  return (
    <div>
      <Heading questionNo={"4"} heading="Experience" />
      <Box
        my={4}
        sx={{
          // bgcolor: "background.paper",
          bgcolor: "transparent",
          display: "flex",
          width: "calc(80% + 100px)",
          mx: "auto",
        }}
      >
        <StyledTabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          {workExperience?.map((item, idx) => (
            <StyledTab key={idx} label={item.company} {...a11yProps(idx)} />
          ))}
        </StyledTabs>
        {workExperience?.map((item, idx) => (
          <TabPanel key={idx} value={value} index={idx}>
            <ExperienceInfo
              company={item.company}
              timeInterval={`${item.timeInterval.start} - ${item.timeInterval.end}`}
              skill={item.skill}
              points={item.points}
            />
          </TabPanel>
        ))}
      </Box>
    </div>
  );
}

export default Experience;
