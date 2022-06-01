import "./Cards.css";
export function Cards() {
  return (
    <>
      <div className="ecard">
        <div className="ecard__imagebox">
          <img
            className="ecard__image"
            src="https://images.pexels.com/photos/1166120/pexels-photo-1166120.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            alt="pizza"
          />
        </div>
        <div className="ecard__details">
          <p className="ecard__name">Pizza name</p>
          <p className="ecard__description">A simple description of pizza.</p>
        </div>
        <p className="ecard__price">256</p>
        <button className="ecard__addtocart">add to cart</button>,
        <button className="ecard__whishlist">
          <i className="bi bi-heart-fill"></i>
        </button>
      </div>
      <div className="vcard">
        <div className="vcard__imagebox">
          <img
            className="vcard__image"
            src="https://i.ytimg.com/vi/r9PeYPHdpNo/hq720.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&amp;rs=AOn4CLBQjPLdZ0CwGhT0txReEAVSnVHH5Q"
            alt="video"
          />
          <p className="vcard__timestamp">51 min</p>
          <button className="vcard__playlist">
            <i className="bi bi-list"></i>
          </button>
        </div>
        <div className="vcard__details">
          <p className="vcard__name">video details in here</p>
        </div>
        <a className="vcard__view" href="/">
          view
        </a>
      </div>
      <div className="hcard">
        <div className="hcard__imagebox">
          <img
            className="hcard__image"
            src="https://i.ytimg.com/vi/r9PeYPHdpNo/hq720.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&amp;rs=AOn4CLBQjPLdZ0CwGhT0txReEAVSnVHH5Q"
            alt="horizimage"
          />
        </div>
        <div className="hcard__details">
          <p className="hcard__name">Lorem ipsum dolor sit amet.</p>
          <p className="hcard__description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </>
  );
}
