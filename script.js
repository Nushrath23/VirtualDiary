// Array to store journal entries
const entries = [];

// DOM elements
const journalEntryInput = document.getElementById('journal-entry');
const addEntryButton = document.getElementById('add-entry');
const entriesContainer = document.querySelector('.entries');

// Function to add a new journal entry
function addJournalEntry() {
    const text = journalEntryInput.value.trim();
    if (text === '') {
        alert('Please enter a journal entry.');
        return;
    }

    // Create a new entry object with a timestamp
    const entry = {
        text: text,
        timestamp: new Date().toLocaleString(),
    };

    // Add the entry to the array
    entries.push(entry);

    // Clear the input field
    journalEntryInput.value = '';

    // Display the entries
    displayEntries();
}

// Function to display journal entries
function displayEntries() {
    // Clear existing entries
    entriesContainer.innerHTML = '';

    // Loop through entries and create HTML elements to display them
    entries.forEach((entry, index) => {
        const entryDiv = document.createElement('div');
        entryDiv.classList.add('entry');
        entryDiv.innerHTML = `
            <p>${entry.timestamp}</p>
            <p>${entry.text}</p>
        `;
        entriesContainer.appendChild(entryDiv);
    });
}

// Add an event listener for the "Add Entry" button
addEntryButton.addEventListener('click', addJournalEntry);

// Initial display of entries
displayEntries();
