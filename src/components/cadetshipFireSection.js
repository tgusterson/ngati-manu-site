import React from 'react'
import CadetshipFireCard from "./cadetshipFireCard";

export default function cadetshipFireSection({ cardOneText, cardTwoText, cardThreeText, cardOneImage, cardTwoImage, cardThreeImage, fireimage }) {
  return (
    <div className="cadetshipFireSection">
      <div>
        <CadetshipFireCard text={cardOneText} image={cardOneImage} alt={"AHIKĀ"} />
        <CadetshipFireCard text={cardTwoText} image={cardTwoImage} alt={"KORĀ"} />
        <CadetshipFireCard text={cardThreeText} image={cardThreeImage} alt={"PĀKAIAHI"} />
      </div>
    </div>
  )
}