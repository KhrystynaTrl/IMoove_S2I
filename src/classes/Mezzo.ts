import { IMezzo, StatoMezzo, MezzoDiTrasporto } from "../interfaces/Imezzo";
import { IUtente } from "../interfaces/IUtente";

export class Mezzo implements IMezzo {
  tipo: MezzoDiTrasporto;
  iD: number;
  stato: StatoMezzo;
  utente: IUtente | null;
  constructor(tipo: MezzoDiTrasporto, iD: number) {
    this.tipo = tipo;
    this.iD = iD;
    this.utente = null;
    this.stato = StatoMezzo.disponibile;
  }
  assegnaUtente(utente: IUtente): void {
    if (utente) {
      this.stato = StatoMezzo.in_uso;
      this.utente = utente;
    }
  }
}
