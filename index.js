const Vega = require('vega')
const VegaLite = require('vega-lite')

const jvl = (spec) => {
  const view = new Vega.View(Vega.parse(VegaLite.compile(spec).spec))
  $$.svg(view.toSVG()
  )
}

module.exports = {
  jvl: jvl
}
