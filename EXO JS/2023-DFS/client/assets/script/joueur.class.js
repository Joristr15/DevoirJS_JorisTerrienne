export class Joueur {
  _id;
  nom;
  prenom;
  dateNaissance;
  club;
  nationalite;
  championnat;
  numeroMaillot;
  nombreTrophe;
  synopsis;

  constructor(id, nom, prenom, club, dateNaissance, championnat, nationalite, numeroMaillot, nombreTrophe, synopsis) {
    this._id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.club = club;
    this.dateNaissance = dateNaissance;
    this.championnat = championnat;
    this.nationalite = nationalite;
    this.numeroMaillot = numeroMaillot;
    this.nombreTrophe = nombreTrophe;
    this.synopsis = synopsis;
  }

  get id() {
    return this.__id;
  }

  set id(tmp) {
    this._id = tmp;
  }

  get nom() {
    return this._nom;
  }

  set nom(tmp) {
    this._nom = tmp;
  }

  get prenom() {
    return this._prenom;
  }

  set prenom(tmp) {
    this._prenom = tmp;
  }

  get club() {
    return this._club;
  }

  set club(tmp) {
    this._club = tmp;
  }

  get dateNaissance() {
    return this._dateNaissance;
  }

  set dateNaissance(tmp) {
    this._dateNaissance = tmp;
  }

  get championnat() {
    return this._championnat;
  }

  set championnat(tmp) {
    this._championnat = tmp;
  }

  get nationalite() {
    return this._nationalite;
  }

  set nationalite(tmp) {
    this._nationalite = tmp;
  }

  get numeroMaillot() {
    return this._numeroMaillot;
  }

  set numeroMaillot(tmp) {
    this._numeroMaillot = tmp;
  }

  get nombreTrophe() {
    return this._nombreTrophe;
  }

  set nombreTrophe(tmp) {
    this._nombreTrophe = tmp;
  }

  get synopsis() {
    return this._synopsis;
  }

  set synopsis(tmp) {
    this._synopsis = tmp;
  }

}