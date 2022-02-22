const terms = {
  networks: {
    latency: {
      en: 'Latency',
      details: '',
    },
    bandwidth: {
      en: 'Bandwidth',
      details: '',
    },
    internet: {
      en: 'Internet',
      details: '',
    },
    packetHeader: {
      en: 'Packet Header',
      details: '',
    },
    router: {
      en: 'Router',
      details: '',
    },
    refractionIndex: {
      en: 'Refraction index',
      details: '',
    },
    fiber: {
      en: 'Fiber optic',
      details: '',
    },
    congestionControl: {
      en: 'Congestion control',
      details: '',
    },
    windowScaling: {
      en: 'Window Scalling',
      details: '',
    },
    WDM: {
      en: 'Wavelength Division Multiplexing',
      details: '',
    },
    roundTrip: {
      en: 'round trip time',
      details: '',
    },
    preFetching: {
      en: 'pre-fetching',
      details: '',
    },
  },
  general: {
    videos: {
      en: 'Videos',
      details: '',
    },
    queue: {
      en: 'Queue',
      details: '',
    },
    caching: {
      en: 'Caching',
      details: ''
    },
  },
}

export const getTerm = (path) => {
  if (!path) {
    return
  }

  const keyArr = path.split('.')

  const getKey = (obj, i) => {
    if (i === keyArr.length - 1) {
      return obj[keyArr[i]]
    }

    return getKey(obj[keyArr[i]], i + 1)
  }

  try {
    return getKey(terms, 0)
  } catch (e) {
    console.error(e)
  }
}

export default terms
