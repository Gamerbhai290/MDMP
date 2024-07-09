
    const xValues = [10,100,70,80,90,100,110,120,130,14,150];
    const yValues = [10,20,60,50,50,10,10,33,42,5, 30];
    
    new Chart("myChart1", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [{
          fill: false,
          lineTension: 0,
          
          backgroundColor: "rgba(0,0,255,1.0)",
          borderColor: "rgba(0,0,255,0.1)",
          data: yValues
        }]
      },
      options: {
        legend: {display: false},
        scales: {
          yAxes: [{ticks: {min: 0, max:100}}],
        }
      }
    });
    const scriptURL = '<iframe width="321" height="198" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT5dWrVK2jqfhN74RDdrzfLMQldEEzCtU57FqHShlEJKDLTA0lWN_z17vJsOeSnxt-KVpGMgymYOz8S/pubchart?oid=1841883054&amp;format=interactive"></iframe>'
    const form = document.forms['form']
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => alert("Thank you! your form is submitted successfully." ))
        .then(() => {  window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
    })


    
    
