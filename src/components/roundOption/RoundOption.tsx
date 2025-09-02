import React from "react"
import "./RoundOption.css"

export default function RoundOption() {
  return (
    <>
      <div className="div_choose_rounds">
        <div className="wrapper_radio_btn">
          <input type="radio" id="option_5" name="option" value="5" />
          <label htmlFor="option_5">5</label>
        </div>
        <div className="wrapper_radio_btn">
          <input type="radio" id="option_10" name="option" value="10" />
          <label htmlFor="option_10">10</label>
        </div>
        <div className="wrapper_radio_btn">
          <input type="radio" id="option_15" name="option" value="15" />
          <label htmlFor="option_15">15</label>
        </div>
        <div className="wrapper_radio_btn">
          <input type="radio" id="option_20" name="option" value="20" />
          <label htmlFor="option_20">20</label>
        </div>
      </div>
    </>
  )
}
