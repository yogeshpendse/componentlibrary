// http://placehold.jp/250x250.png
export const Avatar = () => {
  return (
    <div>
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
  );
};
