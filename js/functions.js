let rowcounter = 0;

const button = document.querySelector('button');
const table = document.getElementById("numbers");
const rows = document.getElementById('rows');

button.addEventListener('click', () =>{
    const newrow = document.createElement("tr");
    for (let i = 0; i < 7;i ++) {
        const newcell = document.createElement("td");
        newcell.textContent = Math.floor(Math.random() * 10);
    newrow.appendChild(newcell);
    }

    table.appendChild(newrow);
    
    rowcounter++;

   
    rows.textContent = `Valmiit rivit: ${rowcounter}`;
});






