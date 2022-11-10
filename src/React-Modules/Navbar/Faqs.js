import { useState } from 'react'
import '../../SCSS-Modules/Faqs.css'

const Faqs = () => {
  const [openOne, setOpenOne] = useState(false)
  const [openTwo, setOpenTwo] = useState(false)
  const [openThree, setOpenThree] = useState(false)

  const handleClick = () => {
    setOpenOne(!openOne)
  }

  const handleClickTwo = () => {
    setOpenTwo(!openTwo)
  }

  const handleClickThree = () => {
    setOpenThree(!openThree)
  }

  return (
    <div className="container-box-faq">
      <div className="box-faq">
        <div className="container-h2-faqs">
          <h2>FAQs</h2>
        </div>
        <div className="box-first-faq">
          <div className="first-faq">
            <div className="header-first-faq">
              <div className="title-faq">I sold an NFT, where’s my BNB?</div>
              <div className="container-btn-faqs">
                {!openOne ? (
                  <button className="btn-faqs" onClick={handleClick}>
                    Details
                  </button>
                ) : (
                  <button className="btn-faqs" onClick={handleClick}>
                    Hide
                  </button>
                )}
                <svg
                  viewBox="0 0 24 24"
                  color="primary"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  className="sc-4ba21b47-0 elUESX"
                >
                  <path
                    d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"
                    fill="#1fc7d4"
                  ></path>
                </svg>
              </div>
            </div>
            {openOne ? (
              <div className="divisor-faqs">
                <p>
                  Trades are settled in WBNB, which is a wrapped version of BNB
                  used on BNB Smart Chain. That means that when you sell an
                  item, WBNB is sent to your wallet instead of BNB.
                </p>
                <p>
                  You can instantly swap your WBNB for BNB with no trading fees
                  on PancakeSwap.
                </p>
              </div>
            ) : null}
          </div>

          <div className="first-faq">
            <div className="header-first-faq">
              <div className="title-faq">
                How can I list my NFT collection on the Market?
              </div>
              <div className="container-btn-faqs">
                {!openTwo ? (
                  <button className="btn-faqs" onClick={handleClickTwo}>
                    Details
                  </button>
                ) : (
                  <button className="btn-faqs" onClick={handleClickTwo}>
                    Hide
                  </button>
                )}
                <svg
                  viewBox="0 0 24 24"
                  color="primary"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  className="sc-4ba21b47-0 elUESX"
                >
                  <path
                    d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"
                    fill="#1fc7d4"
                  ></path>
                </svg>
              </div>
            </div>
            {openTwo ? (
              <div className="divisor-faqs">
                <p>
                  In Phase 2 of the NFT Marketplace, collections must be
                  whitelisted before they may be listed.
                </p>
                <p>
                  We are now accepting applications from NFT collection owners
                  seeking to list their collections.
                </p>
                <p>
                  <a
                    href="https://docs.pancakeswap.finance/contact-us/nft-market-applications"
                    className="container-link-p"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Please apply here
                    <svg
                      viewBox="0 0 24 24"
                      color="primary"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sc-4ba21b47-0 ceTLum"
                      style={{ marginLeft: '.2rem' }}
                    >
                      <path
                        d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"
                        fill="#1fc7d4"
                      ></path>
                    </svg>
                  </a>
                </p>
              </div>
            ) : null}
          </div>

          <div className="first-faq">
            <div className="header-first-faq">
              <div className="title-faq">What are the fees?</div>
              <div className="container-btn-faqs">
                {!openThree ? (
                  <button className="btn-faqs" onClick={handleClickThree}>
                    Details
                  </button>
                ) : (
                  <button className="btn-faqs" onClick={handleClickThree}>
                    Hide
                  </button>
                )}
                <svg
                  viewBox="0 0 24 24"
                  color="primary"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  className="sc-4ba21b47-0 elUESX"
                >
                  <path
                    d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"
                    fill="#1fc7d4"
                  ></path>
                </svg>
              </div>
            </div>
            {openThree ? (
              <div className="divisor-faqs">
                <p>
                  100% of all platform fees taken by PancakeSwap from sales are
                  used to buy back and BURN CAKE tokens in our weekly CAKE
                  burns.
                </p>
                <p>
                  Platform fees: 2% is subtracted from NFT sales on the market.
                  Subject to change.Collection fees: Additional fees may be
                  taken by collection creators, once those collections are live.
                  These will not contribute to the CAKE burns.
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <a
        href="https://docs.pancakeswap.finance/contact-us/nft-market-applications"
        className="container-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Apply to NFT Marketplace!
        <svg
          viewBox="0 0 24 24"
          color="primary"
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
          className="sc-4ba21b47-0 ceTLum"
          style={{ marginLeft: '.2rem' }}
        >
          <path
            d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"
            fill="#1fc7d4"
          ></path>
        </svg>
      </a>
    </div>
  )
}

export default Faqs
