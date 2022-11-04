import { useEffect, useState } from "react";
import { NftAssetCard } from "./NftAssetCard";

export function Nft() {
  const [assets, setAssets] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchNFT() {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "750ece70demshb30267f1d64abbfp14b182jsnd6fa68a2b93c",
        "X-RapidAPI-Host": "opensea13.p.rapidapi.com",
      },
    };

    fetch(
      "https://opensea13.p.rapidapi.com/assets?&order_direction=desc&limit=20&include_orders=false",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setAssets(response.assets);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    fetchNFT();
  }, []);

  return (
    <div className="NftAssetsContainer">
      <div className="AssetsHeader">
        <div className="headerleft">
          <h3>Newest Arrivals</h3>
        </div>
        <div className="headerright">
          <button>View All</button>
        </div>
      </div>
      <div className="NftAssets">
        {assets &&
          assets.map(
            (asset, index) =>
              asset.image_url && (
                <NftAssetCard
                  key={index}
                  title={asset.collection.name}
                  name={asset.name}
                  image={asset.image_url}
                />
              )
          )}
      </div>
    </div>
  );
}
