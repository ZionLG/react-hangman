import React from 'react'

type Props = {}

export default function HangmanWord({}: Props) {
  const word = "test"
  const guessedLetters = ["", "e"]
  return (
    <div className=' flex gap-[.25em] text-8xl font-bold uppercase font-mono'>
      {word.split("").map((letter,index) => (
        <span className='border-b-[.1em] border-solid border-black' key={index}>
          <span className={`${guessedLetters.includes(letter) ? "visible": "invisible" }`}>
            {letter}
          </span>
        </span>
      ))}
    </div>
  )
}