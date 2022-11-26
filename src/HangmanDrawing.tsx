import React from 'react'

const HEAD = (
  <div className='w-[70px] h-[70px] rounded-[100%] border-solid border-[10px] border-black absolute top-[49px] right-[-30px] '></div>
)
const BODY = (
  <div className='w-[10px] h-[100px] bg-black absolute top-[118px] right-0 '></div>
)
const RIGHT_ARM = (
  <div className='w-[100px] h-[10px] bg-black absolute top-[150px] origin-bottom-left rotate-[-30deg] right-[-100px] '></div>
)
const LEFT_ARM = (
  <div className='w-[100px] h-[10px] bg-black absolute top-[150px] origin-bottom-right rotate-[30deg] right-[10px] '></div>
)

const RIGHT_LEG= (
  <div className='w-[100px] h-[10px] bg-black absolute top-[210px] origin-bottom-left rotate-[60deg] right-[-90px] '></div>
)
const LEFT_LEG = (
  <div className='w-[100px] h-[10px] bg-black absolute top-[210px] origin-bottom-right rotate-[-60deg] right-0 '></div>
)
type Props = {}

export default function HangmanDrawing({}: Props) {
  return (
    <div className='relative'>
      {HEAD}
      {BODY}
      {RIGHT_ARM}
      {LEFT_ARM}
      {RIGHT_LEG}
      {LEFT_LEG}
      <div className='h-[50px]  w-[10px] bg-black top-0 right-0 absolute'></div>
      <div className='h-[10px]  w-[200px] bg-black ml-[120px]'></div>
      <div className='h-[400px]  w-[10px] bg-black ml-[120px]'></div>
      <div className='h-[10px]  w-[250px] bg-black'></div>
    </div>
  )
}