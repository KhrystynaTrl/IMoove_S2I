import { Citta } from "./classes/Citta";
import { Mezzo } from "./classes/Mezzo";
import { Utente } from "./classes/Utente";
import { MezzoDiTrasporto } from "./interfaces/Imezzo";
import { MetodoDiPagamento } from "./interfaces/IUtente";
import { IMezzo } from "./interfaces/Imezzo";
import { ICitta } from "./interfaces/ICitta";
import { IUtente } from "./interfaces/IUtente";

//MEZZI
let bici1: IMezzo = new Mezzo(MezzoDiTrasporto.bici, 1);
let scooter1: IMezzo = new Mezzo(MezzoDiTrasporto.scooter, 5);
let mono1: IMezzo = new Mezzo(MezzoDiTrasporto.monopattino, 454);

console.log("MEZZI:\n", bici1, "\n", scooter1, "\n", mono1);

//UTENTI
let kappa: IUtente = new Utente(
  "k",
  "t",
  "atomok@g.com",
  MetodoDiPagamento.google_pay
);
let enne: IUtente = new Utente(
  "n",
  "p",
  "n.p@g.it",
  MetodoDiPagamento.satispay
);

console.log("UTENTI:\n", kappa, "\n", enne);

//CITTA
let roma: ICitta = new Citta("Roma", [bici1, scooter1]);
let firenze: ICitta = new Citta("Firenze", [bici1]);

console.log("CITTA:\n", roma, "\n", firenze);

//Aggiungo mezzi alle citta
firenze.aggiungiMezzo(scooter1);
roma.aggiungiMezzo(mono1);

//L'utente prenota il mezzo
kappa.prenotaMezzo(mono1);
enne.prenotaMezzo(scooter1);

//Cambio stato + assegnazione dell'utente al mezzo
console.log("CAMBIO STATO: \n", mono1, "\n", scooter1);

//Errori
kappa.prenotaMezzo(scooter1);
roma.aggiungiMezzo(mono1);
