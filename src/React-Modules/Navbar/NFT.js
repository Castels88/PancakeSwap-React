import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import BoxNFT from './BoxNFT'
import Navbar from './Navbar'
import '../../SCSS-Modules/NFT.css'
import TopCollection from './TopCollection'
import Nft, { NftAssets } from './AssetsNft/Nft'
import { NftAssetCard } from './AssetsNft/NftAssetCard'
import { Footer } from '../footer/footer'
import Faqs from './Faqs'
import useLocalStorage from 'use-local-storage'

const NFT = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light',
  )
  window.dispatchEvent(new Event('storage'))

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  const [nft, setNft] = useState([])
  const [topnft, setTopNft] = useState([])

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://opensea13.p.rapidapi.com/collections',
      params: { offset: '0', limit: '21' },
      headers: {
        'X-RapidAPI-Key': '01f9e7510amsh347f1bb7237e98fp161703jsnda15bdd2b1c0',
        'X-RapidAPI-Host': 'opensea13.p.rapidapi.com',
      },
    }
    axios
      .request(options)
      .then(function (response) {
        setNft(response.data.collections)
        console.log(response.data)
      })
      .catch(function (error) {
        console.error(error)
      })
  }, [])

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://opensea13.p.rapidapi.com/assets',
      params: {
        //   collection_slug: 'cryptopunks',
        order_direction: 'desc',
        limit: '10',
        include_orders: 'false',
      },
      headers: {
        'X-RapidAPI-Key': '01f9e7510amsh347f1bb7237e98fp161703jsnda15bdd2b1c0',
        'X-RapidAPI-Host': 'opensea13.p.rapidapi.com',
      },
    }

    axios
      .request(options)
      .then(function (response) {
        setTopNft(response.data.assets)
        console.log(response.data.assets)
      })
      .catch(function (error) {
        console.error(error)
      })
  }, [])

  return (
    <div className="darkswitch" data-theme={theme}>
      <Navbar switchTheme={switchTheme} />
      <div className="container-ul">
        <ul>
          <li>Overview</li>
          <li>Collections</li>
          <li>Activity</li>
        </ul>
      </div>
      <div className="container-header__NFT">
        <div className="container-title__subtitle">
          <h1>NFT Marketplace</h1>
          <h2>Buy and Sell NFTs on BNB Smart Chain</h2>
        </div>
        <div className="container-input__Header">
          <input type="text" placeholder="Search address" />
        </div>
      </div>
      <div className="container-newest-Collections">
        <h3>Newest Collections</h3>
        <div className="button">
          <a href="/NFT/collection">View All </a>
          <svg
            viewBox="0 0 24 24"
            color="primary"
            width="24px"
            xmlns="http://www.w3.org/2000/svg"
            className="sc-4ba21b47-0 elUESX"
          >
            <path
              d="M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z"
              fill="#1FC7D4"
            ></path>
          </svg>
        </div>
      </div>
      <div
        className="container-boxNFT"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          padding: '1rem 0',
          justifyContent: 'center',
          gap: '1rem',
        }}
      >
        {nft &&
          nft.map(
            (item, index) =>
              item.image_url !== null &&
              item.banner_image_url !== null && (
                <BoxNFT key={index} props={item} />
              ),
          )}
      </div>
      <div className="container-newest-Collections">
        <h3>Hot Collections</h3>
        <div className="button">
          <a href="/NFT/collection">View All </a>
          <svg
            viewBox="0 0 24 24"
            color="primary"
            width="24px"
            xmlns="http://www.w3.org/2000/svg"
            className="sc-4ba21b47-0 elUESX"
          >
            <path
              d="M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z"
              fill="#1FC7D4"
            ></path>
          </svg>
        </div>
      </div>
      <div
        className="container-boxNFT"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          padding: '1rem 0',
          justifyContent: 'center',
          gap: '1rem',
        }}
      >
        {topnft &&
          topnft.map(
            (item, index) =>
              item.collection?.image_url !== null &&
              item.collection?.banner_image_url !== null && (
                <TopCollection key={index} props={item} />
              ),
          )}
      </div>
      <NftAssets />
      <Faqs />
      <Footer switchTheme={switchTheme} />
    </div>
  )
}

export default NFT
