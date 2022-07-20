async function reminders(channel) {
  let now = new Date();
  let millis = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 15, 0, 0, 0) - now;
  if (millis < 0) {
    millis += 86400000;
  }
  setTimeout(() => {
    channel.send('زي ما بقول اخونا معمول @Wife of the Leader يا معلم جيب الليف ودي الليف');
    }, millis);
}

module.exports = { reminders };