import "./content.css";
import "../components/Avatar/Avatar.css";
import Codesnnippet from "../utilities/Codesnnippet";
export const Avatarcontent = () => {
  const code1 = `
<div>
  <img className="avatar" src="./image" alt="jpg" />
  <img className="avatar avatar--sm" src="./image" alt="jpg" />
  <img className="avatar avatar--xs" src="./image" alt="jpg" />
</div>
    `;
  return (
    <div>
      <h1 className="content-header">Avatar</h1>
      <div className="content-component">
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <img
            className="avatar"
            src="http://placehold.jp/250x250.png"
            alt="jpg"
          />
          <img
            className="avatar avatar--sm"
            src="http://placehold.jp/250x250.png"
            alt="jpg"
          />
          <img
            className="avatar avatar--xs"
            src="http://placehold.jp/250x250.png"
            alt="jpg"
          />
        </div>
      </div>
      <div className="content-snippet">
        <Codesnnippet code={code1} />
      </div>
    </div>
  );
};
