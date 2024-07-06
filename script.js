document.getElementById('khodamForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('nameInput').value;
    if (name.trim() !== "") {
        displayLatestKhodam(name);
        document.getElementById('nameInput').value = '';
    }
});

const khodams = [
    {name: 'Khodam Jin', image: 'assets/jin.jpeg', description: 'perilakunya kek Jin.'},
    {name: 'Khodam Malaikat', image: 'assets/malaikat.jpeg', description: 'terkenal baik dan penyabar.rajin menabung'},
    {name: 'Khodam Raja Macan', image: 'assets/macan.jpeg', description: 'terkenal galak padahal hati hello kity.'},
    {name: 'Khodam Harimau Putih', image: 'assets/harimauputih.jpeg', description: 'galak tapi ngangenin'},
    {name: 'Khodam Buaya Putih', image: 'assets/buaya.jpeg', description: 'terkenal buaya darat,tapi maen cantik'},
    {name: 'Khodam Ular Naga', image: 'assets/ularnaga.jpg', description: 'omonganya gak berbisa dan gak bisa di percaya'},
    {name: 'Khodam Nyi Roro Kidul', image: 'assets/roro.jpeg', description: 'anggun tapi gak bisa di anggap remeh.'},
    {name: 'Khodam Dewa Zeus', image: 'assets/zeus.jpeg', description: 'adil dan bijaksana laksana dewa'}
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
