const axios = require('axios');

module.exports = (on, config) => {
  on('task', {
    sendSlackNotification(message) {
      const webhookUrl = 'https://hooks.slack.com/services/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'; // Replace with your webhook URL

      return axios.post(webhookUrl, {
        text: message
      })
      .then(response => {
        console.log('Message sent to Slack successfully:', response.data);
        return null;
      })
      .catch(error => {
        console.error('Error sending message to Slack:', error);
        return null;
      });
    }
  });
};
