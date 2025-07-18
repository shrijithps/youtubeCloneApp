import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHouse } from '@fortawesome/free-solid-svg-icons';
import {youtubeShorts, subscription} from '../index';

function SideBar() {

    const [show, setShow] = useState(false);

    return (
        <div>
            <FontAwesomeIcon icon={faBars} size="2xl"
                className="fixed top-6 left-4"
                onClick={()=> {
                    setShow(!show);
                    }
                }
            />

            { show && (
               <ul>
                <li className="Home">
                    <FontAwesomeIcon icon={faHouse}/>
                    Home
                </li>

                <li
                    className="">
                    <img
                        src={youtubeShorts}
                        alt=""
                        className="w-10 h-10"
                    />
                    Shorts
                </li>

                <li
                    className="">
                    <img
                        src={subscription}
                        alt=""
                        />
                >Subscriptions</li>
                <li>Music</li>
               </ul>
            )}

        </div>
    );
}
export default SideBar
