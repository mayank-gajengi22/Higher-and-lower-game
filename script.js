document.addEventListener('DOMContentLoaded', function () {
    const data = [
        {"name": "Google", "total_no_of_searches": 91200000000},
        {"name": "Google", "total_no_of_searches": 91200000000},
        {"name": "YouTube", "total_no_of_searches": 87000000000},
        {"name": "Facebook", "total_no_of_searches": 66000000000},
        {"name": "Amazon", "total_no_of_searches": 54000000000},
        {"name": "Netflix", "total_no_of_searches": 48000000000},
        {"name": "Weather", "total_no_of_searches": 38000000000},
        {"name": "News", "total_no_of_searches": 32000000000},
        {"name": "Wikipedia", "total_no_of_searches": 30000000000},
        {"name": "Instagram", "total_no_of_searches": 28000000000},
        {"name": "Twitter", "total_no_of_searches": 26000000000},
        {"name": "TikTok", "total_no_of_searches": 25000000000},
        {"name": "Spotify", "total_no_of_searches": 20000000000},
        {"name": "Gmail", "total_no_of_searches": 18000000000},
        {"name": "COVID updates", "total_no_of_searches": 16000000000},
        {"name": "LinkedIn", "total_no_of_searches": 14000000000},
        {"name": "Online Shopping", "total_no_of_searches": 13000000000},
        {"name": "WhatsApp Web", "total_no_of_searches": 12500000000},
        {"name": "Best Movies", "total_no_of_searches": 11000000000},
        {"name": "Recipes", "total_no_of_searches": 10000000000},
        {"name": "Bitcoin", "total_no_of_searches": 9500000000},
        {"name": "Stock Market", "total_no_of_searches": 8700000000},
        {"name": "Sports News", "total_no_of_searches": 8500000000},
        {"name": "Jobs", "total_no_of_searches": 8200000000},
        {"name": "E-commerce Platforms", "total_no_of_searches": 8000000000},
        {"name": "Fashion Trends", "total_no_of_searches": 7800000000},
        {"name": "Technology News", "total_no_of_searches": 7500000000},
        {"name": "Programming Tutorials", "total_no_of_searches": 7200000000},
        {"name": "Gaming", "total_no_of_searches": 7000000000},
        {"name": "Travel Destinations", "total_no_of_searches": 6800000000},
        {"name": "Health Tips", "total_no_of_searches": 6500000000},
        {"name": "Online Education", "total_no_of_searches": 6400000000},
        {"name": "Movies Near Me", "total_no_of_searches": 6200000000},
        {"name": "Makeup Tutorials", "total_no_of_searches": 6000000000},
        {"name": "Best Restaurants", "total_no_of_searches": 5900000000},
        {"name": "Baby Care Tips", "total_no_of_searches": 5700000000},
        {"name": "Coding Bootcamps", "total_no_of_searches": 5500000000},
        {"name": "Electric Cars", "total_no_of_searches": 5400000000},
        {"name": "Fitness Exercises", "total_no_of_searches": 5300000000},
        {"name": "Pet Care", "total_no_of_searches": 5200000000},
        {"name": "How to Start a Blog", "total_no_of_searches": 5100000000},
        {"name": "Remote Jobs", "total_no_of_searches": 5000000000},
        {"name": "Online Yoga Classes", "total_no_of_searches": 4900000000},
        {"name": "Popular TV Shows", "total_no_of_searches": 4800000000},
        {"name": "Best Beaches", "total_no_of_searches": 4700000000},
        {"name": "Celebrity News", "total_no_of_searches": 4600000000},
        {"name": "Horoscope", "total_no_of_searches": 4500000000},
        {"name": "DIY Projects", "total_no_of_searches": 4400000000},
        {"name": "Digital Marketing", "total_no_of_searches": 4300000000},
        {"name": "Photography Tips", "total_no_of_searches": 4200000000},
        {"name": "Space Exploration", "total_no_of_searches": 4100000000},
        {"name": "AI Advancements", "total_no_of_searches": 4000000000},
        {"name": "Local Events", "total_no_of_searches": 3900000000},
        {"name": "Meditation Guides", "total_no_of_searches": 3800000000},
        {"name": "Virtual Reality", "total_no_of_searches": 3700000000},
        {"name": "Best Gadgets", "total_no_of_searches": 3600000000},
        {"name": "Interior Design Ideas", "total_no_of_searches": 3500000000},
        {"name": "Budget Smartphones", "total_no_of_searches": 3400000000},
        {"name": "Climate Change", "total_no_of_searches": 3300000000},
        {"name": "Political News", "total_no_of_searches": 3200000000},
        {"name": "Online Courses", "total_no_of_searches": 3100000000},
        {"name": "Top Universities", "total_no_of_searches": 3000000000},
        {"name": "Weight Loss Tips", "total_no_of_searches": 2900000000},
        {"name": "Best Books", "total_no_of_searches": 2800000000},
        {"name": "Career Advice", "total_no_of_searches": 2700000000},
        {"name": "Startup Ideas", "total_no_of_searches": 2600000000},
        {"name": "Plant Care", "total_no_of_searches": 2500000000},
        {"name": "Home Workout", "total_no_of_searches": 2400000000},
        {"name": "Dog Training Tips", "total_no_of_searches": 2300000000},
        {"name": "Vegan Recipes", "total_no_of_searches": 2200000000},
        {"name": "Smart Home Devices", "total_no_of_searches": 210000000},
        {"name": "Latest Smartphones", "total_no_of_searches": 2000000000},
        {"name": "Travel Guides", "total_no_of_searches": 1900000000},
        {"name": "Freelancing", "total_no_of_searches": 1800000000},
        {"name": "Stock Investing", "total_no_of_searches": 1500000000},
        {"name": "Mobile Games", "total_no_of_searches": 1400000000},
        {"name": "Mental Health Tips", "total_no_of_searches": 1300000000},
        {"name": "DIY Crafts", "total_no_of_searches": 1200000000},
        {"name": "Electric Bikes", "total_no_of_searches": 1100000000},
        {"name": "Coding Challenges", "total_no_of_searches": 1000000000},
        {"name": "Astronomy", "total_no_of_searches": 900000000},
        {"name": "Cryptocurrency News", "total_no_of_searches": 850000000},
        {"name": "Travel Packing Tips", "total_no_of_searches": 800000000},
        {"name": "Self-Care", "total_no_of_searches": 750000000},
        {"name": "Parenting Tips", "total_no_of_searches": 700000000},
        {"name": "Online Gaming", "total_no_of_searches": 650000000},
        {"name": "Luxury Watches", "total_no_of_searches": 500000000},
        {"name": "Second-hand Cars", "total_no_of_searches": 450000000},
        {"name": "Graphic Design", "total_no_of_searches": 400000000},
        {"name": "Podcast Recommendations", "total_no_of_searches": 350000000},
        {"name": "Language Learning Apps", "total_no_of_searches": 300000000},
        {"name": "Event Planning", "total_no_of_searches": 250000000},
        {"name": "Camping Gear", "total_no_of_searches": 100000000},
        {"name": "Pet Adoption", "total_no_of_searches": 90000000},
        {"name": "Home Office Setup", "total_no_of_searches": 80000000},
        {"name": "Meditation Techniques", "total_no_of_searches": 70000000},
        {"name": "Healthy Snacks", "total_no_of_searches": 60000000},
        {"name": "Photography Gear", "total_no_of_searches": 50000000},
        {"name": "Antique Collecting", "total_no_of_searches": 40000000},
        {"name": "Robotics Projects", "total_no_of_searches": 30000000},
        {"name": "Virtual Travel", "total_no_of_searches": 900000},
        {"name": "Local Libraries", "total_no_of_searches": 800000},
        {"name": "Antique Collecting", "total_no_of_searches": 750000},
        {"name": "Robotics Projects", "total_no_of_searches": 700000},
        {"name": "Local Markets Near Me", "total_no_of_searches": 650000},
        {"name": "Rare Book Shops", "total_no_of_searches": 600000},
        {"name": "DIY Electronics", "total_no_of_searches": 550000},
        {"name": "Wildlife Sanctuaries", "total_no_of_searches": 500000},
        {"name": "Offbeat Travel Destinations", "total_no_of_searches": 450000},
        {"name": "Historical Artifacts", "total_no_of_searches": 400000},
        {"name": "Unique Souvenirs", "total_no_of_searches": 350000},
        {"name": "Niche Podcasts", "total_no_of_searches": 300000},
        {"name": "Traditional Weaving", "total_no_of_searches": 250000},
        {"name": "Urban Gardening", "total_no_of_searches": 200000},
        {"name": "Community Volunteering", "total_no_of_searches": 150000},
        {"name": "Rare Recipes", "total_no_of_searches": 100000},
        {"name": "Local History", "total_no_of_searches": 50000},
        {"name": "Lost Languages", "total_no_of_searches": 25000},
        {"name": "Micro Camping Spots", "total_no_of_searches": 10000},
        {"name": "Unusual Tree Species", "total_no_of_searches": 9000},
        {"name": "Tiny House Living", "total_no_of_searches": 8500},
        {"name": "Rare Bird Watching", "total_no_of_searches": 8000},
        {"name": "Obscure Board Games", "total_no_of_searches": 7500},
        {"name": "Fossil Hunting", "total_no_of_searches": 7000},
        {"name": "Vintage Toy Collecting", "total_no_of_searches": 6500},
        {"name": "Artisan Cheese", "total_no_of_searches": 6000},
        {"name": "Underwater Photography", "total_no_of_searches": 5500},
        {"name": "Unique Origami Designs", "total_no_of_searches": 5000},
        {"name": "Extreme Minimalism", "total_no_of_searches": 4500},
        {"name": "Historical Reenactments", "total_no_of_searches": 4000},
        {"name": "Tiny Sculptures", "total_no_of_searches": 3500},
        {"name": "Rare Cactus Species", "total_no_of_searches": 3000},
        {"name": "Micro Greenhouses", "total_no_of_searches": 2500},
        {"name": "Aquascaping Tips", "total_no_of_searches": 2000},
        {"name": "Custom Puzzles", "total_no_of_searches": 1500},
        {"name": "Pet Costume Ideas", "total_no_of_searches": 1000},
        {"name": "Historical Coin Collecting", "total_no_of_searches": 500},
        {"name": "Handmade Musical Instruments", "total_no_of_searches": 250},
        {"name": "Obsolete Technologies", "total_no_of_searches": 100},
        {"name": "Experimental Gardening", "total_no_of_searches": 50},
        {"name": "Uncommon Hobbies", "total_no_of_searches": 10},
        {"name": "Rare Insect Species", "total_no_of_searches": 9},
        {"name": "Unexplored Caverns", "total_no_of_searches": 8},
        {"name": "Miniature Art", "total_no_of_searches": 7},
        {"name": "Paper Quilling Art", "total_no_of_searches": 6},
        {"name": "Ancient Pottery Techniques", "total_no_of_searches": 5},
        {"name": "Forgotten Dialects", "total_no_of_searches": 4},
        {"name": "Remote Forest Expeditions", "total_no_of_searches": 3},
        {"name": "Ocean Floor Mapping", "total_no_of_searches": 2},
        {"name": "Zero", "total_no_of_searches": 0},
        {"name": "Elon Musk", "total_no_of_searches": 12000000},
        {"name": "Bill Gates", "total_no_of_searches": 9000000},
        {"name": "Jeff Bezos", "total_no_of_searches": 8000000},
        {"name": "Mark Zuckerberg", "total_no_of_searches": 7500000},
        {"name": "Oprah Winfrey", "total_no_of_searches": 6700000},
        {"name": "Ariana Grande", "total_no_of_searches": 6200000},
        {"name": "Taylor Swift", "total_no_of_searches": 5900000},
        {"name": "Beyoncé", "total_no_of_searches": 5800000},
        {"name": "Cristiano Ronaldo", "total_no_of_searches": 5500000},
        {"name": "Lionel Messi", "total_no_of_searches": 5300000},
        {"name": "Kim Kardashian", "total_no_of_searches": 5200000},
        {"name": "Kylie Jenner", "total_no_of_searches": 5000000},
        {"name": "Dwayne Johnson", "total_no_of_searches": 4800000},
        {"name": "Emma Watson", "total_no_of_searches": 4600000},
        {"name": "David Beckham", "total_no_of_searches": 4400000},
        {"name": "Johnny Depp", "total_no_of_searches": 4200000},
        {"name": "Barack Obama", "total_no_of_searches": 4100000},
        {"name": "Joe Biden", "total_no_of_searches": 4000000},
        {"name": "Albert Einstein", "total_no_of_searches": 3900000},
        {"name": "Marilyn Monroe", "total_no_of_searches": 3800000},
        {"name": "Bruce Lee", "total_no_of_searches": 3700000},
        {"name": "Leonardo DiCaprio", "total_no_of_searches": 3600000},
        {"name": "Mahatma Gandhi", "total_no_of_searches": 3500000},
        {"name": "Nelson Mandela", "total_no_of_searches": 3400000},
        {"name": "Mother Teresa", "total_no_of_searches": 3300000},
        {"name": "Charles Darwin", "total_no_of_searches": 3200000},
        {"name": "Pablo Picasso", "total_no_of_searches": 3100000},
        {"name": "Steve Jobs", "total_no_of_searches": 3000000},
        {"name": "Billie Eilish", "total_no_of_searches": 2900000},
        {"name": "Miley Cyrus", "total_no_of_searches": 2800000},
        {"name": "Kendall Jenner", "total_no_of_searches": 2700000},
        {"name": "Shakira", "total_no_of_searches": 2600000},
        {"name": "Will Smith", "total_no_of_searches": 2500000},
        {"name": "Zayn Malik", "total_no_of_searches": 2400000},
        {"name": "Sia", "total_no_of_searches": 2300000},
        {"name": "Drake", "total_no_of_searches": 2200000},
        {"name": "Kanye West", "total_no_of_searches": 2100000},
        {"name": "Prince William", "total_no_of_searches": 2000000},
        {"name": "Prince Harry", "total_no_of_searches": 1900000},
        {"name": "Sarah Jessica Parker", "total_no_of_searches": 1800000},
        {"name": "Hugh Jackman", "total_no_of_searches": 1700000},
        {"name": "Tom Hanks", "total_no_of_searches": 1600000},
        {"name": "Cate Blanchett", "total_no_of_searches": 1500000},
        {"name": "Scarlett Johansson", "total_no_of_searches": 1400000},
        {"name": "Sophie Turner", "total_no_of_searches": 1300000},
        {"name": "Timothée Chalamet", "total_no_of_searches": 1200000},
        {"name": "Zendaya", "total_no_of_searches": 1100000},
        {"name": "Gigi Hadid", "total_no_of_searches": 1000000},
        {"name": "Harrison Ford", "total_no_of_searches": 900000},
        {"name": "Keanu Reeves", "total_no_of_searches": 850000},
        {"name": "Emma Stone", "total_no_of_searches": 800000},
        {"name": "Kerry Washington", "total_no_of_searches": 750000},
        {"name": "Reese Witherspoon", "total_no_of_searches": 700000},
        {"name": "Daniel Craig", "total_no_of_searches": 650000},
        {"name": "Bryan Cranston", "total_no_of_searches": 600000},
        {"name": "Matthew McConaughey", "total_no_of_searches": 550000},
        {"name": "Henry Cavill", "total_no_of_searches": 500000} 
    ];
    let score = 0;
    let acc1, acc2;

    const compare1El = document.getElementById('compare1');
    const compare2El = document.getElementById('compare2');
    const resultEl = document.getElementById('result');
    const scoreEl = document.getElementById('score');
    const startMenuEl = document.getElementById('startMenu');
    const gameEl = document.getElementById('game');
    const startBtn = document.getElementById('startBtn');
    const quitBtn = document.getElementById('quitBtn');

    function getRandomAccount() {
        return data[Math.floor(Math.random() * data.length)];
    }

    function updateUI() {
        compare1El.innerText = `Compare 1: ${acc1.name}`;
        compare2El.innerText = `Compare 2: ${acc2.name}`;
        resultEl.innerText = '';
        scoreEl.innerText = `Score: ${score}`;
    }

    function checkAnswer(guess) {
        const search_count_1 = acc1.total_no_of_searches;
        const search_count_2 = acc2.total_no_of_searches;

        let is_correct;
        if (search_count_1 < search_count_2) {
            is_correct = guess === 'lower';
        } else {
            is_correct = guess === 'higher';
        }

        if (is_correct) {
            score++;
            resultEl.innerText = `You guessed right! ${acc1.name} has ${search_count_1} searches and ${acc2.name} has ${search_count_2} searches.`;
            acc1 = acc2;
            acc2 = getRandomAccount();
            while (acc1 === acc2) {
                acc2 = getRandomAccount();
            }
            updateUI();
        } else {
            resultEl.innerText = `You guessed wrong! ${acc1.name} has ${search_count_1} searches and ${acc2.name} has ${search_count_2} searches.`;
            score = 0;
            redirectToMenu();
        }
    }

    function startNewGame() {
        acc1 = getRandomAccount();
        acc2 = getRandomAccount();
        while (acc1 === acc2) {
            acc2 = getRandomAccount();
        }
        updateUI();
    }

    function redirectToMenu() {
        gameEl.style.display = 'none';
        startMenuEl.style.display = 'block';
    }

    startBtn.addEventListener('click', function () {
        startMenuEl.style.display = 'none';
        gameEl.style.display = 'flex';
        startNewGame();
    });

    quitBtn.addEventListener('click', function () {
        alert('Game Over. Thank you for playing!');
    });

    document.getElementById('higherBtn').addEventListener('click', function () {
        checkAnswer('higher');
    });

    document.getElementById('lowerBtn').addEventListener('click', function () {
        checkAnswer('lower');
    });

    // Automatically start the game when a wrong answer is given or score is reset
    startNewGame();
});