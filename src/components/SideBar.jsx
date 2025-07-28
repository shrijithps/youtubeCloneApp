import React from 'react';
import {youtubeShorts, subscription, youtubeMusic, youtubeHome} from '../index';

function SideBar({isOpen}) {


    return (
        <div>
            <div
                className={`bg-white border border-gray-200 transition-all duration-300 ease-in-out h-screen 
                ${isOpen? 'w-50 border-r-4':'w-22'}`}
            >

            {(
               <ul className={`flex flex-col top-20 space-y-4 ${isOpen ? 'items-start pl-4' : 'items-center'}`}>
                    <li className={`flex pt-4 ${isOpen? 'flex-row items-center gap-2':'flex-col items-center'}`}>
                        <img src={youtubeHome} alt="Youtube Home" className="w-6 h-6 cursor-pointer"/>
                        <span className={`text-xs ${!isOpen && 'mt-1'}`}>Home</span>
                    </li>

                    <li className={`flex ${isOpen? 'flex-row items-center gap-2':'flex-col items-center'}`}>
                        <img src={youtubeShorts} alt="Youtube Shorts" className="w-6 h-6 cursor-pointer"/>
                        <span className={`text-xs ${!isOpen && 'mt-1'}`}>Shorts</span>
                    </li>

                   <li className={`flex ${isOpen? 'flex-row items-center gap-2':'flex-col items-center'}`}>
                        <img src={subscription} alt="Youtube Subscriptions"
                             className="w-6 h-6 cursor-pointer"/>
                        <span className={`text-xs ${!isOpen && 'mt-1'}`}>Subscriptions</span>
                    </li>

                   <li className={`flex ${isOpen? 'flex-row items-center gap-2':'flex-col items-center'}`}>
                        <img src={youtubeMusic} alt="Youtube Music" className="w-6 h-6 cursor-pointer"/>
                        <span className={`text-xs ${!isOpen && 'mt-1'}`}>Music</span>
                    </li>

               </ul>
                )}

            </div>
        </div>
    );
}
export default SideBar
