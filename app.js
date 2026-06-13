const namespace = 'lab-gadgets-futuro'; 
  const key = 'visitas';
  const url = `https://count.getluna.dev/hit/${namespace}/${key}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const valor = data.value; 
      document.getElementById('counter').innerText = valor.toString().padStart(11, '0');
    })
    .catch(err => {
      console.error("Erro na conexão com o servidor:", err);
    });