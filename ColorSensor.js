function ColorSensor(opts) {
  if (!this instanceof ColorSensor) {
    return new ColorSensor(opts)
  }

  var controller = null

  var state = {
    enabled: true,
    red: {
      value: 0,
      previous: 0,
      stash: []
    },
    orange: {
      value: 0,
      previous: 0,
      stash: []
    },
    yellow: {
      value: 0,
      previous: 0,
      stash: []
    },
    green: {
      value: 0,
      previous: 0,
      stash: []
    },
    blue: {
      value: 0,
      previous: 0,
      stash: []
    },
    violet: {
      value: 0,
      previous: 0,
      stash: []
    }
  }
}

module.exports = ColorSensor
