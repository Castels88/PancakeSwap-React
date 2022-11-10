import { Link } from "react-router-dom";
import ButtonConnectWallet from "../Common-Components/ButtonConnectWallet";
import bigBunny from "../Navbar/Images/bigBunny.svg";
import bunnyBlue from "../Navbar/Images/bunnyBlue.svg";
import { SettingsComponent } from "./SettingsComponent";
const Navbar = (props) => {
  return (
    <nav>
      <div className="Navbar_sinistra">
        <a href="/">
          <img src={bigBunny} alt="" />
          <div className="Navbar_logo">
            <Link to="/">PancakeSwap</Link>
          </div>
        </a>
        <div className="Navbar_bottoni">
          <ul className="Navbar_menuBtn">
            <li>
              <Link to="/swap">Trade</Link>
              <div className="Navbar_dropdown_content">
                <div className="Navbar_element">
                  <Link to="/swap">Swap</Link>
                </div>
                <div className="Navbar_element">
                  <a href="http://">Limit</a>
                </div>
                <div className="Navbar_element">
                  <a href="http://">Liquidity</a>
                </div>
                <div className="Navbar_element">
                  <a href="http://">Perpetual</a>
                  <svg
                    viewBox="0 0 24 24"
                    color="text"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sc-eaf7e66-0 mvupn"
                  >
                    <path d="M16.3 8.09014C15.91 8.48014 15.91 9.10014 16.3 9.49014L18.2 11.3901H9C8.45 11.3901 8 11.8401 8 12.3901C8 12.9401 8.45 13.3901 9 13.3901H18.2L16.3 15.2901C15.91 15.6801 15.91 16.3001 16.3 16.6901C16.69 17.0801 17.31 17.0801 17.7 16.6901L21.29 13.1001C21.68 12.7101 21.68 12.0801 21.29 11.6901L17.7 8.09014C17.31 7.70014 16.69 7.70014 16.3 8.09014ZM4 19.3901H11C11.55 19.3901 12 19.8401 12 20.3901C12 20.9401 11.55 21.3901 11 21.3901H4C2.9 21.3901 2 20.4901 2 19.3901V5.39014C2 4.29014 2.9 3.39014 4 3.39014H11C11.55 3.39014 12 3.84014 12 4.39014C12 4.94014 11.55 5.39014 11 5.39014H4V19.3901Z"></path>
                  </svg>
                </div>
              </div>
            </li>
          </ul>
          <ul className="Navbar_menuBtn">
            <li>
              <a href="https://pancakeswap.finance/swap">Earn</a>
              <div className="Navbar_dropdown_content">
                <div className="Navbar_element">
                  <a href="http://">Farms</a>
                </div>
                <div className="Navbar_element">
                  <a href="http://">Pools</a>
                </div>
              </div>
            </li>
          </ul>
          <ul className="Navbar_menuBtn">
            <li>
              <a href="https://pancakeswap.finance/swap">Win</a>
              <div className="Navbar_dropdown_content">
                <div className="Navbar_element">
                  <a href="http://">Trading Competition</a>
                </div>
                <div className="Navbar_element">
                  <a href="http://">Prediction (BETA) </a>
                </div>
                <div className="Navbar_element">
                  <a href="http://">Lottery</a>
                </div>
              </div>
            </li>
          </ul>
          <ul className="Navbar_menuBtn">
            <li>
              <Link to="/NFT">NFT</Link>
              <div className="Navbar_dropdown_content">
                <div className="Navbar_element">
                  <Link to="/NFT">Overview</Link>
                </div>
                <div className="Navbar_element">
                  <a href="http://">Collections </a>
                </div>
                <div className="Navbar_element">
                  <a href="http://">Activity</a>
                </div>
              </div>
            </li>
          </ul>
          <ul className="Navbar_menuBtn">
            <li>
              <a href="http://">...</a>
              <div className="Navbar_dropdown_content">
                <div className="Navbar_element">
                  <a href="http://">Info</a>
                </div>
                <div className="Navbar_element">
                  <a href="http://">IFO</a>
                </div>
                <div className="Navbar_element">
                  <a href="http://">Voting</a>
                </div>
                <div className="Navbar_element">
                  <a href="http://">Leaderboard</a>
                </div>
                <div className="Navbar_element">
                  <a href="http://">Blog</a>
                  <svg
                    viewBox="0 0 24 24"
                    color="text"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sc-eaf7e66-0 mvupn"
                  >
                    <path d="M16.3 8.09014C15.91 8.48014 15.91 9.10014 16.3 9.49014L18.2 11.3901H9C8.45 11.3901 8 11.8401 8 12.3901C8 12.9401 8.45 13.3901 9 13.3901H18.2L16.3 15.2901C15.91 15.6801 15.91 16.3001 16.3 16.6901C16.69 17.0801 17.31 17.0801 17.7 16.6901L21.29 13.1001C21.68 12.7101 21.68 12.0801 21.29 11.6901L17.7 8.09014C17.31 7.70014 16.69 7.70014 16.3 8.09014ZM4 19.3901H11C11.55 19.3901 12 19.8401 12 20.3901C12 20.9401 11.55 21.3901 11 21.3901H4C2.9 21.3901 2 20.4901 2 19.3901V5.39014C2 4.29014 2.9 3.39014 4 3.39014H11C11.55 3.39014 12 3.84014 12 4.39014C12 4.94014 11.55 5.39014 11 5.39014H4V19.3901Z"></path>
                  </svg>
                </div>
                <div className="Navbar_element">
                  <a href="http://">Docs</a>
                  <svg
                    viewBox="0 0 24 24"
                    color="text"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sc-eaf7e66-0 mvupn"
                  >
                    <path d="M16.3 8.09014C15.91 8.48014 15.91 9.10014 16.3 9.49014L18.2 11.3901H9C8.45 11.3901 8 11.8401 8 12.3901C8 12.9401 8.45 13.3901 9 13.3901H18.2L16.3 15.2901C15.91 15.6801 15.91 16.3001 16.3 16.6901C16.69 17.0801 17.31 17.0801 17.7 16.6901L21.29 13.1001C21.68 12.7101 21.68 12.0801 21.29 11.6901L17.7 8.09014C17.31 7.70014 16.69 7.70014 16.3 8.09014ZM4 19.3901H11C11.55 19.3901 12 19.8401 12 20.3901C12 20.9401 11.55 21.3901 11 21.3901H4C2.9 21.3901 2 20.4901 2 19.3901V5.39014C2 4.29014 2.9 3.39014 4 3.39014H11C11.55 3.39014 12 3.84014 12 4.39014C12 4.94014 11.55 5.39014 11 5.39014H4V19.3901Z"></path>
                  </svg>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="Navbar_destra">
        <img className="Navbar_bunny" src={bunnyBlue} alt="" />
        <div className="Navbar_money">$3.383</div>
        <div className="Navbar_language">
          <svg
            viewBox="0 0 24 24"
            color="textSubtle"
            xmlns="http://www.w3.org/2000/svg"
            className="sc-8a800401-0 cgeuTV"
          >
            <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z"></path>
          </svg>
          <div className="Navbar_dropdown_content">
            <div className="Navbar_element">
              <a href="http://">English</a>
            </div>
            <div className="Navbar_element">
              <a href="http://">Italian</a>
            </div>
            <div className="Navbar_element">
              <a href="http://">Portoguese</a>
            </div>
            <div className="Navbar_element">
              <a href="http://">German</a>
            </div>
            <div className="Navbar_element">
              <a href="http://">French</a>
            </div>
            <div className="Navbar_element">
              <a href="http://">Japanese</a>
            </div>
            <div className="Navbar_element">
              <a href="http://">Espaniol</a>
            </div>
            <div className="Navbar_element">
              <a href="http://">Filippin</a>
            </div>
            <div className="Navbar_element">
              <a href="http://">Ελληνικά</a>
            </div>
            <div className="Navbar_element">
              <a href="http://">বাংলা</a>
            </div>
          </div>
        </div>
        <SettingsComponent switchTheme={props.switchTheme} />
        <ButtonConnectWallet switchTheme={props.switchTheme} />
        <div className="navbar_menu_nascosto">
          <div className="navbar_menu_nascosto_icon">
            <a href="http://">
              <Link to="/swap">
                <svg
                  viewBox="0 0 24 24"
                  color="textSubtle"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  className="sc-6457768a-0 bQnrJn"
                >
                  <path d="M21.2628 15.8306C21.5556 16.1235 21.5556 16.5983 21.2628 16.8912L18.654 19.5H20.3789C20.7931 19.5 21.1289 19.8358 21.1289 20.25C21.1289 20.6642 20.7931 21 20.3789 21L16.8433 21C16.4291 21 16.0933 20.6642 16.0933 20.25V16.7145C16.0933 16.3002 16.4291 15.9645 16.8433 15.9645C17.2575 15.9645 17.5933 16.3002 17.5933 16.7145V18.4393L20.2021 15.8306C20.495 15.5377 20.9699 15.5377 21.2628 15.8306Z"></path>
                  <path d="M2.81293 7.78034C3.10583 8.07323 3.5807 8.07323 3.87359 7.78034L6.48235 5.17158L6.48235 6.89645C6.48235 7.31067 6.81814 7.64645 7.23235 7.64645C7.64656 7.64645 7.98235 7.31067 7.98235 6.89645L7.98235 3.36092C7.98235 3.16201 7.90333 2.97124 7.76268 2.83059C7.62203 2.68994 7.43126 2.61092 7.23235 2.61092L3.69682 2.61092C3.2826 2.61092 2.94682 2.9467 2.94682 3.36092C2.94682 3.77513 3.2826 4.11092 3.69682 4.11092H5.42169L2.81293 6.71968C2.52004 7.01257 2.52004 7.48744 2.81293 7.78034Z"></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.46203 20.5622C8.66377 20.5827 8.86846 20.5932 9.07561 20.5932C12.3893 20.5932 15.0756 17.9069 15.0756 14.5932C18.3893 14.5932 21.0756 11.9069 21.0756 8.59315C21.0756 5.69362 19.0189 3.27448 16.2847 2.71504C15.9185 2.64011 15.5402 2.59853 15.153 2.59363C15.1272 2.5933 15.1014 2.59314 15.0755 2.59314C11.7618 2.59314 9.07549 5.27943 9.07549 8.59314C5.76179 8.59314 3.07549 11.2794 3.07549 14.5931C3.07549 17.5962 5.28172 20.0839 8.16175 20.524C8.26107 20.5392 8.36118 20.5519 8.46203 20.5622ZM5.07549 14.5931C5.07549 12.384 6.86636 10.5931 9.07549 10.5931C9.19246 10.5931 9.30806 10.5981 9.42214 10.6079C10.0255 12.3008 11.3678 13.6431 13.0607 14.2465C13.0705 14.3606 13.0755 14.4762 13.0755 14.5931C13.0755 16.8023 11.2846 18.5931 9.07549 18.5931C6.86636 18.5931 5.07549 16.8023 5.07549 14.5931ZM11.0755 8.59314C11.0755 6.384 12.8664 4.59314 15.0755 4.59314C17.2846 4.59314 19.0755 6.384 19.0755 8.59314C19.0755 10.8023 17.2846 12.5931 15.0755 12.5931C12.8664 12.5931 11.0755 10.8023 11.0755 8.59314Z"
                  ></path>
                </svg>
              </Link>
              <span>Trade</span>
            </a>
          </div>
          <div className="navbar_menu_nascosto_icon">
            <a href="http://">
              <svg
                viewBox="0 0 24 24"
                color="textSubtle"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
                className="sc-6457768a-0 bQnrJn"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.4063 19.9329C12.066 19.9329 12.6742 19.779 13.207 19.5106V21.6632C12.6449 21.8378 12.0415 21.9329 11.4063 21.9329H7.00792C2.52538 21.9329 -0.374267 17.1964 1.66429 13.2043L3.70684 9.20426C4.30576 8.03138 5.25922 7.11243 6.39803 6.55101L5.46396 4.68288C5.08785 3.93066 5.54693 3.02913 6.3765 2.89087L11.6153 2.01773C12.5647 1.8595 13.3292 2.78847 12.9912 3.68962L11.9333 6.51092C13.1087 7.06815 14.094 8.00302 14.7074 9.20426L16.6114 12.9329H14.3657L12.9261 10.1138C12.2427 8.77534 10.8666 7.93292 9.36372 7.93292H9.05047C7.54759 7.93292 6.17153 8.77534 5.48805 10.1138L3.4455 14.1138C2.08646 16.7753 4.01956 19.9329 7.00792 19.9329H11.4063ZM10.6623 4.20415L7.70695 4.69671L8.32504 5.93291H10.014L10.6623 4.20415Z"
                ></path>
                <path d="M14.707 13.9329C14.4309 13.9329 14.207 14.1568 14.207 14.4329V15.4329C14.207 15.7091 14.4309 15.9329 14.707 15.9329H20.707C20.9832 15.9329 21.207 15.7091 21.207 15.4329V14.4329C21.207 14.1568 20.9832 13.9329 20.707 13.9329H14.707Z"></path>
                <path d="M15.207 17.4329C15.207 17.1568 15.4309 16.9329 15.707 16.9329H21.707C21.9832 16.9329 22.207 17.1568 22.207 17.4329V18.4329C22.207 18.7091 21.9832 18.9329 21.707 18.9329H15.707C15.4309 18.9329 15.207 18.7091 15.207 18.4329V17.4329Z"></path>
                <path d="M14.707 19.9329C14.4309 19.9329 14.207 20.1568 14.207 20.4329V21.4329C14.207 21.7091 14.4309 21.9329 14.707 21.9329L20.707 21.9329C20.9832 21.9329 21.207 21.7091 21.207 21.4329V20.4329C21.207 20.1568 20.9832 19.9329 20.707 19.9329L14.707 19.9329Z"></path>
                <path d="M9.9212 9.93292C9.9212 9.51871 9.58541 9.18292 9.1712 9.18292C8.75699 9.18292 8.4212 9.51871 8.4212 9.93292V10.2471C7.4372 10.4874 6.70692 11.3749 6.70692 12.4329C6.70692 13.6756 7.71427 14.6829 8.95691 14.6829H9.64423C10.0043 14.6829 10.3136 14.9388 10.381 15.2926C10.469 15.7548 10.1147 16.1829 9.64423 16.1829H8.89883C8.62969 16.1829 8.38118 16.0387 8.24765 15.805L8.1081 15.5608C7.90259 15.2012 7.44445 15.0762 7.08481 15.2817C6.72517 15.4872 6.60023 15.9454 6.80573 16.305L6.94528 16.5492C7.26526 17.1092 7.80531 17.4979 8.4212 17.6317V17.9329C8.4212 18.3471 8.75699 18.6829 9.1712 18.6829C9.58541 18.6829 9.9212 18.3471 9.9212 17.9329V17.6662C11.1913 17.5114 12.101 16.3061 11.8545 15.0119C11.6524 13.9507 10.7245 13.1829 9.64423 13.1829H8.95691C8.5427 13.1829 8.20692 12.8471 8.20692 12.4329C8.20692 12.0187 8.5427 11.6829 8.95691 11.6829H9.44357C9.71272 11.6829 9.96123 11.8271 10.0948 12.0608L10.2343 12.305C10.4398 12.6647 10.898 12.7896 11.2576 12.5841C11.6172 12.3786 11.7422 11.9205 11.5367 11.5608L11.3971 11.3166C11.0771 10.7566 10.5371 10.3679 9.9212 10.2341V9.93292Z"></path>
              </svg>
              <span>Earn</span>
            </a>
          </div>
          <div className="navbar_menu_nascosto_icon">
            <a href="http://">
              <svg
                viewBox="0 0 19 17"
                color="textSubtle"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
                className="sc-6457768a-0 bQnrJn"
              >
                <path d="M16.5 2h-2a2 2 0 00-2-2h-6a2 2 0 00-2 2h-2c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94A5.01 5.01 0 008.5 12.9V15h-3a1 1 0 100 2h8a1 1 0 100-2h-3v-2.1a5.01 5.01 0 003.61-2.96C16.58 9.63 18.5 7.55 18.5 5V4c0-1.1-.9-2-2-2zm-14 3V4h2v3.82C3.34 7.4 2.5 6.3 2.5 5zm7 6c-1.65 0-3-1.35-3-3V2h6v6c0 1.65-1.35 3-3 3zm7-6c0 1.3-.84 2.4-2 2.82V4h2v1z"></path>
              </svg>
              <span>Win</span>
            </a>
          </div>
          <div className="navbar_menu_nascosto_icon">
            <a href="http://">
              <Link to="/NFT">
                <svg
                  viewBox="0 0 24 24"
                  color="textSubtle"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  className="sc-6457768a-0 bQnrJn"
                >
                  <path d="M12.8533 3.39627C12.4633 2.75821 11.5366 2.75821 11.1467 3.39627L7.42977 9.47855C7.02255 10.1449 7.50212 11 8.28305 11H15.7169C16.4979 11 16.9774 10.1449 16.5702 9.47855L12.8533 3.39627ZM12 5.84L13.93 9H10.06L12 5.84ZM17.5 13C15.01 13 13 15.01 13 17.5C13 19.99 15.01 22 17.5 22C19.99 22 22 19.99 22 17.5C22 15.01 19.99 13 17.5 13ZM17.5 20C16.12 20 15 18.88 15 17.5C15 16.12 16.12 15 17.5 15C18.88 15 20 16.12 20 17.5C20 18.88 18.88 20 17.5 20ZM2.99999 19.5C2.99999 20.6046 3.89542 21.5 4.99999 21.5H8.99999C10.1046 21.5 11 20.6046 11 19.5V15.5C11 14.3954 10.1046 13.5 8.99999 13.5H4.99999C3.89542 13.5 2.99999 14.3954 2.99999 15.5V19.5ZM4.99999 15.5H8.99999V19.5H4.99999V15.5Z"></path>
                </svg>
                <span>NFT</span>
              </Link>
            </a>
          </div>
          <div className="navbar_menu_nascosto_icon">
            <a href="http://">
              <svg
                id="navbar_menu_nascosto_ultima_icona"
                viewBox="0 0 24 24"
                color="textSubtle"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
                className="sc-6457768a-0 bQnrJn"
              >
                <path d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
