export default class GenerateCpf {
    rand(min = 100000, max = 999999) {
        return String(Math.floor(Math.random() * (max - min) + min));
    }
    getNewColor() {
        return `#${this.rand()}`
    }
}