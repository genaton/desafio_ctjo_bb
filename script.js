const form = document.getElementById("form-grupo");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // evita o recarregamento da página

  const nomes = [
    document.getElementById("nome1").value,
    document.getElementById("nome2").value,
    document.getElementById("nome3").value,
    document.getElementById("nome4").value,
    document.getElementById("nome5").value
  ];

  const historia = document.getElementById("historia").value;

  console.log("Nomes do grupo:");
  nomes.forEach((nome, index) => {
    console.log(`Nome ${index + 1}: ${nome}`);
  });

  console.log("História do grupo:");
  console.log(historia);
});