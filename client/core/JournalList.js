import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function JournalList(props) {

  const { settings } = useContext(GlobalContext);


  return (
    <>
      <div className="blinkBox">
        <a href="https://www.royalpublications.net/">
          <div className="text journalList">Journal List</div>
        </a>
      </div>
      {/* {!hide && (<div className="blinkBox">
        <a href="https://www.royalpublications.net/">
          <div className="text journalList">Journal List</div>
        </a>
      </div>)
      } */}
    </>
  );
}
