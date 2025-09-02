import React from "react"
import "./SectionChoice.css"

interface PlayerChoiceProps {
  playerChoice: string
  setPlayerChoice: React.Dispatch<React.SetStateAction<string>>
  selectedChoice: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function SectionChoice(props: PlayerChoiceProps) {
  return (
    <>
      <section className="section_choice">
        <h2 className="info_text"></h2>
        <div className="wrapper_choice">
          <button type="button" id="btn_rock_icon" className="btn_icon">
            <p>✊</p>
          </button>
          <button type="button" id="btn_paper_icon" className="btn_icon">
            <p>🖐</p>
          </button>
          <button type="button" id="btn_scissor_icon" className="btn_icon">
            <p>✌️</p>
          </button>
        </div>

        <p className="cta_text">Make your move.</p>

        <div className="emoji_hand">
          <p>👇</p>
        </div>

        <a href="#" id="restart">
          restart
        </a>
      </section>
    </>
  )
}
