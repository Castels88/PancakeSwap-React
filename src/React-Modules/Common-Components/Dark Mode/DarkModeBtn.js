export function DarkModeBtn(props) {
  return (
    <>
      <input
        onClick={props.switchTheme}
        type="checkbox"
        className="checkbox"
        id="checkbox"
      />
      <label htmlFor="checkbox" className="label">
        <i className="gg-moon"></i>
        <i className="gg-sun"></i>
        <div className="ball"></div>
      </label>
    </>
  );
}
