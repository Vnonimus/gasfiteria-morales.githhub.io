export const WHATSAPP_PHONE = '56979604475'
export const WHATSAPP_MESSAGE =
  'Hola, buen día.\n Quisiera consultar por la disponibilidad de un servicio de gasfitería.\n Gracias.'

export function getWhatsAppUrl() {
  const base = `https://api.whatsapp.com/send`
  const message = WHATSAPP_MESSAGE.replace(/\n/g, '\n').trim()
  const query = new URLSearchParams({
    phone: WHATSAPP_PHONE,
    text: message,
  }).toString()
  return `${base}?${query}`
}

