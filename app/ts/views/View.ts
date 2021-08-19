// declare var $: any; 
abstract class View<T> {

    // abstract evita que criem instancias desta classe. ex: new View()
    // <T> Indica que é um type generico, quem herdar vai passar o tipo que será utilizado nos métodos

    // para entender o tipo JQuery, é necessário instalar o TypeScript Definitions (TSD do jQuery)
    // npm install @types/jquery@2.0.42 --save-dev
    // caso não exista um TSD, como último recurso podemos usar o declare var $: any
    protected _elemento: JQuery;

    constructor(seletor: string) {
        this._elemento = $(seletor);
    }

    update(model: T): void {
        this._elemento.html(this.template(model));
    }

    // classes que herdam deverão implementar o método abaixo
    abstract template(model: T): string;
        
}