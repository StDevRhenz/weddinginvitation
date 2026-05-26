import type { WeddingDetails, ColorSwatch } from '../types';

export const WEDDING: WeddingDetails = {
  bride: 'Alyssa',
  groom: 'Marvin',
  date: 'June 6, 2026',
  time: '4:00 in the Afternoon',
  venue: 'Alonzo Compound',
  venueAddress: 'Balasing, Santa Maria, Bulacan',
  mapsUrl: 'https://maps.google.com/?q=Alonzo+Compound+Balasing+Santa+Maria+Bulacan',
};

export const WEDDING_DATE = new Date('2026-06-06T16:00:00');

export const ATTIRE_SWATCHES: ColorSwatch[] = [
  { name: 'Soft Dusty Rose', hex: '#e8a0b0' },
  { name: 'Pale Pastel Yellow', hex: '#f5e8a0' },
  { name: 'Light Coral Peach', hex: '#f5c9a8' },
  { name: 'Soft Lilac', hex: '#c9b8e8' },
  { name: 'Baby Powder Blue', hex: '#b8d4e8' },
  { name: 'Mint Sage Green', hex: '#b8d4b8' },
];
