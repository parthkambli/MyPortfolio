import React from "react";

export default function Social(props) {
  return (
    <div className="col-md-1 col-sm-3 col-2 my-2">
      <a
        href={props.link}
        target="blank"
        className="text-muted text-decoration-none"
      >
        <i className={props.icon}></i>
      </a>
    </div>
  );
}
