const getActualText = (matchStr) => {
  // first part is the actual text with extra prentheses
  const text = matchStr.split(' --> ')[0]
  // remove first and last chars
  return text.substring(1, text.length - 1)
}

const getTranslationProp = (matchStr) => {
  // translation prop is the second part
  return matchStr.split(' --> ')[1]
}

const buildComponentWrapper = (componentName, prop, actualText) => {
  if (!prop || !actualText) {
    return ''
  }

  return `<${componentName} t={"${prop}"}>${actualText}</${componentName}>`
}

/**
 * Replace md file text pattern: (actual text) --> translation key string
 * with component that will wrap the text and recive translation key as prop
 * @param {String} source md source text
 * @param {Sting} componentName The name of the component that will replace and wrap. Should be set in MDXComponents
 * @returns
 */
const replaceWithComponent = (source, componentName) => {
  const rgx = /\([^(]+\) --> [a-zA-Z_$0-9.]*/g

  return source.replace(rgx, (matched) => {
    return buildComponentWrapper(componentName, getTranslationProp(matched), getActualText(matched))
  })
}

export default replaceWithComponent
