import React from 'react'

export default function Menu() {
    return (
        <div className="menu">
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
