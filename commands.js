var space = '&nbsp;';
const commands = {
    help: [
        '<span style="color: #00ff00;">about' + space.repeat(4) + '</span>who is spacerpunk?',
        '<span style="color: #00ff00;">music' + space.repeat(4) + '</span>vibrations to escape the matrix',
        '<span style="color: #00ff00;">reel' + space.repeat(4) + '</span>latest work - reel 2024',
        '<span style="color: #00ff00;">work' + space.repeat(3) + '</span>where ive been',   
        '<span style="color: #00ff00;">labs' + space.repeat(3) + '</span>technology to escape the matrix',
        '<span style="color: #00ff00;">contact' + space.repeat(3) + '</span>where am i',
        '<span style="color: #00ff00;">banner' + space.repeat(3) + '</span>display ascii art banner',
        '<span style="color: #00ff00;">clear' + space.repeat(3) + '</span>clear the terminal',
        '<span style="color: #00ff00;">startmusic' + space + '</span>starts the music generation',
        '<span style="color: #00ff00;">stopmusic' + space.repeat(2) + '</span>stops the music generation',
        '<span style="color: #00ff00;">images' + space.repeat(2) + '</span>- visual portfolio -',
        '<span style="color: #00ff00;">soundscape' + space.repeat(2) + '</span>- sound portfolio - ',
        '<span style="color: #00ff00;">welcome' + space.repeat(2) + '</span>- sound portfolio - '
    ],
    about: 'Hello there! My name is Nicolás Requena AKA' + space +  '<a href="https://spacerpunk.bandcamp.com/" target="_blank" style="color: #00ff00;">spacerpunk</a>&nbsp;&lt;sound artist and creative technologist&gt;' ,
    music: 'Composer, audio maker, explorer of soundscapes @ '+ space +'<a href="https://spacerpunk.bandcamp.com/" target="_blank" style="color: #00ff00;">Bandcamp</a>',
    reel: 'Check out my 2024 reel with my latest work:&nbsp;<a href="https://youtu.be/fbZuxEJJvhA?feature=shared" target="_blank" style="color: #00ff00;">Reel</a>',
    work: 'I\'ve collaborated with various projects. Check out my&nbsp;<a href="https://www.behance.net/nicolasrequena" target="_blank" style="color: #00ff00;">Portfolio</a>',
    labs: 'Explore my tech experiments on'+space+'<a href="https://github.com/spacerpunk" target="_blank" style="color: #00ff00;">GitHub</a>',
    contact: 'Find me at these selected platforms:<br>' + 
             'Email: <a href="mailto:requena.nicolas@gmail.com" style="color: #00ff00;">requena.nicolas@gmail.com</a><br>' +
             'LinkedIn: <a href="https://www.linkedin.com/in/nicolas-requena-90b16110b/" target="_blank" style="color: #00ff00;">Nicolas Requena</a>',
    banner: `<pre style="color: #00ff00; line-height: 1.2;">
 ____                           ____              _    
/ ___| _ __   __ _  ___ ___ _ _|  _ \\ _   _ _ __ | | __
\\___ \\| '_ \\ / _\` |/ __/ _ \\ '__| |_) | | | | '_ \\| |/ /
 ___) | |_) | (_| | (_|  __/ |  |  __/| |_| | | | |   < 
|____/| .__/ \\__,_|\\___\\___|_|  |_|    \\__,_|_| |_|_|\\_\\
      |_|                                               
</pre>`,
    startmusic: 'Starts the music generation',
    stopmusic: 'Stops the music generation',
    images: 'Loading... VISUAL Portfolio',
    soundscape: 'Redirects to the soundscape page',
    welcome: `<pre style="font-family:JetBrains Mono;font-size:14px;">
<span style="color:#ffffff">Welcome to the <span style="color:#00ff00">SPCRPNK</span> interface</span>

<span style="color:#ffffff">The weather is:</span>
<span style="color:#00ff00">30° Celcius, Clear, Night</span>
<span style="color:#00ff00">20:45, Colegiales, Buenos Aires, Argentina</span>

<span style="color:#ffffff">-----------------------------------</span>

<span style="color:#ffffff">Type</span> <span style="color:#00ff00">'help'</span> and press <span style="color:#00ff00">'ENTER'</span> to see available commands.

<span style="font-family:JetBrains Mono;font-size:11px;style="color:#ffffff">Version S1.00</span>
<span style="font-family:JetBrains Mono;font-size:11px;style="color:#ffffff">64280 Tera Bytes free</span>
<span style="font-family:JetBrains Mono;font-size:11px;style="color:#ffffff">Copyright SPCRPNK Copr. 2024,2025,2026</span>
</pre>`
};

// Make commands globally accessible
window.terminalCommands = commands;
