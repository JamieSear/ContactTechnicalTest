//Grabbing the text form and list area from html doc
const search = document.getElementById('search');
const matchList = document.getElementById('match-list');


//search data.json and filter
const searchNames = async searchText => {
    const res = await fetch('http://localhost:3000/results');
    const names = await res.json();
    
    //Get matches to current text input
    let matches = names.filter(name => {
        const regex = new RegExp(`^${searchText}`, 'gi') //regular expression
        return name.first_name.match(regex) || name.last_name.match(regex)
    });
    //resetting form if user deletes their input
    if(searchText.length === 0) {
        matches = [];
        matchList.innerHTML = '';
    }
    
    //outputs the html variable below
    outputHtml(matches);
}

const outputHtml = matches => {
    if(matches.length > 0) {
        const html = matches.map(match => `
        <div class="card card-body mb-1">
            <h4>${match.first_name} ${match.last_name}</h4>
            <small>Country: ${match.country}</small>
        </div>
        `
        ).join(''); //turns into a string

    matchList.innerHTML = html; //sets list area to output the html variable above
    }
}

//when user 'inputs' something, the searchNames filter func will run
search.addEventListener('input', () => searchNames (search.value))



