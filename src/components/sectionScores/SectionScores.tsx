import React from "react"
import "./SectionScores.css"

export default function SectionScores() {
  return (
    <>
      <section className="section_scores">
        <div className="wrapper_box wrapper_scores">
          <div className="wrapper_chosen_icons">
            <div className="chosen_icon your_choice"></div>
            <p>You</p>
          </div>

          <div className="div_scores">
            <p id="player_score"></p>
            <span> : </span>
            <p id="pc_score"></p>
          </div>
          <div className="wrapper_chosen_icons">
            <div className="chosen_icon pc_choice"></div>
            <p>PC</p>
          </div>
        </div>
      </section>
    </>
  )
}
