const scriptURL = 'https://script.google.com/macros/s/AKfycbyRLTRWOV5I1u-MsaulcBNSGyVba9pb7bdcCtYs3MOeSqCagWBz57wL8SeZoQfk85Zc/exec'
const form  = document.forms['contact-form']

form.addEventListener('submit', e=>{
  e.preventDefault()
  fetch(scriptURL, {method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you ! Your enquiry is submitted success fully."))
  .then(() => {  window.location.reload(); } )
  .catch(error => console.error('Error !', error.message))
  
})