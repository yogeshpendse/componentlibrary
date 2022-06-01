import { List } from "../components/List/List";
import "../components/List/List.css";
import "./content.css";
import Codesnnippet from "../utilities/Codesnnippet";
export const Listcontent = () => {
  const code1 = `
<ul className="list">
  <div className="list__heading">List Heading</div>
  <li className="list__item">
    <span>List item 1</span>
  </li>
  <li className="list__item">
    <span>List item 2</span>
  </li>
  <li className="list__item">
    <span>List item 3</span>
  </li>
  <li className="list__item">
    <span>List item 4</span>
  </li>
  <li className="list__item">
    <span>List item 5</span>
  </li>
</ul>
    `;
  return (
    <div>
      <h1 className="content-header">List</h1>
      <div className="content-component">
        <List />
      </div>
      <div className="content-snippet">
        <Codesnnippet code={code1} />
      </div>
    </div>
  );
};
