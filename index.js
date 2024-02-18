

const seatButton = document.getElementsByTagName('p')

let count = 0

for (const btn of seatButton) {
    btn.addEventListener('click', function (event) {
        count = count + 1

     
        const sitList = event.target.innerText;

        const selectSitContainer = document.getElementById('select-sit-container')
        const li = document.createElement('li')
        const h2 = document.createElement('h2');
        h2.innerText = sitList;


        li.appendChild(h2)
        
      

        selectSitContainer.appendChild(li)

        allIneerTextSet('set-count', count)
    })
}

function allIneerTextSet(id, value) {
    document.getElementById(id).innerText = value;

}
