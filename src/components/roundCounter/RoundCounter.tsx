import React from "react"
import "./RoundCounter.css"

interface RoundOptionProps {
  roundOption: string
  setRoundOption: React.Dispatch<React.SetStateAction<string>>
  selectedRound: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function RoundCounter(props: RoundOptionProps) {
  return (
    <>
      <div className="div_round_counter">
        <p>0/{props.roundOption}</p>
      </div>
    </>
  )
}
