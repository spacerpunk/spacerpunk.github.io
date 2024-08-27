var space = '&nbsp'
const commands = {
    help: [
        '<span style="color: #00ff00;">about&nbsp&nbsp&nbsp&nbsp</span>who is spacerpunk?',
        '<span style="color: #00ff00;">music&nbsp&nbsp&nbsp&nbsp</span>vibrations to escape the matrix',
        '<span style="color: #00ff00;">reel&nbsp&nbsp&nbsp&nbsp</span>latest work&nbsp-&nbspreel 2024',
        '<span style="color: #00ff00;">work&nbsp&nbsp&nbsp</span>where ive been',   
        '<span style="color: #00ff00;">labs&nbsp&nbsp&nbsp</span>technology to escape the matrix',
        '<span style="color: #00ff00;">contact&nbsp&nbsp&nbsp</span>where am i',
        '<span style="color: #00ff00;">banner&nbsp&nbsp&nbsp</span>display ascii art banner',
        '<span style="color: #00ff00;">clear&nbsp&nbsp&nbsp</span>clear the terminal'
    ],
    about: 'Hello there! My name is Nicolás Requena AKA&nbsp<span style="color: #00ff00;"> Spacerpunk</span> <sound artist and creative technologist>',
    music: 'Composer, audio maker, explorer of soundscapes @&nbsp<span style="color: #00ff00; target="_blank" href="https://spacerpunk.bandcamp.com/">Bandcamp</span>',
    reel: "2024 reel with my latest work - <https://youtu.be/fbZuxEJJvhA?feature=shared>",
    work: "I've collaborated with [https://www.behance.net/nicolasrequena]",
    labs: "Explore my tech experiments at [https://github.com/spacerpunk]",
    contact: "find me at these selected platforms: <requena.nicolas@gmail.com> <https://www.linkedin.com/in/nicolas-requena-90b16110b/>",
    banner: `
 ____                           ____              _    
/ ___| _ __   __ _  ___ ___ _ _|  _ \\ _   _ _ __ | | __
\\___ \\| '_ \\ / _\` |/ __/ _ \\ '__| |_) | | | | '_ \\| |/ /
 ___) | |_) | (_| | (_|  __/ |  |  __/| |_| | | | |   < 
|____/| .__/ \\__,_|\\___\\___|_|  |_|    \\__,_|_| |_|_|\\_\\
      |_|                                               
`,
    startmusic: 'Starts the music generation',
    stopmusic: 'Stops the music generation',
};

// Make commands globally accessible
window.terminalCommands = commands;