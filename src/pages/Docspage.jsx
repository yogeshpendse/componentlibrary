import { Navdoc } from "../componentsfordoc/Navdoc";
import { Overlaymenu } from "../utilities/Overlaymenu";
import "../components/Navbar/Navbar.css";
import "./Docspage.css";
import { Navbarcontent } from "../content/Navbarcontent";
import { Cardcontent } from "../content/Cardcontent";
import { useNavigate, useParams } from "react-router-dom";
import { Buttoncontent } from "../content/Buttoncontent";
import { Imagecontent } from "../content/Imagecontent";
import { Modalcontent } from "../content/Modalcontent";
import { Toastcontent } from "../content/Toastcontent";
import { Alertcontent } from "../content/Alertcontent";
import { Badgedoc } from "../content/Badgedoc";
import { Listcontent } from "../content/Listcontent";
import { Gridcontent } from "../content/Gridcontent";
import { Avatarcontent } from "../content/Avatarcontent";
import { Inputcontent } from "../content/Inputcontent";

export const Docspage = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const checker = id || "buttons";
  return (
    <div className="docsgrid">
      <div className="docsgrid__navbar">
        <div className="docsgrid__navcontainer">
          <Navdoc />
        </div>
      </div>
      <div className="docsgrid__sidenav">
        <div className="docsgrid__sidenavbox">
          <ul className="docsgrid__sidenavlinks">
            <li
              className="docsgrid__sidenavlink"
              onClick={() => navigate("/docs/navbar")}
            >
              navbar
            </li>
            <li
              className="docsgrid__sidenavlink"
              onClick={() => navigate("/docs/cards")}
            >
              cards
            </li>
            <li
              className="docsgrid__sidenavlink"
              onClick={() => navigate("/docs/buttons")}
            >
              buttons
            </li>
            <li
              className="docsgrid__sidenavlink"
              onClick={() => navigate("/docs/image")}
            >
              image
            </li>
            <li
              className="docsgrid__sidenavlink"
              onClick={() => navigate("/docs/modal")}
            >
              modal
            </li>
            <li
              className="docsgrid__sidenavlink"
              onClick={() => navigate("/docs/toast")}
            >
              toast
            </li>
            <li
              className="docsgrid__sidenavlink"
              onClick={() => navigate("/docs/alert")}
            >
              alert
            </li>
            <li
              className="docsgrid__sidenavlink"
              onClick={() => navigate("/docs/badge")}
            >
              badge
            </li>
            <li
              className="docsgrid__sidenavlink"
              onClick={() => navigate("/docs/list")}
            >
              list
            </li>
            <li
              className="docsgrid__sidenavlink"
              onClick={() => navigate("/docs/grid")}
            >
              grid
            </li>
            <li
              className="docsgrid__sidenavlink"
              onClick={() => navigate("/docs/avatar")}
            >
              avatar
            </li>
            <li
              className="docsgrid__sidenavlink"
              onClick={() => navigate("/docs/input")}
            >
              input
            </li>
          </ul>
        </div>
      </div>
      <div className="docsgrid__content">
        {checker === "navbar" && <Navbarcontent />}
        {checker === "cards" && <Cardcontent />}
        {checker === "buttons" && <Buttoncontent />}
        {checker === "image" && <Imagecontent />}
        {checker === "modal" && <Modalcontent />}
        {checker === "toast" && <Toastcontent />}
        {checker === "alert" && <Alertcontent />}
        {checker === "badge" && <Badgedoc />}
        {checker === "list" && <Listcontent />}
        {checker === "grid" && <Gridcontent />}
        {checker === "avatar" && <Avatarcontent />}
        {checker === "input" && <Inputcontent />}
      </div>
      <Overlaymenu />
    </div>
  );
};
