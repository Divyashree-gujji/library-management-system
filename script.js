// LocaL In-Memory Database containing exactly 10 comprehensive records per category
let books = [
    // --- FICTIONS ----
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Fiction", isbn: "9780743273565", location: "Floor 2, Wing A, Shelf F-1", status: "Available" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", category: "Fiction", isbn: "9780061120084", location: "Floor 2, Wing A, Shelf F-2", status: "Available" },
    { id: 3, title: "1984", author: "George Orwell", category: "Fiction", isbn: "9780451524935", location: "Floor 2, Wing A, Shelf F-3", status: "Borrowed" },
    { id: 4, title: "The Catcher in the Rye", author: "J.D. Salinger", category: "Fiction", isbn: "9780316769174", location: "Floor 2, Wing B, Shelf F-4", status: "Available" },
    { id: 5, title: "The Hobbit", author: "J.R.R. Tolkien", category: "Fiction", isbn: "9780345339683", location: "Floor 2, Wing B, Shelf F-5", status: "Available" },
    { id: 6, title: "Fahrenheit 451", author: "Ray Bradbury", category: "Fiction", isbn: "9781451673319", location: "Floor 2, Wing C, Shelf F-6", status: "Borrowed" },
    { id: 7, title: "Brave New World", author: "Aldous Huxley", category: "Fiction", isbn: "9780060850524", location: "Floor 2, Wing C, Shelf F-7", status: "Available" },
    { id: 8, title: "Animal Farm", author: "George Orwell", category: "Fiction", isbn: "9780451526342", location: "Floor 2, Wing D, Shelf F-8", status: "Available" },
    { id: 9, title: "The Lord of the Rings", author: "J.R.R. Tolkien", category: "Fiction", isbn: "9780618640157", location: "Floor 2, Wing D, Shelf F-9", status: "Available" },
    { id: 10, title: "One Hundred Years of Solitude", author: "Gabriel García Márquez", category: "Fiction", isbn: "9780060883287", location: "Floor 2, Wing E, Shelf F-10", status: "Borrowed" },

    // --- SCIENCE ---
    { id: 11, title: "A Brief History of Time", author: "Stephen Hawking", category: "Science", isbn: "9780553380163", location: "Floor 1, Wing A, Shelf S-1", status: "Available" },
    { id: 12, title: "The Selfish Gene", author: "Richard Dawkins", category: "Science", isbn: "9780198788607", location: "Floor 1, Wing A, Shelf S-2", status: "Available" },
    { id: 13, title: "Cosmos", author: "Carl Sagan", category: "Science", isbn: "9780345331359", location: "Floor 1, Wing B, Shelf S-3", status: "Available" },
    { id: 14, title: "The Elegant Universe", author: "Brian Greene", category: "Science", isbn: "9780393338102", location: "Floor 1, Wing B, Shelf S-4", status: "Borrowed" },
    { id: 15, title: "Astrophysics for People in a Hurry", author: "Neil deGrasse Tyson", category: "Science", isbn: "9780393609394", location: "Floor 1, Wing C, Shelf S-5", status: "Available" },
    { id: 16, title: "The Gene: An Intimate History", author: "Siddhartha Mukherjee", category: "Science", isbn: "9781476733500", location: "Floor 1, Wing C, Shelf S-6", status: "Available" },
    { id: 17, title: "Sapiens", author: "Yuval Noah Harari", category: "Science", isbn: "9780062316097", location: "Floor 1, Wing D, Shelf S-7", status: "Borrowed" },
    { id: 18, title: "The Emperor of All Maladies", author: "Siddhartha Mukherjee", category: "Science", isbn: "9781439170915", location: "Floor 1, Wing D, Shelf S-8", status: "Available" },
    { id: 19, title: "Silent Spring", author: "Rachel Carson", category: "Science", isbn: "9780618249060", location: "Floor 1, Wing E, Shelf S-9", status: "Available" },
    { id: 20, title: "What If?", author: "Randall Munroe", category: "Science", isbn: "9780544272996", location: "Floor 1, Wing E, Shelf S-10", status: "Available" },

    // --- HISTORY ---
    { id: 21, title: "The Guns of August", author: "Barbara W. Tuchman", category: "History", isbn: "9780345386236", location: "Floor 3, Wing A, Shelf H-1", status: "Available" },
    { id: 22, title: "Battle Cry of Freedom", author: "James M. McPherson", category: "History", isbn: "9780195168952", location: "Floor 3, Wing A, Shelf H-2", status: "Borrowed" },
    { id: 23, title: "The Rise and Fall of the Third Reich", author: "William L. Shirer", category: "History", isbn: "9781451651683", location: "Floor 3, Wing B, Shelf H-3", status: "Available" },
    { id: 24, title: "Team of Rivals", author: "Doris Kearns Goodwin", category: "History", isbn: "9780743270755", location: "Floor 3, Wing B, Shelf H-4", status: "Available" },
    { id: 25, title: "A People's History of the United States", author: "Howard Zinn", category: "History", isbn: "9780062397348", location: "Floor 3, Wing C, Shelf H-5", status: "Available" },
    { id: 26, title: "The Silk Roads", author: "Peter Frankopan", category: "History", isbn: "9781101912379", location: "Floor 3, Wing C, Shelf H-6", status: "Borrowed" },
    { id: 27, title: "Guns, Germs, and Steel", author: "Jared Diamond", category: "History", isbn: "9780393354324", location: "Floor 3, Wing D, Shelf H-7", status: "Available" },
    { id: 28, title: "1776", author: "David McCullough", category: "History", isbn: "9780743226721", location: "Floor 3, Wing D, Shelf H-8", status: "Available" },
    { id: 29, title: "SPQR: A History of Ancient Rome", author: "Mary Beard", category: "History", isbn: "9781631492426", location: "Floor 3, Wing E, Shelf H-9", status: "Available" },
    { id: 30, title: "The Plantagenets", author: "Dan Jones", category: "History", isbn: "9780143124252", location: "Floor 3, Wing E, Shelf H-10", status: "Available" },

    // --- TECHNOLOGY ---
    { id: 31, title: "Introduction to Algorithms", author: "Thomas H. Cormen", category: "Technology", isbn: "9780262033848", location: "Floor 4, Wing A, Shelf T-1", status: "Available" },
    { id: 32, title: "Clean Code", author: "Robert C. Martin", category: "Technology", isbn: "9780132350884", location: "Floor 4, Wing A, Shelf T-2", status: "Available" },
    { id: 33, title: "Design Patterns", author: "Erich Gamma", category: "Technology", isbn: "9780201633610", location: "Floor 4, Wing B, Shelf T-3", status: "Borrowed" },
    { id: 34, title: "The Pragmatic Programmer", author: "Andrew Hunt", category: "Technology", isbn: "9780135957059", location: "Floor 4, Wing B, Shelf T-4", status: "Available" },
    { id: 35, title: "JavaScript: The Good Parts", author: "Douglas Crockford", category: "Technology", isbn: "9780596517748", location: "Floor 4, Wing C, Shelf T-5", status: "Available" },
    { id: 36, title: "You Don't Know JS", author: "Kyle Simpson", category: "Technology", isbn: "9781491904244", location: "Floor 4, Wing C, Shelf T-6", status: "Available" },
    { id: 37, title: "Compilers: Principles, Techniques, and Tools", author: "Alfred Aho", category: "Technology", isbn: "9780321483461", location: "Floor 4, Wing D, Shelf T-7", status: "Borrowed" },
    { id: 38, title: "Artificial Intelligence: A Modern Approach", author: "Stuart Russell", category: "Technology", isbn: "9780136042594", location: "Floor 4, Wing D, Shelf T-8", status: "Available" },
    { id: 39, title: "The Phoenix Project", author: "Gene Kim", category: "Technology", isbn: "9780988262591", location: "Floor 4, Wing E, Shelf T-9", status: "Available" },
    { id: 40, title: "Continuous Delivery", author: "Jez Humble", category: "Technology", isbn: "9780321601919", location: "Floor 4, Wing E, Shelf T-10", status: "Available" }
];

let sessionRole = null;
let currentView = "student";

// Autopopulate helper to save testing evaluation speed of the users
function autoFillCredentials() {
    const role = document.getElementById("loginRole").value;
    document.getElementById("loginUser").value = role === "admin" ? "admin@university.edu" : "student@university.edu";
    document.getElementById("loginPass").value = role === "admin" ? "admin123" : "student123";
}

// Security Gate Engines
function handleLogin(e) {
    e.preventDefault();
    const role = document.getElementById("loginRole").value;
    
    sessionRole = role;
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("appInterface").classList.remove("hidden");
    
    // UI adaptation based on privileges
    if (sessionRole === "student") {
        document.getElementById("toggleAdminBtn").classList.add("hidden");
        document.getElementById("userBadge").innerText = "🔒 Student Access";
        switchToStudentMode();
    } else {
        document.getElementById("toggleAdminBtn").classList.remove("hidden");
        document.getElementById("userBadge").innerText = "⚡ Administrator Mode";
        switchToAdminMode();
    }

    renderStudentGrid();
    renderAdminTable();
}

function handleLogout() {
    sessionRole = null;
    document.getElementById("appInterface").classList.add("hidden");
    document.getElementById("loginPage").classList.remove("hidden");
}

function switchToStudentMode() {
    currentView = "student";
    document.getElementById("adminView").classList.add("hidden");
    document.getElementById("studentView").classList.remove("hidden");
    document.getElementById("toggleAdminBtn").innerText = "Switch to Admin View";
}

function switchToAdminMode() {
    currentView = "admin";
    document.getElementById("studentView").classList.add("hidden");
    document.getElementById("adminView").classList.remove("hidden");
    document.getElementById("toggleAdminBtn").innerText = "Switch to Student View";
}

function toggleAdminView() {
    if (currentView === "student") switchToAdminMode();
    else switchToStudentMode();
}

// Students View Rendering Grid Engines
function renderStudentGrid(booksToRender = books) {
    const grid = document.getElementById("bookGrid");
    grid.innerHTML = "";

    document.getElementById("matchCounter").innerText = `Showing ${booksToRender.length} of ${books.length} items logged`;

    booksToRender.forEach(book => {
        const isAvail = book.status === "Available";
        const card = document.createElement("div");
        card.className = "book-card";
        card.onclick = () => openDetailsModal(book.id);
        card.innerHTML = `
            <div>
                <div class="card-cat">${book.category}</div>
                <h3>${book.title}</h3>
                <p>by ${book.author}</p>
            </div>
            <div>
                <span class="status-pill ${isAvail ? 'available' : 'borrowed'}">
                    ${book.status}
                </span>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Core Search and  the Catagory Filter Algorithms
function filterBooks() {
    const searchVal = document.getElementById("searchInput").value.trim().toLowerCase();
    const catVal = document.getElementById("categoryFilter").value;

    const queryResult = books.filter(book => {
        const matchesSearch = book.title.toLowerCase().includes(searchVal) || 
                              book.author.toLowerCase().includes(searchVal) || 
                              book.isbn.includes(searchVal);
        const matchesCategory = (catVal === "all") || (book.category === catVal);
        return matchesSearch && matchesCategory;
    });

    renderStudentGrid(queryResult);
}

// Modals View Engines
function openDetailsModal(id) {
    const book = books.find(b => b.id === id);
    if (!book) return;

    document.getElementById("modalTitle").innerText = book.title;
    document.getElementById("modalAuthor").innerText = book.author;
    document.getElementById("modalCategory").innerText = book.category;
    document.getElementById("modalIsbn").innerText = book.isbn;
    document.getElementById("modalLocation").innerText = book.location;
    
    const statusTarget = document.getElementById("modalStatus");
    statusTarget.innerText = book.status;
    statusTarget.className = `status-pill ${book.status === 'Available' ? 'available' : 'borrowed'}`;

    document.getElementById("detailsModal").classList.remove("hidden");
}

function closeModal() {
    document.getElementById("detailsModal").classList.add("hidden");
}

function handleModalOverlayClick(e) {
    if (e.target.id === "detailsModal") closeModal();
}

// Admin Table Inventory Management Render Engine
function renderAdminTable() {
    const tbody = document.getElementById("adminTableBody");
    tbody.innerHTML = "";

    books.forEach(book => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>
                <div style="font-weight:600;">${book.title}</div>
                <div style="color:var(--text-muted); font-size:12px;">Author: ${book.author} | ISBN: ${book.isbn}</div>
            </td>
            <td><span class="user-identity-badge">${book.category}</span></td>
            <td><strong style="color:var(--brand);">${book.location}</strong></td>
            <td>
                <select onchange="updateBookStatus(${book.id}, this.value)">
                    <option value="Available" ${book.status === 'Available' ? 'selected' : ''}>Available</option>
                    <option value="Borrowed" ${book.status === 'Borrowed' ? 'selected' : ''}>Borrowed</option>
                </select>
            </td>
            <td>
                <button class="btn-logout" onclick="deleteBookRecord(${book.id})">Remove</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Administrative Mutation Command Operations
function createNewBook(e) {
    e.preventDefault();
    const newBook = {
        id: Date.now(),
        title: document.getElementById("addTitle").value.trim(),
        author: document.getElementById("addAuthor").value.trim(),
        isbn: document.getElementById("addIsbn").value.trim(),
        category: document.getElementById("addCategory").value,
        location: document.getElementById("addLocation").value.trim(),
        status: "Available"
    };

    books.unshift(newBook); // Prepend so it appears instantly at the top
    document.getElementById("addBookForm").reset();
    renderStudentGrid();
    renderAdminTable();
}

function updateBookStatus(id, newStatus) {
    const target = books.find(b => b.id === id);
    if (target) {
        target.status = newStatus;
        renderStudentGrid();
    }
}

function deleteBookRecord(id) {
    if (confirm("Are you sure you want to completely remove this book record from system indexes?")) {
        books = books.filter(b => b.id !== id);
        renderStudentGrid();
        renderAdminTable();
    }
}
// Make sure your rendering function loops  are exactly out of this layout blocks:
filteredBooks.forEach(book => {
    const card = document.createElement('div');
    card.className = 'book-card';
    card.onclick = () => openModal(book);
    
    card.innerHTML = `
        <div class="book-card-cover"></div>
        
        <div class="book-card-header">
            <span class="category-pill">${book.category}</span>
        </div>
        <h3>${book.title}</h3>
        <p class="author">by ${book.author}</p>
        <div class="book-card-footer">
            <span>📍 ${book.location}</span>
            <span class="status-pill ${book.status.toLowerCase()}">${book.status}</span>
        </div>
    `;
    document.getElementById('bookGrid').appendChild(card);
});
