@import url("https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
* {
  font-family: "Kanit";
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  line-height: 1;
}

::-webkit-scrollbar {
  width: 8px;
  padding: 10px;
}

::-webkit-scrollbar-track {
  box-shadow: rgb(238, 234, 244) 0px 0px 5px inset;
  border-radius: 8px;
}

::-webkit-scrollbar-thumb {
  background-color: #7A6EAA;
  border-radius: 8px;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid rgb(231, 227, 235);
  padding-left: 16px;
  padding-right: 16px;
}
nav .Navbar_sinistra {
  width: 60%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
nav .Navbar_sinistra a {
  display: flex;
  text-decoration: none;
  color: black;
}
nav .Navbar_sinistra a img {
  width: 20px;
  margin: 5px;
}
nav .Navbar_sinistra a .Navbar_logo {
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 20px;
  font-weight: bolder;
  margin-top: 4px;
}
nav .Navbar_sinistra .Navbar_bottoni {
  display: flex;
  width: 300px;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  padding-top: 8px;
}
nav .Navbar_sinistra .Navbar_bottoni .Navbar_menuBtn {
  height: 90%;
  padding: 5px;
  margin-top: 3px;
  text-align: start;
  border: 1px solid rgb(255, 255, 255);
  background-color: rgb(255, 255, 255);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: #7A6EAA;
  font-weight: bold;
  transition: all 0.3s ease;
  cursor: pointer;
  list-style-type: none;
}
nav .Navbar_sinistra .Navbar_bottoni .Navbar_menuBtn:hover .Navbar_dropdown_content {
  border: 1px solid rgb(216, 212, 212);
  border-radius: 10px;
  display: block;
}
nav .Navbar_sinistra .Navbar_bottoni .Navbar_menuBtn:hover .Navbar_dropdown_content:hover .Navbar_element {
  display: block;
  display: flex;
  justify-content: space-between;
}
nav .Navbar_sinistra .Navbar_bottoni .Navbar_menuBtn li a {
  text-decoration: none;
  color: #7A6EAA;
}
nav .Navbar_sinistra .Navbar_bottoni .Navbar_menuBtn .Navbar_dropdown_content {
  display: none;
  position: absolute;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(231, 227, 235);
  border-radius: 16px;
  margin-top: 20px;
  padding-bottom: 4px;
  padding-top: 4px;
  width: 280px;
  height: auto;
  z-index: 1001;
  flex-direction: column;
}
nav .Navbar_sinistra .Navbar_bottoni .Navbar_menuBtn .Navbar_dropdown_content .Navbar_element {
  display: flex;
  justify-content: space-between;
  height: 48px;
  width: 100%;
  align-items: center;
  padding: 10px;
}
nav .Navbar_sinistra .Navbar_bottoni .Navbar_menuBtn .Navbar_dropdown_content .Navbar_element:hover {
  display: block;
  border: 1px solid rgb(216, 212, 212);
  background-color: rgb(216, 212, 212);
  border-radius: 10px;
}
nav .Navbar_destra {
  width: 40%;
  height: 56px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
nav .Navbar_destra .Navbar_bunny {
  transition: 0.5s all;
  transition-delay: 0s;
  width: 45px;
}
nav .Navbar_destra .Navbar_bunny:hover {
  width: 48px;
  margin: -3.2px;
  transition-delay: 0s;
}
nav .Navbar_destra .Navbar_money {
  color: rgb(122, 110, 170);
  font-weight: 600;
  line-height: 1.5;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
}
nav .Navbar_destra .Navbar_language {
  height: 100%;
  display: flex;
  align-items: center;
}
nav .Navbar_destra .Navbar_language:hover .Navbar_dropdown_content {
  border: 1px solid rgb(216, 212, 212);
  border-radius: 10px;
  display: block;
  z-index: 1;
}
nav .Navbar_destra .Navbar_language:hover .Navbar_dropdown_content:hover .Navbar_element {
  display: block;
}
nav .Navbar_destra .Navbar_language svg {
  height: 26px;
  fill: rgb(118, 69, 217);
}
nav .Navbar_destra .Navbar_language .Navbar_dropdown_content {
  overflow-y: scroll;
  display: none;
  position: absolute;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(231, 227, 235);
  border-radius: 16px;
  margin-top: 238px;
  padding-bottom: 4px;
  padding-top: 4px;
  width: 150px;
  max-height: 180px;
  flex-direction: column;
}
nav .Navbar_destra .Navbar_language .Navbar_dropdown_content .Navbar_element {
  height: 48px;
  width: 100%;
  align-items: center;
  padding: 10px;
}
nav .Navbar_destra .Navbar_language .Navbar_dropdown_content .Navbar_element a {
  text-decoration: none;
  color: rgb(40, 13, 95);
  font-weight: bold;
}
nav .Navbar_destra .Navbar_language .Navbar_dropdown_content .Navbar_element:hover {
  display: block;
  border: 1px solid rgb(216, 212, 212);
  background-color: rgb(216, 212, 212);
  border-radius: 10px;
}
nav .Navbar_destra .Navbar_settings_menu {
  margin-top: 2px;
  padding: 10px;
  background-color: white;
  border: 1px solid white;
  cursor: pointer;
}
nav .Navbar_destra .Navbar_settings_menu svg {
  fill: rgb(118, 69, 217);
}
nav .Navbar_destra .Navbar_main_buttons {
  display: flex;
  align-items: center;
  border: 1px solid #1FC7D4;
  border-radius: 20px;
  width: 140px;
  height: 35px;
  padding: 15px;
  font-weight: bold;
  font-size: 16px;
  color: white;
  background-color: #1FC7D4;
  transition: all 0.3s ease;
}
nav .Navbar_destra .Navbar_main_buttons a {
  text-decoration: none;
  color: white;
}
nav .Navbar_destra .Navbar_main_buttons:hover {
  background-color: #1D8999;
  border: 1px solid #1D8999;
  border-radius: 20px;
  color: white;
}

.navbar_menu_nascosto {
  display: none;
}

.Earn_p_i_big_contaniner {
  width: 100%;
  height: 600px;
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container {
  width: 100%;
  height: 600px;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  z-index: 1;
  background: linear-gradient(111.68deg, rgb(242, 236, 242) 0%, rgb(232, 242, 246) 100%);
  padding: 48px 0px;
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_medium_container {
  position: absolute;
  display: flex;
  width: 100%;
  top: 0px;
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_medium_container svg {
  fill: rgb(250, 249, 250);
  height: 100%;
  max-height: 48px;
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_central_container {
  width: 100%;
  height: 65%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_central_container .earn_p_i_img_container {
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_central_container .earn_p_i_img_container .earn_p_i_image1 {
  width: 350px;
  height: 400px;
  position: absolute;
  animation: 3s ease-in-out 0s infinite normal none running img-wallet;
}
@keyframes img-wallet {
  0% {
    transform: translate(0px, 0px);
  }
  50% {
    transform: translate(-5px, -5px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_central_container .earn_p_i_img_container .earn_p_i_image2 {
  width: 400px;
  height: 400px;
  position: absolute;
  animation: 3s ease-in-out 0s infinite normal none running img-wallet;
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_central_container .earn_p_i_img_container .earn_p_i_image3 {
  width: 350px;
  height: 400px;
  animation: 3s ease-in-out 0s infinite normal none running img-wallet;
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_central_container .Earn_p_i_h2_container {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_central_container .Earn_p_i_h2_container h2 {
  font-size: 32px;
  font-weight: 600;
  line-height: 1.1;
  color: rgb(40, 13, 95);
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_central_container .Earn_p_i_h2_container h2 span {
  color: rgb(118, 69, 217);
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_central_container .Earn_p_i_text {
  color: rgb(122, 110, 170);
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 24px;
  font-size: 16px;
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_central_container .Earn_p_i_button_link {
  display: flex;
  gap: 10px;
  position: relative;
  bottom: 20px;
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_central_container .Earn_p_i_button_link .Earn_p_i_mainbuttons {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #1FC7D4;
  border-radius: 13px;
  width: 99px;
  height: 44px;
  font-weight: bold;
  font-size: 16px;
  color: white;
  background-color: #1FC7D4;
  transition: all 0.3s ease;
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_central_container .Earn_p_i_button_link .Earn_p_i_mainbuttons:hover {
  background-color: #1D8999;
  border: 1px solid #1D8999;
  border-radius: 20px;
  color: white;
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_central_container .Earn_p_i_button_link .Earn_p_i_link {
  color: #1FC7D4;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-family: Kanit, sans-serif;
  font-weight: 600;
  line-height: 1.5;
  font-size: 16px;
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container {
  width: 100%;
  height: 35%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container .Earn_p_i_h2_switch {
  width: 70%;
  display: flex;
  padding: 10px;
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container .Earn_p_i_h2_switch h2 {
  font-size: 20px;
  font-weight: 600;
  line-height: 1.1;
  color: rgb(40, 13, 95);
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container .Earn_p_i_h2_switch h2 span {
  color: rgb(118, 69, 217);
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container .Earn_p_i_h2_switch svg {
  fill: #7A6EAA;
  cursor: pointer;
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container .Earn_p_i_lower_big_container {
  width: 70%;
  display: flex;
  padding: 10px;
  gap: 15px;
  animation: 1s ease-in-out 3s normal none running movimento;
}
@keyframes movimento {
  50% {
    transform: translateY(30px);
  }
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container .Earn_p_i_lower_big_container .Earn_p_i_container1 {
  width: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgb(118, 69, 217);
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container .Earn_p_i_lower_big_container .Earn_p_i_container1 .Earn_p_i_text1 {
  color: rgb(118, 69, 217);
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 8px;
  font-size: 12px;
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container .Earn_p_i_lower_big_container .Earn_p_i_container1 .Earn_p_i_text2 {
  color: rgb(40, 13, 95);
  font-style: bold;
  font-weight: 600;
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container .Earn_p_i_lower_big_container .Earn_p_i_container1 .Earn_p_i_text3 {
  font-size: 16px;
  color: #7A6EAA;
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container .Earn_p_i_lower_big_container .Earn_p_i_container2 {
  width: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgb(118, 69, 217);
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container .Earn_p_i_lower_big_container .Earn_p_i_container2 .Earn_p_i_text1 {
  color: rgb(118, 69, 217);
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 8px;
  font-size: 12px;
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container .Earn_p_i_lower_big_container .Earn_p_i_container2 .Earn_p_i_text2 {
  color: rgb(40, 13, 95);
  font-style: bold;
  font-weight: 600;
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container .Earn_p_i_lower_big_container .Earn_p_i_container2 .Earn_p_i_text3 {
  font-size: 16px;
  color: #7A6EAA;
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container .Earn_p_i_lower_big_container .Earn_p_i_container3 {
  width: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgb(118, 69, 217);
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container .Earn_p_i_lower_big_container .Earn_p_i_container3 .Earn_p_i_text1 {
  color: rgb(118, 69, 217);
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 8px;
  font-size: 12px;
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container .Earn_p_i_lower_big_container .Earn_p_i_container3 .Earn_p_i_text2 {
  color: rgb(40, 13, 95);
  font-style: bold;
  font-weight: 600;
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container .Earn_p_i_lower_big_container .Earn_p_i_container3 .Earn_p_i_text3 {
  font-size: 16px;
  color: #7A6EAA;
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container .Earn_p_i_lower_big_container .Earn_p_i_container4 {
  width: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgb(118, 69, 217);
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container .Earn_p_i_lower_big_container .Earn_p_i_container4 .Earn_p_i_text1 {
  color: rgb(118, 69, 217);
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 8px;
  font-size: 12px;
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container .Earn_p_i_lower_big_container .Earn_p_i_container4 .Earn_p_i_text2 {
  color: rgb(40, 13, 95);
  font-style: bold;
  font-weight: 600;
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container .Earn_p_i_lower_big_container .Earn_p_i_container4 .Earn_p_i_text3 {
  font-size: 16px;
  color: #7A6EAA;
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container .Earn_p_i_lower_big_container .Earn_p_i_container5 {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container .Earn_p_i_lower_big_container .Earn_p_i_container5 .Earn_p_i_text1 {
  color: rgb(118, 69, 217);
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 8px;
  font-size: 12px;
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container .Earn_p_i_lower_big_container .Earn_p_i_container5 .Earn_p_i_text2 {
  color: rgb(40, 13, 95);
  font-style: bold;
  font-weight: 600;
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container .Earn_p_i_lower_big_container .Earn_p_i_container5 .Earn_p_i_text3 {
  font-size: 16px;
  color: #7A6EAA;
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container2 {
  display: none;
  width: 100%;
  height: 35%;
  padding: 10px;
  flex-direction: column;
  align-items: center;
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container2 .Earn_p_i_h2_switch {
  width: 70%;
  display: flex;
  padding: 10px;
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container2 .Earn_p_i_h2_switch h2 {
  font-size: 20px;
  font-weight: 600;
  line-height: 1.1;
  color: rgb(40, 13, 95);
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container2 .Earn_p_i_h2_switch h2 span {
  color: rgb(118, 69, 217);
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container2 .Earn_p_i_h2_switch svg {
  fill: #7A6EAA;
  cursor: pointer;
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container2 .Earn_p_i_lower_big_container {
  width: 70%;
  display: flex;
  padding: 10px;
  gap: 15px;
  animation: 1s ease-in-out 3s normal none running movimento;
}
@keyframes movimento {
  50% {
    transform: translateY(30px);
  }
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container2 .Earn_p_i_lower_big_container .Earn_p_i_container1 {
  width: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgb(118, 69, 217);
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container2 .Earn_p_i_lower_big_container .Earn_p_i_container1 .Earn_p_i_text1 {
  color: rgb(118, 69, 217);
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 8px;
  font-size: 12px;
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container2 .Earn_p_i_lower_big_container .Earn_p_i_container1 .Earn_p_i_text2 {
  color: rgb(40, 13, 95);
  font-style: bold;
  font-weight: 600;
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container2 .Earn_p_i_lower_big_container .Earn_p_i_container1 .Earn_p_i_text3 {
  font-size: 16px;
  color: #7A6EAA;
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container2 .Earn_p_i_lower_big_container .Earn_p_i_container2 {
  width: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgb(118, 69, 217);
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container2 .Earn_p_i_lower_big_container .Earn_p_i_container2 .Earn_p_i_text1 {
  color: rgb(118, 69, 217);
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 8px;
  font-size: 12px;
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container2 .Earn_p_i_lower_big_container .Earn_p_i_container2 .Earn_p_i_text2 {
  color: rgb(40, 13, 95);
  font-style: bold;
  font-weight: 600;
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container2 .Earn_p_i_lower_big_container .Earn_p_i_container2 .Earn_p_i_text3 {
  font-size: 16px;
  color: #7A6EAA;
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container2 .Earn_p_i_lower_big_container .Earn_p_i_container3 {
  width: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgb(118, 69, 217);
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container2 .Earn_p_i_lower_big_container .Earn_p_i_container3 .Earn_p_i_text1 {
  color: rgb(118, 69, 217);
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 8px;
  font-size: 12px;
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container2 .Earn_p_i_lower_big_container .Earn_p_i_container3 .Earn_p_i_text2 {
  color: rgb(40, 13, 95);
  font-style: bold;
  font-weight: 600;
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container2 .Earn_p_i_lower_big_container .Earn_p_i_container3 .Earn_p_i_text3 {
  font-size: 16px;
  color: #7A6EAA;
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container2 .Earn_p_i_lower_big_container .Earn_p_i_container4 {
  width: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgb(118, 69, 217);
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container2 .Earn_p_i_lower_big_container .Earn_p_i_container4 .Earn_p_i_text1 {
  color: rgb(118, 69, 217);
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 8px;
  font-size: 12px;
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container2 .Earn_p_i_lower_big_container .Earn_p_i_container4 .Earn_p_i_text2 {
  color: rgb(40, 13, 95);
  font-style: bold;
  font-weight: 600;
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container2 .Earn_p_i_lower_big_container .Earn_p_i_container4 .Earn_p_i_text3 {
  font-size: 16px;
  color: #7A6EAA;
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container2 .Earn_p_i_lower_big_container .Earn_p_i_container5 {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container2 .Earn_p_i_lower_big_container .Earn_p_i_container5 .Earn_p_i_text1 {
  color: rgb(118, 69, 217);
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 8px;
  font-size: 12px;
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container2 .Earn_p_i_lower_big_container .Earn_p_i_container5 .Earn_p_i_text2 {
  color: rgb(40, 13, 95);
  font-style: bold;
  font-weight: 600;
}
.Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container2 .Earn_p_i_lower_big_container .Earn_p_i_container5 .Earn_p_i_text3 {
  font-size: 16px;
  color: #7A6EAA;
}

@media screen and (max-width: 1080px) {
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 56px;
    background-color: rgb(255, 255, 255);
    border-bottom: 1px solid rgb(231, 227, 235);
    padding-left: 16px;
    padding-right: 16px;
  }
  nav .Navbar_sinistra {
    width: 60%;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  nav .Navbar_sinistra .Navbar_logo {
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 20px;
    font-weight: bolder;
  }
  nav .Navbar_sinistra .Navbar_bottoni {
    display: flex;
    width: 300px;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    padding-top: 8px;
  }
  nav .Navbar_sinistra .Navbar_bottoni .Navbar_menuBtn {
    height: 90%;
    padding: 5px;
    margin-top: 3px;
    text-align: start;
    border: 1px solid rgb(255, 255, 255);
    background-color: rgb(255, 255, 255);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    color: #7A6EAA;
    font-weight: bold;
    transition: all 0.3s ease;
    cursor: pointer;
    list-style-type: none;
  }
  nav .Navbar_sinistra .Navbar_bottoni .Navbar_menuBtn:hover .Navbar_dropdown_content {
    border: 1px solid rgb(216, 212, 212);
    border-radius: 10px;
    display: block;
  }
  nav .Navbar_sinistra .Navbar_bottoni .Navbar_menuBtn:hover .Navbar_dropdown_content:hover .Navbar_element {
    display: block;
    display: flex;
    justify-content: space-between;
  }
  nav .Navbar_sinistra .Navbar_bottoni .Navbar_menuBtn li a {
    text-decoration: none;
    color: #7A6EAA;
  }
  nav .Navbar_sinistra .Navbar_bottoni .Navbar_menuBtn .Navbar_dropdown_content {
    display: none;
    position: absolute;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(231, 227, 235);
    border-radius: 16px;
    margin-top: 20px;
    padding-bottom: 4px;
    padding-top: 4px;
    width: 280px;
    height: auto;
    z-index: 1001;
    flex-direction: column;
  }
  nav .Navbar_sinistra .Navbar_bottoni .Navbar_menuBtn .Navbar_dropdown_content .Navbar_element {
    display: flex;
    justify-content: space-between;
    height: 48px;
    width: 100%;
    align-items: center;
    padding: 10px;
  }
  nav .Navbar_sinistra .Navbar_bottoni .Navbar_menuBtn .Navbar_dropdown_content .Navbar_element:hover {
    display: block;
    border: 1px solid rgb(216, 212, 212);
    background-color: rgb(216, 212, 212);
    border-radius: 10px;
  }
  nav .Navbar_destra {
    width: 40%;
    height: 56px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  nav .Navbar_destra .icon {
    padding: 10px;
  }
  nav .Navbar_destra .Navbar_money {
    color: rgb(122, 110, 170);
    font-weight: 600;
    line-height: 1.5;
    font-size: 16px;
    font-weight: bold;
    padding: 10px;
  }
  nav .Navbar_destra .Navbar_language {
    height: 100%;
    display: flex;
  }
  nav .Navbar_destra .Navbar_language:hover .Navbar_dropdown_content {
    border: 1px solid rgb(216, 212, 212);
    border-radius: 10px;
    display: block;
  }
  nav .Navbar_destra .Navbar_language:hover .Navbar_dropdown_content:hover .Navbar_element {
    display: block;
  }
  nav .Navbar_destra .Navbar_language svg {
    fill: rgb(118, 69, 217);
  }
  nav .Navbar_destra .Navbar_language .Navbar_dropdown_content {
    overflow-y: scroll;
    display: none;
    position: absolute;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(231, 227, 235);
    border-radius: 16px;
    margin-top: 238px;
    padding-bottom: 4px;
    padding-top: 4px;
    width: 150px;
    max-height: 180px;
    flex-direction: column;
  }
  nav .Navbar_destra .Navbar_language .Navbar_dropdown_content .Navbar_element {
    height: 48px;
    width: 100%;
    align-items: center;
    padding: 10px;
  }
  nav .Navbar_destra .Navbar_language .Navbar_dropdown_content .Navbar_element a {
    text-decoration: none;
    color: rgb(40, 13, 95);
    font-weight: bold;
  }
  nav .Navbar_destra .Navbar_language .Navbar_dropdown_content .Navbar_element:hover {
    display: block;
    border: 1px solid rgb(216, 212, 212);
    background-color: rgb(216, 212, 212);
    border-radius: 10px;
  }
  nav .Navbar_destra .Navbar_settings_menu {
    margin-top: 2px;
    padding: 10px;
    background-color: white;
    border: 1px solid white;
    cursor: pointer;
  }
  nav .Navbar_destra .Navbar_settings_menu svg {
    fill: rgb(118, 69, 217);
  }
  nav .Navbar_destra .Navbar_main_buttons {
    display: flex;
    align-items: center;
    border: 1px solid #1FC7D4;
    border-radius: 20px;
    width: 140px;
    height: 35px;
    padding: 15px;
    font-weight: bold;
    font-size: 16px;
    color: white;
    background-color: #1FC7D4;
    transition: all 0.3s ease;
  }
  nav .Navbar_destra .Navbar_main_buttons a {
    text-decoration: none;
    color: white;
  }
  nav .Navbar_destra .Navbar_main_buttons:hover {
    background-color: #1D8999;
    border: 1px solid #1D8999;
    border-radius: 20px;
    color: white;
  }
}
@media screen and (max-width: 968px) {
  nav .Navbar_sinistra {
    width: 60%;
    display: flex;
  }
  nav .Navbar_sinistra .Navbar_logo {
    display: none;
  }
  nav .Navbar_sinistra .Navbar_logo a {
    display: none;
  }
  nav .Navbar_sinistra .Navbar_bottoni {
    display: flex;
    justify-content: space-evenly;
  }
  nav .Navbar_destra {
    width: 40%;
    display: flex;
    justify-content: space-evenly;
  }
  nav .Navbar_destra .icon {
    padding: 10px;
  }
  nav .Navbar_destra .Navbar_money {
    color: rgb(122, 110, 170);
    font-weight: 600;
    line-height: 1.5;
    font-size: 16px;
    font-weight: bold;
    padding: 10px;
  }
  nav .Navbar_destra .Navbar_main_buttons {
    display: flex;
    align-items: center;
    border: 1px solid #1FC7D4;
    border-radius: 20px;
    width: 110px;
    height: 35px;
    padding: 15px;
    font-weight: bold;
    font-size: 16px;
    color: white;
    background-color: #1FC7D4;
    transition: all 0.3s ease;
  }
  nav .Navbar_destra .Navbar_main_buttons a {
    text-decoration: none;
    color: white;
    content: "Connect";
  }
  nav .Navbar_destra .Navbar_main_buttons:hover {
    background-color: #1D8999;
    border: 1px solid #1D8999;
    border-radius: 20px;
    color: white;
  }
}
@media screen and (max-width: 852px) {
  nav .Navbar_sinistra {
    width: 60%;
    display: flex;
  }
  nav .Navbar_sinistra .Navbar_logo {
    display: none;
  }
  nav .Navbar_sinistra .Navbar_logo a {
    display: none;
  }
  nav .Navbar_sinistra .Navbar_bottoni {
    display: flex;
    justify-content: space-evenly;
  }
  nav .Navbar_destra {
    width: 40%;
    display: flex;
    justify-content: space-evenly;
  }
  nav .Navbar_destra .icon {
    padding: 10px;
  }
  nav .Navbar_destra .Navbar_money {
    color: rgb(122, 110, 170);
    font-weight: 600;
    line-height: 1.5;
    font-size: 16px;
    font-weight: bold;
    padding: 10px;
  }
  nav .Navbar_destra .Navbar_main_buttons {
    display: flex;
    align-items: center;
    border: 1px solid #1FC7D4;
    border-radius: 20px;
    width: 110px;
    height: 35px;
    padding: 15px;
    font-weight: bold;
    font-size: 16px;
    color: white;
    background-color: #1FC7D4;
    transition: all 0.3s ease;
  }
  nav .Navbar_destra .Navbar_main_buttons a {
    text-decoration: none;
    color: white;
    content: "Connect";
  }
  nav .Navbar_destra .Navbar_main_buttons:hover {
    background-color: #1D8999;
    border: 1px solid #1D8999;
    border-radius: 20px;
    color: white;
  }
}
@media screen and (max-width: 576px) {
  nav .Navbar_sinistra {
    width: 60%;
    display: flex;
  }
  nav .Navbar_sinistra .Navbar_logo {
    display: none;
  }
  nav .Navbar_sinistra .Navbar_logo a {
    display: none;
  }
  nav .Navbar_sinistra .Navbar_bottoni {
    display: flex;
    justify-content: space-evenly;
  }
  nav .Navbar_destra {
    width: 40%;
    display: flex;
    justify-content: space-evenly;
  }
  nav .Navbar_destra .icon {
    display: none;
  }
  nav .Navbar_destra .Navbar_money {
    display: none;
  }
  nav .Navbar_destra .Navbar_main_buttons {
    display: flex;
    align-items: center;
    border: 1px solid #1FC7D4;
    border-radius: 20px;
    width: 110px;
    height: 35px;
    padding: 15px;
    font-weight: bold;
    font-size: 16px;
    color: white;
    background-color: #1FC7D4;
    transition: all 0.3s ease;
  }
  nav .Navbar_destra .Navbar_main_buttons a {
    text-decoration: none;
    color: white;
    content: "Connect";
  }
  nav .Navbar_destra .Navbar_main_buttons:hover {
    background-color: #1D8999;
    border: 1px solid #1D8999;
    border-radius: 20px;
    color: white;
  }
  .Earn_p_i_big_contaniner {
    width: 100%;
    height: 800px;
  }
  .Earn_p_i_big_contaniner .Earn_p_i_top_container {
    width: 100%;
    height: 800px;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    z-index: 1;
    background: linear-gradient(111.68deg, rgb(242, 236, 242) 0%, rgb(232, 242, 246) 100%);
    padding: 48px 0px;
  }
  .Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_medium_container {
    position: absolute;
    display: flex;
    width: 100%;
    top: 0px;
  }
  .Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_medium_container svg {
    fill: rgb(250, 249, 250);
    height: 100%;
    max-height: 48px;
  }
  .Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_central_container {
    width: 100%;
    height: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }
  .Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_central_container .earn_p_i_img_container {
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    top: 20px;
    left: 100px;
  }
  .Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_central_container .earn_p_i_img_container .earn_p_i_image1 {
    width: 187px;
    height: 192px;
    position: absolute;
    animation: 3s ease-in-out 0s infinite normal none running img-wallet;
  }
  .Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_central_container .earn_p_i_img_container .earn_p_i_image2 {
    width: 187px;
    height: 192px;
    position: absolute;
    animation: 3s ease-in-out 0s infinite normal none running img-wallet;
  }
  .Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_central_container .earn_p_i_img_container .earn_p_i_image3 {
    width: 187px;
    height: 192px;
    animation: 3s ease-in-out 0s infinite normal none running img-wallet;
  }
  .Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_central_container .Earn_p_i_h2_container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
  .Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container {
    width: 100%;
    height: 45%;
    padding: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
  }
  .Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container .Earn_p_i_lower_big_container {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 10px;
    gap: 15px;
  }
  .Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container2 {
    width: 100%;
    height: 40%;
    padding: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
  }
  .Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container2 .Earn_p_i_lower_big_container {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 10px;
    gap: 15px;
  }
}
@media screen and (max-width: 376px) {
  nav .Navbar_sinistra {
    width: 50%;
  }
  nav .Navbar_sinistra .Navbar_logo {
    display: none;
  }
  nav .Navbar_sinistra .Navbar_logo a {
    display: none;
  }
  nav .Navbar_sinistra .Navbar_bottoni {
    display: none;
  }
  nav .Navbar_sinistra .Navbar_bottoni .Navbar_menuBtn {
    display: none;
  }
  nav .Navbar_destra {
    width: 50%;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }
  nav .Navbar_destra .icon {
    display: none;
  }
  nav .Navbar_destra .Navbar_money {
    display: none;
  }
  nav .Navbar_destra .Navbar_main_buttons {
    display: flex;
    align-items: center;
    border: 1px solid #1FC7D4;
    border-radius: 20px;
    width: 110px;
    height: 35px;
    padding: 15px;
    font-weight: bold;
    font-size: 16px;
    color: white;
    background-color: #1FC7D4;
    transition: all 0.3s ease;
  }
  nav .Navbar_destra .Navbar_main_buttons a {
    text-decoration: none;
    color: white;
    content: "Connect";
  }
  nav .Navbar_destra .Navbar_main_buttons:hover {
    background-color: #1D8999;
    border: 1px solid #1D8999;
    border-radius: 20px;
    color: white;
  }
  .navbar_menu_nascosto {
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 60px;
    padding-top: 5px;
    padding-right: 8px;
    padding-left: 8px;
    background: rgb(255, 255, 255);
    border-top: 1px solid rgb(231, 227, 235);
    padding-bottom: env(safe-area-inset-bottom);
    z-index: 20;
  }
  .navbar_menu_nascosto .navbar_menu_nascosto_icon {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 35px;
    align-items: center;
    justify-content: center;
  }
  .navbar_menu_nascosto .navbar_menu_nascosto_icon a {
    text-decoration: none;
  }
  .navbar_menu_nascosto .navbar_menu_nascosto_icon a svg {
    fill: rgb(122, 110, 170);
  }
  .navbar_menu_nascosto .navbar_menu_nascosto_icon a span {
    color: rgb(122, 110, 170);
    line-height: 1.5;
    font-weight: 400;
    font-size: 10px;
  }
  .Earn_p_i_big_contaniner {
    width: 100%;
    height: 800px;
  }
  .Earn_p_i_big_contaniner .Earn_p_i_top_container {
    width: 100%;
    height: 800px;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    z-index: 1;
    background: linear-gradient(111.68deg, rgb(242, 236, 242) 0%, rgb(232, 242, 246) 100%);
    padding: 48px 0px;
  }
  .Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_medium_container {
    position: absolute;
    display: flex;
    width: 100%;
    top: 0px;
  }
  .Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_medium_container svg {
    fill: rgb(250, 249, 250);
    height: 100%;
    max-height: 48px;
  }
  .Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_central_container {
    width: 100%;
    height: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }
  .Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_central_container .earn_p_i_img_container {
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    top: 20px;
    left: 100px;
  }
  .Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_central_container .earn_p_i_img_container .earn_p_i_image1 {
    width: 187px;
    height: 192px;
    position: absolute;
    animation: 3s ease-in-out 0s infinite normal none running img-wallet;
  }
  .Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_central_container .earn_p_i_img_container .earn_p_i_image2 {
    width: 187px;
    height: 192px;
    position: absolute;
    animation: 3s ease-in-out 0s infinite normal none running img-wallet;
  }
  .Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_central_container .earn_p_i_img_container .earn_p_i_image3 {
    width: 187px;
    height: 192px;
    animation: 3s ease-in-out 0s infinite normal none running img-wallet;
  }
  .Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_central_container .Earn_p_i_h2_container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
  .Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container {
    width: 70%;
    height: 45%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start;
  }
  .Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container .Earn_p_i_lower_big_container {
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 10px;
    gap: 15px;
  }
  .Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container2 {
    width: 70%;
    height: 40%;
    padding: 10px;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: flex-start;
  }
  .Earn_p_i_big_contaniner .Earn_p_i_top_container .Earn_p_i_bottom_switch_container2 .Earn_p_i_lower_big_container {
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 10px;
    gap: 15px;
  }
}

/*# sourceMappingURL=style.cs.map */