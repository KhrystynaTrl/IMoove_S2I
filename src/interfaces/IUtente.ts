import { IMezzo } from "./Imezzo";

export enum MetodoDiPagamento {
  carta_di_credito_o_debito = "carta di credito o debito",
  apple_pay = "Apple Pay",
  google_pay = "Google Pay",
  pay_pal = "PayPal",
  satispay = "Satispay",
}
export interface IUtente {
  nome: string;
  cognome: string;
  email: string;
  metodoDiPagamento: MetodoDiPagamento;
  prenotaMezzo(mezzo: IMezzo): void;
}
