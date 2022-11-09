import React from 'react'

import { useState } from 'react'

import CurrentCD from '../currentCD/CurrentCD'
import Penalty from '../penalty/Penalty'
import OtherCD from '../otherCD/OtherCD'

const Calculator = () => {

    const [oldPrincipal, setOldPrincipal] = useState(0);
    const [oldRate, setOldRate] = useState(0);
    const [oldFreq, setOldFreq] = useState('daily');
    const [term, setTerm] = useState(0);
    const [oldInterest, setOldInterest] = useState(0)

    const [penaltyTerm, setPenaltyTerm] = useState(0);
    const [penaltySimple, setPenaltySimple] = useState(true);
    const [penaltyFee, setPenaltyFee] = useState(0);
    const [totalPenalty, setTotalPenalty] = useState(0)

    const [otherPrincipal, setOtherPrincipal] = useState(0)
    const [otherRate, setOtherRate] = useState(0);
    const [otherInterest, setOtherInterest] = useState(0);


  return (
    <>
        <CurrentCD />
        <Penalty />
        <p>{oldInterest > otherInterest ? `>` : oldInterest < otherInterest ? `<` : `=`}</p>
        <OtherCD />
    </>
  )
}

export default Calculator