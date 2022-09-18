import Stoks from "../Navbar/Images/Stoks.webp"
import Pie from "../Navbar/Images/Pie.webp"
import Folder from "../Navbar/Images/Folder.webp"
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
                <div className="Earn_p_i_bottom_switch_container">
                    <div className="Earn_p_i_h2_switch">
                        <h2><span>Top</span> Farms</h2>
                        <svg class="switch sc-6457768a-0 bQnrJn" viewbox="0 0 24 25" height="24px" width="24px"
                            color="textSubtle" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z">
                            </path>
                        </svg>
                    </div>
                    <div class="Earn_p_i_lower_big_container">
                        <div class="Earn_p_i_container1">
                            <div class="Earn_p_i_text1">OLE-BUSD LP</div>
                            <div class="Earn_p_i_text2">173.957%</div>
                            <div class="Earn_p_i_text3">APR</div>
                        </div>
                        <div class="Earn_p_i_container2">
                            <div class="Earn_p_i_text1">TRIVIA-BNB LP</div>
                            <div class="Earn_p_i_text2">141.115%</div>
                            <div class="Earn_p_i_text3">APR</div>
                        </div>
                        <div class="Earn_p_i_container3">
                            <div class="Earn_p_i_text1">SDAO-BUSD LP</div>
                            <div class="Earn_p_i_text2">96.231%</div>
                            <div class="Earn_p_i_text3">APR</div>
                        </div>
                        <div class="Earn_p_i_container4">
                            <div class="Earn_p_i_text1">RPG-BUSD LP</div>
                            <div class="Earn_p_i_text2">88.912%</div>
                            <div class="Earn_p_i_text3">APR</div>
                        </div>
                        <div class="Earn_p_i_container5">
                            <div class="Earn_p_i_text1">DUET-CAKE LP</div>
                            <div class="Earn_p_i_text2">87.348%</div>
                            <div class="Earn_p_i_text3">APR</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
}