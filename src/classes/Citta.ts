import { ICitta } from "../interfaces/ICitta";
import { IMezzo } from "../interfaces/Imezzo";

export class Citta implements ICitta {
  nomeDellaCitta: string;
  mezziDisponibili: IMezzo[];
  constructor(nomeDellaCitta: string, mezziDisponibili: IMezzo[]) {
    this.nomeDellaCitta = nomeDellaCitta;
    this.mezziDisponibili = [];
    for (let mezzoDisponibile of mezziDisponibili) {
      this.aggiungiMezzo(mezzoDisponibile);
    }
  }
  aggiungiMezzo(mezzo: IMezzo): void {
    let newArrayMezziDisponibili = this.mezziDisponibili.filter(
      (mezzoDisponibile) => mezzo.iD == mezzoDisponibile.iD
    );
    if (newArrayMezziDisponibili.length > 0) {
      console.error("Id già in uso, scegliere un altro id");
    } else {
      this.mezziDisponibili.push(mezzo);
    }
  }
}
