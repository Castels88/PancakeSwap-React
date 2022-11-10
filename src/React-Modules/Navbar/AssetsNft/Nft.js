import { useEffect, useState } from "react";
import { NftAssetCard } from "./NftAssetCard";

export function NftAssets() {
  const [assets, setAssets] = useState(null);

  async function fetchNFT() {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "01f9e7510amsh347f1bb7237e98fp161703jsnda15bdd2b1c0",
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
