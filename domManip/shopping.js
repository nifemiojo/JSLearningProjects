const theUList = document.querySelector('ul');
const theInput = document.querySelector('input');
const theButton = document.querySelector('button');

theButton.onclick = () => {
    let val = theInput.value;
    theInput.value = '';

    const theOList = document.createElement('li');
    const theSpan = document.createElement('span');
    const theDelButton = document.createElement('button');

    theOList.appendChild(theSpan);
    theOList.appendChild(theDelButton);
    theSpan.textContent = val;
    theDelButton.textContent = 'Delete';

    theUList.appendChild(theOList);

    theDelButton.onclick = () => {
        theDelButton.parentElement.remove();
    };
};

theInput.focus();


