import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeCurrentIndexAction } from '../../Redux/Actions/ManagementAction'

export default function PlayList() {
    const dispatch = useDispatch()
    const playList = useSelector(state => state.ManagementReducer.playList)
    const currentIndex = useSelector(state => state.ManagementReducer.currentIndex)

    let selectSong = (index) => {
        dispatch(changeCurrentIndexAction(index))
    }
    return (
        <div id="body__list" className="body__list" >
            {playList.map((song, index) => {
                return <div className={index === currentIndex ? 'body__list--item active' : 'body__list--item'} key={index} onClick={() => selectSong(index)}>
                    <div className="item__left">
                        <div className="item__left--img" style={{ backgroundImage: `url(${song.image})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                            <div className="opacity" style={{ display: `${index === currentIndex ? 'block' : 'none'}` }} />
                            <i style={{ display: `${index === currentIndex ? 'block' : 'none'}` }} />
                        </div>
                        <div className="item__left--name">
                            <div className="name__song">{song.name}</div>
                            <div className="name__singer">{song.singer}</div>
                        </div>
                    </div>
                    <div className="item__center">
                        {song.time}
                    </div>
                    <div className="item__right">
                        <i className="fas fa-microphone" />
                        <i className="fas fa-heart" style={{ color: '#ed2b91' }} />
                        <i className="fas fa-ellipsis-h" />
                    </div>
                </div>

            })}
        </div>
    )
}
