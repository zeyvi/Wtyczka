const qaDatabase = [
    {
        question: "1. Fala elektromagnetyczna:",
        answer: "(składa się ze składowej elektrycznej i magnetycznej, posiada właściwości zależne od częstotliwości, stanowi medium w łączności radiowej)"
    },
    {
        question: "2. Tłumienie fali elektromagnetycznej zależy od:",
        answer: "(ukształtowania terenu, częstotliwości fali, odległości między antenami, warunków atmosferycznych)"
    },
    {
        question: "3. Tłumienie fali elektromagnetycznej nie zależy od:",
        answer: "(Liczby bitów)"
    },
    {
        question: "4. W procesie konwersji analogowo-cyfrowej, ostatni etap to:",
        answer: "(kodowanie)"
    },
    {
        question: "5. Kolejność etapów konwersji analogowo-cyfrowej:",
        answer: "(filtracja dolnoprzepustowa, próbkowanie, kwantyzacja, kodowanie)"
    },
    {
        question: "6. Przy konwersji analogowo-cyfrowej częstotliwość próbkowania:",
        answer: "(może być dziesięć razy większa od maksymalnej częstotliwości, powinna być przynajmniej dwa razy większa od maksymalnej składowej)"
    },
    {
        question: "7. Proces próbkowania polega na:",
        answer: "(pobieraniu próbek w regularnych odstępach czasu, odczytywaniu wartości chwilowej sygnału, jest etapem konwersji A/C)"
    },
    {
        question: "8. W procesie kwantyzacji:",
        answer: "(dopasowanie wartości próbek sygnału do przedziałów)"
    },
    {
        question: "9. Twierdzenie o próbkowaniu:",
        answer: "(częstotliwość próbkowania >= 2x maksymalna częstotliwość w sygnale, związane z szerokością pasma)"
    },
    {
        question: "10. Do modulacji ciągłych kąta zalicza się:",
        answer: "(FM, PM, fazy, częstotliwości)"
    },
    {
        question: "11. W modulacji PPM:",
        answer: "(modulacja położenia impulsów, może wykorzystywać PAM)"
    },
    {
        question: "12. W modulacji FSK sygnałem informacyjnym jest:",
        answer: "(sygnał zawierający dwie częstotliwości)"
    },
    {
        question: "13. Modulacja polega na:",
        answer: "(przesunięciu pasma, zmianie parametrów fali nośnej)"
    },
    {
        question: "14. Współczynnik głębokości modulacji:",
        answer: "(określa wpływ sygnału informacyjnego na nośną, wpływa na widmo)"
    },
    {
        question: "15. Operacja przesunięcia w dziedzinie częstotliwości dotyczy:",
        answer: "(modulacji)"
    },
    {
        question: "16. Wartościowość BASK, BFSK, BPSK:",
        answer: "(2)"
    },
    {
        question: "17. Do modulacji amplitudy zalicza się:",
        answer: "(AM, PAM, ASK)"
    },
    {
        question: "18. Wartościowość modulacji QPSK:",
        answer: "(4)"
    },
    {
        question: "19. Kody liniowe stosuje się w celu:",
        answer: "(poprawy transmisji i synchronizacji, eliminacji składowej stałej)"
    },
    {
        question: "20. Do kodowania entropijnego zaliczamy:",
        answer: "(kodowanie Huffmana, arytmetyczne)"
    },
    {
        question: "21. W kodowaniu predykcyjnym:",
        answer: "(przewiduje się zmiany sygnału, występują błędy predykcji)"
    },
    {
        question: "22. Kod liniowy dobry do synchronizacji i bez składowej stałej:",
        answer: "(Manchester)"
    },
    {
        question: "23. Cechą charakterystyczną kodu Graya jest:",
        answer: "(słowa różnią się jednym bitem)"
    },
    {
        question: "24. Do kodów liniowych zaliczamy:",
        answer: "(AMI, NRZI, Manchester)"
    },
    {
        question: "25. Skrambling polega na:",
        answer: "(redukcji okresowości w ciągu bitowym)"
    },
    {
        question: "26. W kodowaniu arytmetycznym dane po kompresji:",
        answer: "(liczba reprezentująca podprzedział)"
    },
    {
        question: "27. Konstelacja kodowa:",
        answer: "(punkty modulacji, zmiany amplitudy i fazy, kodowanie Graya)"
    },
    {
        question: "28. W kodowaniu Huffmana dane po kompresji:",
        answer: "(ciąg bitów o zmiennej długości)"
    },
    {
        question: "29. Zjawisko wykorzystywane w światłowodzie:",
        answer: "(całkowite wewnętrzne odbicie)"
    },
    {
        question: "30. Profil światłowodu:",
        answer: "(zmiana współczynnika załamania w przekroju)"
    },
    {
        question: "31. Mod propagacji w światłowodzie:",
        answer: "(trajektoria promienia, maksymalna liczba trajektorii)"
    },
    {
        question: "32. Kolejność warstw w modelu OSI:",
        answer: "(fizyczna, łącza, sieciowa, transportowa, sesji, prezentacji, aplikacji)"
    },
    {
        question: "33. Protokoły transmisji strumieniowej w IP:",
        answer: "(RTCP, RTP, RTSP)"
    },
    {
        question: "34. Liczba warstw modelu sieciowego:",
        answer: "(7)"
    },
    {
        question: "35. Parametry QoS:",
        answer: "(utrata pakietów, opóźnienie, zmienność opóźnień)"
    },
    {
        question: "36. Protokoły nie związane z transmisją strumieniową w sieciach IP to:",
        answer: "(NTP)"
    },
    {
        question: "37. Rozdzielczość widmowa zależy od:",
        answer: "(liczby składowych w widmie, częstotliwości próbkowania)"
    },
    {
        question: "38. Widmo sygnału jest:",
        answer: "(reprezentacją w dziedzinie częstotliwości, pokazuje amplitudę/fazę vs częstotliwość)"
    },
    {
        question: "39. Efektywność widmowa zależy od:",
        answer: "(czas trwania bitu, szerokość pasma, przepływność binarna, wartościowość modulacji)"
    },
    {
        question: "40. Szerokość pasma idealnego przebiegu piłokształtnego:",
        answer: "(większa niż tonu prostego)"
    },
    {
        question: "41. Szerokość pasma sygnału x(t)=sin(2π·200·t)+sin(40π·t)+2cos(640π·t):",
        answer: "(300 Hz)"
    },
    {
        question: "42. Szerokość pasma idealnego przebiegu trójkątnego:",
        answer: "(nieskończona)"
    },
    {
        question: "43. Pasmo AM zależy od:",
        answer: "(maksymalnej częstotliwości sygnału, szerokości pasma modulującego)"
    },
    {
        question: "44. Pasmo ISM to:",
        answer: "(nielicencjonowane, do przemysłu, nauki, medycyny)"
    },
    {
        question: "45. Parametry pojemności kanału:",
        answer: "(prędkość bitowa, szerokość pasma, moc sygnału, moc szumu)"
    },
    {
        question: "46. Pojemność kanału wzrasta gdy:",
        answer: "(SNR rośnie, szerokość pasma rośnie)"
    },
    {
        question: "47. Przepływność binarna zależy od:",
        answer: "(czas trwania bitu, wartościowość modulacji)"
    },
    {
        question: "48. Zakłócenia w kanale telekomunikacyjnym:",
        answer: "(tłumienie, echo, opóźnienie, szumy)"
    },
    {
        question: "49. Bilans mocy pozwala określić:",
        answer: "(poziom mocy sygnału na wejściu odbiornika)"
    },
    {
        question: "50. Pojemność kanału transmisyjnego wzrasta gdy:",
        answer: "(SNR rośnie, szerokość pasma rośnie)"
    },
    {
        question: "51. Multipleksacja: FDM, TDM, CDM",
        answer: "(FDM: częstotliwości; TDM: czas; CDM: kody)"
    },
    {
        question: "52. Multipleksacja CDM:",
        answer: "(kody pseudolosowe, brak synchronizacji czasowej, wspólne pasmo)"
    },
    {
        question: "53. Multipleksacja TDM:",
        answer: "(szczeliny czasowe, wymaga synchronizacji, sekwencyjna transmisja)"
    },
    {
        question: "54. Multipleksacja FDM:",
        answer: "(oddzielne pasma, transmisja równoczesna, wymaga filtrów)"
    },
    {
        question: "55. Kodek OPUS umożliwia:",
        answer: "(kompresję mowy i muzyki)"
    },
    {
        question: "56. Warstwa najbliżej Ziemi:",
        answer: "(Troposfera)"
    },
    {
        question: "57. Odległość Hamminga:",
        answer: "(liczba pozycji różniących się w ciągach)"
    },
    {
        question: "58. W modulatorze kwadraturowym wykorzystuje się:",
        answer: "(mnożenie i odejmowanie, składowe I/Q, dwa generatory sinusoid)"
    },
    {
        question: "59. Dewiacja częstotliwości:",
        answer: "(maksymalne odchylenie częstotliwości FM od nośnej)"
    },
    {
        question: "60. Zależności dotyczące pulsacji i częstotliwości:",
        answer: "(ω = 2πf, f = 1/T, ω·T = 2π)"
    },
    {
        question: "61. W niesymetrycznej parze skręcanej:",
        answer: "(jedna żyła to sygnał, druga odniesienie)"
    },
    {
        question: "62. W symetrycznej parze skręcanej:",
        answer: "(takie same napięcia o przeciwnej polaryzacji)"
    },
    {
        question: "63. Skręcenie przewodów w skrętce służy do:",
        answer: "(redukcji zakłóceń elektromagnetycznych i wzajemnych)"
    },
    {
        question: "64. Kolejność orbit wg opóźnień:",
        answer: "(LEO, MEO, GEO)"
    },
    {
        question: "65. Najmniejsze opóźnienie transmisji z orbity:",
        answer: "(LEO)"
    },
    {
        question: "66. Ton prosty nie jest:",
        answer: "(szumem białym, trójkątnym, piłokształtnym)"
    },
    {
        question: "67. Skale subiektywne oceny jakości dźwięku:",
        answer: "(MOS, ACR)"
    },
    {
        question: "68. Jednostka pochodna dBm:",
        answer: "(dBW)"
    },
    {
        question: "69. Sygnał mowy człowieka zawiera:",
        answer: "(tony proste, fragmenty zmiennej energii, dźwięczne, pauzy)"
    },
    {
        question: "70. Szum w modelu AWGN ma rozkład:",
        answer: "(normalny)"
    },
    {
        question: "71. Technika ARQ:",
        answer: "(retransmisja danych)"
    },
    {
        question: "72. Jednostka dBi oznacza:",
        answer: "(zysk anteny względem izotropowej)"
    }
];

const searchInput = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");
const answerContainer = document.getElementById("answerContainer");
const answerText = document.getElementById("answerText");

// Wyszukiwanie pytań
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