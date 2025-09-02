import RoundOption from "../roundOption/RoundOption"
import "./SectionRounds.css"
import RoundCounter from "../roundCounter/RoundCounter"

interface RoundOptionProps {
  roundOption: string
  setRoundOption: React.Dispatch<React.SetStateAction<string>>
  selectedRound: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function SectionRounds(props: RoundOptionProps) {
  // ? ---- Variablen für Kinder-Komponenten ----
  const roundOptions = (
    <RoundOption
      roundOption={props.roundOption}
      setRoundOption={props.setRoundOption}
      selectedRound={props.selectedRound}
    />
  )
  const roundCounter = (
    <RoundCounter
      roundOption={props.roundOption}
      setRoundOption={props.setRoundOption}
      selectedRound={props.selectedRound}
    />
  )

  return (
    <>
      <section className="section_rounds">
        <div className="wrapper_box">
          <h3>How many rounds?</h3>
          {props.roundOption === "" ? roundOptions : roundCounter}
        </div>
      </section>
    </>
  )
}
