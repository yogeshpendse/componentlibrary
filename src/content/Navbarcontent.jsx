import { Navbar } from "../components/Navbar/Navbar";
import Codesnnippet from "../utilities/Codesnnippet";
import "../components/Navbar/Navbar.css";
import "./content.css";
export const Navbarcontent = () => {
  const code = `
  <nav className="navbar">
	<div className="navbar__container">
		<div className="navbar__brand">Brand</div>
		<ul className="navbar__links">
			<li className="navbar__link">
				<a className="navbar__dlink" href="/">
					link1
				</a>
			</li>
			<li className="navbar__link">
				<a className="navbar__dlink" href="/">
					link2
				</a>
			</li>
			<li className="navbar__link">
				<a className="navbar__dlink" href="/">
					link3
				</a>
			</li>
		</ul>
		<div className="navbar__togglebox">
			<button className="navbar__toggle">
				<i className="bi bi-x"></i>
			</button>
		</div>
	</div>
	<div
		className="navbar__dropdown navbar__dropdown--open"
		>
		<ul className="navbar__dlinks">
			<li>
				<a className="navbar__dlink" href="/">
					link1
				</a>
			</li>
			<li>
				<a className="navbar__dlink" href="/">
					link2
				</a>
			</li>
			<li>
				<a className="navbar__dlink" href="/">
					link3
				</a>
			</li>
		</ul>
	</div>
</nav>
  `;
  return (
    <div>
      {/* <Link to={`/profile/${str}`}> */}
      <h1 className="content-header">Navbar</h1>
      <div className="content-component">
        <Navbar />
      </div>
      <div className="content-snippet">
        <Codesnnippet code={code} />
      </div>
    </div>
  );
};
