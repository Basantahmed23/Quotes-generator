const quotes = [
    { 
        quote: "“But better to get hurt by the truth than comforted with a lie.”",
        author: "— George Eliot"
    },
    { 
        quote: "“It is never too late to be what you might have been.”",
        author: "— George Eliot"
    },
    { 
        quote: "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
        author: "— Mahatma Gandhi"
    },
    { 
        quote: "“No amount of regretting can change the past, and no amount of worrying can change the future.”",
        author: "— Roy T. Bennett"
    },
    { 
        quote: "“You only live once, but if you do it right, once is enough.”",
        author: "— Mae West"
    },
    { 
        quote: "“Life is too short to waste your time on people who don’t respect, appreciate, and value you.”",
        author: "— Roy T. Bennett"
    },
    { 
        quote: "“Believe you can and you're halfway there.”",
        author: "— Theodore Roosevelt"
    },
    { 
        quote: "“Success is not final, failure is not fatal: It is the courage to continue that counts.”",
        author: "— Winston Churchill"
    },
    { 
        quote: "“Happiness is not something ready made. It comes from your own actions.”",
        author: "— Dalai Lama"
    },
    { 
        quote: "“Do what you can, with what you have, where you are.”",
        author: "— Theodore Roosevelt"
    },
    { 
        quote: "“In the middle of every difficulty lies opportunity.”",
        author: "— Albert Einstein"
    },
    { 
        quote: "“It does not matter how slowly you go as long as you do not stop.”",
        author: "— Confucius"
    },
    { 
        quote: "“You must be the change you wish to see in the world.”",
        author: "— Mahatma Gandhi"
    },
    { 
        quote: "“Don’t let the fear of losing be greater than the excitement of winning.”",
        author: "— Robert Kiyosaki"
    },
    { 
        quote: "“We must accept finite disappointment, but never lose infinite hope.”",
        author: "— Martin Luther King Jr."
    },
    { 
        quote: "“Dream big and dare to fail.”",
        author: "— Norman Vaughan"
    },
    { 
        quote: "“Act as if what you do makes a difference. It does.”",
        author: "— William James"
    },
    { 
        quote: "“To handle yourself, use your head; to handle others, use your heart.”",
        author: "— Eleanor Roosevelt"
    },
    { 
        quote: "“What you get by achieving your goals is not as important as what you become by achieving your goals.”",
        author: "— Zig Ziglar"
    },
    { 
        quote: "“Nothing is impossible. The word itself says 'I'm possible!'”",
        author: "— Audrey Hepburn"
    },
    { 
        quote: "“Opportunities don't happen. You create them.”",
        author: "— Chris Grosser"
    },
    { 
        quote: "“Work hard in silence, let your success be your noise.”",
        author: "— Frank Ocean"
    },
    { 
        quote: "“Do not wait to strike till the iron is hot, but make it hot by striking.”",
        author: "— William Butler Yeats"
    },
    { 
        quote: "“Whether you think you can or you think you can't, you're right.”",
        author: "— Henry Ford"
    }
];
var usedIndexes = [];

function newQuote() {
    if (usedIndexes.length === quotes.length) {
        usedIndexes = [];
        alert("All quotes have been shown , Restarting. ");
    }

    var randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * quotes.length);
    } while (usedIndexes.includes(randomNumber));

    document.getElementById("quote").innerHTML = quotes[randomNumber].quote;
    document.getElementById("author").innerHTML = quotes[randomNumber].author;

    usedIndexes.push(randomNumber);
}