import Mae from "./Mae";
import Medico from "./Medico";

export default class Bebe {
    private nome: String;
    private dataNascimento: String;
    private pesoNascimento: number;
    private altura: number;
    private mae: Mae;
    private medico: Medico;

    constructor(nome: String, dataNascimento: String, pesoNascimento: number, altura: number, mae: Mae, medico: Medico){

        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.pesoNascimento = pesoNascimento;
        this.altura = altura;
        this.mae = mae;
        this.medico = medico;

    }

    
}