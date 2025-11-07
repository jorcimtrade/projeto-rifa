// Array para armazenar os números já comprados
let numerosComprados = [];

// Atualiza a contagem de números disponíveis
function atualizarNumerosDisponiveis() {
  const total = 50;
  const disponiveis = total - numerosComprados.length;
  document.getElementById("numerosDisponiveis").textContent = disponiveis;
}

// Função para comprar número
function comprarNumero() {
  const input = document.getElementById("numero");
  const numero = parseInt(input.value);

  if (!numero || numero < 1 || numero > 50) {
    alert("Por favor, insira um número entre 1 e 50.");
    return;
  }

  if (numerosComprados.includes(numero)) {
    alert(`O número ${numero} já foi comprado!`);
    return;
  }

  numerosComprados.push(numero);
  input.value = "";

  // Atualiza lista
  const lista = document.getElementById("listaNumeros");
  const li = document.createElement("li");
  li.textContent = `Número ${numero}`;
  lista.appendChild(li);

  // Atualiza contador
  atualizarNumerosDisponiveis();
}

// Função para realizar o sorteio
function sortear() {
  if (numerosComprados.length === 0) {
    alert("Nenhum número foi comprado ainda!");
    return;
  }

  const sorteado = numerosComprados[Math.floor(Math.random() * numerosComprados.length)];
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `🎉 O vencedor é o número: <strong>${sorteado}</strong>`;
  resultado.classList.add("show");
}

// Inicializa ao carregar a página
window.onload = function () {
  atualizarNumerosDisponiveis();
};