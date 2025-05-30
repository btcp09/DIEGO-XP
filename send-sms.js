js
require('dotenv').config();
const twilio = require('twilio');

const client = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const numeroDestinataire = '+5363200706'; // Change ce numéro
const code = Math.floor(100000 + Math.random() * 900000); // Code à 6 chiffres

client.messages.create({
  body: `Voici votre code de confirmation de votre achat: ${code}`,
  from: process.env.TWILIO_PHONE_NUMBER,
  to: numeroDestinataire
})
.then(message => console.log('SMS envoyé ! SID:', message.sid))
.catch(error => console.error('Erreur:', error));