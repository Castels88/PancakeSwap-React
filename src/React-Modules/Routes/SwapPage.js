import Footer from "../footer/footer2";
import Navbar from "../Navbar/Navbar";
import "../../SCSS-Modules/swappage.css";
import { SettingsComponent } from "../Navbar/SettingsComponent";
import ButtonConnectWallet from "../Common-Components/ButtonConnectWallet";
import Help from "../Routes/IMG/Help.png";
import { Tokens } from "./Componets-from-Route/Tokens";
import CoinChart from "../API/tokens/Tokens.js";
import { useState } from "react";

export function SwapPage() {
  const [chartIsShow, setchartIsShow] = useState(true);
  // const [tableIsShow, setTableIsShow] = useState(true)

  return (
    <>
      <Navbar />

      <div className="swap_container">
        <div className="swap_link_container">
          <div className="swap_link">
            <a href="/">Swap</a>
          </div>
          <div className="swap_link">
            <a href="/">Limit</a>
          </div>
          <div className="swap_link">
            <a href="/">Liquidity</a>
          </div>
          <div className="swap_link">
            <a href="/">Perpetual</a>
          </div>
          <div className="swap_link">
            <a href="/">Bridge</a>
          </div>
        </div>
        <div className="swap_middle_container">
          {chartIsShow ? (
            <div className="swap_charts">
              <CoinChart />
            </div>
          ) : null}

          <div className="swap_table">
            <div className="swap_top_button">
              <button className="swap_button_one">
                <p className="swap-text">Swap</p>
              </button>
              <button className="swap_button_two">
                <p className="swap-text">StableSwap</p>
              </button>
            </div>
            <div className="swap_settings">
              <div
                onClick={() => setchartIsShow(!chartIsShow)}
                className="swap_settings_firstRow"
              >
                <div className="swap_chart_container">
                  <svg
                    id="swap_SVG"
                    viewBox="0 0 23 22"
                    color="textSubtle"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.5 1l-20 20"
                      strokeWidth="2"
                      stroke="currentColor"
                      strokeLinecap="round"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.033 19H19.5a1 1 0 100-2H9.033l-2 2zm3-3H18.5a1 1 0 001-1V6.533l-2 2V14h-2v-3.467l-2 2V14h-1.467l-2 2zm.936-8H10.5a1 1 0 00-1 1v.469L10.969 8zm-2 2L5.5 13.469V11a1 1 0 011-1h2.469zM4.5 14.469l-2 2V6a1 1 0 012 0v8.469z"
                    ></path>
                  </svg>
                </div>
                <div className="swap_group_icon">
                  <h2 className="swap_h2_text">Swap</h2>
                  <div className="swap_componet">
                    <SettingsComponent />
                  </div>
                  <div className="swap_rec_transaction">
                    <svg
                      id="swap_SVG_recTransaction"
                      viewBox="0 0 24 24"
                      color="textSubtle"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M13 3C8.03 3 4 7.03 4 12H2.20711C1.76165 12 1.53857 12.5386 1.85355 12.8536L4.54604 15.546C4.73751 15.7375 5.04662 15.7418 5.24329 15.5556L8.08805 12.8631C8.4164 12.5524 8.19646 12 7.74435 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.4314 19 9.98175 18.4782 8.81739 17.601C8.37411 17.267 7.74104 17.259 7.3486 17.6514C6.95725 18.0428 6.95413 18.6823 7.38598 19.0284C8.92448 20.2615 10.8708 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.28 15.54L17 14.33L13.5 12.25V8H12Z"></path>
                    </svg>
                  </div>
                  <div className="swap_refresh">
                    <svg
                      id="arrow_loading"
                      viewBox="0 0 24 24"
                      color="textSubtle"
                      width="27px"
                      xmlns="http://www.w3.org/2000/svg"
                      class="sc-4ba21b47-0 ebMyYP"
                    >
                      <path
                        stroke="none"
                        fill="#D7CAEC"
                        d="M16.2751 7.78995C13.932 5.44681 10.133 5.44681 7.78986 7.78995C7.02853 8.55128 6.51457 9.4663 6.24798 10.4351C6.24473 10.4499 6.24114 10.4646 6.23719 10.4793C6.17635 10.7064 6.12938 10.9339 6.09577 11.161C5.83159 12.9457 6.39255 14.7026 7.52624 15.9944C7.61054 16.0901 7.69842 16.1838 7.78986 16.2752C8.08307 16.5685 8.39909 16.825 8.7322 17.0448C9.25533 17.3892 9.84172 17.6568 10.4798 17.8278C10.7386 17.8971 10.9979 17.9484 11.2565 17.9825C12.9537 18.2061 14.6187 17.6866 15.8747 16.6415C16.0123 16.5265 16.1459 16.4044 16.2751 16.2752C16.2848 16.2655 16.2947 16.2561 16.3047 16.2469C17.0123 15.531 17.5491 14.627 17.8283 13.5851C17.9712 13.0517 18.5196 12.7351 19.053 12.878C19.5865 13.021 19.9031 13.5693 19.7602 14.1028C19.3141 15.7676 18.3745 17.1684 17.1409 18.1899C16.1883 18.9822 15.0949 19.5189 13.9515 19.8002C11.8607 20.3147 9.6028 19.9749 7.7328 18.7809C7.06855 18.3579 6.47841 17.8432 5.97519 17.2589C5.12341 16.2738 4.55173 15.1302 4.26015 13.9324C4.01698 12.9416 3.96104 11.8931 4.12168 10.8379C4.36697 9.20484 5.1183 7.63309 6.37564 6.37574C9.49984 3.25154 14.5652 3.25154 17.6894 6.37574L18.2332 6.91959L18.2337 5.49951C18.2338 5.05769 18.5921 4.69964 19.034 4.69979C19.4758 4.69995 19.8338 5.05825 19.8337 5.50007L19.8325 9.03277L19.8322 9.8325L19.0325 9.83249L18.9401 9.83249C18.8146 9.85665 18.6854 9.85665 18.5599 9.83248L15.5005 9.83245C15.0587 9.83245 14.7005 9.47427 14.7005 9.03244C14.7005 8.59062 15.0587 8.23245 15.5005 8.23245L16.7176 8.23246L16.2751 7.78995Z"
                      ></path>
                      <defs>
                        <path
                          id="arrow"
                          stroke="none"
                          fill="none"
                          d="M16.2751 7.78995C13.932 5.44681 10.133 5.44681 7.78986 7.78995C7.02853 8.55128 6.51457 9.4663 6.24798 10.4351C6.24473 10.4499 6.24114 10.4646 6.23719 10.4793C6.17635 10.7064 6.12938 10.9339 6.09577 11.161C5.83159 12.9457 6.39255 14.7026 7.52624 15.9944C7.61054 16.0901 7.69842 16.1838 7.78986 16.2752C8.08307 16.5685 8.39909 16.825 8.7322 17.0448C9.25533 17.3892 9.84172 17.6568 10.4798 17.8278C10.7386 17.8971 10.9979 17.9484 11.2565 17.9825C12.9537 18.2061 14.6187 17.6866 15.8747 16.6415C16.0123 16.5265 16.1459 16.4044 16.2751 16.2752C16.2848 16.2655 16.2947 16.2561 16.3047 16.2469C17.0123 15.531 17.5491 14.627 17.8283 13.5851C17.9712 13.0517 18.5196 12.7351 19.053 12.878C19.5865 13.021 19.9031 13.5693 19.7602 14.1028C19.3141 15.7676 18.3745 17.1684 17.1409 18.1899C16.1883 18.9822 15.0949 19.5189 13.9515 19.8002C11.8607 20.3147 9.6028 19.9749 7.7328 18.7809C7.06855 18.3579 6.47841 17.8432 5.97519 17.2589C5.12341 16.2738 4.55173 15.1302 4.26015 13.9324C4.01698 12.9416 3.96104 11.8931 4.12168 10.8379C4.36697 9.20484 5.1183 7.63309 6.37564 6.37574C9.49984 3.25154 14.5652 3.25154 17.6894 6.37574L18.2332 6.91959L18.2337 5.49951C18.2338 5.05769 18.5921 4.69964 19.034 4.69979C19.4758 4.69995 19.8338 5.05825 19.8337 5.50007L19.8325 9.03277L19.8322 9.8325L19.0325 9.83249L18.9401 9.83249C18.8146 9.85665 18.6854 9.85665 18.5599 9.83248L15.5005 9.83245C15.0587 9.83245 14.7005 9.47427 14.7005 9.03244C14.7005 8.59062 15.0587 8.23245 15.5005 8.23245L16.7176 8.23246L16.2751 7.78995Z"
                        ></path>
                        <clipPath id="arrow-clip">
                          <use xlinkHref="#arrow"></use>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="swap_settings_secondRow">
                <p className="swap-text">Trade tokens in an instant</p>
              </div>
            </div>
            <div className="swap_tokes_container">
              <div className="swap_tokes_sub_container">
                <div className="swap_BNB_container">
                  <Tokens />
                  <div className="swap_input_container">
                    <input
                      className="swap_input"
                      type="text"
                      name=""
                      id=""
                      placeholder="0.0"
                    />
                  </div>
                  <div className="swap_freccia_container">
                    <button className="swap_freccia_button">
                      <svg
                        className="swap_SVG_freccia"
                        viewBox="0 0 24 24"
                        color="primary"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="swap_BNB_container">
                  <Tokens />
                  <div className="swap_input_container">
                    <input
                      className="swap_input"
                      type="text"
                      name=""
                      id=""
                      placeholder="0.0"
                    />
                  </div>
                  <div className="swap_container_risk">
                    <button className="swap_button_risk">
                      <p className="swap_text_button">SCAN RISK</p>
                    </button>
                    <svg
                      className="swap_SVG_copy"
                      viewBox="0 0 24 24"
                      color="textSubtle"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z"></path>
                    </svg>
                  </div>
                  <div className="swap_tolerance_container">
                    <p className="swap_text_font2">Slippage Tolerance</p>
                    <p className="swap_text_font3">0.5%</p>
                  </div>
                </div>
              </div>
              <div className="swap_conteiner_component">
                <ButtonConnectWallet />
              </div>
            </div>
          </div>
        </div>

        <div className="swap_bottom_container">
          <div className="swap_bottom_left_container">
            <div className="swap_bot_left_elem">
              <button className="swap_bot_left_button">
                <p className="swap_text_font4">V2</p>
              </button>
              <a
                className="swap_bot_left_link"
                href="https://v1exchange.pancakeswap.finance/#/swap"
              >
                <p className="swap-text">V1 (old)</p>
              </a>
            </div>
            <div className="swap_bot_right_elem">
              <a
                className="swap_bot_right_link"
                href="https://docs.bnbchain.org/docs/bnbIntro"
              >
                <p className="swap_text_font5">Convert ERC-20 to BEP-20</p>
              </a>
              <svg
                className="swap_bot_SVG"
                viewBox="0 0 24 24"
                color="primary"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path>
              </svg>
            </div>
          </div>
          <div className="swap_bottom_right_container">
            <div className="swap_bottom_right_element_SVG_container">
              <div className="swap_bottom_purple_container">
                <p className="swap_text_font4">Need Help?</p>
              </div>
              <svg
                className="swap_bottom_SVG_purple"
                viewBox="0 0 16 16"
                color="text"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 16V0C0 0 3 1 6 1C9 1 16 -2 16 3.5C16 10.5 7.5 16 0 16Z"></path>
              </svg>
            </div>
            <img src={Help} alt="help img" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
