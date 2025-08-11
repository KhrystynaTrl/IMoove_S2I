import { IMezzo, StatoMezzo } from "../interfaces/Imezzo";
import { MetodoDiPagamento, IUtente } from "../interfaces/IUtente";

export class Utente implements IUtente {
  nome: string;
  cognome: string;
  email: string;
  metodoDiPagamento: MetodoDiPagamento;

  constructor(
    nome: string,
    cognome: string,
    email: string,
    metodoDiPagamento: MetodoDiPagamento
  ) {
    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
    this.metodoDiPagamento = metodoDiPagamento;
  }

  prenotaMezzo(mezzo: IMezzo): void {
    if (mezzo.stato == StatoMezzo.in_uso) {
      console.error("Il mezzo è prenotato");
    } else {
      mezzo.assegnaUtente(this);
    }
  }
}
