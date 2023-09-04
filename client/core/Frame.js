import React from "react";

export default function Frame(props) {
  return (
    <div>
      <div className="title frame-title text-xl text-gray-500">{props.title} <hr className=" border-gray-500" /></div>
      <div className="">{props.children}</div>
    </div>
  );
}
