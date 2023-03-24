export class Film {
    id;
    nom
    _genre
    _pays;
    _date;
    _synopsis;

    constructor(id, nom, genre, pays, date, synopsis) {
        this.id = id;
        this.nom = nom;
        this._genre = genre;
        this._pays = pays;
        this._date = date;
        this._synopsis = synopsis;
    }


    get id() {
        return this.id;
    }


    get nom() {
        return this.nom;
    }

    get genre() {
        return this._genre;
    }

    get pays() {
        return this._pays;
    }


    get date() {
        return this._date;
    }

    get synopsis() {
        return this._synopsis;
    }

    set id(value) {
        this.id = value;
    }

    set nom(value) {
        this.nom = value;
    }

    set genre(value) {
        this._genre = value;
    }

    set pays(value) {
        this._pays = value;
    }

    set date(value) {
        this._date = value;
    }

    set synopsis(value) {
        this._synopsis = value;
    }

    toString() {
        return Film {id: ${this.__id}, nom: ${this.__nom}, genre: ${this._genre}, pays: ${this._pays}, date: ${this._date}, synopsis: ${this._synopsis}};
    }

}