import React from 'react'
import PlayList from './PlayList'

export default function Body() {
    let clickMenu = (key) => {
        let arr = document.getElementsByClassName('body__menu-item')
        let arrLength = arr.length
        for (let i = 0; i < arrLength; i++) {
            if (arr[i].classList.contains('active')) {
                arr[i].classList.remove('active')
            }
            if (key === i) {
                arr[i].classList.add('active')
            }
        }
    }
    return (
        <div className="body">
            <div id="header" className="body__header">
                <div className="header__search">
                    <i className="fas fa-arrow-left header__search--icon" style={{ color: 'white' }} />
                    <i className="fas fa-arrow-right header__search--icon" />
                    <div className="header__search--input">
                        <i className="fas fa-search" />
                        <div style={{ position: 'absolute', top: 0, left: 38, bottom: 0, right: 10, display: 'flex', alignItems: 'center' }}>
                            <input type="text" placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV..." />
                        </div>
                    </div>
                </div>
                <div className="header__setting">
                    <button title="Chủ đề">
                        <svg width={20} height={20} viewBox="0 0 20 20">
                            <defs>
                                <linearGradient id="j32lhg93hd" x1="62.206%" x2="18.689%" y1="70.45%" y2="39.245%">
                                    <stop offset="0%" stopColor="#F81212" />
                                    <stop offset="100%" stopColor="red" />
                                </linearGradient>
                                <linearGradient id="hjoavsus6g" x1="50%" x2="11.419%" y1="23.598%" y2="71.417%">
                                    <stop offset="0%" stopColor="#00F" />
                                    <stop offset="100%" stopColor="#0031FF" />
                                </linearGradient>
                                <linearGradient id="la1y5u3dvi" x1="65.655%" x2="25.873%" y1="18.825%" y2="56.944%">
                                    <stop offset="0%" stopColor="#FFA600" />
                                    <stop offset="100%" stopColor="orange" />
                                </linearGradient>
                                <linearGradient id="2dsmrlvdik" x1="24.964%" x2="63.407%" y1="8.849%" y2="55.625%">
                                    <stop offset="0%" stopColor="#13EFEC" />
                                    <stop offset="100%" stopColor="#00E8DF" />
                                </linearGradient>
                                <filter id="4a7imk8mze" width="230%" height="230%" x="-65%" y="-65%" filterUnits="objectBoundingBox">
                                    <feGaussianBlur in="SourceGraphic" stdDeviation="3.9" />
                                </filter>
                                <filter id="301mo6jeah" width="312.7%" height="312.7%" x="-106.4%" y="-106.4%" filterUnits="objectBoundingBox">
                                    <feGaussianBlur in="SourceGraphic" stdDeviation="3.9" />
                                </filter>
                                <filter id="b2zvzgq7fj" width="295%" height="295%" x="-97.5%" y="-97.5%" filterUnits="objectBoundingBox">
                                    <feGaussianBlur in="SourceGraphic" stdDeviation="3.9" />
                                </filter>
                                <filter id="a1wq161tvl" width="256%" height="256%" x="-78%" y="-78%" filterUnits="objectBoundingBox">
                                    <feGaussianBlur in="SourceGraphic" stdDeviation="3.9" />
                                </filter>
                                <path id="qtpqrj1oda" d="M3.333 14.167V5.833l-1.666.834L0 3.333 3.333 0h3.334c.04 1.57.548 2.4 1.524 2.492l.142.008C9.403 2.478 9.958 1.645 10 0h3.333l3.334 3.333L15 6.667l-1.667-.834v8.334h-10z">
                                </path>
                                <path id="jggzvnjgfc" d="M0 0H20V20H0z" />
                                <path id="2eiwxjmc7m" d="M3.333 14.167V5.833l-1.666.834L0 3.333 3.333 0h3.334c.04 1.57.548 2.4 1.524 2.492l.142.008C9.403 2.478 9.958 1.645 10 0h3.333l3.334 3.333L15 6.667l-1.667-.834v8.334h-10z">
                                </path>
                            </defs>
                            <g fill="none" fillRule="evenodd" transform="translate(2 3)">
                                <mask id="tinejqaasb" fill="#fff">
                                    <use xlinkHref="#qtpqrj1oda" />
                                </mask>
                                <use fill="#FFF" fillOpacity={0} xlinkHref="#qtpqrj1oda" />
                                <g mask="url(#tinejqaasb)">
                                    <g transform="translate(-2 -3)">
                                        <mask id="uf3ckvfvpf" fill="#fff">
                                            <use xlinkHref="#jggzvnjgfc" />
                                        </mask>
                                        <use fill="#D8D8D8" xlinkHref="#jggzvnjgfc" />
                                        <circle cx="8.9" cy="6.8" r={9} fill="url(#j32lhg93hd)" filter="url(#4a7imk8mze)" mask="url(#uf3ckvfvpf)" />
                                        <circle cx="9.3" cy="13.7" r="5.5" fill="url(#hjoavsus6g)" filter="url(#301mo6jeah)" mask="url(#uf3ckvfvpf)" />
                                        <circle cx="15.9" cy="6.9" r={6} fill="url(#la1y5u3dvi)" filter="url(#b2zvzgq7fj)" mask="url(#uf3ckvfvpf)" />
                                        <circle cx="16.4" cy="17.7" r="7.5" fill="url(#2dsmrlvdik)" filter="url(#a1wq161tvl)" mask="url(#uf3ckvfvpf)" />
                                    </g>
                                </g>
                                <use fill="#FFF" fillOpacity="0.05" xlinkHref="#2eiwxjmc7m" />
                            </g>
                        </svg>
                    </button>
                    <button title="Tải lên">
                        <i className="fas fa-upload" />
                    </button>
                    <button title="Cài đặt">
                        <i className="fas fa-cog" />
                    </button>
                    <div className="avatar"></div>
                </div>
            </div>
            <div className="body__avatar">
                <div className="img" ></div>
                <h1>Lư Trung</h1>
            </div>
            <div className="body__menu">
                <ul>
                    <li className='body__menu-item' onClick={() => clickMenu(0)}>TỔNG QUAN</li>
                    <li className='body__menu-item' onClick={() => clickMenu(1)}>BÀI HÁT</li>
                    <li className='body__menu-item active' onClick={() => clickMenu(2)}>PLAYLIST</li>
                    <li className='body__menu-item' onClick={() => clickMenu(3)}>NGHỆ SĨ</li>
                    <li className='body__menu-item' onClick={() => clickMenu(4)}>ALBUM</li>
                    <li className='body__menu-item' onClick={() => clickMenu(5)}>MV</li>
                    <li className='body__menu-item' onClick={() => clickMenu(6)}>TẢI LÊN</li>
                </ul>
            </div>
            <div className="body__playlist">
                <div className="body__cd"></div>
                <PlayList />
            </div>
        </div>
    )
}
