import { ColorLens, Colorize } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getRandomColor } from "functions";
import { setColor } from "store/global";

const ColorPicker = () => {
  const dispatch = useDispatch();
  const { color } = useSelector((state) => state.global);
  const handleColor = () => dispatch(setColor({ color: getRandomColor() }));

  return (
    <div className="color-picker">
      <Button
        startIcon={<ColorLens />}
        color="secondary"
        sx={{ displayPrint: "none " }}
        variant="contained"
        onClick={() => setColor("#a210da")}
        size="small"
      >
        Default
      </Button>
      <Button
        startIcon={<Colorize />}
        style={{ marginLeft: 10 }}
        color="secondary"
        sx={{ displayPrint: "none " }}
        variant="contained"
        size="small"
        onClick={handleColor}
      >
        Random
      </Button>
      <h6 style={{ color, marginTop: 5 }}>{color}</h6>
    </div>
  );
};

export default ColorPicker;
