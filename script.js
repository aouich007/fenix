var GraphOneData = {
  $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
  "data": {"url": "Dataset/Iris.csv"},
  "mark": "point",
  "encoding": {
    "x":
    {
      "field": "SepalLengthCm",
      "type": "quantitative",
      "axis":
      {
        "title": "X Axis"
      }
    },

    "y":
    {
      "field": "SepalWidthCm",
      "type": "quantitative",
      "axis":
      {
        "title": "Y Axis"
      }
    }
  }
};
var GraphTwoData = {
  $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
  "data": {"url": "Dataset/gapminder.csv"},
  "mark": "point",
  "encoding": {
    "x":
    {
      "field": "fertility",
      "type": "quantitative",
      "axis":
      {
        "title": "Fertility"
      }
    },

    "y":
    {
      "field": "population",
      "type": "quantitative",
      "axis":
      {
        "title": "Population"
      }
    }
  }
};
var GraphThreeData = {
  $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
  "data": {
    "values": [
      {"X": 2, "Y": 6},
      {"X": 3, "Y": 4},
      {"X": 7, "Y": 7},
      {"X": 10, "Y": 9},
      {"X": 2, "Y": 2},
      {"X": 4, "Y": 3},
      {"X": 6, "Y": 5},
      {"X": 1, "Y": 8},
      {"X": 5, "Y": 10},
      {"X": 9, "Y": 1}
    ]
  },
  "mark": "line",
  "encoding": {
    "x":
    {
      "field": "X",
      "type": "quantitative",
      "axis":
      {
        "title": "X Axis"
      }
    },

    "y":
    {
      "field": "Y",
      "type": "quantitative",
      "axis":
      {
        "title": "Y Axis"
      }
    }
  }
};
var GraphFourData = {
  $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
  "data": {
    "values": [
      {"X": 2, "Y": 6},
      {"X": 3, "Y": 4},
      {"X": 7, "Y": 7},
      {"X": 10, "Y": 9},
      {"X": 2, "Y": 2},
      {"X": 4, "Y": 3},
      {"X": 6, "Y": 5},
      {"X": 1, "Y": 8},
      {"X": 5, "Y": 10},
      {"X": 9, "Y": 1}
    ]
  },
  "mark": "bar",
  "encoding": {
    "x":
    {
      "field": "X",
      "type": "quantitative",
      "axis":
      {
        "title": "X Axis"
      }
    },

    "y":
    {
      "field": "Y",
      "type": "quantitative",
      "axis":
      {
        "title": "Y Axis"
      }
    }
  }
};

vegaEmbed('#graph-one', GraphOneData);
vegaEmbed('#graph-two', GraphTwoData);
vegaEmbed('#graph-three', GraphThreeData);
vegaEmbed('#graph-four', GraphFourData);
