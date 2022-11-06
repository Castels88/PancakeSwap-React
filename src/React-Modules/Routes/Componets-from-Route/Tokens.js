/* eslint-disable array-callback-return */
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import BUSD from '../IMG/BUSD.png'
import BTCB from '../IMG/BTCB.png'

export function Tokens() {
  const [Toogle, setToogle] = useState(false)
  const [crypto, setCrypto] = useState([])
  const [search, setSearch] = useState('')

  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
  useEffect(() => {
    axios.get(url).then((res) => {
      setCrypto(res.data)
    })
  }, [])

  function handleSearch(event) {
    setSearch(event.target.value)
  }
  return (
    <>
      <div onClick={() => setToogle(!Toogle)} className="swap_SVG_container">
        <svg
          className="swap_SVG_BNB"
          viewBox="0 0 96 96"
          color="text"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="48" cy="48" r="48" fill="#F0B90B"></circle>
          <path
            d="M30.9008 25.9057L47.8088 16.0637L64.7169 25.9057L58.5007 29.5416L47.8088 23.3355L37.117 29.5416L30.9008 25.9057ZM64.7169 38.3179L58.5007 34.682L47.8088 40.8881L37.117 34.682L30.9008 38.3179V45.5897L41.5926 51.7958V64.2079L47.8088 67.8438L54.0251 64.2079V51.7958L64.7169 45.5897V38.3179ZM64.7169 58.0018V50.7301L58.5007 54.366V61.6377L64.7169 58.0018ZM69.1305 60.572L58.4386 66.7781V74.0499L75.3467 64.2079V44.524L69.1305 48.1599V60.572ZM62.9143 32.1118L69.1305 35.7477V43.0195L75.3467 39.3836V32.1118L69.1305 28.4759L62.9143 32.1118ZM41.5926 69.411V76.6828L47.8088 80.3187L54.0251 76.6828V69.411L47.8088 73.0469L41.5926 69.411ZM30.9008 58.0018L37.117 61.6377V54.366L30.9008 50.7301V58.0018ZM41.5926 32.1118L47.8088 35.7477L54.0251 32.1118L47.8088 28.4759L41.5926 32.1118ZM26.4872 35.7477L32.7034 32.1118L26.4872 28.4759L20.271 32.1118V39.3836L26.4872 43.0195V35.7477ZM26.4872 48.1599L20.271 44.524V64.2079L37.1791 74.0499V66.7781L26.4872 60.572V48.1599Z"
            fill="white"
          ></path>
        </svg>
        <p className="swap-text">BNB</p>
        <svg
          className="swap_SVG_cake"
          viewBox="0 0 24 24"
          color="text"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
        </svg>
        <svg
          className="swap_SVG_copy"
          viewBox="0 0 24 24"
          color="textSubtle"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z"></path>
        </svg>
      </div>
      {Toogle && (
        <div className="appear_second">
          <div className="presentation_second"></div>
          <div className="settings_menu_2">
            <div className="settings_top">
              Select a Token
              <svg
                className="exit2"
                onClick={() => setToogle(!Toogle)}
                viewBox="0 0 24 24"
                color="rgb(138,225,225)"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z"
                ></path>
              </svg>
            </div>
            <div className="swap_tokens_middle_container">
              <div className="swap_tokens_input_container">
                <input
                  className="swap_tokens_input"
                  type="text"
                  name="search-crypto"
                  id="search"
                  onChange={handleSearch}
                  placeholder="Search name or paste address"
                />
              </div>
              <div className="swap_tokens_buttons_container">
                <p className="swap_text_font6">Common tokens</p>
                <div className="swap_tokens_buttons">
                  <button className="tokens_button">
                    <svg
                      className="swap_SVG_BNB"
                      viewBox="0 0 96 96"
                      color="text"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="48" cy="48" r="48" fill="#F0B90B"></circle>
                      <path
                        d="M30.9008 25.9057L47.8088 16.0637L64.7169 25.9057L58.5007 29.5416L47.8088 23.3355L37.117 29.5416L30.9008 25.9057ZM64.7169 38.3179L58.5007 34.682L47.8088 40.8881L37.117 34.682L30.9008 38.3179V45.5897L41.5926 51.7958V64.2079L47.8088 67.8438L54.0251 64.2079V51.7958L64.7169 45.5897V38.3179ZM64.7169 58.0018V50.7301L58.5007 54.366V61.6377L64.7169 58.0018ZM69.1305 60.572L58.4386 66.7781V74.0499L75.3467 64.2079V44.524L69.1305 48.1599V60.572ZM62.9143 32.1118L69.1305 35.7477V43.0195L75.3467 39.3836V32.1118L69.1305 28.4759L62.9143 32.1118ZM41.5926 69.411V76.6828L47.8088 80.3187L54.0251 76.6828V69.411L47.8088 73.0469L41.5926 69.411ZM30.9008 58.0018L37.117 61.6377V54.366L30.9008 50.7301V58.0018ZM41.5926 32.1118L47.8088 35.7477L54.0251 32.1118L47.8088 28.4759L41.5926 32.1118ZM26.4872 35.7477L32.7034 32.1118L26.4872 28.4759L20.271 32.1118V39.3836L26.4872 43.0195V35.7477ZM26.4872 48.1599L20.271 44.524V64.2079L37.1791 74.0499V66.7781L26.4872 60.572V48.1599Z"
                        fill="white"
                      ></path>
                    </svg>
                    <p className="swap-text">BNB</p>
                  </button>
                  <button className="tokens_button">
                    <img className="swap_SVG_BNB" src={BUSD} alt="" />
                    <p className="swap-text">BUSD</p>
                  </button>
                  <button className="tokens_button">
                    <svg
                      className="swap_SVG_cake"
                      viewBox="0 0 96 96"
                      color="text"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="48"
                        cy="48"
                        r="48"
                        fill="url(#paint0_linear_10493)"
                      ></circle>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M47.858 79.875c-9.342-.007-16.866-2.249-22.124-6.275-5.321-4.075-8.144-9.857-8.144-16.4 0-6.304 2.817-10.85 6.004-13.923 2.497-2.408 5.253-3.95 7.172-4.838a99.818 99.818 0 01-1.46-4.876c-.648-2.41-1.284-5.237-1.284-7.309 0-2.452.535-4.915 1.977-6.829 1.523-2.021 3.816-3.104 6.574-3.104 2.156 0 3.986.8 5.42 2.179 1.369 1.318 2.28 3.07 2.91 4.895 1.106 3.208 1.537 7.238 1.657 11.26h2.643c.12-4.022.551-8.052 1.657-11.26.63-1.825 1.541-3.577 2.91-4.895 1.434-1.38 3.264-2.18 5.42-2.18 2.758 0 5.051 1.084 6.574 3.105 1.442 1.914 1.977 4.377 1.977 6.83 0 2.071-.636 4.898-1.284 7.308a99.707 99.707 0 01-1.46 4.876c1.919.888 4.675 2.43 7.172 4.838 3.187 3.073 6.004 7.619 6.004 13.923 0 6.543-2.823 12.325-8.144 16.4-5.257 4.026-12.782 6.268-22.124 6.275h-.047z"
                        fill="#633001"
                      ></path>
                      <path
                        d="M36.573 18.653c-4.04 0-5.9 3.045-5.9 7.256 0 3.347 2.16 10.05 3.048 12.66.199.587-.114 1.23-.686 1.458-3.238 1.29-12.794 6.012-12.794 16.828 0 11.393 9.711 19.983 27.619 19.997h.043c17.908-.014 27.619-8.604 27.619-19.997 0-10.816-9.556-15.539-12.794-16.828a1.176 1.176 0 01-.686-1.458c.887-2.61 3.048-9.313 3.048-12.66 0-4.211-1.86-7.256-5.9-7.256-5.816 0-7.266 8.322-7.37 17.254a1.084 1.084 0 01-1.074 1.08h-5.73c-.59 0-1.067-.484-1.074-1.08-.103-8.932-1.553-17.254-7.369-17.254z"
                        fill="#D1884F"
                      ></path>
                      <path
                        d="M47.903 73.202c-13.158 0-27.64-7.115-27.662-16.326v.043c0 11.403 9.727 19.997 27.662 19.997s27.661-8.594 27.661-19.997v-.043c-.022 9.21-14.503 16.326-27.661 16.326z"
                        fill="#FEDC90"
                      ></path>
                      <path
                        d="M40.592 54.047c0 3.11-1.455 4.73-3.25 4.73-1.794 0-3.249-1.62-3.249-4.73 0-3.11 1.455-4.73 3.25-4.73 1.794 0 3.249 1.62 3.249 4.73zM61.712 54.047c0 3.11-1.455 4.73-3.25 4.73-1.794 0-3.248-1.62-3.248-4.73 0-3.11 1.454-4.73 3.249-4.73 1.794 0 3.25 1.62 3.25 4.73z"
                        fill="#633001"
                      ></path>
                      <defs>
                        <linearGradient
                          id="paint0_linear_10493"
                          x1="48"
                          y1="0"
                          x2="48"
                          y2="96"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#53DEE9"></stop>
                          <stop offset="1" stop-color="#1FC7D4"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                    <p className="swap-text">CAKE</p>
                  </button>
                  <button className="tokens_button">
                    <img className="swap_SVG_BNB" src={BTCB} alt="" />
                    <p className="swap-text">BTCB</p>
                  </button>
                </div>
              </div>
              <div className="swap_crypto_container">
                {crypto &&
                  crypto
                    .filter((item) => {
                      if (setSearch === '') {
                        return item
                      } else if (
                        item.name
                          .toLowerCase()
                          .includes(search.toLocaleLowerCase())
                      ) {
                        return item
                      }
                    })
                    .map((value, index) => (
                      <div key={index} className="crypto_container">
                        <img
                          className="swap_SVG_BNB"
                          src={value.image}
                          alt=""
                        />
                        <div>
                          <h2 className="crypto_symbol_font">{value.symbol}</h2>
                          <div className="crypto_name_font">{value.name}</div>
                        </div>
                      </div>
                    ))}
              </div>
              <div className="tokens_bottom_container">
                <button className="tokens_button">
                  <p className="swap_text_font7">Manage Tokens</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
