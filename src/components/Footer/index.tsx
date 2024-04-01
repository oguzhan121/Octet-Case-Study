import React from 'react'
import { memo } from 'react';

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-wrap">
                    <ul className="socials-list-nav">
                        <li>
                            <svg width="24" height="28" viewBox="0 0 24 28" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1268_880)">
                                    <path
                                        d="M21.4286 1.71423H2.57143C1.88944 1.71423 1.23539 1.98515 0.753154 2.46739C0.270918 2.94962 0 3.60368 0 4.28566L0 23.1428C0 23.8248 0.270918 24.4788 0.753154 24.9611C1.23539 25.4433 1.88944 25.7142 2.57143 25.7142H9.92411V17.5548H6.54911V13.7142H9.92411V10.7871C9.92411 7.45763 11.9063 5.61852 14.9421 5.61852C16.3961 5.61852 17.9164 5.87781 17.9164 5.87781V9.14566H16.2413C14.5907 9.14566 14.0759 10.1699 14.0759 11.2205V13.7142H17.7605L17.1712 17.5548H14.0759V25.7142H21.4286C22.1106 25.7142 22.7646 25.4433 23.2468 24.9611C23.7291 24.4788 24 23.8248 24 23.1428V4.28566C24 3.60368 23.7291 2.94962 23.2468 2.46739C22.7646 1.98515 22.1106 1.71423 21.4286 1.71423Z"
                                        fill="#111827" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1268_880">
                                        <rect width="24" height="27.4286" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </li>
                        <li>
                            <svg width="24" height="28" viewBox="0 0 24 28" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1268_882)">
                                    <path
                                        d="M12.0054 7.55362C8.59822 7.55362 5.85 10.3018 5.85 13.709C5.85 17.1161 8.59822 19.8643 12.0054 19.8643C15.4125 19.8643 18.1607 17.1161 18.1607 13.709C18.1607 10.3018 15.4125 7.55362 12.0054 7.55362ZM12.0054 17.7108C9.80357 17.7108 8.00357 15.9161 8.00357 13.709C8.00357 11.5018 9.79821 9.70719 12.0054 9.70719C14.2125 9.70719 16.0071 11.5018 16.0071 13.709C16.0071 15.9161 14.2071 17.7108 12.0054 17.7108ZM19.8482 7.30183C19.8482 8.10005 19.2053 8.73755 18.4125 8.73755C17.6143 8.73755 16.9768 8.09469 16.9768 7.30183C16.9768 6.50897 17.6196 5.86612 18.4125 5.86612C19.2053 5.86612 19.8482 6.50897 19.8482 7.30183ZM23.925 8.75897C23.8339 6.83576 23.3946 5.13219 21.9857 3.72862C20.5821 2.32505 18.8786 1.88576 16.9553 1.78933C14.9732 1.67683 9.03214 1.67683 7.05 1.78933C5.13215 1.8804 3.42858 2.31969 2.01965 3.72326C0.610726 5.12683 0.176798 6.8304 0.0803695 8.75362C-0.0321304 10.7358 -0.0321304 16.6768 0.0803695 18.659C0.171441 20.5822 0.610726 22.2858 2.01965 23.6893C3.42858 25.0929 5.12679 25.5322 7.05 25.6286C9.03214 25.7411 14.9732 25.7411 16.9553 25.6286C18.8786 25.5375 20.5821 25.0983 21.9857 23.6893C23.3893 22.2858 23.8286 20.5822 23.925 18.659C24.0375 16.6768 24.0375 10.7411 23.925 8.75897ZM21.3643 20.7858C20.9464 21.8358 20.1375 22.6447 19.0821 23.0679C17.5018 23.6947 13.7518 23.55 12.0054 23.55C10.2589 23.55 6.50358 23.6893 4.92858 23.0679C3.87858 22.65 3.06965 21.8411 2.64644 20.7858C2.01965 19.2054 2.1643 15.4554 2.1643 13.709C2.1643 11.9625 2.02501 8.20719 2.64644 6.63219C3.06429 5.58219 3.87322 4.77326 4.92858 4.35005C6.50893 3.72326 10.2589 3.8679 12.0054 3.8679C13.7518 3.8679 17.5071 3.72862 19.0821 4.35005C20.1321 4.7679 20.9411 5.57683 21.3643 6.63219C21.9911 8.21255 21.8464 11.9625 21.8464 13.709C21.8464 15.4554 21.9911 19.2108 21.3643 20.7858Z"
                                        fill="#111827" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1268_882">
                                        <rect width="24" height="27.4286" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </li>
                        <li>
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M21.533 7.82586C21.5482 8.03905 21.5482 8.25228 21.5482 8.46547C21.5482 14.968 16.599 22.4604 7.5533 22.4604C4.76648 22.4604 2.17767 21.6532 0 20.2523C0.395953 20.2979 0.776625 20.3132 1.18781 20.3132C3.48727 20.3132 5.60405 19.5365 7.29441 18.2117C5.13197 18.166 3.31978 16.7497 2.69541 14.8005C3 14.8461 3.30455 14.8766 3.62437 14.8766C4.06598 14.8766 4.50764 14.8157 4.91878 14.7091C2.66498 14.2522 0.974578 12.2726 0.974578 9.88171V9.82081C1.62937 10.1863 2.39086 10.4147 3.19791 10.4451C1.87303 9.56188 1.00505 8.05428 1.00505 6.34869C1.00505 5.435 1.24866 4.59744 1.67508 3.86647C4.09641 6.85124 7.73602 8.80044 11.8172 9.01367C11.7411 8.64819 11.6954 8.26752 11.6954 7.8868C11.6954 5.17611 13.8883 2.96802 16.6141 2.96802C18.0304 2.96802 19.3095 3.56192 20.208 4.52131C21.3197 4.30813 22.3857 3.89694 23.3299 3.3335C22.9643 4.47566 22.1877 5.43505 21.1674 6.04414C22.1573 5.9376 23.1167 5.66342 23.9999 5.28275C23.33 6.25733 22.4924 7.12531 21.533 7.82586Z"
                                    fill="#111827" />
                            </svg>

                        </li>
                        <li>
                            <svg width="24" height="22" viewBox="0 0 24 22" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M22.9023 5.21769C22.6406 4.23228 21.8695 3.45619 20.8905 3.19282C19.1159 2.71423 12 2.71423 12 2.71423C12 2.71423 4.88416 2.71423 3.10953 3.19282C2.13049 3.45623 1.3594 4.23228 1.09769 5.21769C0.622192 7.00382 0.622192 10.7304 0.622192 10.7304C0.622192 10.7304 0.622192 14.457 1.09769 16.2431C1.3594 17.2285 2.13049 17.9723 3.10953 18.2357C4.88416 18.7142 12 18.7142 12 18.7142C12 18.7142 19.1158 18.7142 20.8905 18.2357C21.8695 17.9723 22.6406 17.2285 22.9023 16.2431C23.3778 14.457 23.3778 10.7304 23.3778 10.7304C23.3778 10.7304 23.3778 7.00382 22.9023 5.21769ZM9.6727 14.1139V7.34694L15.6202 10.7305L9.6727 14.1139Z"
                                    fill="#111827" />
                            </svg>
                        </li>
                    </ul>
                    <ul className="footer-menu">
                        <li>Conditions of Use</li>
                        <li>Privacy & Policy</li>
                        <li>Press Room</li>
                    </ul>
                    <p>© 2023 Movies by Octet</p>
                </div>
            </div>
        </footer>
    )
}

export default memo(Footer);