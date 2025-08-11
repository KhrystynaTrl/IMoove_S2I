import { IUtente } from "./IUtente";

export enum MezzoDiTrasporto {
  bici = "bici",
  scooter = "scooter",
  monopattino = "monopattino",
}

export enum StatoMezzo {
  disponibile = "disponibile",
  in_uso = "in uso",
}

export interface IMezzo {
  tipo: MezzoDiTrasporto;
  iD: number;
  stato: StatoMezzo;
  assegnaUtente(utente: IUtente): void;
}
