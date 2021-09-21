import React, { useState } from 'react'

export default function Menu() {
    const [open, setOpen] = useState(false)
    let openMenu = () => {
        if (open) {
            document.querySelector('.menu').style.transform = "translateX(-100%)";
            setOpen(false)
        } else {
            document.querySelector('.menu').style.transform = "translateX(0)";
            setOpen(true)
        }
    }
    return (
        <div className="menu">
            <div className='openMenu' onClick={() => openMenu()}>
                <i class="fas fa-caret-right"></i>
            </div>
            <div className='closeMenu' onClick={() => openMenu()}>
                <i class="fas fa-caret-left"></i>
            </div>
            <img className="menu__logo" src="https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg" alt="logo" />
            <div className="menu__items">
                <div className="item">
                    <i className="far fa-address-card" />
                    Cá Nhân
                </div>
                <div className="item">
                    <i className="fas fa-record-vinyl" />
                    Khám Phá
                </div>
                <div className="item">
                    <i className="fas fa-chart-line" />
                    #zingchart
                </div>
                <div className="item">
                    <i className="fas fa-broadcast-tower" />
                    Radio
                </div>
                <div className="item">
                    <i className="fas fa-clipboard-list" />
                    Theo Dõi
                </div>
                <hr style={{ width: '80%', margin: '15px auto', borderTop: '1px solid #dadada' }} />
                <div className="item">
                    <i className="fas fa-music" />
                    Nhạc Mới
                </div>
                <div className="item">
                    <i className="fas fa-server" />
                    Thể Loại
                </div>
                <div className="item">
                    <i className="far fa-star" />
                    Top 100
                </div>
                <div className="item">
                    <i className="fab fa-youtube" />
                    MV
                </div>
            </div>
            <div className="menu__createList">
                <i className="fas fa-plus " />
                Tạo playlist mới
            </div>
        </div>
    )
}
