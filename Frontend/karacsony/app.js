const votes = {};
const buttons = document.querySelectorAll('.vote-button');
const mostPopularDiv = document.getElementById('mostPopular');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const card = button.parentElement;
        const id = card.getAttribute('data-id');
        const title = card.querySelector('h3').innerText;
        const voteCountDiv = document.getElementById(`voteCount${id}`);

        if (!votes[id]) {
            votes[id] = { count: 0, title };
        }
        votes[id].count++;
        voteCountDiv.innerText = `Szavazatok: ${votes[id].count}`;

        updateMostPopular();
    });
});

function updateMostPopular() {
    let maxVotes = 0;
    let popularGift = "Még nincs szavazat";

    for (const id in votes) {
        if (votes[id].count > maxVotes) {
            maxVotes = votes[id].count;
            popularGift = votes[id].title;
        }
    }

    mostPopularDiv.innerText = `A legnépszerűbb ajándék: ${popularGift}`;
}