import React from "react";
import partyPopper from "../assets/partyPopper.jpg";

const AgeTeller = ({ date }) => {
  const calculateAge = date => {
    let today = new Date().getTime();
    let birthDate = new Date(date).getTime();
    let diff = Math.abs(today - birthDate);
    let days = Math.floor(diff / (1000 * 3600 * 24));
    let years = Math.floor(days / 365);
    days = days - years * 365;
    let months = Math.floor(days / 31);
    days -= months * 31;
    debugger;
    return `${years} years ${months} months ${days}days`;
  };
  return (
    <div>
      <h3>{date}</h3>
      <h4>Congrats! Your age is {calculateAge(date)}</h4>
      <img src={partyPopper} className="partyPopper" alt="loading" />
    </div>
  );
};

export default AgeTeller;
