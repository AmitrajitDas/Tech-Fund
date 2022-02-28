import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  prevContributionHeading: {
    position: "relative",
    fontWeight: "500",
    display: "block",
    textAlign: "center",
    fontSize: "3.6rem",
    marginTop: "2.5vw",
    color: theme.palette.primary.main,
  },
  prevContributionDescription: {
    position: "relative",
    fontWeight: "500",
    display: "block",
    textAlign: "center",
    left: "50%",
    transform: "translateX(-50%)",
    width: "40%",
    fontSize: "1.4rem",
    margin: "0 0 5vw",
    color: "#000",
    lineHeight: "125%",
  },
  tableContainer: {
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
    width: "89%",
    borderRadius: "15px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    marginBottom: "6vw",
  },
  tableHeading: {
    color: "#000",
    fontSize: "1.18rem",
    fontWeight: "600",
  },
  tableCell_id: {
    fontSize: "1.19rem",
    fontWeight: "400",
    width: "14vw",
  },
  tableCell_userName: {
    fontSize: "1.19rem",
    fontWeight: "500",
    width: "19vw",
  },
  tableCell_password: {
    fontSize: "1.19rem",
    fontWeight: "400",
    width: "21vw",
  },
  tableCell_date: {
    width: "17vw",
    fontSize: "1.19rem",
    fontWeight: "400",
  },
  seeDetailsBtn: {
    position: "relative",
    color: "#fff",
    textTransform: "none",
    fontWeight: "400",
    // fontSize: "1.57rem",
    fontSize: "1.15rem",
    fontFamily: "'Euclid Circular A', sans-serif",
    borderRadius: "100rem",
    padding: "0.4vw 1.8vw",
    border: "2px solid" + theme.palette.primary.main,
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: "#121ac9",
      border: "2px solid #121ac9",
    },
  },
}));