import React from "react"
import "./ChoiceBtns.css"

export default function ChoiceBtns() {
  return (
    <>
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
    </>
  )
}
