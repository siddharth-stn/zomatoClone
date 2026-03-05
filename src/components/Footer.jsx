import { NewCard } from "@/components/ui/card";
import Flag from "@/assets/images/flag.png";
import { ChevronUp } from 'lucide-react';
import { Button } from "./ui/button";
import { Globe } from 'lucide-react';
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {

  const cardData = [
    { para1Text: "Popular cuisines near me", para2Text: "" },
    { para1Text: "Popular retaurant types near me", para2Text: "" },
    { para1Text: "Cities we deliver to", para2Text: "" },
    { para1Text: "Popular Dishes Near me", para2Text: "" }
  ];

  return (
    <>
      <section className="mt-30 px-4 md:px-8 max-w-5xl lg:mx-auto">
        <div className="">
          <h2 className="text-xl md:text-3xl md:tracking-wider">Popular localities in and around <b>Satna</b></h2>
        </div>
        <NewCard className="max-w-70" para1Text={"Satna Locality"} para2Text={"256 places"}>
          <ChevronUp className="rotate-90" />
        </NewCard>
        <div className="mt-30">
          <h2 className="text-[27px]">Explore options near me</h2>
        </div>
        <div>
          {cardData.map((v, i) => {
            return (
              <NewCard className="py-6" key={i} para1Text={v.para1Text} para2Text={v.para2Text} paraWrapperStyle={"min-w-[70%] text-xl"}>
                <ChevronUp className="rotate-180" />
              </NewCard>
            );
          })}
        </div>
      </section>
      <div className="bg-[#F8F8F8] py-8 px-4 md:px-8 mt-20 ">
        <div className="md:flex items-center justify-between max-w-5xl lg:mx-auto">
          <div className="w-32 ">
            <img
              src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
              alt="logo"
              className="block"
            />
          </div>
          <div className="flex items-center">
            <div className="flex items-center md:mt-0 mt-4 gap-2 md:gap-8">
              <Button className="flex items-center bg-transparent text-black border">
                <div className="w-6">
                  <img src={Flag} alt="country flag" className="w-full object-cover" />
                </div>
                India
                <ChevronUp className="rotate-180" />
              </Button>
              <Button className="flex items-center bg-transparent text-black border">
                <Globe />
                English
                <ChevronUp className="rotate-180" />
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-10 max-w-5xl lg:mx-auto">
          <div className="footerListContainer">
            <div className="listContainer flex justify-between gap-4 flex-wrap">
              <List titleStyle={"text-[13px] font-bold text-wrap"} title={"ABOUT ZOMATO"} listStyle={"text-[rgb(105, 105, 105)] text-[13px] font-light flex flex-col gap-1 mt-2"}>
                <li>Who We Are</li>
                <li>Blog</li>
                <li>Work With Us</li>
                <li>Investor Relations</li>
                <li>Report Fraud</li>
                <li>Press Kit</li>
                <li>Contact Us</li>
              </List>
              <List titleStyle={"text-[13px] font-bold text-wrap"} title={"ZOMAVERSE"} listStyle={"text-[rgb(105, 105, 105)] text-[13px] font-light flex flex-col gap-1 mt-2"}>
                <li>Zomato</li>
                <li>Blinkit</li>
                <li>District</li>
                <li>Feeding India</li>
                <li>Hyperpure</li>
                <li>Zomato Live</li>
                <li>Zomaland</li>
                <li>Weather Union</li>
              </List>
              <List titleStyle={"text-[13px] font-bold text-wrap"} title={"FOR RESTAURANTS"} listStyle={"text-[rgb(105, 105, 105)] text-[13px] font-light flex flex-col gap-1 mt-2"}>
                <li>Partner With Us</li>
                <li>Apps For You</li>
              </List>
              <List titleStyle={"text-[13px] font-bold text-wrap"} title={"LEARN MORE"} listStyle={"text-[rgb(105, 105, 105)] text-[13px] font-light flex flex-col gap-1 mt-2"}>
                <li>Privacy</li>
                <li>Security</li>
                <li>Terms</li>
              </List>
              <div className="socialLinksContainer hidden md:block">
                <h3 className="text-[13px] font-bold text-wrap">SOCIAL LINKS</h3>
                <div className="flex gap-1 mt-2">
                  <FaLinkedin size={22} />
                  <AiFillInstagram size={22} />
                  <FaXTwitter size={22} />
                  <FaYoutube size={22} />
                  <FaFacebook size={22} />
                </div>
                <div className="w-30 mb-2 mt-2">
                  <img className="object-cover w-full" src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="app store button" />
                </div>
                <div className="w-30">
                  <img className="object-cover w-full" src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="google play button" />
                </div>
              </div>
            </div>
          </div>
          <hr className="mt-20" />
          <div className="mt-4">
            <p className="text-[13px] font-light text-[rgb(105, 105, 105)]">By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2026 © Zomato™ Ltd. All rights reserved.</p>
          </div>
        </div>
        <a href="https://www.flaticon.com/free-icons/india" title="india icons" className="mt-10 mb-10 block"><button>India icons created by verluk - Flaticon</button></a>
      </div >
    </>


  );
};


function List({ className, titleStyle, title, listStyle, children }) {
  return (
    <div className={className}>
      <h3 className={`${titleStyle}`}>{title}</h3>
      <ul className={`${listStyle}`}>
        {children}
      </ul>
    </div>
  )
}


export default Footer;

