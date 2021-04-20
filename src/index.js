require('../index.html')
require('./sass/main.scss')
import _ from 'lodash';
import testImage from './img/testImage.jpg';

const moduleContainer = document.getElementById('module');
const ctaContainer = document.getElementById('contentCta');
const textContainer = document.getElementById('textContent');
const selectBorder = document.getElementById('ctaBorder');
const selectBg = document.getElementById('ctaBackground');
const selectText = document.getElementById('ctaText');

let contentImg = new Image(); 

contentImg.src = testImage;

selectBorder.onchange = function(){
    moduleContainer.className = '';
    moduleContainer.classList.add('content__container');
    moduleContainer.classList.add(this.value);
};

selectBg.onchange = function(){
    ctaContainer.className = '';
    ctaContainer.classList.add('content__cta');
    ctaContainer.classList.add(this.value);
};

selectText.onchange = function(){
    textContainer.className = '';
    textContainer.classList.add(this.value);
};

moduleContainer.appendChild(contentImg);