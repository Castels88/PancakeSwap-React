import Stoks from '../Navbar/Images/Stoks.webp'
import Pie from '../Navbar/Images/Pie.webp'
import Folder from '../Navbar/Images/Folder.webp'
import { SyrupPools } from './SyrupPools'
import { TopFarm } from './TopFarm'

export function EarnPassiveIncome(props) {
  return (
    <div className="Earn_p_i_big_contaniner">
        <svg
          viewBox="0 0 1660 48"
          preserveAspectRatio="none"
          color="text"
          xmlns="http://www.w3.org/2000/svg"
          className="sc-8a800401-0 fGhPpn svg-divisor"
        >
          <path d="M-346 48C174.985 46.1887 977.744 15.2453 1314 0H-346V48Z"></path>
        </svg>
      <div className="Earn_p_i_top_container">
        <div className="Earn_p_i_medium_container"></div>
        <div className="Earn_p_i_central_container">
          <div className="earn_p_i_img_container">
            <img className="earn_p_i_image1" src={Stoks} alt="" />
            <img className="earn_p_i_image2" src={Pie} alt="" />
            <img className="earn_p_i_image3" src={Folder} alt="" />
          </div>
          <div className="Earn_p_i_h2_container">
            <h2 className="Earn_p_i_h2">
              <span>Earn</span> passive income with crypto.
            </h2>
            <div className="Earn_p_i_text">
              PancakeSwap makes it easy to make your crypto work for you.
            </div>
            <div className="Earn_p_i_button_link">
              <button className="Earn_p_i_mainbuttons">Explore</button>
              <a className="Earn_p_i_link" href="http://">
                Learn
              </a>
            </div>
          </div>
        </div>
        <TopFarm switchTheme={props.switchTheme} />
        <SyrupPools switchTheme={props.switchTheme} />
      </div>
    </div>
  )
}
