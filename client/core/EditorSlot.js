import React from "react";
import { decode } from "html-entities";

export default function EditorSlot(props) {
  const editorPicture = props.editor.picture || "avatar.png";
  return (
    <div className="flex ">
      <div className=" p-2">
        <img className="rounded-full image-size" src={`assets/editors/${editorPicture}`} />
      </div>
      <div className="w-5/6 p-4">
        <div className="text-2xl text-blue-400 ">
          {props.editor.name}
          {/* {props.editor.degree !== "" && <>({props.editor.degree})</>} */}
        </div>
        {/* <div
          dangerouslySetInnerHTML={{ __html: decode(props.editor.post) }}
        ></div> */}
        <div className="text-xl"><i>{props.editor.content}</i></div>
        {/* <div>
          <b>Email: </b>
          {props.editor.email}
        </div>
        <div>
          <b>Phone: </b>
          {props.editor.phone}
        </div> */}
      </div>
    </div>
  );
}