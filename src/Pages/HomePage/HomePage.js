import React from 'react'
import Body from './Body'
import Control from './Control'
import Library from './Library'
import Menu from './Menu'

export default function HomePage() {
    return (
        <div className="app">
            <Menu />
            <Body />
            <Library />
            <Control />
        </div>

    )
}
