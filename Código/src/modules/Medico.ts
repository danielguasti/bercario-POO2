export default class Medico{
    private CRM: String;
    private nome: String;
    private celular: String;
    private especialidade: String;

    constructor(CRM: String, nome: String, celular: String, especialidade: String){
        this.CRM = CRM;
        this.nome = nome;
        this.celular = celular;
        this.especialidade = especialidade;
    }
}