try {
  let pattern = GeoPattern.generate(Date.now().toString())
  document.body.style.backgroundImage = pattern.toDataUrl()
} catch {
  document.body.style.backgroundColor = '#006cab'
}

let search = document.getElementById('search')
let items = document.getElementById('items')

search.focus()

search.addEventListener('input', ({ target: { value } }) => {
  console.log(value)
  if (links[value]) window.location = links[value].url
})

search.addEventListener('keydown', ({ keyCode }) => {
  if (keyCode === 8) search.value = ''
})

items.innerHTML = Object.keys(links).reduce(
  (acc, key) =>
    acc +
    `
    <a href="${links[key].url}">
        <span>${key}</span>${links[key].title}
    </a>
    `,
  ''
)
