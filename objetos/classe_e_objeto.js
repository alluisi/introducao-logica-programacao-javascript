class Data {
    // dia = 1
    // mes = 1
    // ano = 1970

    constructor(d = 1, m = 1, a = 1970) {
        this.dia = d;
        this.mes = m;
        this.ano = a;
    }

    exibir() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
}

const d1 = new Data();

console.log(typeof Data);
console.log(typeof d1);

d1.dia = 24;
d1.mes = 12;
d1.ano = 2022;

console.log(d1);
console.log(d1.exibir());

const d2 = new Data(31, 12, 2021);
console.log(d2);
console.log(d2.exibir());
