
var chartdata = [40,64,120,78,180,91]

function initializeHomePage() {
  // document.write("This home page is still under developing!");
  console.log("initializeHomePage is called")
  d3.select('body')
    .append('svg').attr('width',720).attr('height',200)
    .selectAll('rect').data(chartdata)
    .enter().append('rect')
    .style({'fill':'#3c763d','stroke':'#d6e9c6','stroke-width':'5'})
    // .attr('width': 40).attr('height', function(data) { return data; })
    // .attr('x', function(data,i) { return i * (40 + 20); })
    // .attr('y', function(data) { return 200 - data })
}