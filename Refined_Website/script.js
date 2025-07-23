function showForm() {
    document.getElementById('form-section').classList.remove('d-none');
}

document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('nameError');

    if (!nameInput.value.trim()) {
        nameError.textContent = 'Name is required!';
        return;
    }

    nameError.textContent = '';
    fetchData();
});

function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            const postList = document.getElementById('postList');
            const apiSection = document.getElementById('api-data');
            postList.innerHTML = '';
            data.slice(0, 5).forEach(post => {
                const item = document.createElement('a');
                item.className = 'list-group-item list-group-item-action';
                item.textContent = post.title;
                postList.appendChild(item);
            });
            apiSection.classList.remove('d-none');
        });
}
