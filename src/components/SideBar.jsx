import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {youtubeShorts, subscription, youtubeMusic, youtubeHome} from '../index';

function SideBar() {

    const [show, setShow] = useState(false);

    return (
        <div>
            <FontAwesomeIcon icon={faBars} size="2xl"
                className="fixed top-6 left-4 pl-3 cursor-pointer"
                onClick={()=> {
                    setShow(!show);
                    }
                }
            />

            <div
                className={`bg-white border border-gray-200 transition-all duration-300 ease-in-out h-screen 
                ${show? 'w-50 border-r-4':'w-22'}`}
            >

            {(
               <ul className={`flex flex-col top-20 space-y-4 ${show ? 'items-start pl-4' : 'items-center'}`}>

                    <li className={`flex pt-4 ${show? 'flex-row items-center gap-2':'flex-col items-center'}`}>
                        <img src={youtubeHome} alt="Youtube Home" className="w-6 h-6 cursor-pointer"/>
                        <span className={`text-xs ${!show && 'mt-1'}`}>Home</span>
                    </li>

                    <li className={`flex ${show? 'flex-row items-center gap-2':'flex-col items-center'}`}>
                        <img src={youtubeShorts} alt="Youtube Shorts" className="w-6 h-6 cursor-pointer"/>
                        <span className={`text-xs ${!show && 'mt-1'}`}>Shorts</span>
                    </li>

                   <li className={`flex ${show? 'flex-row items-center gap-2':'flex-col items-center'}`}>
                        <img src={subscription} alt="Youtube Subscriptions"
                             className="w-6 h-6 cursor-pointer"/>
                        <span className={`text-xs ${!show && 'mt-1'}`}>Subscriptions</span>
                    </li>

                   <li className={`flex ${show? 'flex-row items-center gap-2':'flex-col items-center'}`}>
                        <img src={youtubeMusic} alt="Youtube Music" className="w-6 h-6 cursor-pointer"/>
                        <span className={`text-xs ${!show && 'mt-1'}`}>Music</span>
                    </li>

               </ul>
                )}

            </div>
        </div>
    );
}
export default SideBar
