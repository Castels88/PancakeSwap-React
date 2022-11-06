import "../../SCSS-Modules/BoxNFT.css";

const BoxNFT = ({ props }) => {
  return (
    <div className="container-box__NFT">
      <div className="container-banner-NFT">
        <img
          className="banner-NFT"
          src={props.banner_image_url}
          alt={props.name}
        />
      </div>
      <div className="container-NFT__name">
        <div className="container-img-NFT">
          <img className="img-NFT" src={props.image_url} alt={props.name}></img>
        </div>
        <div className="container__Name">
          <h3>{props.name}</h3>
        </div>
      </div>
      <div className="container-volume">
        <p className="p-volume">Volume</p>
      </div>
    </div>
  );
};

export default BoxNFT;
