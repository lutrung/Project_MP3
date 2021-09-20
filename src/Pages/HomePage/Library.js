import React from 'react'

export default function Library() {
    return (
        <div className="library">
            <h2>THƯ VIỆN</h2>
            <div className="item">
                <img src="https://zjs.zadn.vn/zmp3-desktop/releases/v1.0.13/static/media/my-song.cf0cb0b4.svg" alt='' />
                Bài Hát
            </div>
            <div className="item">
                <img src="https://zjs.zadn.vn/zmp3-desktop/releases/v1.0.13/static/media/my-playlist.7e92a5f0.svg" alt='' />
                Playlist
            </div>
            <div className="item">
                <img src="https://zjs.zadn.vn/zmp3-desktop/releases/v1.0.13/static/media/my-history.374cb625.svg" alt='' />
                Gần Đây
            </div>
            <div className="vip">
                <p>Nghe nhạc không quảng cáo cùng kho nhạc VIP</p>
                <button>Mua VIP</button>
            </div>
        </div>
    )
}
