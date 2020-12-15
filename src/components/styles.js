import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  muiButton: {
    backgroundColor: "#DAA520",
    color: "#000000",
  },
  textField: {
    backgroundColor: "#FFFFFF",
  },
  root: {
    width: 575,
    padding: 50,
    marginTop: 30,
  },
  formContainer: {
    margin: "auto",
    width: "36%",
  },
  buttonPanel: {
    paddingLeft: 60,
    width: '100%'
  },
  label: {
    color: '#000000'
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
  login: {
    float: 'left',
    width: '100%'
  },
  register: {
    float: 'right',
    width: '50%'
  }
}));
