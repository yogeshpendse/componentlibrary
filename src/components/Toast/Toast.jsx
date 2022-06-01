import "./Toast.css";
export const Toast = () => {
  return (
    <div>
      <div className="toast toast--safe">
        <i className="bi bi-check-circle-fill" />
        <p>Success: Successfully uploaded.</p>
        <div className="toast__close">
          <i class="bi bi-x" />
        </div>
      </div>
      <div className="toast toast--danger">
        <i className="bi bi-exclamation-circle-fill" />
        <p>Error: There was an error.</p>
        <div className="toast__close">
          <i class="bi bi-x" />
        </div>
      </div>
    </div>
  );
};
