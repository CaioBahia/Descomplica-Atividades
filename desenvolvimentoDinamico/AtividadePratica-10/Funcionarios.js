class Funcionario {
  constructor(nome, idade, cargo) {
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
  }
  seApresentar() {
    console.log(
      `Oi, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo} na empresa.`
    );
  }

  trabalhar() {
    console.log(
      `${this.nome} está trabalhando em suas funções como ${this.cargo}.`
    );
  }
}

class Gerente extends Funcionario {
  constructor(nome, idade, departamento) {
    super(nome, idade, "Gerente");
    this.departamento = departamento;
  }
  gerenciar() {
    console.log(
      `${this.nome} está gerenciando o departamento de ${this.departamento}.`
    );
  }
}

class Desenvolvedor extends Funcionario {
  constructor(nome, idade, linguagem) {
    super(nome, idade, "Desenvolvedor(a)");
    this.linguagem = linguagem;
  }

  programar() {
    console.log(`${this.nome} está programando em ${this.linguagem}.`);
  }
}

const GerenteA = new Gerente("João", 45, "RH");
const GerenteB = new Gerente("Maria", 36, " Financeiro");

const DesenvolvedorA = new Desenvolvedor("Ana", 24, "React");
const DesenvolvedorB = new Desenvolvedor("Iasmim", 24, "Python");

GerenteA.seApresentar();
GerenteA.trabalhar();
GerenteA.gerenciar();

GerenteB.seApresentar();
GerenteB.trabalhar();
GerenteB.gerenciar();

DesenvolvedorA.programar();
DesenvolvedorA.seApresentar();
DesenvolvedorA.trabalhar();

DesenvolvedorB.programar();
DesenvolvedorB.seApresentar();
DesenvolvedorB.trabalhar();
