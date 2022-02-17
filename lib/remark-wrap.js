import sizeOf from 'image-size'
import fs from 'fs'
import { visit } from 'unist-util-visit'

const getAllMatches = (paragraph) => {
  const rgx = /<\/ *([a-zA-Z_$0-9]+ +)+[a-zA-Z_$0-9]+= *"(.*?)" *\/>/g
  return paragraph.match(rgx)
}

const getActualText = (matchStr) => {
  // get text and remove />and</
  return matchStr.match(/<\/ *([a-zA-Z_$0-9] *)+ +/g).map((str) => str.substring(2).trim())
}

const getProps = (matchStr) => {
  return matchStr.match(/[a-zA-Z_$0-9]+= *"(.*?)"/g)
}

const buildComponentWrapper = (componentName, props, actualText) => {
  if (!props || !actualText) {
    return ''
  }

  return `<${componentName} ${props.join(' ')}>${actualText}<${componentName}/>`
}

const wrapWithComponent = (paragraph, componentName) => {
  const rgx = /<\/ *([a-zA-Z_$0-9]+ +)+[a-zA-Z_$0-9]+= *"(.*?)" *\/>/g

  return paragraph.replace(rgx, (matched) => {
    return buildComponentWrapper(componentName, getProps(matched), getActualText(matched))
  })
}

export default function remarkWrap(tree) {
  return (tree) => {
    visit(tree, 'paragraph', (node) => {
      visit(node, 'text', (textNode) => {
        textNode.value = wrapWithComponent(textNode.value, 'Tooltip')
      })
    })
  }
}
