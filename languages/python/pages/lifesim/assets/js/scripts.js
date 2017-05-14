$.get('https://api.github.com/repos/richtercamden/WrOTe-Python-Game/releases/latest', function (data) {
  $('#result').attr('href', data.zipball_url);
});