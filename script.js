document.addEventListener('DOMContentLoaded', () => {
    const jokeDiv = document.getElementById('joke');
    const generateBtn = document.getElementById('generate-btn');

    generateBtn.addEventListener('click', () => {
        // Fetch a random Chuck Norris joke
        fetch('https://api.chucknorris.io/jokes/random')
            .then(response => response.json())
            .then(data => {
                jokeDiv.textContent = data.value;
            })
            .catch(error => {
                console.error('Error fetching Chuck Norris joke:', error);
                jokeDiv.textContent = 'Failed to fetch Chuck Norris joke. Please try again later.';
            });
    });
});
