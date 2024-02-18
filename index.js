const parTicket = 550;

const seatButton = document.getElementsByClassName('seat')

let count = 0

for (const btn of seatButton) {
    btn.addEventListener('click', function (event) {

        count = count + 1;


        const seatButtonText = event.target.innerText


        const ticketAndPrice = document.getElementById('count-price-ticket').childNodes[1];



        const createPTag = document.createElement('p');
        createPTag.innerText = seatButtonText;
        ticketAndPrice.appendChild(createPTag);

        const ticketPrice = document.getElementById('count-price-ticket').childNodes[3];
        const createPTag2 = document.createElement('p');
        createPTag2.innerText = "Economy";
        ticketPrice.appendChild(createPTag2);

        const ticketPrice1 = document.getElementById('count-price-ticket').childNodes[5];
        const createPTag3 = document.createElement('p');
        createPTag3.innerText = parTicket;
        ticketPrice1.appendChild(createPTag3);


        // total price 

        const totalPrice = document.getElementById('total-price').innerText;

        const sum = parseInt(totalPrice )+ parseInt(parTicket);

// grand-total

const grandTotal = document.getElementById('grand-total').innerText;


const grandTotalConvert = parseInt(grandTotal);
const grandTotalSum = grandTotalConvert + parseInt(parTicket)
console.log(grandTotalSum)



        // const totalPrices = parseInt(totalPrice)
        // document.getElementById('total-price').innerText = parseInt(sum);




        allIneerTextSet('total-price',sum)
        allIneerTextSet('grand-total',grandTotalSum)
        allIneerTextSet('seat-count', count)
    })
}

function allIneerTextSet(id, value) {
    document.getElementById(id).innerText = value;

}
