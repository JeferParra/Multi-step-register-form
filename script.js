const containerRegister = document.querySelector('.container.register');
const containerInterests = document.querySelector('.container.interests');
const containerSummary = document.querySelector('.container.summary');

const name = document.querySelector('.input1 input');
const email = document.querySelector('.input2 input');
const continueRegister = document.querySelector('.button-register button');
const continueInterests = document.querySelector('.button-interests button');
const options = document.querySelectorAll('.option');

let topics = [];

continueRegister.addEventListener('click', (e) => {
  if(!email.checkValidity()) {
    e.preventDefault();
    email.style.color = 'red'
  } else {
    containerRegister.style.display = 'none';
    containerInterests.style.display = 'inherit';
    document.querySelector('.two').classList.add('active');
    document.querySelector('.step').innerHTML = '2';
  }
});

options.forEach(option => {
  let selected = false;

  option.addEventListener('click', () => {
    if(!selected) {
      selected = true;
      option.style.background = 'linear-gradient(#845EEE, #652CD1)';
      topics.push(option.innerHTML);
    } else if (selected) {
      selected = false;
      option.style.background = '#394150';

      let index = topics.indexOf(option.innerHTML);
      if (index !== -1) {
        topics.splice(index, 1);
      }
    }
  })
});

function displaySumary() {

  let topicsHTML = '';

  topics.forEach(topic => {
    topicsHTML += `<li>${topic}</li>`
  })



  document.querySelector('.summary-info').innerHTML = 
    `
    <h1 class="title">Summary</h1>
      <p>Name: ${name.value}</p>
      <p>Email: ${email.value}</p>
      <h3>Topics:</h3>
      <ul>
        ${topicsHTML}
      </ul>
    `
}

continueInterests.addEventListener('click', () => {
  displaySumary();
  if(topics !== -1) {
    containerInterests.style.display = 'none';
    containerSummary.style.display = 'inherit'
    document.querySelector('.three').classList.add('active');
    document.querySelector('.step').innerHTML = '3';
  }
})