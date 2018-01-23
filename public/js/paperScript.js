var path;
var color = 'black';
var doodleData = null;

function onMouseDown(event) {
  path = new Path();
  path.strokeColor = color;
  path.strokeWidth = 5;
}

function onMouseDrag(event) {
  path.add(event.point);
}

$('#save-button').click(function() {
  doodleData = project.exportSVG({ asString: true });
  console.log(doodleData);
});

$('#clear-button').click(function() {
  project.clear();
});

$('#undo-button').click(function() {
  path.clear();
});

$('#red').click(function() {
  color = 'red';
});

$('#orange').click(function() {
  color = 'orange';
});

$('#yellow').click(function() {
  color = 'yellow';
});

$('#green').click(function() {
  color = 'green';
});

$('#blue').click(function() {
  color = 'blue';
});

$('#purple').click(function() {
  color = 'purple';
});

$('#pink').click(function() {
  color = 'hotpink';
});

$('#black').click(function() {
  color = 'black';
});
