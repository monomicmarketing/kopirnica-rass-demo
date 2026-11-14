/** Public directory facts. Replace after confirmation by the business owner. */
export const business = {
  name: 'RASS',
  phone: '+387 61 253 059',
  phoneHref: '+38761253059',
  address: 'Trg ZAVNOBiH-a 26, 71000 Sarajevo',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Trg%20ZAVNOBiH-a%2026%2C%2071000%20Sarajevo',
  hours: [
    { days: 'Ponedjeljak – petak', time: '08:00 – 17:00' },
    { days: 'Subota', time: '09:00 – 15:00' },
    { days: 'Nedjelja', time: 'Zatvoreno' },
  ],
  prices: [] as { name: string; amount: string }[],
  logo: null as string | null,
  photos: [] as string[],
  sources: ['https://hr.cybo.com/BA-biz/kopirnica-izrada-kljuceva-i-pecata-rass', 'https://www.akta.ba/registar/76325/od-rass-vl-salihovic-adis-sarajevo'],
};
