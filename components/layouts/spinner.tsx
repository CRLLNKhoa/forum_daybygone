"use client"
import React from 'react'
import WheelComponent from '@zcorefinance/react-wheel-of-prizes'

export default function Spinner() {
    const segments = [
        'better luck next time',
        'won 70',
        'won 10',
        'better luck next time',
        'won 2',
        'won uber pass',
        'better luck next time',
        'won a voucher'
      ]
      const segColors = [
        '#EE4040',
        '#F0CF50',
        '#815CD1',
        '#3DA5E0',
        '#34A24F',
        '#F9AA1F',
        '#EC3F3F',
        '#FF9000'
      ]
      const onFinished = (winner: any) => {
        console.log(winner)
      }
  return (
    <div className="flex items-center justify-center">
      <div className='w-40 h-40'>
        <WheelComponent
        segments={segments}
        segColors={segColors}
        winningSegment='won 2'
        onFinished={(winner: any) => onFinished(winner)}
        primaryColor='black'
        contrastColor='white'
        buttonText='Quay'
        isOnlyOnce={false}
        upDuration={1000}
        downDuration={1000}
        fontFamily='Arial'
      />
      </div>
    </div>
  )
}
