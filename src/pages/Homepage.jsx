import { Link, useNavigate } from "react-router-dom";
import Codesnnippet from "../utilities/Codesnnippet";
import "./Homepage.css";

export const Homepage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="homenav">
        <Link className="homenav__home" to="/">
          bluecss
        </Link>
        <div className="homenav__links">
          <Link className="homenav__link" to="/docs/buttons">
            Docs
          </Link>
          <a
            className="homenav__link"
            href="https://github.com/yogeshpendse/componentlibrary/tree/development"
          >
            Github
          </a>
        </div>
      </div>
      <div className="hompage">
        <h1 className="hompage__header">bluecss</h1>
        <div className="hompage__description">
          <p>A simple way to build web pages efficiency.</p>
        </div>
        <div className="hompage__install">
          <h2 className="hompage__installheader">
            <i className="bi bi-gear-wide-connected" />
            &nbsp; Install
          </h2>
          <p className="hompage__installdesc">Link css to html.</p>
          <div className="hompage__code">
            <Codesnnippet
              code={`<link href="./example.css" rel="stylesheet"/>`}
            />
          </div>
          <p className="hompage__installdesc">Import stylesheet in css.</p>
          <div className="hompage__code">
            <Codesnnippet
              code={`@import url("https://bluecss.netlify.app/style.css");`}
            />
          </div>
          <button
            className="btn btn--primary"
            onClick={() => navigate("/docs/buttons")}
          >
            read docs
          </button>
        </div>
        <div className="hompage__sample">
          <h2 className="hompage__sampleheader">
            <i className="bi bi-mouse-fill" />
            &nbsp;Sample
          </h2>
          <p className="hompage__sampledesc">
            A sample of button using our css framework.
          </p>
          <div className="hompage__code">
            <Codesnnippet
              code={`<button className="btn btn--primary">read docs</button>`}
            />
          </div>
          <div className="hompage__grow" />
          <button
            className="btn btn--primary"
            onClick={() => navigate("/docs/buttons")}
          >
            read docs
          </button>
        </div>
      </div>
    </>
  );
};
