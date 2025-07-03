// src/utils/emailService.js
import emailjs from "emailjs-com";

export const sendEmail = async (formData) => {
  const SERVICE_ID = "service_67fsxua";
  const TEMPLATE_ID = "template_czlzfzh";
  const USER_ID = "7zUajpovdakT4-r6_"; 

  const templateParams = {
    full_name: formData.fullName,
    email: formData.email,
    phone: formData.phone,
    subject: formData.subject,
    message: formData.message,
    reply_to: formData.email,
  };

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
};
