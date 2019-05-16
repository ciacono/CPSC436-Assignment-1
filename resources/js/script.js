function submitMessage() {
  var message = document.getElementById('newMessage').value;
  var newItem = document.createElement('li');
  newItem.innerHTML = message;
  document.getElementById('messageList').appendChild(newItem);
}
function clearMessage() {
  document.getElementById('newMessage').value = '';
}


function makeList() {
  var array = ['Message 1', 'Message 2', 'Message 3'];
  for (var i = 0; i < array.length; i++) {
    var message = document.createElement('li');
    message.innerHTML = array[i];
    document.getElementById('messageList').appendChild(message);
  }
}
window.onload = makeList;

function clearList() {
  var list = document.getElementById('messageList');
  list.innerHTML = '';
}
