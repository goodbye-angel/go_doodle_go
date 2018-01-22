var path = new Path();
path.strokeColor = 'black';

function onMouseDown(event) {
  path.add(event.point);
};

// function onMouseDown(event) {
// 	console.log('You pressed the mouse!');
// }
//
// function onMouseDrag(event) {
// 	console.log('You dragged the mouse!');
// }
//
// function onMouseUp(event) {
// 	console.log('You released the mouse!');
// }
