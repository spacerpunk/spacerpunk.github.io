const commands = {
    help: [
        'about      who is spacerpunk?',
        'music      vibrations to escape the matrix',
        'reel       latest work - reel 2024',
        'work       where ive been',   
        'labs       technology to escape the matrix',
        'contact    where am i',
        'banner     display ascii art banner',
        'clear      clear the terminal'
    ],
    about: "Hello there! My name is Nicolás Requena AKA *Spacerpunk* <sound artist and creative technologist>",
    music: "Composer, audio maker, soundscape explorer @https://spacerpunk.bandcamp.com/ and @https://open.spotify.com/artist/6pUpuBZFid3AGpgTOnrIYr?si=NeZC_4oXRpCWgEn51qUDCg",
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
`
};

// Make commands globally accessible
window.terminalCommands = commands;