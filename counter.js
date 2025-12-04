export function setupCounter(element) {
  if (!element) return

  let counter = 0

  const setCounter = (count) => {
    counter = count
    element.innerHTML = `Floor is ${counter}`
  }

  const counter_up = document.querySelector('#counter_up')
  const counter_down = document.querySelector('#counter_down')


  counter_up.addEventListener('click', () => setCounter(counter + 1))
  counter_down.addEventListener('click',() => setCounter(counter - 1))
  setCounter(0)
}
