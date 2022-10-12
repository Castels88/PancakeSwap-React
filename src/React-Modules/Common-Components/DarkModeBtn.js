import Luna from "../Navbar/Images/Luna.svg";
import Sole from "../Navbar/Images/Sole.svg";

const DarkModeBtn = (props) => {
  return (
    <>
      <input
        onClick={props.switchTheme}
        type="checkbox"
        className="checkbox"
        id="checkbox"
      />
      <label htmlFor="checkbox" className="label">
        <img
          className="Sun"
          src={Sole}
          style={{ fill: "yellow" }}
          alt="svg-Sole"
        ></img>
        <img className="Moon" src={Luna} alt="svg-Luna"></img>
        <div className="ball"></div>
      </label>
    </>
  );
};

export default DarkModeBtn;
