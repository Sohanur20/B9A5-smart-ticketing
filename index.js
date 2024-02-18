

const seatButton = document.getElementsByClassName('seat-all-btn')

let count = 0

for (const btn of seatButton) {
    btn.addEventListener('click', function (event) {
        count = count + 1

// console.log(event.target.parentNode.childNodes)


        allIneerTextSet('set-count', count)
    })
}

function allIneerTextSet(id, value) {
    document.getElementById(id).innerText = value;

}
