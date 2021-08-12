const moveToURI = path => tags => {
  window.open(`${path}?tags=${tags.replaceAll(' ', '%20').replaceAll('　', '%20')}`)
}

const createInputBar = () => {
  const div = document.createElement('div')
  div.setAttribute('style', 'position: absolute; top: 0; left: 0; width: 100%; padding: 10px; margin: 0 0 10px 0;')

  const input = document.createElement('input')
  input.setAttribute('style', 'width: 100%')
  input.setAttribute('id', 'js-extention-nav-input')
  input.addEventListener('keydown', (e: any) => {
    if (e.code !== 'Enter') {
      return
    }
    moveToURI(process.env.PATH)(e.target.value)
  })

  div.appendChild(input)

  return div
}

const setElement = HTMLElement => {
  const height = HTMLElement.clientHeight + 10
  document.body.appendChild(HTMLElement)
  document.body.setAttribute('style', `padding-top: ${height}`)
}

const init = (() => {
  setElement(createInputBar())
})()

