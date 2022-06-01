import "./Alert.css";
export const Alert = () => {
  return (
    <div>
      <h1>Alert</h1>
      <div className="alert alert--safe">
        <i className="bi bi-check-circle-fill" />
        <p>Your message here.</p>
        <div className="alert__close">
          <i class="bi bi-x" />
        </div>
      </div>
      <div className="alert alert--danger">
        <i className="bi bi-exclamation-circle-fill" />
        <p>Your message here.</p>
        <div className="alert__close">
          <i class="bi bi-x" />
        </div>
      </div>
    </div>
  );
};
