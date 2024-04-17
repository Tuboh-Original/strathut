import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import MuiPhoneNumber from "material-ui-phone-number-2";

const StratTextField = styled(TextField)({
  "& label": {
    color: "rgba(255, 255, 255, 0.50)",
    fontSize: "1.5rem",
  },
  "& label.Mui-focused": {
    color: "#FFFFFF",
    fontSize: "1.5rem",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#FFFFFF",
  },
  "& .MuiInput-underline": {
    borderBottomColor: "rgba(255, 255, 255, 0.50)",
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "rgba(255, 255, 255, 0.50)",
  },
  "& .MuiInput-input": {
    fontSize: "1.75rem",
    color: "rgba(255, 255, 255, 0.50)",
    lineHeight: 1,
    scrollbarWidth: "none",
    scrollbarColor: "rgba(0, 0, 0, 0)",
  },
  "& .MuiInput-input:focus": {
    color: "rgb(255, 255, 255)",
  },
  "& .MuiInput-input:hover": {
    color: "rgb(255, 255, 255)",
  },
  "& .MuiInput-root": {
    marginTop: "2rem",
    color: "rgb(255, 255, 255)",
  },
  "& .MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before": {
    borderBottom: "2px solid rgb(255, 255, 255)",
  },

  "& .MuiTypography-root": { color: "rgb(255, 255, 255)" },
});

const StratPhoneNumberField = styled(MuiPhoneNumber)({
  "& label": {
    color: "rgba(255, 255, 255, 0.50)",
    fontSize: "1.5rem",
  },
  "& label.Mui-focused": {
    color: "#FFFFFF",
    fontSize: "1.5rem",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#FFFFFF",
  },
  "& .MuiInput-underline": {
    borderBottomColor: "rgba(255, 255, 255, 0.50)",
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "rgba(255, 255, 255, 0.50)",
  },
  "& .MuiInput-input": {
    fontSize: "1.75rem",
    color: "rgba(255, 255, 255, 0.50)",
    lineHeight: 1,
    scrollbarWidth: "none",
    scrollbarColor: "rgba(0, 0, 0, 0)",
  },
  "& .MuiInput-input:focus": {
    color: "rgb(255, 255, 255)",
  },
  "& .MuiInput-input:hover": {
    color: "rgb(255, 255, 255)",
  },
  "& .MuiInput-root": {
    marginTop: "2rem",
    color: "rgb(255, 255, 255)",
  },
  "& .MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before": {
    borderBottom: "2px solid rgb(255, 255, 255)",
  },

  "& .MuiTypography-root": { color: "rgb(255, 255, 255)" },
});

export { StratTextField, StratPhoneNumberField };
