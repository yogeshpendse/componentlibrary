import { Image } from "../components/Image/Image";
import Codesnnippet from "../utilities/Codesnnippet";
import "./content.css";
export const Imagecontent = () => {
  const code = `
  <img
    src="./image"
    alt="image__name"
    className="img__responsive"
  />
  `;
  return (
    <>
      <h1 className="content-header">Image</h1>
      <div className="content-component">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Image />
        </div>
      </div>
      <div className="content-snippet">
        <Codesnnippet code={code} />
      </div>
    </>
  );
};
