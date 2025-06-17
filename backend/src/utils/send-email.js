const { Resend } = require("resend");
const { env } = require("../config");
const { ApiError } = require("./api-error");

let resend = null;

const getResendClient = () => {
  if (!resend) {
    if (!env.RESEND_API_KEY || env.RESEND_API_KEY.startsWith('re_placeholder') || env.RESEND_API_KEY === 're_123456789') {
      console.warn('Warning: Resend API key not configured properly. Email functionality will be disabled.');
      return null;
    }
    resend = new Resend(env.RESEND_API_KEY);
  }
  return resend;
};

const sendMail = async (mailOptions) => {
  const resendClient = getResendClient();
  if (!resendClient) {
    console.warn('Email sending skipped - Resend not configured');
    return;
  }

  const { error } = await resendClient.emails.send(mailOptions);
  if (error) {
    throw new ApiError(500, "Unable to send email");
  }
};

module.exports = {
  sendMail,
};
