document.querySelector('#self').className = 'none';

const dataLoad = () => {
  const player = JSON.parse(localStorage.getItem('player'));
  return player;
};

const startFunc = () => {
  const selectValue = document.querySelector('#selectValue').value;
  const value = document.querySelector('#value').value.trim();
  const value1 = value.split(' ').map((el) => el);

  if (+selectValue !== value1.length) {
    alert('person is less please add more along with the selected items....');
    return;
  }

  localStorage.setItem(
    'player',
    JSON.stringify({ person: selectValue, personName: value1, result: {} })
  );

  let data = dataLoad();
  console.log('🚀 ~ data:', data.personName);

  if (data.personName.length) {
    document.querySelector('#player').className = 'none';
    document.querySelector('#self').className = 'block';
    selfElement(data.personName);
  }
};

const selfElement = (value) => {
  console.log('🚀 ~ value:', value);
  const main = document.querySelector('#selected_name');

  const singlePerson = document.querySelector('#singlePerson').value.trim();

  if (singlePerson.length === 0) {
    document.querySelector('#enter_btn').disabled = true;
  }

  value.map((el) => {
    const div = document.createElement('div');

    div.innerText = el;
    main.append(div);
  });
};
