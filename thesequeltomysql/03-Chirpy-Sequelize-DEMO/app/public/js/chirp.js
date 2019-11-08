/* global moment */

// When the page loads, grab and display all of our chirps
$.get('/api/all')
    .then((data) => data.forEach(printChirp));

// When user chirps (clicks addBtn)
$('#chirp-submit').on('click', function(event) {
  event.preventDefault();

  // Make a newChirp object
  const newChirp = {
    author: $('#author').val().trim(),
    body: $('#chirp-box').val().trim(),
  };

  console.log(newChirp);

  if (!newChirp.author || !newChirp.body) return;

  // Send an AJAX POST-request with jQuery
  $.post('/api/new', newChirp)
  // On success, run the following code
      .then(() => printChirp(newChirp));

  // Empty each input box by replacing the value with an empty string
  $('#author').val('');
  $('#chirp-box').val('');
});

const printChirp = function(it) {
  const time = moment(it.createdAt).format('h:mma on dddd');
  const row = $('<div>');
  row.addClass('chirp');

  row.append('<p>' + it.author + ' chirped.. </p>');
  row.append('<p>' + it.body + '</p>');
  row.append('<p>At ' + time + '</p>');

  $('#chirp-area').prepend(row);
};
