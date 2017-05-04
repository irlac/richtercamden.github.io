$.get('https://api.github.com/repos/idorecall/selection-menu/releases/latest', function (data) {
  $('#result').attr('href', data.zipball_url);
});