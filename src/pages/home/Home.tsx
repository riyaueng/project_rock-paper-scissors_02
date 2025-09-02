import React from "react"
import SectionRounds from "../../components/sectionRounds/SectionRounds"
import SectionScores from "../../components/sectionScores/SectionScores"
import SectionChoice from "../../components/sectionChoice/SectionChoice"
import Header from "../../components/header/Header"

export default function Home() {
  return (
    <>
      <Header />
      <SectionRounds />
      <SectionScores />
      <SectionChoice />
    </>
  )
}
