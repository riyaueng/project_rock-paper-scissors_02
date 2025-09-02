import "./RoundOption.css"

interface RoundOptionProps {
  roundOption: string
  setRoundOption: React.Dispatch<React.SetStateAction<string>>
  selectedRound: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function RoundOption(props: RoundOptionProps) {
  return (
    <>
      <div className="div_choose_rounds">
        <div className="wrapper_radio_btn">
          <input
            type="radio"
            id="option_5"
            name="option"
            value="5"
            checked={props.roundOption === "5"}
            onChange={props.selectedRound}
          />
          <label htmlFor="option_5">5</label>
        </div>
        <div className="wrapper_radio_btn">
          <input
            type="radio"
            id="option_10"
            name="option"
            value="10"
            checked={props.roundOption === "10"}
            onChange={props.selectedRound}
          />
          <label htmlFor="option_10">10</label>
        </div>
        <div className="wrapper_radio_btn">
          <input
            type="radio"
            id="option_15"
            name="option"
            value="15"
            checked={props.roundOption === "15"}
            onChange={props.selectedRound}
          />
          <label htmlFor="option_15">15</label>
        </div>
        <div className="wrapper_radio_btn">
          <input
            type="radio"
            id="option_20"
            name="option"
            value="20"
            checked={props.roundOption === "20"}
            onChange={props.selectedRound}
          />
          <label htmlFor="option_20">20</label>
        </div>
      </div>
    </>
  )
}
