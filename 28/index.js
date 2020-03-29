document.addEventListener('DOMContentLoaded', (event) => {
  const main = document.getElementById('main')
  setTimeout(function(){ 
    alert("Hello"); 
    main.innerHTML = '<h1>You clicked the Hello dialog</h1>'
  }, 3000);  
});
