import React from "react";

export default function PageTitle(props) {
  return (
    <>
      <div className="title font-bold mt-5 text-gray-600 text-4xl">{props.title}</div>
      <hr class="border-cyan-700 mb-2 border-2 border-black w-20 ml-2" />
    </>
  )
}
