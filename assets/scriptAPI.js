const api_url = 
      "https://test2othmane.herokuapp.com/api/test";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_url);
  
// Function to hide the loader
function hideloader() {
    //document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
    let tab = ``;
    
    // Loop to access all rows 
    data.result.forEach(item => {
        tab += `
        
        <div class="col-4">
            <div class="card" style="width: 18rem;">
            <img src="${item.cover}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.subtitle}</p>
            </div>
            </div>
        </div>
            `;

    });
    
    // Setting innerHTML as tab variable
    document.getElementById("elementName").innerHTML = tab;
}