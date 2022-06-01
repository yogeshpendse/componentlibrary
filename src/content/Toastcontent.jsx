import Codesnnippet from "../utilities/Codesnnippet";
import "./content.css";
import "../components/Toast/Toast.css";
export const Toastcontent = () => {
  const code1 = `
  <div className="content-component">
  <div className="toast toast--safe">
    <i className="bi bi-check-circle-fill"></i>
    <p>Success: Successfully uploaded.</p>
  </div>
  </div>
  `;
  const code2 = `
  <div className="content-component">
    <div className="toast toast--danger">
      <i className="bi bi-exclamation-circle-fill"></i>
      <p>Error: There was an error.</p>
    </div>
  </div>
  `;
  return (
    <div>
      <h1 className="content-header">Toast</h1>
      <div className="content-component">
        <div className="toast toast--safe">
          <i className="bi bi-check-circle-fill" />
          <p>Success: Successfully uploaded.</p>
          <div className="toast__close">
            <i class="bi bi-x" />
          </div>
        </div>
      </div>
      <div className="content-snippet">
        <Codesnnippet code={code1} />
      </div>
      <div className="content-component">
        <div className="toast toast--danger">
          <i className="bi bi-exclamation-circle-fill" />
          <p>Error: There was an error.</p>
          <div className="toast__close">
            <i class="bi bi-x" />
          </div>
        </div>
      </div>
      <div className="content-snippet">
        <Codesnnippet code={code2} />
      </div>
    </div>
  );
};

export default Toastcontent;
