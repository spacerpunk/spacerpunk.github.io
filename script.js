import { welcomeMessage } from './welcomeMessage.js';
import WaveformVisualizer from './waveformVisualizer.js';
const terminalContent = document.getElementById('terminal-content');
const title = document.querySelector('.title');
const asciiChars = '!@#$%^&*()_+-={}[]|;:,.<>?';
let originalText;
let intervalId;
title.addEventListener('mouseenter', startGlitchEffect);
title.addEventListener('mouseleave', stopGlitchEffect);

let visualizer;

function startGlitchEffect() {
    originalText = title.textContent;
    intervalId = setInterval(glitchText, 75);
}

function stopGlitchEffect() {
    clearInterval(intervalId);
    title.textContent = originalText;
}

function glitchText() {
    let glitchedText = '';
    for (let i = 0; i < originalText.length; i++) {
        if (Math.random() < 0.3) {
            glitchedText += asciiChars[Math.floor(Math.random() * asciiChars.length)];
        } else {
            glitchedText += originalText[i];
        }
    }
    title.textContent = glitchedText;
}

// Also call it when the page loads
window.addEventListener('load', adjustTerminalHeight);
window.addEventListener('load', displayWelcomeMessage);

function displayWelcomeMessage() {
    addOutput(welcomeMessage);
    createInputLine();
}

// let audioIsInit = false;

// document.getElementById('initAudio').addEventListener('click', async () => {
//     try {
//         MusicGenerator.init();
//         //await Tone.start();
//         console.log('Audio context started');
//         addOutput('Audio system initialized. You can now use music commands.');
//     } catch (error) {
//         console.error('Error initializing audio:', error);
//         addOutput('Error: Could not initialize audio. Please try again.');
//     }
// });

let audioIsInit = false;

function updateInitAudioButton() {
    const initAudioButton = document.getElementById('initAudio');
    initAudioButton.textContent = audioIsInit ? '■' : '▶';
    initAudioButton.title = audioIsInit ? 'Audio Initialized' : 'Initialize Audio';
}

document.getElementById('initAudio').addEventListener('click', async () => {
    if (!audioIsInit) {
        try {
            await MusicGenerator.init();
            console.log('Audio context started');
            addOutput('Audio system initialized. You can now use music commands.');
            audioIsInit = true;
            
            // Initialize and start the visualizer
            visualizer = new WaveformVisualizer('waveform');
            visualizer.setup();
            visualizer.start();
        } catch (error) {
            console.error('Error initializing audio:', error);
            addOutput('Error: Could not initialize audio. Please try again.');
        }
    } else {
        addOutput('Audio system is already initialized.');
    }
    updateInitAudioButton();
});

// Call this initially to set the correct initial state
updateInitAudioButton();

function createInputLine(previousCommand = '') {
    const inputLine = document.createElement('div');
    inputLine.className = 'input-line';
    inputLine.innerHTML = `
        <span class="prompt">$(spcrpnk)&gt;&nbsp;</span>
        <span class="input-wrapper">
            <span class="input-text">${previousCommand}</span>
            <span class="cursor">&nbsp;</span>
        </span>
    `;
    terminalContent.appendChild(inputLine);
    
    const inputWrapper = inputLine.querySelector('.input-wrapper');
    const inputText = inputLine.querySelector('.input-text');
    const cursor = inputLine.querySelector('.cursor');
    
    let currentInput = previousCommand;
    
    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            document.removeEventListener('keydown', handleKeyDown);
            finalizeInput();
            processCommand(currentInput);
        } else if (e.key === 'Backspace') {
            e.preventDefault();
            currentInput = currentInput.slice(0, -1);
        } else if (e.key.length === 1) {
            currentInput += e.key;
        }
        inputText.textContent = currentInput;
        scrollToBottom();
    }

    function finalizeInput() {
        inputWrapper.removeChild(cursor);
        inputLine.removeChild(inputWrapper);
        inputLine.appendChild(document.createTextNode(currentInput));
    }

    document.addEventListener('keydown', handleKeyDown);
    inputWrapper.focus();
    scrollToBottom();
}

async function processCommand(cmd) {
    //addOutput(`<span class="prompt">C:\\&gt;</span> ${cmd}`);
    
    const lowerCmd = cmd.toLowerCase();
    
    if (terminalCommands.hasOwnProperty(lowerCmd)) {
        if (lowerCmd === 'images') {
            addOutput(terminalCommands[lowerCmd]);
            setTimeout(() => {
                window.location.href = 'images.html'; // Replace with your desired HTML file
            }, 600); // Delay for 1.5 seconds to show the message
        } else if (lowerCmd === 'soundscape') {
            addOutput(terminalCommands[lowerCmd]);
            setTimeout(() => {
                window.location.href = 'soundscape.html'; // Replace with your desired HTML file
            }, 600); // Delay for 1.5 seconds to show the message
        }  else if (lowerCmd === 'startmusic') {
            console.log('Attempting to start music');
            if (window.MusicGenerator && typeof window.MusicGenerator.start === 'function') {
                try {
                    //await window.MusicGenerator.start();
                    await window.pythonGeneration.generate();
                    addOutput('Music started');
                } catch (error) {
                    console.error('Error starting music:', error);
                    addOutput('Error: Could not start music. Please try again or initialize audio first.');
                }
            } else {
                console.error('MusicGenerator.start is not a function');
                addOutput('Error: Music system not initialized properly');
            }
        } else if (lowerCmd === 'stopmusic') {
            console.log('Attempting to stop music');
            if (window.MusicGenerator && typeof window.MusicGenerator.stop === 'function') {
                window.MusicGenerator.stop();
                addOutput('Music stopped');
            } else {
                console.error('MusicGenerator.stop is not a function');
                addOutput('Error: Music system not initialized properly');
            }
        } else if (Array.isArray(terminalCommands[lowerCmd])) {
            terminalCommands[lowerCmd].forEach(line => addOutput(line));
        } else {
            addOutput(terminalCommands[lowerCmd]);
        }
    } else if (lowerCmd === 'clear') {
        terminalContent.innerHTML = '';
    } else {
        addOutput(`<span class="error">Command not recognized: ${cmd}</span>`);
    }
    
    createInputLine();
}


function adjustTerminalHeight() {
    const terminal = document.querySelector('.terminal');
    const terminalContent = document.getElementById('terminal-content');
    const banner = document.querySelector('.banner');
    
    const availableHeight = window.innerHeight - banner.offsetHeight - 40; // 40px for padding
    terminal.style.height = `${availableHeight}px`;
    
    if (terminalContent.offsetHeight > availableHeight) {
        terminal.style.overflowY = 'scroll';
    } else {
        terminal.style.overflowY = 'hidden';
    }
}

// Call this function when the window resizes
window.addEventListener('resize', adjustTerminalHeight);


function addOutput(html, className = '') {
    const div = document.createElement('div');
    div.className = `output-line ${className}`;
    div.innerHTML = html;
    terminalContent.appendChild(div);
    scrollToBottom();
}

// function typeTextSequence(textArray, index = 0) {
//     if (index < textArray.length) {
//         typeText(textArray[index], 30, () => {
//             typeTextSequence(textArray, index + 1);
//         });
//     }
// }

function typeText(html, speed = 15, callback = null, className = '') {
    const div = document.createElement('div');
    div.className = `output-line ${className}`;
    terminalContent.appendChild(div);

    const tempElement = document.createElement('div');
    tempElement.innerHTML = html;

    let textContent = tempElement.textContent;
    let currentIndex = 0;

    function type() {
        if (currentIndex < textContent.length) {
            let currentChar = textContent[currentIndex];
            let currentHTML = html.substring(0, html.indexOf(currentChar) + currentIndex + 1);
            div.innerHTML = currentHTML;
            currentIndex++;
            setTimeout(type, speed);
            scrollToBottom();
        } else {
            div.innerHTML = html; // Set full HTML at the end
            if (callback) {
                callback();
            }
        }
    }

    type();
}



function scrollToBottom() {
    terminalContent.scrollTop = terminalContent.scrollHeight;
}

// Initial input line
//createInputLine();

// Focus input when clicking anywhere in the terminal
document.querySelector('.terminal').addEventListener('click', () => {
    const inputs = document.querySelectorAll('.user-input');
    //inputs[inputs.length - 1].focus();
});

// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const banner = document.querySelector('.banner');
const terminal = document.querySelector('.terminal');
const logoImg = document.querySelector('.logo img');
const initAudio = document.getElementById('initAudio');
let isDarkTheme = true;

themeToggle.addEventListener('click', () => {
    isDarkTheme = !isDarkTheme;
    updateTheme();
});

function updateTheme() {
    const rootStyle = document.documentElement.style;
    
    if (isDarkTheme) {
        rootStyle.setProperty('--main-bg-color', '#000');
        rootStyle.setProperty('--main-text-color', '#fff');
        rootStyle.setProperty('--prompt-color', '#fff');
    } else {
        rootStyle.setProperty('--main-bg-color', '#fff');
        rootStyle.setProperty('--main-text-color', '#000');
        rootStyle.setProperty('--prompt-color', '#000');
    }

    // Update specific elements
    if (terminal) terminal.style.borderColor = isDarkTheme ? '#fff' : '#000';
    if (themeToggle) {
        themeToggle.style.backgroundColor = isDarkTheme ? '#fff' : '#000';
        themeToggle.style.color = isDarkTheme ? '#000' : '#fff';
    }
    if (initAudio) {
        initAudio.style.backgroundColor = isDarkTheme ? '#fff' : '#000';
        initAudio.style.color = isDarkTheme ? '#000' : '#fff';
    }
    if (logoImg) logoImg.style.filter = isDarkTheme ? 'invert(0)' : 'invert(1)';

    // Update all input and output text colors
    document.querySelectorAll('.output-line, .input-line, .prompt').forEach(el => {
        el.style.color = isDarkTheme ? '#fff' : '#000';
    });
}

// Call updateTheme initially to set the correct theme
updateTheme();

