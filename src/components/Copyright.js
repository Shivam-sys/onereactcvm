import React from "react";

export default function Copyright(props) {
  let year = "2021-2022";
  return (
    <div>
      <p className="h5 text-center">
        Copyright - {props.author} - {year}
      </p>
    </div>
  );
}
