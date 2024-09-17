import { welcomeMessage } from './welcomeMessage.js';
import { welcomeLog } from './welcomeMessage.js';
import WaveformVisualizer from './waveformVisualizer.js';
import { weatherData, fetchWeatherData } from './weather/weather.js';
const terminalContent = document.getElementById('terminal-content');
const logContent = document.getElementById('log-content');
const title = document.querySelector('.title');
const asciiChars = '!@#$%^&*()_+-={}[]|;:,.<>?';
let originalText;
let intervalId;
title.addEventListener('mouseenter', startGlitchEffect);
title.addEventListener('mouseleave', stopGlitchEffect);

let visualizer;

fetchWeatherData()
            .then(data => {
                console.log(data.location.country)
            })
            .catch(error => {
                document.getElementById('weatherData').textContent = 'Error fetching data';
            });

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
    logMessage(welcomeLog);
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
            await MusicPieceOne.init();
            console.log('Audio context started');
            logMessage('Audio system initialized. You can now use music commands.');
            audioIsInit = true;
            
            // Initialize and start the visualizer
            //visualizer = new WaveformVisualizer('waveform');
            //visualizer.setup();
            //visualizer.start();
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
    const terminalContent = document.getElementById('terminal-content');
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
    scrollToBottom(terminalContent);
    
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
            if (window.MusicPieceOne && typeof window.MusicPieceOne.start === 'function') {
                try {
                    await window.MusicPieceOne.start();
                    //await window.pythonGeneration.generate();
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
        } else if (lowerCmd === 'music') {
            addOutput(terminalCommands[lowerCmd]);   
            logMessage('<iframe style="border-radius:1px" src="https://open.spotify.com/embed/artist/6pUpuBZFid3AGpgTOnrIYr?utm_source=generator&theme=0" width="700px" height="100px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>')
        } else if (lowerCmd === 'reel') {
            addOutput(terminalCommands[lowerCmd]);
            //logMessage('<iframe width="350" height="100" src="https://www.youtube.com/embed/fbZuxEJJvhA?si=NzCSwmdPEwgUOxKA" title="YouTube video player" allow="accelerometer; autoplay;encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');   
        } else if (Array.isArray(terminalCommands[lowerCmd])) {
            terminalCommands[lowerCmd].forEach(line => addOutput(line));
        } else {
            addOutput(terminalCommands[lowerCmd]);
        }
    } else if (lowerCmd === 'clear') {
        terminalContent.innerHTML = '';
        logContent.innerHTML = '';
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
    const terminalContent = document.getElementById('terminal-content');
    const div = document.createElement('div');
    div.className = `output-line ${className}`;
    div.innerHTML = html;
    terminalContent.appendChild(div);
    scrollToBottom(terminalContent);
}

//LOG MESSAGES TO SMALL CONSOLE
function logMessage(message, className = '') {
    
    const logEntry = document.createElement('div');
    logEntry.className = `log-entry ${className}`;
    logContent.innerHTML = '';
    
    // Add timestamp
    const timestamp = new Date().toLocaleTimeString();
    //logEntry.innerHTML = `<span class="log-timestamp">[${timestamp}]</span> ${message}`;
    logEntry.innerHTML = `${message}`;
    
    logContent.appendChild(logEntry);
    
    // Auto-scroll to the bottom
    //logContent.scrollTop = logContent.scrollHeight;
}

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

