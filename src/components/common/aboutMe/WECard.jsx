import {
  Card,
  CardActions,
  CardContent,
  Box,
  Chip,
  Typography,
  Button,
} from "@mui/material";
import { CheckCircleOutlineOutlined } from "@mui/icons-material";

const WECard = ({ info }) => {
  const { company, timeInterval, skill, btnStatus, btnColor } = info;
  return (
    <Card>
      <CardContent>
        {/* information */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          style={{
            borderLeft: "5px solid orange",
            paddingLeft: 10,
            borderRadius: 3,
          }}
        >
          <Box>
            <h4 style={{ marginBottom: 5 }}>{company}</h4>
            <Box>
              <Chip style={{ marginRight: 5 }} size="small" label={skill} />
              {/* <Chip
                  style={{ marginRight: 5 }}
                  size="small"
                  label="MANAGEMENT"
                /> */}
            </Box>
          </Box>
          <Box></Box>
        </Box>

        {/* descreption */}
        <Box mt={2}>
          <Typography variant="caption" color="gray">
            Worked on backend using node and also in frontend using react .
            Currently I am managing both frontend and backend
          </Typography>
        </Box>
        {/* timing */}
        <Box display="flex" mt={2} justifyContent="space-between">
          <Box>
            <Typography variant="body2" color="gray">
              Start Time
            </Typography>
            <h5>{timeInterval?.start}</h5>
          </Box>
          <Box>
            <Typography variant="body2" color="gray">
              End Time
            </Typography>
            <h5>{timeInterval?.end}</h5>
          </Box>
        </Box>
      </CardContent>

      {/* actions */}
      <CardActions
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography></Typography>
        <Button
          variant="contained"
          size="small"
          disableTouchRipple
          startIcon={<CheckCircleOutlineOutlined />}
          style={{
            color: btnColor.color,
            cursor: "auto",
            backgroundColor: btnColor.bgcolor,
            fontSize: 12,
          }}
        >
          {btnStatus}
        </Button>
      </CardActions>
    </Card>
  );
};

export default WECard;
