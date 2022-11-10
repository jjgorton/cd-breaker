import React from 'react'

const CurrentCD = ({oldPrincipal,
     setOldPrincipal,
    oldRate,
    setOldRate,
    oldFreq,
    setOldFreq,
    term,
    setTerm,
    oldInterest,
    setOldInterest}) => {

      const handleChanges = (e) => {
        
      }


  return (
    <div>
        <h1>Current CD</h1>
        <form>
            <input
                type='number'
                id='old-principal'
                name='old principal'
                value={oldPrincipal}
                onChange={handleChanges}
            />

        </form>
    </div>
  )
}

export default CurrentCD