async function loadQADatabase(filename) {
    const response = await fetch(filename);
    const fileContent = await response.text();
    const qa_list = [];
    const lines = fileContent.trim().split('\n');
    lines.forEach(line => {
        if (line.includes(':')) {
            const [question, answer] = line.split('::', 2).map(item => item.trim());
            qa_list.push({ question, answer });
        }
    });
    return qa_list;
}

const searchInput = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");
const answerContainer = document.getElementById("answerContainer");
const answerText = document.getElementById("answerText");

let qaDatabase = [];

// Wczytaj bazę pytań i ustaw obsługę wyszukiwania
loadQADatabase('qa_database.txt').then(database => {
    qaDatabase = database;

    searchInput.addEventListener("input", (e) => {
        const searchTerm = e.target.value.toLowerCase();
        resultsDiv.innerHTML = "";

        if (searchTerm === "") return;

        const filteredQuestions = qaDatabase.filter(item =>
            item.question.toLowerCase().includes(searchTerm)
        );

        if (filteredQuestions.length === 0) {
            resultsDiv.innerHTML = "<p>Brak wyników</p>";
            return;
        }

        filteredQuestions.forEach(item => {
            const questionDiv = document.createElement("div");
            questionDiv.className = "question";
            questionDiv.textContent = item.question;
            questionDiv.addEventListener("click", () => {
                answerText.textContent = item.answer;
                answerContainer.style.display = "block";
            });
            resultsDiv.appendChild(questionDiv);
        });
    });
});

document.querySelector('.settings-icon').onclick = function() {
  window.open('https://getadblock.com/', '_blank');
};

document.querySelector('.help-icon').onclick = function() {
  window.open('https://helpcenter.getadblock.com/hc/en-us', '_blank');
};

document.addEventListener('DOMContentLoaded', function() {
  const closeBtn = document.getElementById('closeAnswerBtn');
  if (closeBtn) {
    closeBtn.onclick = function() {
      document.getElementById('answerContainer').style.display = 'none';
    };
  }
});

