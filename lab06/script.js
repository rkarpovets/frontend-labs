const btn = document.getElementById('btn');
const container = document.getElementById('users-container');

btn.addEventListener('click', () => {
  fetch('https://randomuser.me/api/?results=5')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        renderUsers(data.results);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        alert("Сталася помилка при завантаженні даних");
      });
});

function renderUsers(users) {
  container.innerHTML = '';

  users.forEach(user => {
    const card = document.createElement('div');
    card.className = 'user-card';

    card.innerHTML = `
            <img src="${user.picture.large}" alt="User Photo">
            <div class="user-info">
                <p><span class="label">Cell:</span> ${user.cell}</p>
                <p><span class="label">City:</span> ${user.location.city}</p>
                <p><span class="label">E-mail:</span> <br>${user.email}</p>
                <p><span class="label">Coordinates:</span> <br>
                   Lat: ${user.location.coordinates.latitude}, <br>
                   Long: ${user.location.coordinates.longitude}
                </p>
            </div>
        `;

    container.appendChild(card);
  });
}