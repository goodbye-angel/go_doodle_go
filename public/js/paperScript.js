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

function post(path, parameters) {
    var form = $('<form></form>');

    form.attr("method", "post");
    form.attr("action", path);

    $.each(parameters, function(key, value) {
        var field = $('<input></input>');

        field.attr("type", "hidden");
        field.attr("name", key);
        field.attr("value", value);

        form.append(field);
    });

    $(document.body).append(form);
    form.submit();
}

$('#save-button').click(function() {
  doodleData = project.exportSVG({ asString: true });
  console.log(doodleData);
  post('/doodles/', { doodle: doodleData });
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
