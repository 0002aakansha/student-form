const img = document.querySelector('#image').value
const name = document.querySelector('#name')
const batch = document.querySelector('#batch')
const DSA = document.querySelector('#DSA')
const skillathon = document.querySelector('#skillathon')
const coding = document.querySelector('#coding')
const box = document.querySelector('#box')
const myForm = document.forms['myForm']

const table = document.createElement('table')
table.className = 'table table-dark table-striped table-bordered mt-2'

table.innerHTML = `
                    <thead>
                        <tr>
                            <th>Student Photo</th>
                            <th>Student Name</th>
                            <th>Batch</th>
                            <th>DSA Score</th>
                            <th>Skillathon Score</th>
                            <th>Coding Score</th>
                            <th>Percentage (%)</th>
                            <th>Status 🟢</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                `

myForm.addEventListener('submit', function (e) {
    e.preventDefault()

    const percentage = (((+DSA.value + +skillathon.value + +coding.value) / 300) * 100).toFixed(1)
    const status = percentage > 50 ? `<span class='status bg-green'>Regular</span>` : `<span class='status bg-red'>Async</span>`

    const newRow = document.createElement('tr')
    newRow.innerHTML = `
        <td><img src='${img}'></td>
        <td>${name.value}</td>
        <td>${batch.value}</td>
        <td>${DSA.value}</td>
        <td>${skillathon.value}</td>
        <td>${coding.value}</td>
        <td>${percentage}</td>
        <td>${status}</td>
        <td><button class='btn removeBtn'>remove</button></td>
    `;

    newRow.querySelector('.removeBtn').addEventListener('click', () => {
        newRow.remove()
        !tBody.rows.length && document.querySelector('table').remove();
    })

    box.insertAdjacentElement('afterbegin', table)
    const tBody = document.querySelector('table tbody')
    tBody.insertAdjacentElement('beforeend', newRow)

    document.querySelector('.table')

    myForm.reset()
})

// const columns = tableRows[i].cells

// for (let i = 0; i < tableRows.length; i++) {
//     console.log(tableRows[i].cells[columns.length - 1])
//     tableRows[i].cells[columns.length - 1].onclick = () => {
//         console.log(tableRows[i])
//     }
// }
