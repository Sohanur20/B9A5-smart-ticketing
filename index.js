const parTicket = 550;
let totaltiket = 20

let seatBg = 0
let count = 0

const seatButton = document.getElementsByClassName('seat')

for (const btn of seatButton) {
    btn.addEventListener('click', function (event) {

  

        if (seatBg !== 4 ) {
            btn.classList.add('bg-green-500');
            btn.classList.add('text-white');
        }
          

        
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


        // total sit 

        const totalSit = document.getElementById('set-left').innerText;
        const convertSit = parseInt(totalSit)
        const totalSitSum = convertSit - parseInt(1)



        // total price 

        totalPrice('total-price', parseInt(parTicket))


        // grand-total

        const grandTotal = document.getElementById('grand-total').innerText;

        const grandTotalConvert = parseInt(grandTotal);
        const grandTotalSum = grandTotalConvert + parseInt(parTicket)



        allIneerTextSet('grand-total', grandTotalSum)
        allIneerTextSet('set-left', totalSitSum)
        allIneerTextSet('seat-count', count)
    })
}


 

function totalPrice(id, value) {
    const totalPrice = document.getElementById(id).innerText;

    const sum = parseInt(totalPrice) + parseInt(value);
    allIneerTextSet(id, sum)
}

function allIneerTextSet(id, value) {
    document.getElementById(id).innerText = value;

}
