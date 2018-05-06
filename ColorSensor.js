let priv = new Map()

let controllers = {
  AS7262: {
    ADDRESSES: {
      value: [0x00]
    },
    REGISTERS: {},
    initialize: function() {}
  }
}

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

  // Initializes component with j5 (boilerplate for Component objects)
  Board.Component.call(this, (opts = Board.Options(opts)))

  // select the controller
  if (opts.controller && typeof opts.controller === 'string') {
    controller = Controllers[opts.controller.toUpperCase()]
  } else {
    controller = opts.controller
  }

  // if no controller is sent
  if (controller == null) {
    controller = Controllers.AS7262
  }

  // boilerplate for component with a controller object (called AFTER controller is ID'd)
  Board.Controller.call(this, controller, opts)

  // TODO: ID this code
  if (!this.enabledChanged) {
    this.enabledChanged = function() {}
  }

  // set the state map
  priv.set(this, state)

  // TODO: does initialize only run at start, or every data acquisition?
  if (typeof this.initialize === 'function') {
    this.initialize(opts, function(data) {
      var isChange = false

      if (!state.enabled) {
        return
      }

      this.emit('data', {})

      if (isChange) {
        this.emit('change', {})
      }
    })
  }
}

util.inherits(ColorSensor, Emitter)

module.exports = ColorSensor
