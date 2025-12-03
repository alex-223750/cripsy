export interface ChipPortion {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

export interface CartItem extends ChipPortion {
  quantity: number;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export const BUSINESS_PHONE = "254715209233"; // International format for WhatsApp
export const DISPLAY_PHONE = "0715 209 233";
export const PAYBILL_NAME = "Alex Kipchumba";
