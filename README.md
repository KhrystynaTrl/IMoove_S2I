# IMoove_S2I

progetto finale corso TypeScript

# 🚲 Sistema di Gestione Mezzi di Trasporto

Questo progetto è un esempio di gestione di mezzi di trasporto condivisi, come biciclette, scooter e monopattini, con prenotazioni da parte degli utenti e gestione delle città.

## 📌 Funzionalità

- **Gestione mezzi**: creazione, stato (disponibile / in uso), assegnazione all’utente.
- **Gestione utenti**: prenotazione di un mezzo e scelta del metodo di pagamento.
- **Gestione città**: aggiunta mezzi disponibili e prevenzione di ID duplicati.
- **Validazioni**: impedisce doppia prenotazione di un mezzo e ID già in uso.

## 📂 Struttura del Codice

### Enumerazioni

- `MezzoDiTrasporto` – bici, scooter, monopattino
- `StatoMezzo` – disponibile, in uso
- `MetodoDiPagamento` – carta di credito/debito, Apple Pay, Google Pay, PayPal, Satispay

### Interfacce

- `IMezzo` – rappresenta un mezzo, con metodi per assegnarlo a un utente.
- `IUtente` – rappresenta un utente con metodo per prenotare un mezzo.
- `ICitta` – rappresenta una città con lista di mezzi disponibili.

### Classi

- **`Mezzo`** – implementa `IMezzo`.
- **`Utente`** – implementa `IUtente`.
- **`Citta`** – implementa `ICitta`.

## 💻 Esempio di Utilizzo

```ts
// Creazione mezzi
let bici1 = new Mezzo(MezzoDiTrasporto.bici, 1);
let scooter1 = new Mezzo(MezzoDiTrasporto.scooter, 5);
let mono1 = new Mezzo(MezzoDiTrasporto.monopattino, 454);

// Creazione utenti
let kappa = new Utente("k", "t", "atomok@g.com", MetodoDiPagamento.google_pay);
let enne = new Utente("n", "p", "n.p@g.it", MetodoDiPagamento.satispay);

// Creazione città e aggiunta mezzi
let roma = new Citta("Roma", [bici1, scooter1]);
let firenze = new Citta("Firenze", [bici1]);
firenze.aggiungiMezzo(scooter1);
roma.aggiungiMezzo(mono1);

// Prenotazioni
kappa.prenotaMezzo(mono1);
enne.prenotaMezzo(scooter1);
```

⚠️ Controlli di Sicurezza
Doppia prenotazione: se un mezzo è già in uso, viene mostrato un messaggio di errore.

ID duplicati: se un mezzo con lo stesso ID esiste già nella città, viene mostrato un messaggio di errore.
