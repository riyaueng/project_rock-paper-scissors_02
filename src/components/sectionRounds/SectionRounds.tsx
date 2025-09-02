import React from "react"
import RoundOption from "../roundOption/RoundOption"
import "./SectionRounds.css"

export default function SectionRounds() {
  return (
    <>
      <section className="section_rounds">
        <div className="wrapper_box">
          <h3>How many rounds?</h3>
          <RoundOption />
        </div>
      </section>
    </>
  )
}
