document.getElementById('khodamForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('nameInput').value;
    if (name.trim() !== "") {
        displayLatestKhodam(name);
        document.getElementById('nameInput').value = '';
    }
});

const khodams = [
    {name: 'Khodam Jin', image: 'assets/jin.jpeg', description: 'Khodam yang berasal dari bangsa Jin.'},
    {name: 'Khodam Malaikat', image: 'assets/malaikat.jpeg', description: 'Khodam yang berasal dari malaikat.'},
    {name: 'Khodam Raja Macan', image: 'assets/macan.jpeg', description: 'Khodam yang berbentuk macan raja.'},
    {name: 'Khodam Harimau Putih', image: 'assets/harimauputih.jpeg', description: 'Khodam yang berbentuk harimau putih.'},
    {name: 'Khodam Buaya Putih', image: 'assets/buaya.jpeg', description: 'Khodam yang berbentuk buaya putih.'},
    {name: 'Khodam Ular Naga', image: 'assets/ularnaga.jpg', description: 'Khodam yang berbentuk ular naga.'},
    {name: 'Khodam Nyi Roro Kidul', image: 'assets/roro.jpeg', description: 'Khodam yang berkaitan dengan legenda Nyi Roro Kidul.'},
    {name: 'Khodam Dewa Zeus', image: 'assets/zeus.jpeg', description: 'Khodam yang berkaitan dengan dewa Zeus.'}
];

// Function to hash the name and map it to an index
function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

function getKhodamByName(name) {
    const index = Math.abs(hashCode(name)) % khodams.length;
    return khodams[index];
}

function displayLatestKhodam(name) {
    const tableBody = document.getElementById('tableBody');
    // Clear all existing rows
    tableBody.innerHTML = '';

    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = name;

    const khodam = getKhodamByName(name);
    const imageCell = document.createElement('td');
    const image = document.createElement('img');
    image.src = khodam.image;
    image.alt = khodam.name;
    image.className = 'khodam-image';
    imageCell.appendChild(image);

    const khodamNameCell = document.createElement('td');
    khodamNameCell.textContent = khodam.name;

    const descriptionCell = document.createElement('td');
    descriptionCell.textContent = khodam.description;

    row.appendChild(nameCell);
    row.appendChild(imageCell);
    row.appendChild(khodamNameCell);
    row.appendChild(descriptionCell);

    // Add new row to the table body
    tableBody.appendChild(row);
}
