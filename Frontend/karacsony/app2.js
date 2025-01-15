    const buttons = document.querySelectorAll('.interest-button');
    const cardContainer = document.querySelector('.card-container');
    const addCardButton = document.querySelector('.add-card-button');

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const card = button.parentElement;
                const emailInput = card.querySelector('.email-input');
                const email = emailInput.value;

                if (!email || !validateEmail(email)) {
                    alert('Kérjük, adjon meg egy érvényes email címet!');
                    return;
                }

                const propertyTitle = card.querySelector('h3').innerText;

       
                alert(`Érdeklődés rögzítve: ${propertyTitle}\nEmail: ${email}`);

       
                emailInput.value = '';
            });
        });

        addCardButton.addEventListener('click', () => {
            const title = document.getElementById('newTitle').value;
            const description = document.getElementById('newDescription').value;
            const imageUrl = document.getElementById('newImageUrl').value;

            if (!title || !description || !imageUrl) {
                alert('Kérjük, töltse ki az összes mezőt!');
                return;
            }

            const newCard = document.createElement('div');
            newCard.classList.add('card');
            newCard.innerHTML = `
                <img src="${imageUrl}" alt="Ingatlan">
                <h3>${title}</h3>
                <p>${description}</p>
                <input type="email" class="email-input" placeholder="Adja meg email címét">
                <button class="interest-button">Érdeklődés</button>
            `;

            const interestButton = newCard.querySelector('.interest-button');
            interestButton.addEventListener('click', () => {
                const emailInput = newCard.querySelector('.email-input');
                const email = emailInput.value;

                if (!email || !validateEmail(email)) {
                    alert('Kérjük, adjon meg egy érvényes email címet!');
                    return;
                }

                alert(`Érdeklődés rögzítve: ${title}\nEmail: ${email}`);
                emailInput.value = '';
            });

            cardContainer.appendChild(newCard);

  
            document.getElementById('newTitle').value = '';
            document.getElementById('newDescription').value = '';
            document.getElementById('newImageUrl').value = '';
        });

        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }

        async function sendEmail(email) {
            try {
                const response = await fetch('http://localhost:3000/send-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: email,
                        subject: 'Köszönjük a szavazatot!',
                        message: 'Köszönjük, hogy szavazott a karácsonyi ajándékötletekre!',
                    }),
                });
        
                if (response.ok) {
                    alert('Email sikeresen elküldve!');
                } else {
                    alert('Hiba történt az e-mail küldése közben.');
                }
            } catch (error) {
                console.error('Error sending email:', error);
            }
        }
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const email = prompt("Add meg az e-mail címed:");
                if (email) {
                    sendEmail(email);
                }
            });
        });