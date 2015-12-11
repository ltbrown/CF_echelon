var dec1 = $('#dec1');
var agenta = $('#agenta');
var agent1 = $('#agent1');

var dec2 = $('#dec2');
var agentb = $('#agentb');
var agent2 = $('#agent2');

var dec3 = $('#dec3');
var agentc = $('#agentc');
var agent3 = $('#agent3');

var dec4 = $('#dec4');
var agentd = $('#agentd');
var agent4 = $('#agent4');

dec1.on('click', function(e) {
  e.preventDefault();
  agent1.removeClass('visible').addClass('hidden');
  agenta.removeClass('hidden').addClass('visible');
});

dec2.on('click', function(e) {
  e.preventDefault();
  agent2.removeClass('visible').addClass('hidden');
  agentb.removeClass('hidden').addClass('visible');
});

dec3.on('click', function(e) {
  e.preventDefault();
  agent3.removeClass('visible').addClass('hidden');
  agentc.removeClass('hidden').addClass('visible');
});

dec4.on('click', function(e) {
  e.preventDefault();
  agent4.removeClass('visible').addClass('hidden');
  agentd.removeClass('hidden').addClass('visible');
});
