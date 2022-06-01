import Codesnnippet from "../utilities/Codesnnippet";
import "../components/Grid/Grid.css";
import "./content.css";
export const Gridcontent = () => {
  const code1 = `
  <div className="grid grid__col--2">
  <div className="parent__div">
    <img
      src="./image"
      alt="image name"
      className="img__responsive"
    />
  </div>
  <div className="parent__div">
    <img
      src="./image"
      alt="image name"
      className="img__responsive"
    />
  </div>
  <div className="parent__div">
    <img
      src="./image"
      alt="image name"
      className="img__responsive"
    />
  </div>
</div>
  `;
  const code2 = `
  <div className="grid grid__col--2">
  <div className="parent__div">
    <img
      src="./image"
      alt="image name"
      className="img__responsive"
    />
  </div>
  <div className="parent__div">
    <img
      src="./image"
      alt="image name"
      className="img__responsive"
    />
  </div>
  <div className="parent__div">
    <img
      src="./image"
      alt="image name"
      className="img__responsive"
    />
  </div>
  </div>
  `;
  return (
    <div>
      <h1 className="content-header">Gridcontent</h1>
      <div className="content-component">
        <div className="grid grid__col--2">
          <div style={{ height: "200px", width: "200px" }}>
            <img
              src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg"
              alt="sdfsdf"
              className="img__responsive"
            />
          </div>
          <div
            style={{
              height: "200px",
              width: "200px",
            }}
          >
            <img
              src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg"
              alt="sdfsdf"
              className="img__responsive"
            />
          </div>
          <div
            style={{
              height: "200px",
              width: "200px",
            }}
          >
            <img
              src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg"
              alt="sdfsdf"
              className="img__responsive"
            />
          </div>
        </div>
      </div>
      <div className="content-snippet">
        <Codesnnippet code={code1} />
      </div>
      <div className="content-component">
        <div className="grid grid__col--3">
          <div style={{ height: "200px", width: "200px" }}>
            <img
              src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg"
              alt="sdfsdf"
              className="img__responsive"
            />
          </div>
          <div
            style={{
              height: "200px",
              width: "200px",
            }}
          >
            <img
              src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg"
              alt="sdfsdf"
              className="img__responsive"
            />
          </div>
          <div
            style={{
              height: "200px",
              width: "200px",
            }}
          >
            <img
              src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg"
              alt="sdfsdf"
              className="img__responsive"
            />
          </div>
          <div style={{ height: "200px", width: "200px" }}>
            <img
              src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg"
              alt="sdfsdf"
              className="img__responsive"
            />
          </div>
          <div
            style={{
              height: "200px",
              width: "200px",
            }}
          >
            <img
              src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg"
              alt="sdfsdf"
              className="img__responsive"
            />
          </div>
          <div
            style={{
              height: "200px",
              width: "200px",
            }}
          >
            <img
              src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg"
              alt="sdfsdf"
              className="img__responsive"
            />
          </div>
        </div>
      </div>
      <div className="content-snippet">
        <Codesnnippet code={code2} />
      </div>
    </div>
  );
};
