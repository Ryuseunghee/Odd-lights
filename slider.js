let nowIndex = 1;

const imageSlider = document.querySelector('#imageSlider');

const bottomBtn01 = document.querySelector('#imgTo01');
const bottomBtn02 = document.querySelector('#imgTo02');
const bottomBtn03 = document.querySelector('#imgTo03');
const bottomBtn04 = document.querySelector('#imgTo04');
const bottomBtn05 = document.querySelector('#imgTo05');

const leftArrow = document.querySelector('#leftArrow')
const rightArrow = document.querySelector('#rightArrow')

bottomBtn01.addEventListener('click', moveA);
bottomBtn02.addEventListener('click', moveB);
bottomBtn03.addEventListener('click', moveC);
bottomBtn04.addEventListener('click', moveD);
bottomBtn05.addEventListener('click', moveE);

leftArrow.addEventListener('click', moveleft);
rightArrow.addEventListener('click', moveright);

//move to first image.
function moveA()
{
    imageSlider.style.transform = 'translate(0px)';
    nowIndex =1;
}
//move to second image.
function moveB()
{
    imageSlider.style.transform = 'translate(-1080px)';
    nowIndex =2;
}
//move to third image.
function moveC()
{
    imageSlider.style.transform = 'translate(-2160px)';
    nowIndex =3;
}
//move to fourth image.
function moveD()
{
    imageSlider.style.transform = 'translate(-3240px)';
    nowIndex =4;
}
//move to fifth image.
function moveE()
{
    imageSlider.style.transform = 'translate(-4320px)';
    nowIndex =5;
}
//move to first image.
function moveF()
{
    imageSlider.style.transform = 'translate(0px)';
    nowIndex =1;
}




function moveleft()
{
    if(nowIndex == 1)
    {
        nowIndex ==1;
    }
    else
    {
        nowIndex --;
    }

    moveSlider(nowIndex);
}

function moveright()
{
    if(nowIndex == 6)
    {
        nowIndex =6;
    }
    else
    {
        nowIndex ++;
    }

    moveSlider(nowIndex);
}

function moveSlider(index)
{
    switch(index)
    {
        case 1:
            moveA();
        break;
        case 2:
            moveB();
        break;
        case 3:
            moveC();
        break;
        case 4:
            moveD();
        break;
        case 5:
            moveE();
        break;
        case 6:
            moveF();
        break;
    }
}






let togglebtn = document.querySelector('.togglebtn');
let menulist = document.querySelector('.menubar_items');
let link = document.querySelector('.menubar_link');

togglebtn.addEventListener('click', clickFn); /*클릭했을 때, clickFn 함수 실행*/

function clickFn()
{
    menulist.classList.toggle('active');
    link.classList.toggle('active');
}