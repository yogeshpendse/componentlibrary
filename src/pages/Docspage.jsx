import { Navdoc } from "../componentsfordoc/Navdoc";
import { Overlaymenu } from "../utilities/Overlaymenu";
import "../components/Navbar/Navbar.css";
import "./Docspage.css";
import { Navbarcontent } from "../content/Navbarcontent";
import { Cardcontent } from "../content/Cardcontent";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Buttoncontent } from "../content/Buttoncontent";
import { Imagecontent } from "../content/Imagecontent";

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
            <li className="docsgrid__sidenavlink">lopside</li>
            <li className="docsgrid__sidenavlink">lopside</li>
            <li className="docsgrid__sidenavlink">lopside</li>
            <li className="docsgrid__sidenavlink">lopside</li>
            <li className="docsgrid__sidenavlink">lopside</li>
            <li className="docsgrid__sidenavlink">lopside</li>
            <li className="docsgrid__sidenavlink">lopside</li>
            <li className="docsgrid__sidenavlink">lopside</li>
            <li className="docsgrid__sidenavlink">lopside</li>
            <li className="docsgrid__sidenavlink">lopside</li>
            <li className="docsgrid__sidenavlink">lopside</li>
            <li className="docsgrid__sidenavlink">lopside</li>
            <li className="docsgrid__sidenavlink">lopside</li>
            <li className="docsgrid__sidenavlink">lopside</li>
            <li className="docsgrid__sidenavlink">lopside</li>
            <li className="docsgrid__sidenavlink">lopside_n</li>
          </ul>
        </div>
      </div>
      <div className="docsgrid__content">
        {checker === "navbar" && <Navbarcontent />}
        {checker === "cards" && <Cardcontent />}
        {checker === "buttons" && <Buttoncontent />}
        {checker === "image" && <Imagecontent />}
      </div>
      <Overlaymenu />
    </div>
  );
};
