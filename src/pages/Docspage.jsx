import { Navdoc } from "../componentsfordoc/Navdoc";
import { Overlaymenu } from "../utilities/Overlaymenu";
import "../components/Navbar/Navbar.css";
import "./Docspage.css";
import { Navbarcontent } from "../content/Navbarcontent";
export const Docspage = () => {
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
            <li className="docsgrid__sidenavlink">lopside_1</li>
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
            <li className="docsgrid__sidenavlink">lopside</li>
            <li className="docsgrid__sidenavlink">lopside</li>
            <li className="docsgrid__sidenavlink">lopside</li>
            <li className="docsgrid__sidenavlink">lopside_n</li>
          </ul>
        </div>
      </div>
      <div className="docsgrid__content">
        <Navbarcontent />
      </div>
      <Overlaymenu />
    </div>
  );
};
