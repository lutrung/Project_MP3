/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeCurrentIndexAction } from '../../Redux/Actions/ManagementAction'


export default function Control() {
    const dispatch = useDispatch()
    const playList = useSelector(state => state.ManagementReducer.playList)
    const currentIndex = useSelector(state => state.ManagementReducer.currentIndex)
    const currentVolume = useSelector(state => state.ManagementReducer.currentVolume)
    const [volume, setVolume] = useState(0.5)
    const [mute, setMute] = useState(false)
    const [random, setRandom] = useState(false)
    const [repeat, setRepeat] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)

    //---------------------------------------------- BUTTON -------------------------------------------
    let playBtn = () => {
        if (isPlaying) {
            document.querySelector('#audio').pause()
            setIsPlaying(!isPlaying)
        } else {
            document.querySelector('#audio').play()
            setIsPlaying(!isPlaying)
        }
    }
    let nextBtn = () => {
        if (random) {
            playRandom()
        } else {
            if (currentIndex >= playList.length - 1) {
                dispatch(changeCurrentIndexAction(0))
            } else {
                dispatch(changeCurrentIndexAction(currentIndex + 1))
            }
        }
        setIsPlaying(true)
        scrollToActiveSong()
    }
    let prevBtn = () => {
        if (random) {
            playRandom()
        } else {
            if (currentIndex === 0) {
                dispatch(changeCurrentIndexAction(playList.length - 1))
            } else {
                dispatch(changeCurrentIndexAction(currentIndex - 1))
            }
        }
        setIsPlaying(true)
        scrollToActiveSong()
    }
    let randomBtn = () => {
        setRandom(!random)
    }
    let repeatBtn = () => {
        setRepeat(!repeat)
    }
    //---------------------------------------------- ACTION -------------------------------------------
    let playRandom = () => {
        let randomIndex
        do {
            randomIndex = Math.floor(Math.random() * (playList.length))
        } while (randomIndex === currentIndex);
        dispatch(changeCurrentIndexAction(randomIndex))
    }
    let loadCurrentSong = () => {
        document.querySelector('#currentImg').style.backgroundImage = `url(${playList[currentIndex].image})`
        document.querySelector('.control .name__song').innerHTML = playList[currentIndex].name
        document.querySelector('#currentSinger').innerHTML = playList[currentIndex].singer
        document.querySelector('#currentSinger').title = playList[currentIndex].singer
        document.querySelector('#audio').src = playList[currentIndex].path
        document.querySelector('#endTime').innerHTML = playList[currentIndex].time
        document.querySelector('#startTime').innerHTML = '00:00'
        document.querySelector('#volume').volume = currentVolume
    }
    let scrollToActiveSong = () => {
        setTimeout(() => {
            document.querySelector('.body__list--item.active').scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }, 300);
    }
    let onTimeUpdate = () => {
        // currentTime: thời gian hiện tại --- duration: tổng thời gian của bài hát
        let currentPercent = document.querySelector('#audio').currentTime * 100 / document.querySelector('#audio').duration
        document.querySelector('#progress').value = currentPercent
        var countFullTime = Math.floor(document.querySelector('#audio').currentTime);
        var countSeconds = countFullTime % 60;
        var countMinutes = Math.floor(countFullTime / 60);
        if (countSeconds < 10) {
            document.querySelector('#startTime').innerHTML = countMinutes + ":0" + countSeconds;
        } else {
            document.querySelector('#startTime').innerHTML = countMinutes + ":" + countSeconds;
        }

    }
    let onEnded = () => {
        if (repeat) {
            document.querySelector('#audio').play()
        } else {
            nextBtn()
        }
    }
    let userSkip = (e) => {
        let timeUserSkipTo = e.target.value * document.querySelector('#audio').duration / 100
        document.querySelector('#audio').currentTime = timeUserSkipTo
    }
    let changeVolume = (e) => {
        let newVolume = e.target.value / 100
        if (newVolume === 0) {
            setMute(true)
        } else {
            setMute(false)
        }
        setVolume(newVolume)
    }
    let muteBtn = () => {
        if (mute) {
            setMute(false)
            setVolume(0.5)
            document.querySelector('#volume').value = 50
        } else {
            setMute(true)
            setVolume(0)
            document.querySelector('#volume').value = 0
        }
    }
    let showHide = (e) => {
        if ((window.innerWidth <= 741)) {
            if (e.target.closest('.control--bar') && !e.target.closest('.control__center')) {
                document.querySelector('#control').classList.add('active')
                document.querySelector('.footer--mobile').style.display = 'none'
            }
            if (e.target.closest('.down')) {
                document.querySelector('#control').classList.remove('active')
                document.querySelector('.footer--mobile').style.display = 'flex'
            }
        }

    }
    useEffect(() => {
        document.querySelector('#audio').volume = volume
    }, [volume])
    useEffect(() => {
        if (isPlaying) {
            loadCurrentSong()
            document.querySelector('#audio').play()
        } else {
            loadCurrentSong()
        }
    }, [currentIndex])
    return (<Fragment>
        <div id='control' className="control" onClick={showHide}>
            <div className='control--bar' >
                <div className="control__left">
                    <div className="control__left--img">
                        <div id="currentImg" />
                    </div>
                    <div className="control__left--name">
                        <i className="fas fa-chevron-down down"></i>
                        <marquee id="currentName" className="name__song" scrolldelay="130" width='70%' loop='infinite'></marquee>
                        <div id="currentSinger" className="name__singer"></div>
                    </div>
                    <div className="control__left--icons">
                        <div className="icon">
                            <i className="fas fa-heart" style={{ color: '#ed2b91' }} />
                        </div>
                        <div className="icon">
                            <i className="fas fa-ellipsis-h" />
                        </div>
                    </div>
                </div>
                <div className="control__center">
                    <div className="control__center--icons">
                        <div id="btnRandom" className={`${random ? "icon btnRandom active" : "icon btnRandom"}`} onClick={() => randomBtn()}>
                            <i className="fas fa-random" />
                        </div>
                        <div id="btnPrev" className="icon" onClick={() => prevBtn()}>
                            <i className="fas fa-step-backward" />
                        </div>
                        <div id="btnPlay" className="icon" onClick={() => playBtn()}>
                            <i className={`${isPlaying ? 'far fa-pause-circle' : 'far fa-play-circle'}`} />
                        </div>
                        <div id="btnNext" className="icon" onClick={() => nextBtn()}>
                            <i className="fas fa-step-forward" />
                        </div>
                        <div id="btnRepeat" className={`${repeat ? "icon repeatBtn active" : "icon repeatBtn"}`} onClick={() => repeatBtn()}>
                            <i className="fas fa-sync" />
                        </div>
                    </div>
                    <div className="control__center--progress">
                        <p id="startTime" />
                        <audio id="audio" className="audio" src='' onTimeUpdate={() => onTimeUpdate()} onEnded={() => onEnded()} />
                        <input id="progress" className="progressline" type="range" step="0.01   " min={0} max={100} defaultValue={0} onInput={userSkip} />
                        <p id="endTime" />
                    </div>
                </div>
                <div className="control__right">
                    <div className="icon">
                        <i className="fab fa-youtube" />
                    </div>
                    <div className="icon">
                        <i className="fas fa-microphone" />
                    </div>
                    <div id="btnMute" className="icon" onClick={() => muteBtn()}>
                        <i className={`${volume === 0 || mute ? 'fas fa-volume-mute' : 'fas fa-volume-up'}`} />
                    </div>
                    <input id="volume" className="volume" type="range" step={1} min={0} max={100} defaultValue={50} onInput={changeVolume} />
                </div>
            </div>
            <div className='footer--mobile'>
                <div className='footer__item'>
                    <i className="far fa-address-card icon" />
                    Cá nhân
                </div>
                <div className='footer__item'>
                    <i className="fas fa-record-vinyl icon" />
                    Khám phá
                </div>
                <div className='footer__item'>
                    <i className="fas fa-chart-line icon active" />
                    #zingchart
                </div>
                <div className='footer__item'>
                    <i className="fas fa-broadcast-tower icon" />
                    Radio
                </div>
                <div className='footer__item'>
                    <i className="fas fa-clipboard-list icon" />
                    Theo dõi
                </div>
            </div>
        </div>
    </Fragment>
    )
}
