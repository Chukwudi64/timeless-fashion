export const getWhatsAppLink = () => {
  const number = import.meta.env.VITE_WHATSAPP_NUMBER;
  return `https://wa.me/${number}`;
};