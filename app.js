// Usando a V1 pública do CounterAPI que ainda está viva em 2026!
// Substitua "labgadgets_seunome" por algo único para não cruzar com outros usuários
const url = 'https://api.counterapi.dev/v1/labgadgets_futuro/homepage/up';

fetch(url)
  .then(response => response.json())
  .then(data => {
    const valor = data.count; 
    
    document.getElementById('counter').innerText = valor.toString().padStart(11, '0');
  })
  .catch(err => {
    console.error("A Organização bloqueou o sinal:", err);
    document.getElementById('counter').innerText = "00000000328"; 
  });