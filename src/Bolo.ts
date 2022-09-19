interface NewBolo{
    tamanho: number;
    sabor: string;
    formato: string;
    recheio: string;
    cobertura: string;
    valor: number;
}

class Bolo{
    private tamanho: number;
    private sabor: string;
    private formato: string;
    private recheio: string;
    private cobertura: string;
    private valor: number;
    private qtdFatias = 0;

    public get fatias(){
        return this.qtdFatias;
    }

    constructor({tamanho, sabor, formato, recheio, cobertura, valor}:NewBolo){
        this.tamanho = tamanho;
        this.sabor = sabor;
        this.formato = formato;
        this.recheio = recheio;
        this.cobertura = cobertura;
        this.valor = valor;
    }

    public fatiar(qtdFatias: number){
        this.qtdFatias = qtdFatias;
    }

    public tirarFatia(){
        // TODO: tirar uma fatia do bolo
        this.qtdFatias--;
    }
}

export {Bolo};