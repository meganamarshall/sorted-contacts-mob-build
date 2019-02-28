const sortSelect = document.getElementById('sort-select');

export default function loadSort(callback) {
    sortSelect.addEventListener('change', () => {
        const sortChoices = {
            property: sortSelect.value
        };
        callback(sortChoices);
    });
}