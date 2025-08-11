import { IMezzo } from "./Imezzo";

export interface ICitta {
  nomeDellaCitta: string;
  mezziDisponibili: IMezzo[];

  aggiungiMezzo(mezzo: IMezzo): void;
}
