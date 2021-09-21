// import { useHistory } from "react-router-dom";
// const history = useHistory();

export const DateFunction = (dateObj) => {
  var day = dayWithSuffix(dateObj.getDate());
  var monthName = dateObj.toLocaleString("default", { month: "short" });
  var year = dateObj.getFullYear();
  var finalDate = day + " " + monthName + " " + year;
  return finalDate;
};

export const dayWithSuffix = (day) => {
  if (day > 3 && day < 21) {
    return day + "th";
  } else {
    switch (day % 10) {
      case 1:
        return day + "st";
      case 2:
        return day + "nd";
      case 3:
        return day + "rd";
      default:
        return day + "th";
    }
  }
};
