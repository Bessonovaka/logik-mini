module.exports = class KvizDto {
    a;
    b;
    c;
    id;
    title;

    constructor(model) {
        this.a = model.a;
        this.b = model.b;
        this.c = model.a;
        this.id = model._id;
        this.title = model.title;
    }
}