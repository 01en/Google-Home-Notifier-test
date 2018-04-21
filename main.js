const googlehome = require('google-home-notifier');
const language = 'ja';

const ip = '192.168.11.3'; // default IP
googlehome.device('Google-Home', language);
googlehome.ip(ip, language);

googlehome.notify('おはようございますます', function(res) {
  console.log(res);
});
