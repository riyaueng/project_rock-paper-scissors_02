import React, { useState } from "react"
import SectionRounds from "../../components/sectionRounds/SectionRounds"
import SectionScores from "../../components/sectionScores/SectionScores"
import SectionChoice from "../../components/sectionChoice/SectionChoice"
import Header from "../../components/header/Header"

export default function Home() {
  const [roundOption, setRoundOption] = useState<string>("")
  const [playerChoice, setplayerChoice] = useState<string>("")

  // ? ---- ChangeEvent für RoundOption ----
  const selectedRound = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRoundOption(event.target.value)
    setChoiceOption(true)
  }

  // ? ---- ChangeEvent für SectionChoice ----
  const selectedChoice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setplayerChoice(event.target.value)
  }

  const [choiceOption, setChoiceOption] = useState<boolean>(false)

  return (
    <>
      <Header />
      <SectionRounds roundOption={roundOption} setRoundOption={setRoundOption} selectedRound={selectedRound} />
      <SectionScores />
      {choiceOption ? (
        <SectionChoice playerChoice={playerChoice} setPlayerChoice={setplayerChoice} selectedChoice={selectedChoice} />
      ) : null}
    </>
  )
}
