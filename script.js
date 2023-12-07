// Fetch the JSON file
fetch('data2.json')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Display the JSON data in the console
    // Display number of bands, number of albums, and all genres in the HTML
    document.getElementById('num-bands').textContent = data.bands.length;
    document.getElementById('num-albums').textContent = getTotalAlbums(data);
    const allGenresList = document.getElementById('all-genres');
    getAllGenres(data).forEach(genre => {
      const li = document.createElement('li');
      li.textContent = genre;
      allGenresList.appendChild(li);
    });

    // Display the description paragraph in the HTML
    const descriptionParagraph = document.getElementById('description');
    descriptionParagraph.textContent = getDescriptionText(data);
    
    // Display random band details when the button is clicked
    const randomBandButton = document.getElementById('random-band-btn');
    randomBandButton.addEventListener('click', () => {
      displayRandomBandDetails(data);
    });

    // Display the initial random band details
    displayRandomBandDetails(data);
  })
  .catch(error => console.error("Error fetching JSON:", error));

// Function to calculate the total number of albums
function getTotalAlbums(data) {
  return data.bands.reduce((total, band) => total + band.albums, 0);
}

// Function to get an array of all genres without duplicates
function getAllGenres(data) {
  const allGenres = data.bands.flatMap(band => band.genre);
  return Array.from(new Set(allGenres));
}

// Function to get the descriptive paragraph text
function getDescriptionText(data) {
  return "Metallica is known for their powerful music with 12 albums full of energy. They play a style called Thrash Metal. Another cool band is Five Finger Death Punch. They have 8 albums of Heavy Metal that are all awesome! Texas Hippie Coalition has 6 albums with a Southern Metal sound that's kind of unique that I enjoy. Hellyeah has 6 albums full of a style of heavy metal called Groove Metal. Marilyn Manson has 11 albums of music that's a little strange and a bit mechanical, it's called Industrial Metal. In This Moment mixes two styles, Metalcore and Alternative Metal. They have 7 albums and are all amazing! Limp Bizkit has 6 albums with a style called Nu Metal, which mixes different types of music together. Rob Zombie has 7 albums that are a bit spooky and industrial, but also kind of like heavy rock music. The Pretty Reckless has 4 albums of strong music, and Motley Crue has 9 albums that are both glamorous and tough, like Hard Rock. Halestorm has 5 albums of cool Hard Rock and Alternative Metal mix that's really great to listen to. Red Hot Chili Peppers has 11 albums that mix rock with funky beats, making music that's different but easy to enjoy. Volbeat's 7 albums mix loud Heavy Metal with a twist of old-style Rockabilly music, creating a unique sound. Dope has 6 albums of music that's heavy and a bit mechanical, it's called Industrial and Nu Metal. Avatar has 8 albums of melodic and strong music called Melodic Death Metal, which is pretty awesome. Black Stone Cherry mixes Southern Rock and Hard Rock in their 7 albums, making music that's energetic. The Offspring rocks with 10 albums of rebellious Punk Rock mixed with Alternative Rock, which is great for getting pumped up. Lastly, Drowning Pool has 7 albums of edgy music that's both Alternative Metal and Nu Metal.";
}

// Function to display random band details
function displayRandomBandDetails(data) {
  const randomIndex = Math.floor(Math.random() * data.bands.length);
  const randomBand = data.bands[randomIndex];

  const randomBandName = document.getElementById('random-band-name');
  const randomBandAlbums = document.getElementById('random-band-albums');
  const randomBandGenre = document.getElementById('random-band-genre');

  randomBandName.textContent = randomBand.name;
  randomBandAlbums.textContent = randomBand.albums;
  randomBandGenre.textContent = randomBand.genre.join(', ');
}