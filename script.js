document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    const gameArea = document.getElementById('game-area');
    const bookRecommendationsSection = document.getElementById('book-recommendations');
    const resumeDisplaySection = document.getElementById('resume-display');

    startButton.addEventListener('click', () => {
        startGame();
    });

    function startGame() {
        // Placeholder:  We'll add the game logic here later
        alert("Game started (but not really yet!)");
    }

    function endGame() {
        gameArea.style.display = 'none';
        bookRecommendationsSection.style.display = 'block';
        resumeDisplaySection.style.display = 'block';

        // Populate the resume and book recommendations
        displayResume();
        displayBookRecommendations();
    }

    function displayResume() {
        const resumeContentDiv = document.getElementById('resume-content');
        resumeContentDiv.innerHTML = `
            <h2>Work Experience</h2>
            <p>Aug 2023 - Sept 2023: Haegl Technologies PVT LTD Hubballi - Software developer Intern</p>
            <p>Nov 2023 - Feb 2024: DevTown - Software developer Intern</p>
            <p>June 2024 - Dec 2024: Palle Technology PVT LTD Bangalore - QA Tester</p>

            <h2>Skills</h2>
            <p>Python, Java, ReactJS, Django, Git, MySQL, Selenium, Pytest...</p>
            <!--  Add more resume details here -->
        `;
    }

    function displayBookRecommendations() {
        const bookList = document.querySelector('#book-recommendations ul');
        bookList.innerHTML = `
            <li><strong>Sapiens by Yuval Noah Harari</strong> -  A broad overview of human history.</li>
            <li><strong>Clean Code by Robert C. Martin</strong> - A guide to writing better code.</li>
            <!-- Add more book recommendations here -->
        `;
    }
});