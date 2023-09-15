'use strict'
// Element Selector
const paragraphs = document.querySelectorAll('p');

// Class Selector
const elementsWithClass = document.querySelectorAll('.myClass');

// ID Selector
const elementWithId = document.querySelector('#myId');

// Attribute Selector
const elementsWithDataSrc = document.querySelectorAll('[data-src]');

// Combination Selectors
const paragraphsInMyClass = document.querySelectorAll('.myClass p');
const myClassElementsInMyId = document.querySelectorAll('#myId .myClass');

// Universal Selector
const allElements = document.querySelectorAll('*');

// Descendant Selector
const listItemsInList = document.querySelectorAll('ul li');

// Child Selector
const listItemsDirectChildren = document.querySelectorAll('ul > li');

// Pseudo-Classes
const hoveredElements = document.querySelectorAll(':hover');

// Pseudo-Elements
const beforePseudoElement = document.querySelectorAll('::before');

// Grouping Selector
const headingElements = document.querySelectorAll('h1, h2, h3');


/*Selectors can also be really powerful, as demonstrated in the following example. Here, the first <input> element with the name "login" (<input name="login"/>) located inside a <div> whose class is "user-panel main" (<div class="user-panel main">) in the document is returned:*/

const el = document.querySelector("div.user-panel.main input[name='login']");

