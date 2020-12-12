import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  muiButton: {
    backgroundColor: "#00CC00",
    color: "#FFFFFF",
  },
  textField: {
    backgroundColor: "#FFFFFF",
  },
  root: {
    width: 575,
    padding: 60,
    marginTop: 50,
  },
  formContainer: {
    margin: "auto",
    width: "36%",
    padding: 10,
    backgroundColor: "#f8f8f8",
  },
  buttonPanel: {
    float: "right",
    padding: 20
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.9)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));
