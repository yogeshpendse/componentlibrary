import Codesnnippet from "../utilities/Codesnnippet";
import "./content.css";
import "../components/Alerts/Alert.css";

export const Alertcontent = () => {
  const code1 = `
<div className="alert alert--safe">
  <i className="bi bi-check-circle-fill"></i>
  <p>Your message here.</p>
  <div className="alert__close">
    <i class="bi bi-x"></i>
  </div>
</div>
  `;
  const code2 = `
<div className="alert alert--danger">
  <i className="bi bi-exclamation-circle-fill"></i>
  <p>Your message here.</p>
  <div className="alert__close">
    <i class="bi bi-x"></i>
  </div>
</div>
  `;
  return (
    <div>
      <h1 className="content-header">Alerts</h1>
      <div className="content-component">
        <div className="alert alert--safe">
          <i className="bi bi-check-circle-fill" />
          <p>Your message here.</p>
          <div className="alert__close">
            <i class="bi bi-x" />
          </div>
        </div>
      </div>
      <div className="content-snippet">
        <Codesnnippet code={code1} />
      </div>
      <div className="content-component">
        <div className="alert alert--danger">
          <i className="bi bi-exclamation-circle-fill"></i>
          <p>Your message here.</p>
          <div className="alert__close">
            <i class="bi bi-x"></i>
          </div>
        </div>
      </div>
      <div className="content-snippet">
        <Codesnnippet code={code2} />
      </div>
    </div>
  );
};
