import "./nav.scss"
import Sidebar from "../Sidebar/sidebar"
import { motion } from "framer-motion"

const Nav = () => {
    return (
        <div className="navbar">
            {/*sidebar*/}
            <Sidebar/>
            <div className="wrapper">
                <motion.span initial={{ opacity: 0, scale: 0.5 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.5 }}>Menu</motion.span>
                <div className="social">
                    <a href="https://github.com/TanushReddyK"><img src="/github.svg" alt="" /></a>
                    <a href="https://www.instagram.com/ktanushreddy/?__pwa=1"><img src="/instagram.svg" alt="" /></a>
                    <a href="https://www.linkedin.com/in/tanush-reddy-k-intenship-required-8256a223b/"><img src="/linkedin.svg" alt="" /></a>
                  
                </div>
            </div>
        </div>
    )

}

export default Nav