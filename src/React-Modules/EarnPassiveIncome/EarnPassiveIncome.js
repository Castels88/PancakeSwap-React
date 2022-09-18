import Stoks from "../Navbar/Images/Stoks.webp"
import Pie from "../Navbar/Images/Pie.webp"
import Folder from "../Navbar/Images/Folder.webp"
import { SyrupPools } from "./SyrupPools"
import { TopFarm } from "./TopFarm"
export function EarnPassiveIncome(){
return(
    <section>
        <div class="Earn_p_i_big_contaniner">
            <div class="Earn_p_i_top_container">
                <div className="Earn_p_i_medium_container" >
                    <svg viewbox="0 0 1660 48" preserveaspectratio="none" color="text" width="20px"
                        xmlns="http://www.w3.org/2000/svg" class="sc-6457768a-0 bYguAj">
                        <path d="M-346 48C174.985 46.1887 977.744 15.2453 1314 0H-346V48Z"></path>
                    </svg>
                </div>
                <div className="Earn_p_i_central_container">
                    <div className="earn_p_i_img_container">
                        <img className="earn_p_i_image1" src={Stoks}/>
                        <img className="earn_p_i_image2" src={Pie}  />
                        <img className="earn_p_i_image3" src={Folder} />
                    </div>
                    <div className="Earn_p_i_h2_container" >
                        <h2 class="Earn_p_i_h2"><span>Earn</span> passive income with crypto.</h2>
                        <div class="Earn_p_i_text">PancakeSwap makes it easy to make your crypto work for you.</div>
                        <div class="Earn_p_i_button_link">
                            <button class="Earn_p_i_mainbuttons">Explore</button>
                            <a class="Earn_p_i_link" href="http://">Learn</a>
                        </div>
                    </div>
                </div>
                <TopFarm/>
                <SyrupPools/>
            </div>
        </div>
    </section>
)
}