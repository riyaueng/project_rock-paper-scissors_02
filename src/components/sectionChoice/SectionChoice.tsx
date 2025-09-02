import React from "react"
import ChoiceBtns from "../choiceBtns/choiceBtns"
import "./SectionChoice.css"

export default function SectionChoice() {
  return (
    <>
      <section className="section_choice">
        <h2 className="info_text"></h2>
        <ChoiceBtns />

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
