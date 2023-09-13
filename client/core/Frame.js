import React from "react";

export default function Frame(props) {
  return (
    <div>
      <div className="text-xl text-gray-500 bg-gray-200 title frame-title">{props.title} <hr className="border-gray-500 " /></div>
      <div className="">{props.children}</div>
    </div>
  );
}
