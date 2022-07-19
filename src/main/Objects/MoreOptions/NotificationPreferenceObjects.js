class NotificationPreferenceObjects {
  notificationPreferencesPageHeader = {
    web: '(//div[text()="Notification Preferences"])[last()]'
  };

  emailHeader = {
    web: '//div[text()="Email"]'
  };

  smsHeader = {
    web: '//div[text()="SMS"]'
  };

  notificationPreferenceType(type) {
    return {
      web: `//div[text()="${type}"]`
    };
  }

  notificationPreferenceControls = {
    'Scheduled investment reminder (3 days prior)': {
      email: {
        web: '//img[@id="capture-email-notification-Scheduled investment reminder (3 days prior)"]'
      },
      sms: {
        web: '//img[@id="capture-sms-notificationScheduled investment reminder (3 days prior)"]'
      }
    },
    'Investment/ Withdrawal Instruction Received': {
      email: {
        web: '//img[@id="capture-email-notification-Investment/ Withdrawal Instruction Received"]'
      },
      sms: {
        web: '//img[@id="capture-sms-notificationInvestment/ Withdrawal Instruction Received"]'
      }
    },
    'Investment/ Withdrawal Cancelled': {
      email: {
        web: '//img[@id="capture-email-notification-Investment/ Withdrawal Cancelled"]'
      },
      sms: {
        web: '//img[@id="capture-sms-notificationInvestment/ Withdrawal Cancelled"]'
      }
    },
    'Investment/ Withdrawal Successful': {
      email: {
        web: '//img[@id="capture-email-notification-Investment/ Withdrawal Successful"]'
      },
      sms: {
        web: '//img[@id="capture-sms-notificationInvestment/ Withdrawal Successful"]'
      }
    },
    'Investment/ Withdrawal Failed': {
      email: {
        web: '//img[@id="capture-email-notification-Investment/ Withdrawal Failed"]'
      },
      sms: {
        web: '//img[@id="capture-sms-notificationInvestment/ Withdrawal Failed"]'
      }
    },
    'Problem with payment (insufficient balance, etc.)': {
      email: {
        web: '//img[@id="capture-email-notification-Problem with payment (insufficient balance, etc.)"]'
      },
      sms: {
        web: '//img[@id="capture-sms-notificationProblem with payment (insufficient balance, etc.)"]'
      }
    },
    'Monthly Statement': {
      email: {
        web: '//img[@id="capture-email-notification-Monthly Statement"]'
      },
      sms: {
        web: '//img[@id="capture-sms-notificationMonthly Statement"]'
      }
    },
    'End of Month Balance': {
      email: {
        web: '//img[@id="capture-email-notification-End of Month Balance"]'
      },
      sms: {
        web: '//img[@id="capture-sms-notificationEnd of Month Balance"]'
      }
    },
    'Quaterly Rebalance trigger': {
      email: {
        web: '//img[@id="capture-email-notification-Quaterly Rebalance trigger"]'
      },
      sms: {
        web: '//img[@id="capture-sms-notificationQuaterly Rebalance trigger"]'
      }
    }
  };
}
module.exports = new NotificationPreferenceObjects();
