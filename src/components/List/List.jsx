import "./List.css";
export const List = () => {
  return (
    <div>
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
    </div>
  );
};
