// src/services/emailService.ts

import axios from 'axios';

export interface EmailData {
  fullName: string;
  emailAddress: string;
  message: string;
  companyName?: string; // Optional company name
}

const LAMBDA_API_ENDPOINT = "https://1w2en1v2w3.execute-api.us-east-1.amazonaws.com/sendEmail";

export const sendContactFormEmail = async (emailData: EmailData): Promise<boolean> => {
  try {
    console.log("Sending email to Lambda function");
    const response = await axios.post(LAMBDA_API_ENDPOINT, emailData);
    return response.status === 200; // Assuming your Lambda function returns 200 on success
  } catch (error: any) {
    console.error('Error sending contact form email:', error.message);
    if (error.response && error.response.data) {
      console.error('Lambda error details:', error.response.data);
    }
    return false;
  }
};