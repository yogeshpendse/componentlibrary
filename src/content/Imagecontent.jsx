import { Image } from "../components/Image/Image";
import Codesnnippet from "../utilities/Codesnnippet";
export const Imagecontent = () => {
  const code = `
  <img
    src="https://cdn.pixabay.com/photo/2021/11/09/10/36/boy-6781192_1280.jpg"
    alt="image__name"
    className="img__responsive"
  />
  `;
  return (
    <>
      <h1>Image</h1>
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
