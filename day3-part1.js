import numbersArray from './numbersArray'

function getPositionMap(numArr) {
  return numArr.reduce((prev, binNumber) => {
    const positionArr = binNumber.split('');
    return {
      ...prev,
      ...positionArr.reduce((previous, number, i) => {
        const index = i.toString()
        const num = Number(number);
        if(!prev[index]) {
          return {
            [index]: {
              one: num,
              zero: num ? 0 : 1
            }
          }
        }
        return {
          ...previous,
          [index]: {
            ...prev[index],
            ...(num ? { one: ++prev[index].one} : { zero: ++prev[index].zero})
          }
        }
      }, {})
    }
  },{})
}

function getDiagnostig(binaryNumbers) {
  const positionMap = getPositionMap(binaryNumbers);
  const { gamma, epsilon } = Object.values(positionMap)
    .reduce(({ gamma, epsilon}, { one, zero }) => {
      return {
        gamma: one > zero ? gamma + '1' : gamma + '0',
        epsilon: one < zero ? epsilon + '1' : epsilon + '0',
      }
    }, { gamma: '', epsilon: ''}
 )
  console.log({
    gamma: parseInt(gamma, 2),
    epsilon: parseInt(epsilon, 2),
  })

}

getDiagnostig(numbersArray);
