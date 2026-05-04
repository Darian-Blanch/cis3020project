document.addEventListener("DOMContentLoaded", () => {
    // 1. Find every team list using the ul element
    const teamLists = document.querySelectorAll('.team-list');

    teamLists.forEach(list => {
        // 2. Grab all the <li> elements 
        const teams = Array.from(list.querySelectorAll('li'));

        // 3. Sort the elements based on alphabetical order of team names
        teams.sort((a, b) => {
            const nameA = a.textContent.trim().toUpperCase();
            const nameB = b.textContent.trim().toUpperCase();
            return nameA.localeCompare(nameB);
        });

        // 4. Clear the current list and put them back in sorted order
        list.innerHTML = "";
        teams.forEach(team => list.appendChild(team));
    });
});
// Alphabetical Sorting of team in navigation menu. Serves as a basis before eventually turning it into a sort by rank. 