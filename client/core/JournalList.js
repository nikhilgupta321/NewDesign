import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function JournalList(props) {

  const { settings } = useContext(GlobalContext);
  const [hide, setHide] = React.useState(false);


  useEffect(() => {
    const journals = ['www.botanyjournals.com', 'www.entomologyjournals.com', 'www.fishjournals.com', 'www.foodsciencejournal.com', 'www.chemicaljournals.com', 'www.chemistryjournal.in', 'www.pharmacyjournal.net', 'www.pharmacyjournal.in', 'www.biologyjournal.in']

    journals.includes(settings.domain) ? setHide(true) : setHide(false)
  
  }, [settings])

  return (
    <>
      {!hide && (<div className="blinkBox">
        <a href="https://www.royalpublications.net/">
          <div className="text journalList">Journal List</div>
        </a>
      </div>)
      }
    </>
  );
}
