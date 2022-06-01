import "../components/Badges/Badge.css";
import Codesnnippet from "../utilities/Codesnnippet";
import "./content.css";
export const Badgedoc = () => {
  const code = `
<div className="badge-parent">
  <span className="badge badge__success"></span>
</div>
<div className="badge-parent">
  <span className="badge badge__danger"></span>
</div>
<div className="badge-parent">
  <span className="badge badge__success"></span>
</div>
<div className="badge-parent">
  <span className="badge badge__number badge__success">2</span>
</div>
  `;
  return (
    <>
      <h1 className="content-header">Badges</h1>
      <div className="content-component">
        <div style={{ display: "flex", gap: "3rem" }}>
          <div className="badge-parent">
            <span className="badge badge__success"></span>
          </div>
          <div className="badge-parent">
            <span className="badge badge__danger"></span>
          </div>
          <div className="badge-parent">
            <span className="badge badge__success"></span>
          </div>
          <div className="badge-parent">
            <span className="badge badge__number badge__success">2</span>
          </div>
        </div>
      </div>
      <div className="content-snippet">
        <Codesnnippet code={code} />
      </div>
    </>
  );
};
