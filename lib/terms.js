const terms = {
  networks: {
    latency: 'Latency',
    bandwidth: 'Bandwidth',
  },
}

export const getTerm = (path) => {
  if(!path) {
    return
  }

  const keyArr = path.split('.')

  const getKey = (obj, i) => {
    if (i === keyArr.length - 1) {
      return obj[keyArr[i]]
    }

    return getKey(obj[keyArr[i]], i + 1)
  }

  return getKey(terms, 0)
}

export default terms
