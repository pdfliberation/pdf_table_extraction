var svg = d3.select("#paper");

var all_words = []

var width = 0;
var height = 0;
var count = 0;

_.each(d3.selectAll('word')[0], 
        function(w){  
                       all_words.push({
                            'xmin': parseFloat(w.getAttribute('xmin')),
                            'xmax': parseFloat(w.getAttribute('xmax')),
                            'ymin': parseFloat(w.getAttribute('ymin')),
                            'ymax': parseFloat(w.getAttribute('ymax')),
                            'id': count,
                            'text': w.innerHTML});
                        width = Math.max(width, w.getAttribute('xmax')) ;
                        height = Math.max(height, w.getAttribute('ymax'));
                        count += 1;
                        });

width = d3.select('page').attr('width');
height = d3.select('page').attr('height');


svg.attr('width',width).attr('height',height);

doc_image = svg.append('g').classed('doc_image',true);

doc_image.append('image')
    .attr('xlink:href','DHS.TSA.2013.png-01.png')
    .attr('width', width)
    .attr('height', height)
    .attr('x',0)
    .attr('y',0);

bbox_container = svg.append('g').classed('bbox',true);

bboxes = bbox_container.selectAll('g')
      .data(all_words)
      .enter().append('g')
      .attr('transform',function(d){return "translate("+d.xmin+","+d.ymin+")";})

bboxes.append('rect')
   .attr('height', function(d){ return Math.abs(d.ymax - d.ymin); })
   .attr('width',  function(d){ return Math.abs(d.xmax - d.xmin); })
   .attr('x', 0)
   .attr('y', 0)
   .attr('id', function(d){ return 'rect-'+d.id; })
   //.attr('x',function(d){ return d.xmin; })
   //.attr('y',function(d){ return d.ymin; })
   .style('fill','rgba(255,255,255,0)')
   .style('stroke-width',3)
   .style('stroke','rgb(0,0,0)')
   .on('mouseover', function(d) { darken('#rect-'+d.id); })
   .on('mouseout', function(d) { undarken('#rect-'+d.id); });
   
bboxes.append('text')
   .text(function(d){ return d.text; })
   .attr('dx', '0')
   .attr('dy', '0');

function darken(node_id) {
    d3.select(node_id)
      .style('fill', 'rgba(0,0,0,0.2)');
}
      
function undarken(node_id) {
    d3.select(node_id)
      .style('fill', 'rgba(255,255,255,0)');
}
    
//svg.append('text')
    
  // ext(function(d){ return d.text; });
