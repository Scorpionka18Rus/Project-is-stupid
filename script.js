const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}
let storyText = 'It was 94 fahrenheit outside, so went for a walk. When they got to, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — weighs 300 pounds, and it was a hot day.';
let insertX = ['Willy the Goblin,Big Daddy ,Father Christmas'];
let insertY = ['the soup kitchen, Disneyland, the White House'];
let insertZ = ['spontaneously combusted, melted into a puddle on the sidewalk, turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;


const xItem = randomValueFromArray(insertX);
const yItem = randomValueFromArray(insertY);
const zItem = randomValueFromArray(insertZ);


newStory = newStory.replaceAll(':insertX:', xItem);
newStory = newStory.replaceAll(':insertY:', yItem);
newStory = newStory.replaceAll(':insertZ:', zItem);


  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(300 * 0.071429)} stone`;
    const temperature =  `${Math.round(C) = ((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replaceAll('94 farenheit', temperature);
    newStory = newStory.replaceAll('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}