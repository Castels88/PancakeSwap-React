import "../../SCSS-Modules/BoxNFT.css";

const TopCollection = ({props}) => {
    return ( 
        <div className="container-box__NFT">
            <div className='container-banner-NFT'>
                <img className="banner-NFT" src={props.collection?.banner_image_url} alt={props.collection?.name} />
            </div>
            <div className='container-NFT__name'>
                <div className='container-img-NFT'><img className="img-NFT" src={props.collection?.image_url} alt={props.collection?.name}></img></div>
                <div className="container__Name">
                    <h3>{props.collection?.name}</h3>
                </div>
            </div>
            <div className='container-volume'>
                <p className='p-volume'>Volume</p>
            </div>
        </div>
     );
}
 
export default TopCollection;