import { Input } from "../components/Input/Input";
import Codesnnippet from "../utilities/Codesnnippet";
import "./content.css";
export const Inputcontent = () => {
  const code = `
  <input className="input" />
  `;
  return (
    <div>
      <h1 className="content-header">Input</h1>
      <div className="content-component">
        <Input />
      </div>
      <div className="content-snippet">
        <Codesnnippet code={code} />
      </div>
    </div>
  );
};
