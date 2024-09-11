import React from 'react'

import "./ScoreBoard.css"

export const ScoreBoard = ({scores, xPlaying}) => {
    const {xScore, oScore} = scores;
    return (
        <div className="scoreboard">
            <spam className={'score x-score ${!xPlaying && "inactive"}'}>X - {xScore}</spam>
            <spam className={'score x-score ${!xPlaying && "inactive"}'}>X - {oScore}</spam>
            </div>
    )
}