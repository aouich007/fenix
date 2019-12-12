var groupedLinear = {
  "repeat": {
    "column": ["fertility", "life", "population", "child_mortality", "gdp"]
  },
  "spec": {
    "data": {"url": "gapminder_final.csv"},
    "mark": "line",
    "selection": {
      "brush": {
        "type": "interval",
        "resolve": "union",
        "on": "[mousedown[event.shiftKey], window:mouseup] > window:mousemove!",
        "translate": "[mousedown[event.shiftKey], window:mouseup] > window:mousemove!",
        "zoom": "wheel![event.shiftKey]"
      },
      "grid": {
        "type": "interval",
        "resolve": "global",
        "bind": "scales",
        "translate": "[mousedown[!event.shiftKey], window:mouseup] > window:mousemove!",
        "zoom": "wheel![!event.shiftKey]"
      }
    },
    "encoding": {
      "x": {"field": "year", "type": "quantitative",
      "scale": {"domain": [1960,2020]},
      "title": "Year"},
      "y": {
        "aggregate": "mean",
        "field": {"repeat": "column"},
        "type": "quantitative",
        "axis": {
          "minExtent": 30
        },
      },
      "color": {
        "condition": {
          "selection": "brush",
          "field": "region",
          "type": "nominal"
        },
        "value": "grey"
      }
    }
  }
}