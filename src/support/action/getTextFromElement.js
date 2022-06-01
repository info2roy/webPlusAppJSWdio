import checkIfElementExists from './../lib/checkIfElementExists'

export default (selector) => {
  checkIfElementExists(selector)

  const element = $(selector)

  return element.getText()
}
