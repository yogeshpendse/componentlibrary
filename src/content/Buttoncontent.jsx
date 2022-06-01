import "../components/Buttons/Button.css";
import Codesnnippet from "../utilities/Codesnnippet";
import "./content.css";

export const Buttoncontent = () => {
  const code = `
    <button className="btn btn--primary"> primary button </button>
    <button className="btn btn--secondary">secondary button</button>
    `;
  const code1 = `
        <button className="btn btn--olprimary">outline-primary</button>
        <button className="btn btn--olsecondary">outline-secondary</button>
    `;
  return (
    <>
      <h1 className="content-header">Buttons</h1>
      <div className="content-component">
        <button className="btn btn--primary" style={{ marginRight: "2rem" }}>
          primary button
        </button>
        <button className="btn btn--secondary">secondary button</button>
      </div>
      <div className="content-snippet">
        <Codesnnippet code={code} />
      </div>
      <div className="content-component">
        <button className="btn btn--olprimary" style={{ marginRight: "2rem" }}>
          outline-primary
        </button>
        <button className="btn btn--olsecondary">outline-secondary</button>
      </div>
      <div className="content-snippet">
        <Codesnnippet code={code1} />
      </div>
    </>
  );
};
