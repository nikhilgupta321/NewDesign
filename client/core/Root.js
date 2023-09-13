import React, { useContext, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import Email from "./Email";
import Certificate from "./CertificateImg";
import Contact from "./Contact";
import JournalList from "./JournalList";
import Whatsapp from "./Whatsapp";
import WhatsappSticky from "./WhatsappSticky";
import SearchBar from "./SearchBar";
import CoverPage from "./CoverPage";
import { GlobalContext } from "../context/GlobalContext";
import Indexing from "./Indexing";

export default function Root() {
  const { settings } = useContext(GlobalContext);
  const [hide, setHide] = React.useState(false);

  useEffect(() => {
    const journals = ['www.botanyjournals.com', 'www.entomologyjournals.com', 'www.fishjournals.com', 'www.foodsciencejournal.com', 'www.chemicaljournals.com', 'www.chemistryjournal.in', 'www.pharmacyjournal.net', 'www.pharmacyjournal.in', 'www.biologyjournal.in']
    journals.includes(settings.domain) ? setHide(false) : setHide(true)
  }, [settings])


  return (
    <div>
      <div className="text-base" id="container">
        <div className="flex flex-col items-center justify-center w-full gap-12 lg:flex-row">

          <img className="w-40 h-40" src="/assets/images/logo.png" />
          <div className="flex flex-col justify-center w-full gap-12 text-center">

            <div
              className="text-4xl font-bold text-center lg:hidden text-cyan-500"
              dangerouslySetInnerHTML={{
                __html: settings.formatted_journal_name,
              }}
            ></div>
            <div
              // className="hidden text-4xl font-bold text-center lg:block lg:text-left text-cyan-500"
              className="justify-center hidden px-32 text-4xl font-bold text-center lg:block lg:text-center text-cyan-500"
              dangerouslySetInnerHTML={{
                __html: settings.websitename,
              }}
            ></div>
          </div>
        </div>
        <hr class="mt-2 mb-4 border-2 border-black cursor-pointer duration-500" />
        <div className="flex flex-col text-xl lg:flex-row lg:gap-9">
          <div className="py-2 text-center border-t-2 border-cyan-500 lg:border-none">
            <Link to="/">HOME</Link>
          </div>
          <div className="py-2 text-center border-t-2 border-cyan-500 lg:border-none">
            <Link to="/board">EDITORIAL BOARD</Link>
          </div>
          <div className="py-2 text-center border-t-2 border-cyan-500 lg:border-none">
            <Link to="/instructions">INSTRUCTIONS</Link>
          </div>
          <div className="py-2 text-center border-t-2 border-cyan-500 lg:border-none">
            <Link to="/archives">ARCHIVES</Link>
          </div>
          {!hide && (<div className="py-2 text-center border-t-2 border-cyan-500 lg:border-none">
            <Link to="/article">SUBMIT ONLINE</Link>
          </div>)}
          <div className="py-2 text-center border-t-2 border-cyan-500 lg:border-none">
            <Link to="/indexing">INDEXING</Link>
          </div>

          <div className="py-2 text-center border-cyan-500 border-y-2 lg:border-none">
            <Link to="/contact">CONTACT US</Link>
          </div>
          <div className="py-2 text-cyan-500 border-y-2 lg:border-none back">
            {settings && settings.issn && settings.issn.split(",")[0]}
          </div>
        </div>
        {/* <img id="header-img" src="/assets/images/header.jpg" /> */}
        <div id="body-container-desktop">
          <div id="page-content">
            <Outlet />
          </div>
          <div className="sidebar">
            {/* <JournalList /> */}
            {/* <Whatsapp /> */}
            {/* <CoverPage /> */}
            {/* <Certificate /> */}
            <Email />
            <CoverPage />
            <Certificate />
            <SearchBar />
            <Indexing />
            <Contact />
          </div>
        </div>
        <div id="body-container-mobile">
          {/* <WhatsappSticky /> */}
          {/* <JournalList /> */}
          <SearchBar />
          <Outlet />
          <Email />
          <Contact />
          <CoverPage />
          <Certificate />
        </div>
      </div>
      <div id="footer">
        Copyright © {new Date().getFullYear()}. All Rights Reserved.
      </div>
    </div>
  );
}
