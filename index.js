function createMemeContainer(imgUrl) {
  const containerTag = document.createElement('div');
  // url('https://imgflip.com/s/meme/One-Does-Not-Simply.jpg')
  containerTag.style.backgroundImage = `url(${imgUrl})`;
  containerTag.setAttribute('class', 'meme-container');
  return containerTag;
}

function createMemeHeader(headerText) {
  const headerTag = document.createElement('h2');
  const textNode = document.createTextNode(headerText);
  headerTag.setAttribute('class', 'meme-header');
  headerTag.appendChild(textNode);
  return headerTag;
}

function createMemeFooter(footerText) {
  const footerTag = document.createElement('h2');
  const textNode = document.createTextNode(footerText);
  footerTag.setAttribute('class', 'meme-footer');
  footerTag.appendChild(textNode);
  return footerTag;
}

function createMeme() {
  const inputs = document.getElementsByClassName('meme-input')
  // for (let i = 0; i < inputs.length; i++) {
  //   console.log(inputs[i].value);
  // }

  // createMemeContainer('https://imgflip.com/s/meme/One-Does-Not-Simply.jpg')
  const memeContainer = createMemeContainer(inputs[0].value)
  const memeHeader = createMemeHeader(inputs[1].value);
  const memeFooter = createMemeFooter(inputs[2].value);

/*
  <div class="meme-container" style="background-image: url(imgUrl)">
    
    <h1 class="meme-header">
      headerText
    </h1>

    <h1 class="meme-footer">
      footerText
    </h1>

  </div>

*/

  memeContainer.appendChild(memeHeader);
  memeContainer.appendChild(memeFooter);

  const memePasture = document.getElementById('meme-pasture');
  memePasture.appendChild(memeContainer);
}


























