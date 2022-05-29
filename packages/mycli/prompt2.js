const {prompt} = require('enquirer')
// const fs =  require('fs')
const Conf = require('conf')
const config =  new Conf()
const preset = [
  'apple',
  'grape',
  'ozin',
  'gaming',
  'amogus',
]
console.log({
  path: config.path,
});

const priorChoises = config.get('choices') || []
const separator = priorChoises && priorChoises.length && {
  role: 'separator',
  value: '-------------',
}
const choices = [
  ...priorChoises,
  separator,
  ...preset.filter(v => !priorChoises.includes(v)),
].filter(Boolean);

(async function () {
  await prompt({
    type: 'select',
    name: 'color',
    message: 'Pick your favorite color',
    choices,
  })
  .then(result => {
    config.set('choices', [result.color, ...priorChoises].slice(0, 3))
    return result
  })
  .then(console.log)
  .catch(console.error)
})()
