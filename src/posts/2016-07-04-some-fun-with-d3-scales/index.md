---
title: "Some fun with d3 scales"
date: "2016-07-04T21:21:13-04:00"
subtitle: "d3 scales for positioning and color"
path: "/some fun with d3 scales/"
---
In this article I expand on a tutorial that I enjoyed for d3. Most of the changes introduce the use of scales.  I start by introducing scales for calculating the locations and sizes of the marks on the chart, then apply them to vary the color of the marks and the associated labels.

I have been working with d3 on and off for the past year. It is a great library, and there are tons of great resources for learning d3. One of the tutorials I like is [Making a bar chart](http://alignedleft.com/tutorials/d3/making-a-bar-chart) by Scott Murray.  If you are looking for d3 resources you may want to have a look, or go straight to his recent book, [Interactive Data Visualization](http://chimera.labs.oreilly.com/books/1230000000345/).

In this post, I am going to go through some changes to the bar chart that I made for my own purposes.

You can see a &ldquo;final&rdquo; result <a href="http://codepen.io/bill-kidwell/pen/ZOKgPQ">here</a>.

<p data-height="284" data-theme-id="dark" data-slug-hash="ZOKgPQ" data-default-tab="result" data-user="bill-kidwell" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/bill-kidwell/pen/ZOKgPQ/">D3 Bar Chart with Labels</a> by Bill Kidwell (<a href="http://codepen.io/bill-kidwell">@bill-kidwell</a>) on <a href="http://codepen.io">CodePen</a>.
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

## Throw in a little es2015

I am a big fan of babel.js and the new JavaScript language features.  One of the first things I did to tidy things up is replace some of the functions with big arrow syntax.

So this fragment of code&hellip;

```
.attr("y", function(d) {
    return h - d;  // Height minus data value
})
```
becomes this fragment of code&hellip;

```
.attr("y", (d) => h - d ); // Height minus data value
```

This is a minor, stylistic change.  I only mention it because you will notice the differences.

## Separate SVG dimensions from chart dimensions

I used this example as a starting point for another project. It could be extended to include multiple series, a legend, a title and subtitle, or other chart elements.  Step 1 of making this possible is to separate the dimensions of the svg canvas and the dimensions of the chart area.

```
// The canvas represents the entire SVG
var canvas = { w: 1000, h: 500 };
// Chart area is where the primary chart graphic appears
var chart = { w: 500, h: 100, x: 100, y: 100 };
```

Now, I create the svg using the canvas object.

```
var svg = d3.select("body")
                        .append("svg")
                        .attr("width", canvas.w)
                        .attr("height", canvas.h);
```

I also create a `g` element to contain the chart area.  I translate its contents by the x and y coordinates.

```
var group = svg.append("g")
                .attr("transform", "translate(" + chart.x + "," + chart.y + ")");
```

This also requires that we change the lines that begin `svg.selectAll(...` with `group.selectAll(...` so that our rect and text elements are contained within the grouping tag.

## Introducing scales

Scott covers scales later in the tutorial, but on another chart type. I thought it would be good practice to come back to this example and make it work with scales.

### x scale

The x scale for this data is ordinal, and we will use a 10% padding.  In d3, you can set that up with these two lines.

```
var x = d3.scale.ordinal()
       .rangeBands([0, chart.w], .1);
```

In order to translate data values to coordinates on this scale, we must set the domain of the scale. Normally, we would map this to labels, but we are only using the single array.

```
x.domain(dataset.map( (d) => d ));
```

In the tutorial, the x location of the bars was calculated manually by taking the total width, dividing by the number of bars, and multiplying by the index of the data.

```
.attr("x", function(d, i) {
    return i * (w / dataset.length);
})
```

Using the scale, things get much simpler for the rect elements.  Simply using the scale function gets us the proper value for the x location, and the `rangeBand` function returns the appropriate width for the bar.

```
.attr("x", (d) => x(d))
.attr("width", x.rangeBand())
```

For the text, we need to add <sup>1</sup>&frasl;<sub>2</sub> the width of the bar. You can get the bar width using the `rangeBand` method of the ordinal scale.

```
.attr("x", (d) => x(d) + 0.5 * x.rangeBand() ) // center of bar
```

So far, the version with scales is actually much simpler!  Of course, you have to understand scales, and the point of the tutorial was to build up to that.

### y scale

The y scale is linear.  The range parameters look backwards, until you recall that y===0 is at the top of the svg (or group, in our case).  We set the domain of the scale a bit later using zero and the max value from the dataset.

```
var y = d3.scale.linear()
          .range([chart.h, 0]);
/* ... code omitted for brevity ... */
y.domain([0, d3.max(dataset)]);          
```

Manually calculating the y location and height in the previous version required the use of a constant.  This limits the usefulness of the bar chart, since it will only work on values in the range of 0-25 (other bars would be too high and be cut off).

Again, the y location can be determined using the scale function, and the height is calculated by subtracting that value from the height.

```
.attr("y", (d) => y(d))
.attr("height", (d) => chart.h - y(d) )
```

Similarly, the y location of the text is the rect&rsquo;s y location with a hardcoded offset.

```
.attr("y", (d) => y(d) + 15 )
```

### color scales

One of the things I really liked about the tutorial was the way that the author colored in the bars. Although he seemed to be foreshadowing future topics, I thought it added interest to an otherwise boring visualization. For reference, I have repeated the function below.

```
.attr("fill", function(d) {
    return "rgb(0, 0, " + (d * 10) + ")";
});
```

This particular function also suffers from the limitations above.  When I ran into the problem, I decided to use scales for the color of the bars as well.  To replicate the behavior, you can use a scale like this&hellip;

```
var blueScale = d3.scale.linear()
                    .domain([d3.min(dataset), d3.max(dataset)])
                    .range(["black", "blue"]);
```

Using this scale, we can specify the fill color as follows:

```
.attr("fill", (d) => blueScale(d))
```

This is quite useful, but I wanted to take it a bit further.  I ended up using a color range that varies from a light blue for lower values to a dark blue for larger values. This introduces a new problem, as I need the fill color of the text to vary as well.  My first attempt used an inverted scale.

```
var blueScale = d3.scale.linear()
                    .domain([d3.min(dataset), d3.max(dataset)])
                    .range(["lightblue", "darkblue"]);

var inverseBlue = d3.scale.linear()
                    .domain([d3.max(dataset), d3.min(dataset)])
                    .range(["lightblue", "darkblue"]);

// For the bar
   .attr("fill", (d) => blueScale(d))

// For the text
   .attr("fill", (d) => inverseBlue(d))

```

This works very well for a first try, but values in the middle of the range get similar shades of blue for the bar, and the text. d3 has some functions to change the value of colors to lighter or darker shades.  However, how do I know if I am working with a dark color, or light color in the first place? To solve this problem, I looked at the code for [TinyColor](https://github.com/bgrins/TinyColor). The following two functions are from tinycolor, with a slight modification to work with d3&rsquo;s color values.

```
function getBrightness(color) {
  // http://www.w3.org/TR/AERT#color-contrast
  var rgb = d3.rgb(color)
  return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
}

function isDark(color) {
  return getBrightness(color) &lt; 128;
}
```

The `getBrightness` function returns a value for the brightness.  TinyColor's `isDark` function uses a value less than 128 as a dark value. With these two missing pieces, I put together a simple function that gives me a contrasting color.

```
function contrastingColor(d) {
  var barColor = d3.rgb(blueScale(d));
  var color = d3.rgb(inverseBlue(d)); // start with the color from the inverse scale
  if (isDark(barColor)) return color.brighter(2);
  else return color.darker(2);
}
```

First, I get the color of the bar.  I also get the color from the inverse scale as a starting point. If the barColor is dark, return a value that is 2 shades lighter than the inverse.  If it is not dark, return a color that is two shades darker than the inverse.

I was pretty happy with the result.  I am sure there are more robust ways to achieve this effect.  If you know of any, please send me a comment.

Hopefully you found this to be interesting.  If you have any suggestions or comments, please send them my way.
