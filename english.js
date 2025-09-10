// fetch level data
const loadAllLessonItems = () => {
  const url = "https://openapi.programming-hero.com/api/levels/all";
  fetch(url)
    .then((res) => res.json())
    .then((loadLesson) => displayLevelData(loadLesson.data));
};
// display Level Data in web Page
const displayLevelData = (levelDatas) => {
  const levelDataCon = document.getElementById("levelDataCon");
  // console.log(levelDataCon);
  displayLevelData.innHTMl = "";

  levelDatas.forEach((data) => {
    // console.log(data);
    const levelDiv = document.createElement("div");
    levelDiv.innerHTML = `
      <button onclick = "loadLevelWord(${data.level_no})" class="btn btn-soft btn-primary">
        <i class="fa-solid fa-book-open-reader"></i>Lesson - ${data.level_no}
      </button>
    `;
    levelDataCon.append(levelDiv);
  });
};

// fetch words/datas according level items
const loadLevelWord = (id) => {
  // console.log(id);
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  // console.log(url);

  fetch(url)
    .then((res) => res.json())
    .then((wordData) => displayWordData(wordData.data));
};

// display data by level catagory
const displayWordData = (datas) => {
  // console.log(datas);
  const wordsContainer = document.getElementById("wordContainer");
  wordsContainer.innerHTML = "";

  	
// id	4
// level	5
// word	"Diligent"
// meaning	"পরিশ্রমী"
// pronunciation	"ডিলিজেন্ট"

  datas.forEach((data) => {
    // console.log(data);
    const wordDiv = document.createElement("div");
    wordDiv.innerHTML = 
    ` <div
        class="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl shadow-lg p-8 max-w-sm mx-auto transform transition hover:-translate-y-2 hover:shadow-2xl">
        <!-- Word Title -->
        <h2 class="text-2xl font-bold text-gray-800 mb-2">${data.word}</h2>

        <!-- Meaning -->
        <p class="text-gray-600 italic">meaning and proof</p>
        <div class="text-lg font-medium text-purple-700 mt-1">
          ${data.meaning}/${data.pronunciation}
        </div>

        <!-- Action Buttons -->
        <div class="flex justify-center gap-5 mt-5">
          <button
            class="p-3 rounded-full bg-white shadow hover:bg-indigo-100 transition">
            <i class="fa-solid fa-circle-info text-indigo-600 text-xl"></i>
          </button>
          <button
            class="p-3 rounded-full bg-white shadow hover:bg-purple-100 transition">
            <i class="fa-solid fa-volume-low text-purple-600 text-xl"></i>
          </button>
        </div>
      </div>`;
      wordsContainer.append(wordDiv)
  });
};

loadAllLessonItems();
