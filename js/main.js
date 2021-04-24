let setPosition = document.querySelector('.container');

document.getElementById('clicked').addEventListener('click', e => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;

  // validate form

  if (title === '' || author === '' || isbn === '') {
    const div = document.createElement('div');
    div.classList.add('alert', 'w-full', 'm-2', 'h-8', 'bg-red-400');
    div.innerHTML = `<p class= "text-white text-center p-2 font-semibold">please fill all feilds</p>`;
    setPosition.appendChild(div);

    //vanish the alert message within 3 sec with the help of setTimeout
    setTimeout(() => {
      document.querySelector('.alert').remove();
    }, 3000);
  } else {
    // add message of add books
    const div = document.createElement('div');
    div.classList.add('alert', 'w-full', 'm-2', 'h-8', 'bg-green-500');
    div.innerHTML = `<p class= "text-white text-center p-2 font-semibold">Book List Added Succesfully</p>`;
    setPosition.appendChild(div);
    //vanish the alert message within 3 sec with the help of setTimeout
    setTimeout(() => {
      document.querySelector('.alert').remove();
    }, 3000);
    //catch elements of table
    const data = document.querySelector('#data');
    const row = document.createElement('tr');
    row.classList.add('bg-gray-200');
    row.innerHTML = `
	<td>${title}</td>
	<td>${author}</td>
	<td>${isbn}</td>
	<td><a href='#' class="delete py-1 px-2 font-bold rounded text-white bg-red-500 hover:bg-red-700 cursor-pointer">X</a>
	`;
    data.appendChild(row);
  }

  // clear feilds
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
  document.querySelector('#isbn').value = '';
});

//remove table row from book list app
addEventListener('click', el => {
  el.preventDefault();

  if (el.target.classList.contains('delete')) {
    el.toElement.parentElement.parentElement.remove();
    //remove booklist message alert
    const div = document.createElement('div');
    div.classList.add('delete', 'w-full', 'm-2', 'h-8', 'bg-red-400');
    div.innerHTML = `<p class= "text-white text-center p-2 font-semibold">BookList deleted succesfully</p>`;
    setPosition.appendChild(div);

    //vanish the alert message within 3 sec with the help of setTimeout
    setTimeout(() => {
      document.querySelector('.delete').remove();
    }, 3000);
  }
});
