import React, { useContext, useEffect } from "react";
import PageTitle from "./PageTitle";
import { GlobalContext } from "../context/GlobalContext";

function htmlDecode(input) {
  var e = document.createElement("textarea");
  e.innerHTML = input;
  // handle case of empty input
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}

export default function ContactPage(props) {
  const { settings } = useContext(GlobalContext);

  useEffect(() => {
    document.title = "Contact Us | " + settings.websitename;
  }, [settings]);

  return (
    <b>
      <div className="flex flex-col gap-5 p-10 text-2xl text-gray-600">
        <PageTitle title="CONTACT US" />
        <div
          dangerouslySetInnerHTML={{
            __html:
              typeof window !== "undefined" ? htmlDecode(settings.address) : "",
          }}
        ></div>
        WhatsApp your query
        <br />
        <div>
          <div className="text-2xl phoneno">
            <div>Phone:</div>
            <div>{`${settings.whatsup_number}`}</div>
            <img
              className="whatsapp-icon"
              src="/assets/images/whatsapp-icon.png"
            />
          </div>
        </div>
      </div>
    </b>
  );
}
