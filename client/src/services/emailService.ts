// src/services/emailService.ts

import axios from 'axios';

export interface EmailData {
  fullName: string;
  emailAddress: string;
  message: string;
  companyName?: string;
}

const LAMBDA_API_ENDPOINT = "https://1w2en1v2w3.execute-api.us-east-1.amazonaws.com/sendEmail";

export const sendContactFormEmail = async (emailData: EmailData): Promise<boolean> => {
  try {
    console.log("Sending email to Lambda function");
    const response = await axios.post(LAMBDA_API_ENDPOINT, emailData);
    if (response.status !== 200) {
      throw new Error('Failed to send email: Server returned non-200 status');
    }
    return true;
  } catch (error: any) {
    console.error('Error sending contact form email:', error.message);
    if (error.response && error.response.data) {
      console.error('Lambda error details:', error.response.data);
      throw new Error(error.response.data.message || 'Failed to send email. Please try again later.');
    }
    throw new Error('Failed to send email. Please check your connection and try again.');
  }
};