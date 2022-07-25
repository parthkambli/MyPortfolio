import React from "react";
import "./skills.css";

export default function Skills() {
  return (
    <div className="container skills text-center">
      <h2> My Skills</h2>
      <div className="row d-flex justify-content-center">
        <div className="skill_col col-md-2 col-sm-3 col-6 my-2">
          <img
            src="https://i.ibb.co/8g94J1W/Html.png"
            alt="Html"
            className="skill_logo"
          />
        </div>
        <div className="skill_col col-md-2 col-sm-3 col-6 my-2">
          <img
            src="https://i.ibb.co/7gVgnpz/css.png"
            alt="css"
            className="skill_logo"
          />
        </div>
        <div className="skill_col col-md-2 col-sm-3 col-6 my-2">
          <img
            src="https://i.ibb.co/hLSjtJg/JS.png"
            alt="JS"
            className="skill_logo"
          />
        </div>
        <div className="skill_col col-md-2 col-sm-3 col-6 my-2">
          <img
            src="https://i.ibb.co/fG70ZW5/bootstrap.png"
            alt="bootstrap"
            className="skill_logo"
          />
        </div>
        <div className="skill_col col-md-2 col-sm-3 col-6 my-2">
          <img
            src="https://i.ibb.co/y4ymy9j/NodeJS.png"
            alt="NodeJS"
            className="skill_logo"
          />
        </div>
        <div className="skill_col col-md-2 col-sm-3 col-6 my-2">
          <img
            src="https://i.ibb.co/xHXqdpQ/Mongodb.png"
            alt="Mongodb"
            className="skill_logo"
          />
        </div>
        <div className="skill_col col-md-2 col-sm-3 col-6 my-2">
          <img
            src="https://i.ibb.co/Rcpkz34/React.png"
            alt="React"
            className="skill_logo"
          />
        </div>
        {/* <div className="col-md-2 col-sm-3 col-6 my-2">

        </div> */}
      </div>
    </div>
  );
}
