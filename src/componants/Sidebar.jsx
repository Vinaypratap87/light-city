import { FaHome } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { IoMdChatbubbles } from "react-icons/io";
import { BsCollectionPlay } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";import { CiLogout } from "react-icons/ci";
import { FaWallet } from "react-icons/fa";


const Sidebar = ({bgColor,color}) => {
  return (
    <>
     <div className="side_bar_content" style={{backgroundColor:`${bgColor}`, color:`${color}`}}>
        <div className="top_content">
            <div className="items"><FaHome className='lefticons'/>Home</div>
            <div className="items"><IoIosNotifications className='lefticons'/>Notification</div>
            <div className="items"><FaShoppingBag className='lefticons'/>Shop</div>
            <div className="items"><IoMdChatbubbles className='lefticons'/>Conversation</div>
            <div className="items"><FaWallet className='lefticons'/>Wallet</div>
            <div className="items"><BsCollectionPlay className='lefticons'/>Subscription</div>
            <div className="items"><CgProfile className='lefticons'/> Profile</div>
        </div>
        <div className="bottom_content items"><CiLogout className='lefticons'/>Log Out</div>
     </div>
     </>
    )}
export default Sidebar
