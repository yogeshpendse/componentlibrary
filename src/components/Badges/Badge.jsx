import "./Badge.css";
export const Badge = () => {
  return (
    <>
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
    </>
  );
};
