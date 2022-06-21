export interface Property {
  id: string;
  pictures: string[];
  name: string;
  description: string;
  value: number;
  room: number;
  garage: number;
  bathroom: number;
  address: string;
  typeSale: 'SALE' | 'SHAREABLE' | 'RENT';
}

export const TypeSaleLabel = {
  SALE: 'VENDA',
  SHAREABLE: 'COMPARTILHADA',
  RENT: 'ALUGUEL'
};
