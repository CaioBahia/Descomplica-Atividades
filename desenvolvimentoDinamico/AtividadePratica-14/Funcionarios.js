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

function exibirErro(mensagem) {
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = `<p style="color: red;">Erro: ${mensagem}</p>`;
}

function criarFuncionario() {
  try {
    const nome = document.getElementById("nome").value;
    const idade = parseInt(document.getElementById("idade").value, 10);
    const cargo = document.getElementById("cargo").value;

    if (!nome || !idade || !cargo) {
      throw new Error("Preencha todos os campos obrigatórios.");
    }

    let funcionario;

    if (cargo === "Gerente") {
      const departamento = document.getElementById("departamento").value;
      if (!departamento) {
        throw new Error("Preencha o campo de departamento para o Gerente.");
      }
      funcionario = new Gerente(nome, idade, departamento);
    } else if (cargo === "Desenvolvedor") {
      const linguagem = document.getElementById("linguagem").value;
      if (!linguagem) {
        throw new Error("Preencha o campo de linguagem para o Desenvolvedor.");
      }
      funcionario = new Desenvolvedor(nome, idade, linguagem);
    }

    funcionario.seApresentar();
    funcionario.trabalhar();

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<p>Funcionário criado com sucesso!</p>`;
  } catch (erro) {
    exibirErro(erro.message);
  }
}

const cargoSelect = document.getElementById("cargo");
const departamentoContainer = document.getElementById("departamentoContainer");
const linguagemContainer = document.getElementById("linguagemContainer");

cargoSelect.addEventListener("change", function () {
  if (this.value === "Gerente") {
    departamentoContainer.style.display = "block";
    linguagemContainer.style.display = "none";
  } else if (this.value === "Desenvolvedor") {
    departamentoContainer.style.display = "none";
    linguagemContainer.style.display = "block";
  } else {
    departamentoContainer.style.display = "none";
    linguagemContainer.style.display = "none";
  }
});
