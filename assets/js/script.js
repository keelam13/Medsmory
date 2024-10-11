/* jshint esversion: 6 */

const homeDisplay = document.getElementById("home-display");
const categoryBox = document.getElementById("category-box");
const quizBox = document.getElementById("quiz-box");
const questionElement = document.getElementById("question-element");
const optionElement = document.getElementById("option-element");
const quitConfirmDisplay = document.getElementById("quit-confirm-display");
const alertDisplay = document.getElementById("alert-display");
const resultBox = document.getElementById("result-box");

// Waits for the DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded", function() {

    // Initiates the game
    document.getElementById("start-btn").addEventListener("click", showCategory);
    
});

let quizData, shuffledQuestion, currentQuestionIndex;
let selectedAnswer, correctAnswer;
let score, questionNum;

/**
 * This shows the categories to choose from.
 */ 
function showCategory() {
    homeDisplay.classList.add("hide");
    categoryBox.classList.remove("hide");
    chooseCategory();
}

/**
 * This will allow user to choose the category by clicking the buttons
 */
function chooseCategory(){

    // Get button elements in the category display and add event listeners to them
    const categoryBtns = document.querySelectorAll(".category-btn");

    for (let i = 0; i < categoryBtns.length; i++) {
        categoryBtns[i].addEventListener("click", function () {
            if (categoryBtns[i].id === "category-one") {
                quizData = nameDrug;
                startQuiz();
            } else if (categoryBtns[i].id === "category-two") {
                quizData = brandName;
                startQuiz();
            }
        });
    }
}

/**
 * This will shuffle the questions based on the category selected.
 * The current question index, the score and the question number will also be declared. 
 */
function startQuiz() {
    categoryBox.classList.add("hide");
    quizBox.classList.remove("hide");

    // This allows the user to quit / close during the quiz 
    document.getElementById("quit-btn").addEventListener("click", function() {
        quitConfirmDisplay.classList.remove("hide");
        quitConfirmation();
    });

    // Shuffles the questions
    let shuffleArray = (array) => {
        let shuffledData = array.slice().sort(() => Math.random() - 0.5);
        return shuffledData;
    };

    currentQuestionIndex = 0;
    score = 0;
    questionNum = 0;
    shuffledQuestion = shuffleArray(quizData);
    
    showQuestion();
}

/**
 * This will display the question together with the shuffled options.
 * It also shuffles the answer options for the question and creates a button for eac to be displayed.
 */
function showQuestion() {
    
    // Shuffles the options
    let options = shuffledQuestion[currentQuestionIndex].options.sort(() => Math.random() - 0.5);
    
    questionElement.textContent = shuffledQuestion[currentQuestionIndex].question;

    // Creates buttons for the options
    optionElement.innerHTML = "";
    options.forEach(option => {
      const optionBtn = document.createElement("button");
      optionBtn.innerText = option;
      optionBtn.classList.add("option-btn");
      optionElement.appendChild(optionBtn);
      
      // Declares the selected answer
      optionBtn.addEventListener("click", function(e) {
            selectedAnswer = e.target.innerText;
      });
    });
    
    showQuizNum();

    // Event listener will submit selected answer by clicking the button pressing the enter key.
    document.getElementById("submit-btn").addEventListener("click", checkAnswer);
}

/**
 * This will check the selected answer if it'S correct or not.
 */
function checkAnswer() {
    correctAnswer = shuffledQuestion[currentQuestionIndex].answer;
       
    if (selectedAnswer === correctAnswer) {
        document.getElementById("wrong-icon").toggleAttribute("hide");
        
        // Adds a score to every correct answer
        score++;
        alertAnswer();
    } else {
        document.getElementById("correct-icon").toggleAttribute("hide");
        alertAnswer();
    }
}

/**
 * This will alert the user  whether the selected answer is correct or not.
 * It also shows the user the correct answer to the question.
 */
function alertAnswer() {
    
    alertDisplay.classList.remove("hide");

    document.getElementById("correct-answer").innerText = `
    Correct Answer: ${correctAnswer}`;

    // Button will lead to the next question.
    document.getElementById("ok-btn").addEventListener("click", nextQuestion);
}

/**
 * This will take user to the next question if there are more questions, or
 *  display the result if there are not any more questions.
 */
function nextQuestion() {
    
    alertDisplay.classList.add("hide");
    document.getElementById("wrong-icon").removeAttribute("hide");
    document.getElementById("correct-icon").removeAttribute("hide");

    if (shuffledQuestion.length > currentQuestionIndex + 1) {
        
            // Increases current question index
            currentQuestionIndex++;
            showQuestion();
        } else {
            showResult();
        }
}

/**
 * This will allow user to confirm to quit or continue on with the quiz.
 */
function quitConfirmation() {

    // Get button elements in the confirmation display and add event listeners to them
    const confirmBtns = document.querySelectorAll(".confirm-btn");

    for (let i = 0; i < confirmBtns.length; i++) {
        confirmBtns[i].addEventListener("click", function () {
            if (confirmBtns[i].id === "confirm-yes") {
                reloadPage();
            } else {
                quitConfirmDisplay.classList.add("hide");
            }
        });
    }
}

/**
 * This increases the question number displayed in the quiz.
 */
function showQuizNum() {

    // Increases the question number
    questionNum++;

    let quizNum = document.getElementById("quiz-num");
    quizNum.innerText = `Question ${questionNum} / ${quizData.length}`;
}

/**
 * This shows the score of the player after finishing the quiz.
 */
function showResult() {
    
    quizBox.classList.add("hide");
    resultBox.classList.remove("hide");

    let scoreDisplay = document.getElementById("total-score");
    scoreDisplay.innerText = `${score} / ${quizData.length}`;

    // Get button elements in the result display and add event listeners to them
    const resultBtns = document.querySelectorAll(".result-btn");

    for (let i = 0; i < resultBtns.length; i++) {
        resultBtns[i].addEventListener("click", function () {
            if (resultBtns[i].innerText === "Play again") {
                resultBox.classList.add("hide");
                startQuiz();
            } else if (resultBtns[i].innerText === "Exit game") {
                reloadPage();
            }
        });
    }
}

/**
 * This will reload the page and bring user back to home page.
 */
function reloadPage() {

   window.location.reload();
}

// This is a set of questions for a quiz category.
const nameDrug = [
    {
        question: "This drug blocks the action of a protein in the kidneys called sodium-glucose co-transporter 2 (SGLT2), which stops the kidneys passing glucose from the blood into the urine. Thereby causing the kidneys to pass more glucose into the urine and reducing the glucose level in the blood. It also increases the elimination of salt and water in the urine.", 
        options: ["Dapagliflozin (Forxiga)", "Melperone (Bunil)", "Escitalopram (Lexapro)"],
        answer: "Dapagliflozin (Forxiga)"
    },
    {
        question:"It is a corticosteroid that may be used to reduce inflammation and calm down an overactive immune system. It works by mimicking the effects of cortisol, a hormone released by the adrenal glands that regulates metabolism and stress. It prevents the release of substances in the body that cause inflammation.",
        options:["Amitriptyline (Elavil)","Prednisolone (Okrido)","Dapagliflozin (Forxiga)"],
        answer:"Prednisolone (Okrido)"
    },
    {
        question:"An atypical butyrophenone antipsychotic used to treat sleep disorders, confusion, and psychomotor dysfunction associated with geriatric, psychiatric, and alcohol-dependent patients.",
        options:["Melperone (Bunil)","Apixaban (Eliquis)","Amiodarone (Cordarex)"],
        answer:"Melperone (Bunil)"
    },
    {
        question:"It is a calcium channel blocker which inhibits the contractile processes of the myocardial smooth muscle cells, causing dilation of the coronary and systemic arteries, increased oxygen delivery to the myocardial tissue, decreased total peripheral resistance, decreased systemic blood pressure, and decreased afterload.",
        options:["Lercanidipin (Zanidip)","Safinamide (Xadago)","Ondansetron (Zofran)"],
        answer:"Lercanidipin (Zanidip)"
    },
    {
        question:"An antidepressant used to treat major depressive episodes. It is a 'selective serotonin reuptake inhibitor' (SSRI). It works by preventing the neurotransmitter serotonin from being taken back up into nerve cells in the brain and spinal cord, thus making more serotonin available to help pass messages between brain cells. Low levels of serotonin in the central nervous system are thought to be associated with depression or anxiety.",
        options:["Melperone (Bunil)","Pregabalin (Lyrica)","Escitalopram (Lexapro)"],
        answer:"Escitalopram (Lexapro)"
    },
    {
        question:"It is a semi-synthethic macrolide antibiotic against certain Gram-negative bacteria, particularly Legionella pneumophila. It binds to the bacterial ribosome and interferes with bacterial protein synthesis.",
        options:["Amiodarone (Cordarex)","Roxithromycin (Rulid)","Melperone (Bunil)"],
        answer:"Roxithromycin (Rulid)"
    },
    {
        question:"A factor Xa inhibitor, an anticoagulant. It works by decreasing the clotting ability of the blood and helps prevent harmful clots from forming in the blood vessels.",
        options:["Apixaban (Eliquis)","Dapagliflozin (Forxiga)","Hydrochlorothiazide (Esidrix)"],
        answer:"Apixaban (Eliquis)"
    },
    {
        question:"It belongs to the group of medicines known as antiarrhythmics. It works directly on the heart tissue and will slow the nerve impulses in the heart. This helps keep your heart rhythm normal.",
        options:["Escitalopram (Lexapro)","Amiodarone (Cordarex)","Safinamide (Xadago)"],
        answer:"Amiodarone (Cordarex)"
    },
    {
        question:"A combination adrenergic antagonist and serotonin agonist given orally for the treatment of essential hypertension and intravenously in hypertensive emergencies.",
        options:["Urapidil (Ebrantil)","Ondansetron (Zofran)","Tocilizumab (Actemra)"],
        answer:"Urapidil (Ebrantil)"
    },
    {
        question:"This is a type of diuretic used alone or together with other medicines to treat high blood pressure. It decreases sodium reabsorption which increases fluid loss in urine, which in turn decreases extracellular fluid and plasma volume.",
        options:["Hydrochlorothiazide (Esidrix)","Dimenhydrinate (Vomex)","Pregabalin (Lyrica)"],
        answer:"Hydrochlorothiazide (Esidrix)"
    },
    {
        question:"Used to treat symptoms of depression. It works on the central nervous system (CNS) to increase levels of certain chemicals in the brain. This medicine is a tricyclic antidepressant (TCA). It is suggested that it  inhibits the membrane pump mechanism responsible for the re-uptake of transmitter amines, such as norepinephrine and serotonin, thereby increasing their concentration at the synaptic clefts of the brain improving depressive symptoms.",
        options:["Safinamide (Xadago)","Amitriptyline (Elavil)","Roxithromycin (Rulid)"],
        answer:"Amitriptyline (Elavil)"
    },
    {
        question: "It is used in combination with levodopa and carbidopa to treat adults with Parkinson's disease who are having 'off' episodes. This medicine is a MAO-B inhibitor that works to increase and extend the effects of levodopa and may help to slow the progress of Parkinson's disease.",
        options:["Lercanidipin (Zanidip)","Insulin lispro (Humalog)","Safinamide (Xadago)"],
        answer:"Safinamide (Xadago)"
    },
    {
        question:"Works in the central nervous system (CNS) to control seizures and pain. It is an anticonvulsant and neuropathic pain agent.",
        options:["Amitriptyline (Elavil)","Amiodarone (Cordarex)","Pregabalin (Lyrica)"],
        answer:"Pregabalin (Lyrica)"
    },
    {
        question:"This a combination drug indicated to prevent nausea, vomiting, and dizziness caused by motion sickness. The antiemetic properties of dimenhydrinate are primarily thought to be produced by its antagonism of H1 histamine receptors in the vestibular system, while the excitatory effects are thought to be produced by its adenosine receptor blockade.",
        options:["Tocilizumab (Actemra)","Dimenhydrinate (Vomex)","Ondansetron (Zofran)"],
        answer:"Dimenhydrinate (Vomex)"
    },
    {
        question:"Used to prevent nausea and vomiting that is caused by cancer medicines or radiation therapy. It is also used to prevent nausea and vomiting that may occur after surgery. It works in the stomach to block the signals to the brain that cause nausea and vomiting.",
        options:["Ondansetron (Zofran)","Fentanyl (Duragesic)","Amitriptyline (Elavil)"],
        answer:"Ondansetron (Zofran)"
    },
    {
        question:"A synthetic opioid used for the management of postoperative pain. It binds to and activates mu-opioid receptors in the central nervous system, thereby mimicking the effects of endogenous opioids and producing analgesic relief.",
        options:["Piritramide (Dipidolor)","Tocilizumab (Actemra)","Safinamide (Xadago)"],
        answer:"Piritramide (Dipidolor)"
    },
    {
        question:"A strong opioid analgesic that acts on the central nervous system (CNS) to relieve pain. It is used to treat severe and persistent pain that requires an extended treatment period and when other pain medicines did not work well enough or cannot be tolerated.",
        options:["Fentanyl (Duragesic)","Amiodarone (Cordarex)","Melperone (Bunil)"],
        answer:"Fentanyl (Duragesic)"
    },
    {
        question:"Rapid-acting form of insulin used for the treatment of hyperglycemia caused by Type 1 and Type 2 Diabetes. It mimics the activity of endogenously produced human insulin promoting the uptake of glucose from the blood into internal organs and tissues for its transformation into glycogen or fat for storage.",
        options:["Apixaban (Eliquis)","Insulin lispro (Humalog)","Dapagliflozin (Forxiga)"],
        answer:"Insulin lispro (Humalog)"
    },
    {
        question:"Used as a source of iron in patients with iron deficiency anemia with chronic kidney disease, including those who are undergoing dialysis and those who do not require dialysis. Due to less side effects than iron dextran, iron sucrose is more preferred in chronic kidney disease patients.",
        options:["Piritramide (Dipidolor)","Hydrochlorothiazide (Esidrix)","Iron sucrose (FerMed)"],
        answer:"Iron sucrose (FerMed)"
    },
    {
        question:"A recombinant humanized monoclonal antibody IL-6 receptor inhibitor used to treat inflammatory and autoimmune conditions. It is indicated to treat moderate to severe rheumatoid arthritis, giant cell arteritis, systemic sclerosis-associated interstitial lung disease, polyarticular juvenile idiopathic arthritis, systemic juvenile idiopathic arthritis, and cytokine release syndrome.",
        options:["Tocilizumab (Actemra)","Piritramide (Dipidolor)","Safinamide (Xadago)"],
        answer:"Tocilizumab (Actemra)"
    },
];

// These another set of questions for a quiz category.
const brandName = [
    {
        question: "Tocilizumab",
        options:["Actemra", "Forxiga", "Okrido"],
        answer:"Actemra"
    },
    {
        question: "Dapagliflozin",
        options: ["Forxiga", "Okrido", "Bunil"],
        answer: "Forxiga"
    },
    {
        question: "Prednisolone",
        options: ["Okrido", "Bunil", "Zanidip"],
        answer: "Okrido"
    },
    {
        question: "Melperone",
        options: ["Bunil", "Zanidip", "Lexapro"],
        answer: "Bunil"
    },
    {
        question: "Lercanidipin",
        options: ["Zanidip", "Lexapro", "Rulid"],
        answer: "Zanidip"
    },
    {
        question: "Escitalopram",
        options: ["Lexapro", "Rulid", "Eliquis"],
        answer:  "Lexapro"
    },
    {
        question: "Roxithromycin",
        options: ["Rulid", "Eliquis", "Cordarex"],
        answer:  "Rulid"
    },
    {
        question: "Apixaban",
        options: ["Eliquis", "Cordarex", "Lyrica"],
        answer: "Eliquis"
    },
    {
        question: "Amiodarone",
        options: ["Cordarex", "Lyrica", "Elavil"],
        answer: "Cordarex"
    },
    {
        question: "Pregabalin",
        options: ["Lyrica", "Elavil", "Xadago"],
        answer: "Lyrica"
    },
    {
        question: "Amitriptyline",
        options: ["Elavil", "Xadago", "Ebrantil"],
        answer: "Elavil"
    },
    {
        question: "Safinamide",
        options: ["Xadago", "Ebrantil", "Esidrix"],
        answer: "Xadago"
    },
    {
        question: "Urapidil",
        options: ["Ebrantil", "Esidrix", "Vomex"],
        answer: "Ebrantil"
    },
    {
        question: "Hydrochlorothiazide",
        options: ["Esidrix", "Vomex", "Zofran"],
        answer: "Esidrix"
    },
    {
        question: "Dimenhydrinate",
        options: ["Vomex", "Zofran", "Dipidolor"],
        answer: "Vomex"
    },
    {
        question: "Ondansetron",
        options: ["Zofran", "Dipidolor", "Duragesic"],
        answer: "Zofran"
    },
    {
        question: "Piritramide",
        options: ["Dipidolor", "Duragesic", "FerMed"],
        answer: "Dipidolor"
    },
    {
        question: "Fentanyl",
        options: ["Duragesic", "FerMed", "Humalog"],
        answer: "Duragesic"
    },
    {
        question: "Iron sucrose",
        options: ["FerMed", "Humalog", "Actemra"],
        answer: "FerMed"
    },
    {
        question: "Insulin lispro",
        options: ["Humalog", "Actemra", "Forxiga"],
        answer: "Humalog"
    }
];