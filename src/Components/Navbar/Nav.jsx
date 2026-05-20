import "./nav.scss"
import Sidebar from "../Sidebar/sidebar"
import { motion } from "framer-motion"

const Nav = () => {
    return (
        <div className="navbar">
            {/*sidebar*/}
            <Sidebar/>
            <div className="wrapper">
                <motion.span
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
  style={{
    marginLeft: "80px",
    position: "relative",
    zIndex: 2,
    color: "white"
  }}
>
  Menu
</motion.span>
                <div className="social">
                    <a href="https://github.com/TanushReddyK"><img src="/github.svg" alt="" /></a>
                    <a href="https://www.instagram.com/ktanushreddy/?__pwa=1"><img src="/instagram.svg" alt="" /></a>
                    <a href="www.linkedin.com/in/tanush-reddy-k"><img src="/linkedin.svg" alt="" /></a>
                    <a href= ""><img src = "/wrnch.svg" alt=""/></a>
                  
                </div>
            </div>
        </div>
    )

}

export default Nav