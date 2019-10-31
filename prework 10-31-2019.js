// write a function that takes a number and reverses it 


function reversedNum(numbers) {
  return (
    parseFloat(
      numbers
        .toString()
        .split()
        .reverse()
        .join()
    ) * Math.sign(numbers)
  )                 
}