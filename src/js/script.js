function digitando (elemento) {
  const text = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  text.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra,100 * i);
  });
}

const titulo = document.querySelector('h1');
digitando(titulo);