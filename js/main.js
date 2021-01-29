const search = document.getElementById('search');
const matchList = document.getElementById('match-list');


//search data.json and filter
const searchNames = async searchText => {
    const res = await fetch('http://localhost:3000/results');
    const names = await res.json();

}