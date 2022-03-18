const answer = 'games';

const $button = document.querySelector('button');

$button.addEventListener('click', () => {
  // if both the letter and the position is matching = green
  // if only letter is correct but position is not matching = yellow
  // if neither the letter and position is not matching = grey

  const $input = document.querySelectorAll('.input');

  for (let i = 0; i < 5; i++) {
    if ($input[i].value === answer[i]) {
      $input[i].style.background = 'green';
    } else if (answer.includes($input[i].value)) {
      $input[i].style.background = 'yellow';
    } else {
      $input[i].style.background = 'lightgrey';
    }
  }

});
