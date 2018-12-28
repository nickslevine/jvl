# jvl - embed vega-lite charts in JS Jupyter notebooks 

jvl is a tiny helper function for embedding [vega-lite](https://vega.github.io/vega-lite/) charts in Jupyter notebooks that are using the [IJavaScript](https://github.com/n-riesco/ijavascript) kernel. 

## Usage 

Install Jupyter and the IJavascript kernel - see instructions [here](https://github.com/n-riesco/ijavascript). 

In your project folder:
```bash
npm init -y
npm install --save jvl
jupyter lab
```

In your notebook:
```javascript
const {jvl} = require('jvl')
```

To print a vega-lite chart simply pass a vega-lite spec to `jvl()`:

```javascript
const spec = {
  data: {
    values: [
      {a: "A", b: 28}, {a: "B", b: 55}, {a: "C", b: 43},
      {a: "D", b: 91}, {a: "E", b: 81}, {a: "F", b: 53},
      {a: "G", b: 19}, {a: "H", b: 87}, {a: "I", b: 52}
    ]
  },
  mark: "bar",
  encoding: {
    x: {field: "a", type: "ordinal"},
    y: {field: "b", type: "quantitative"}
  }
}

jvl(spec)
```
