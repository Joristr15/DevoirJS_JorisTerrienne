export class Joueur {
  _id;
  nom;
  prenom;
  dateNaissance;
  club;
  synopsis;

  constructor(id, nom, prenom, dateNaissance, club, syno) {
    this._id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.dateNaissance = dateNaissance;
    this.club = club;
    this
    this.synopsis = syno;
  }

  get _id() {
    return this.__id;
  }

  set _id(tmp) {
    this.__id = tmp;
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

  get dateNaissance() {
    return this._dateNaissance;
  }

  set dateNaissance(tmp) {
    this._dateNaissance = tmp;
  }

  get club() {
    return this._club;
  }

  set club(tmp) {
    this._club = tmp;
  }

  get synopsis() {
    return this._synopsis;
  }

  set synopsis(tmp) {
    this._synopsis = tmp;
  }

}