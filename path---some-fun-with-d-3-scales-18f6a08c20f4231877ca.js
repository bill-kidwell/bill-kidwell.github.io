webpackJsonp([0x62403a98cbf8],{494:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Bill Kidwell's blog on software.",author:"Bill Kidwell",url:"http://billkidwell.com"}},markdownRemark:{id:"C:/projects/blog/src/posts/2016-07-04-some-fun-with-d3-scales/index.md absPath of file >>> MarkdownRemark",html:'<p>In this article I expand on a tutorial that I enjoyed for d3. Most of the changes introduce the use of scales.  I start by introducing scales for calculating the locations and sizes of the marks on the chart, then apply them to vary the color of the marks and the associated labels.</p>\n<p>I have been working with d3 on and off for the past year. It is a great library, and there are tons of great resources for learning d3. One of the tutorials I like is <a href="http://alignedleft.com/tutorials/d3/making-a-bar-chart">Making a bar chart</a> by Scott Murray.  If you are looking for d3 resources you may want to have a look, or go straight to his recent book, <a href="http://chimera.labs.oreilly.com/books/1230000000345/">Interactive Data Visualization</a>.</p>\n<p>In this post, I am going to go through some changes to the bar chart that I made for my own purposes.</p>\n<p>You can see a “final” result <a href="http://codepen.io/bill-kidwell/pen/ZOKgPQ">here</a>.</p>\n<iframe height=\'322\' scrolling=\'no\' title=\'D3 Bar Chart with Labels\' src=\'//codepen.io/bill-kidwell/embed/ZOKgPQ/?height=322&theme-id=0&default-tab=result&embed-version=2\' frameborder=\'no\' allowtransparency=\'true\' allowfullscreen=\'true\' style=\'width: 100%;\'>See the Pen <a href=\'https://codepen.io/bill-kidwell/pen/ZOKgPQ/\'>D3 Bar Chart with Labels</a> by Bill Kidwell (<a href=\'https://codepen.io/bill-kidwell\'>@bill-kidwell</a>) on <a href=\'https://codepen.io\'>CodePen</a>.\n</iframe>\n## Throw in a little es2015\n<p>I am a big fan of babel.js and the new JavaScript language features.  One of the first things I did to tidy things up is replace some of the functions with big arrow syntax.</p>\n<p>So this fragment of code…</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>.attr("y", function(d) {\n    return h - d;  // Height minus data value\n})</code></pre>\n      </div>\n<p>becomes this fragment of code…</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>.attr("y", (d) => h - d ); // Height minus data value</code></pre>\n      </div>\n<p>This is a minor, stylistic change.  I only mention it because you will notice the differences.</p>\n<h2>Separate SVG dimensions from chart dimensions</h2>\n<p>I used this example as a starting point for another project. It could be extended to include multiple series, a legend, a title and subtitle, or other chart elements.  Step 1 of making this possible is to separate the dimensions of the svg canvas and the dimensions of the chart area.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>// The canvas represents the entire SVG\nvar canvas = { w: 1000, h: 500 };\n// Chart area is where the primary chart graphic appears\nvar chart = { w: 500, h: 100, x: 100, y: 100 };</code></pre>\n      </div>\n<p>Now, I create the svg using the canvas object.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>var svg = d3.select("body")\n                        .append("svg")\n                        .attr("width", canvas.w)\n                        .attr("height", canvas.h);</code></pre>\n      </div>\n<p>I also create a <code>g</code> element to contain the chart area.  I translate its contents by the x and y coordinates.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>var group = svg.append("g")\n                .attr("transform", "translate(" + chart.x + "," + chart.y + ")");</code></pre>\n      </div>\n<p>This also requires that we change the lines that begin <code>svg.selectAll(...</code> with <code>group.selectAll(...</code> so that our rect and text elements are contained within the grouping tag.</p>\n<h2>Introducing scales</h2>\n<p>Scott covers scales later in the tutorial, but on another chart type. I thought it would be good practice to come back to this example and make it work with scales.</p>\n<h3>x scale</h3>\n<p>The x scale for this data is ordinal, and we will use a 10% padding.  In d3, you can set that up with these two lines.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>var x = d3.scale.ordinal()\n       .rangeBands([0, chart.w], .1);</code></pre>\n      </div>\n<p>In order to translate data values to coordinates on this scale, we must set the domain of the scale. Normally, we would map this to labels, but we are only using the single array.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>x.domain(dataset.map( (d) => d ));</code></pre>\n      </div>\n<p>In the tutorial, the x location of the bars was calculated manually by taking the total width, dividing by the number of bars, and multiplying by the index of the data.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>.attr("x", function(d, i) {\n    return i * (w / dataset.length);\n})</code></pre>\n      </div>\n<p>Using the scale, things get much simpler for the rect elements.  Simply using the scale function gets us the proper value for the x location, and the <code>rangeBand</code> function returns the appropriate width for the bar.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>.attr("x", (d) => x(d))\n.attr("width", x.rangeBand())</code></pre>\n      </div>\n<p>For the text, we need to add <sup>1</sup>⁄<sub>2</sub> the width of the bar. You can get the bar width using the <code>rangeBand</code> method of the ordinal scale.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>.attr("x", (d) => x(d) + 0.5 * x.rangeBand() ) // center of bar</code></pre>\n      </div>\n<p>So far, the version with scales is actually much simpler!  Of course, you have to understand scales, and the point of the tutorial was to build up to that.</p>\n<h3>y scale</h3>\n<p>The y scale is linear.  The range parameters look backwards, until you recall that y===0 is at the top of the svg (or group, in our case).  We set the domain of the scale a bit later using zero and the max value from the dataset.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>var y = d3.scale.linear()\n          .range([chart.h, 0]);\n/* ... code omitted for brevity ... */\ny.domain([0, d3.max(dataset)]);          </code></pre>\n      </div>\n<p>Manually calculating the y location and height in the previous version required the use of a constant.  This limits the usefulness of the bar chart, since it will only work on values in the range of 0-25 (other bars would be too high and be cut off).</p>\n<p>Again, the y location can be determined using the scale function, and the height is calculated by subtracting that value from the height.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>.attr("y", (d) => y(d))\n.attr("height", (d) => chart.h - y(d) )</code></pre>\n      </div>\n<p>Similarly, the y location of the text is the rect’s y location with a hardcoded offset.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>.attr("y", (d) => y(d) + 15 )</code></pre>\n      </div>\n<h3>color scales</h3>\n<p>One of the things I really liked about the tutorial was the way that the author colored in the bars. Although he seemed to be foreshadowing future topics, I thought it added interest to an otherwise boring visualization. For reference, I have repeated the function below.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>.attr("fill", function(d) {\n    return "rgb(0, 0, " + (d * 10) + ")";\n});</code></pre>\n      </div>\n<p>This particular function also suffers from the limitations above.  When I ran into the problem, I decided to use scales for the color of the bars as well.  To replicate the behavior, you can use a scale like this…</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>var blueScale = d3.scale.linear()\n                    .domain([d3.min(dataset), d3.max(dataset)])\n                    .range(["black", "blue"]);</code></pre>\n      </div>\n<p>Using this scale, we can specify the fill color as follows:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>.attr("fill", (d) => blueScale(d))</code></pre>\n      </div>\n<p>This is quite useful, but I wanted to take it a bit further.  I ended up using a color range that varies from a light blue for lower values to a dark blue for larger values. This introduces a new problem, as I need the fill color of the text to vary as well.  My first attempt used an inverted scale.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>var blueScale = d3.scale.linear()\n                    .domain([d3.min(dataset), d3.max(dataset)])\n                    .range(["lightblue", "darkblue"]);\n\nvar inverseBlue = d3.scale.linear()\n                    .domain([d3.max(dataset), d3.min(dataset)])\n                    .range(["lightblue", "darkblue"]);\n\n// For the bar\n   .attr("fill", (d) => blueScale(d))\n\n// For the text\n   .attr("fill", (d) => inverseBlue(d))</code></pre>\n      </div>\n<p>This works very well for a first try, but values in the middle of the range get similar shades of blue for the bar, and the text. d3 has some functions to change the value of colors to lighter or darker shades.  However, how do I know if I am working with a dark color, or light color in the first place? To solve this problem, I looked at the code for <a href="https://github.com/bgrins/TinyColor">TinyColor</a>. The following two functions are from tinycolor, with a slight modification to work with d3’s color values.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>function getBrightness(color) {\n  // http://www.w3.org/TR/AERT#color-contrast\n  var rgb = d3.rgb(color)\n  return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;\n}\n\nfunction isDark(color) {\n  return getBrightness(color) &lt; 128;\n}</code></pre>\n      </div>\n<p>The <code>getBrightness</code> function returns a value for the brightness.  TinyColor’s <code>isDark</code> function uses a value less than 128 as a dark value. With these two missing pieces, I put together a simple function that gives me a contrasting color.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>function contrastingColor(d) {\n  var barColor = d3.rgb(blueScale(d));\n  var color = d3.rgb(inverseBlue(d)); // start with the color from the inverse scale\n  if (isDark(barColor)) return color.brighter(2);\n  else return color.darker(2);\n}</code></pre>\n      </div>\n<p>First, I get the color of the bar.  I also get the color from the inverse scale as a starting point. If the barColor is dark, return a value that is 2 shades lighter than the inverse.  If it is not dark, return a color that is two shades darker than the inverse.</p>\n<p>I was pretty happy with the result.  I am sure there are more robust ways to achieve this effect.  If you know of any, please send me a comment.</p>\n<p>Hopefully you found this to be interesting.  If you have any suggestions or comments, please send them my way.</p>',frontmatter:{date:"05 July, 2016",title:"Some fun with d3 scales",subtitle:"d3 scales for positioning and color",path:"/some fun with d3 scales/",cover:{childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAIAAABM9SnKAAAACXBIWXMAABJ0AAASdAHeZh94AAABHklEQVQY02P4jwT+/fv/9+8/IAKy//z5C2EgyQIBQiUQMGDKAamvX3/B2P//gI34h2QO3FCoZgj3+/ffd++9X73ulqHhwvbOk9duvIUZCpJ+8PDjw8efgIzfv/929Zw6f+ElVPOfP/++//rTP/O8vddqW+cVvHwTNHXne4Ws75l5/uSFlz9+/gGqaWw/EZqwdeaSK/NWXtfQm7dh020GoJkfv/1ctvtWy5zTfgmbTeyXmdst5ePr1TNcaOa43DN6Y1r1gZ4lF3uWXvCM3GjuvCI4bZtHzCZ5tdmbt95leP/91/EHbxbsuLVwy62mvlN5pfvyivd5eq5JTd+VV7YfKDJ1yeWZG64v23Wnuv1YUfXBrmlnWyaeik3cduLEMwC2TRqwzWDaaQAAAABJRU5ErkJggg==",aspectRatio:3.1093333333333333,src:"/static/cover-0add40c0d8485d14d21339569f7478dc-7a72d.png",srcSet:"/static/cover-0add40c0d8485d14d21339569f7478dc-8baea.png 158w,\n/static/cover-0add40c0d8485d14d21339569f7478dc-69705.png 315w,\n/static/cover-0add40c0d8485d14d21339569f7478dc-7a72d.png 630w,\n/static/cover-0add40c0d8485d14d21339569f7478dc-514af.png 945w,\n/static/cover-0add40c0d8485d14d21339569f7478dc-4b1c5.png 1166w",sizes:"(max-width: 630px) 100vw, 630px"}}}}}},pathContext:{path:"/some fun with d3 scales/"}}}});
//# sourceMappingURL=path---some-fun-with-d-3-scales-18f6a08c20f4231877ca.js.map