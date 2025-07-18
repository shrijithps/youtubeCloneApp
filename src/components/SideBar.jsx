import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHouse } from '@fortawesome/free-solid-svg-icons';
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
                className={`bg-white-100 border border-gray-200 transition-all duration-300 ease-in-out ${show?'w-60 borderborder-r-black':'w-16'}`}
            >

            {(
               <ul className="flex flex-col fixed top-20 left-4 pl-2 space-y-4">

                    <li className={` ${show? 'flex flex-row items-center gap-2':''}`}>
                        <img src={youtubeHome} alt="Youtube Home" className="w-8 h-8 pl-2 pt-2 cursor-pointer"/>
                        <span className="text-xs text-center w-fit">Home</span>
                    </li>

                    <li className={` ${show? 'flex flex-row items-center gap-2':''}`}>
                        <img src={youtubeShorts} alt="Youtube Shorts" className="w-8 h-8 pl-2 cursor-pointer"/>
                        <span className="text-xs">Shorts</span>
                    </li>

                   <li className={` ${show? 'flex flex-row items-center gap-2':''}`}>
                        <img src={subscription} alt="Youtube Subscriptions" className="w-8 h-8 pl-2 cursor-pointer"/>
                        <span className={`text-xs ${show? 'flex text-xs items-center': ''}`}>Subscriptions</span>
                    </li>

                   <li className={` ${show? 'flex flex-row items-center gap-2':''}`}>
                        <img src={youtubeMusic} alt="Youtube Music" className="w-8 h-8 pl-2 cursor-pointer"/>
                        <span className="text-xs">Music</span>
                    </li>

               </ul>
                )}

            </div>
        </div>
    );
}
export default SideBar
