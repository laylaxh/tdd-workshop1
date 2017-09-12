document.body.onload = addElement;

function addElement () { 
  const itWorks = document.createElement("h2"); 
  const text = document.createTextNode("It Works!"); 
  itWorks.appendChild(text); 

  // add the newly created element and its content into the DOM 
  const title = document.getElementById("title"); 
  document.getElementById('header').insertBefore(itWorks, title); 
}