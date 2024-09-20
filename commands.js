//<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/6pUpuBZFid3AGpgTOnrIYr?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
//<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2197087876/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=none/transparent=true/" seamless><a href="https://spacerpunk.bandcamp.com/album/controlled-machines-2">Controlled Machines by Deckard 88</a></iframe>
//<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=699423388/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=none/transparent=true/" seamless><a href="https://spacerpunk.bandcamp.com/album/terminus">Terminus by Spacerpunk</a></iframe>

var space = '&nbsp;';

//const commands = {
//    help: [
//        '<span style="color: #00ff00;">about' + space.repeat(4) + '</span>who is spacerpunk?',
//        '<span style="color: #00ff00;">music' + space.repeat(4) + '</span>vibrations to escape the matrix',
//        '<span style="color: #00ff00;">reel' + space.repeat(4) + '</span>latest work - reel 2024',
//        '<span style="color: #00ff00;">work' + space.repeat(3) + '</span>where ive been',   
//        '<span style="color: #00ff00;">labs' + space.repeat(3) + '</span>technology to escape the matrix',
//        '<span style="color: #00ff00;">contact' + space.repeat(3) + '</span>where am i',
//        '<span style="color: #00ff00;">banner' + space.repeat(3) + '</span>display ascii art banner',
//        '<span style="color: #00ff00;">clear' + space.repeat(3) + '</span>clear the terminal',
//        '<span style="color: #00ff00;">startmusic' + space + '</span>starts the music generation',
//        '<span style="color: #00ff00;">stopmusic' + space.repeat(2) + '</span>stops the music generation',
//        '<span style="color: #00ff00;">images' + space.repeat(2) + '</span>- visual portfolio -',
//        '<span style="color: #00ff00;">soundscape' + space.repeat(2) + '</span>- sound portfolio - ',
//        '<span style="color: #00ff00;">welcome' + space.repeat(2) + '</span>- sound portfolio - '
//    ],

const commands = {
    help: [
        '<span style="color: #00ff00;">about' + space.repeat(7) + '</span>.who am i',
        '<span style="color: #00ff00;">reel' + space.repeat(8) + '</span>.latest work - reel 2024',
        '<span style="color: #00ff00;">work' + space.repeat(8) + '</span>.what ive done',   
        '<span style="color: #00ff00;">music' + space.repeat(7) + '</span>.vibrations to escape the matrix',
        '<span style="color: #00ff00;">labs' + space.repeat(8) + '</span>.technology to escape the matrix',
        '<span style="color: #00ff00;">contact' + space.repeat(5) + '</span>.where am i',
        '<span style="color: #00ff00;">extras' + space.repeat(6) + '</span>.cool stuff',
        '<span style="color: #00ff00;">clear' + space.repeat(7) + '</span>.clear the terminal'

    ],
    about: `<pre style="style="font-family:JetBrains Mono;font-size:14px;">
Hello there!
My name is Nicolás Requena AKA <a href="https://spacerpunk.bandcamp.com/" target="_blank" style="color: #00ff00;" font-weight=bold;>spacerpunk</a>.

A Sound Artist and Creative Technologist based on BA, Argentina but making stuff for the world
(and other <a href="https://simulation-argument.com/simulation.pdf" target="_blank" style="color: #00ff00;">simulations</a>)
I create cool technology both for the soft and hardware worlds, bridging the gap between Art and Technology.

Currently I'm a Senior Creative Technologist @ <a href="https://www.monks.com/es" target="_blank" style="color: #00ff00;">Media Monks (.monks)</a>.
Implementing AI and Scaling solutions for clients around the world.

Type <span style="color: #00ff00;">'labs'</span> to chek my latest weird projects. 
Type <span style="color: #00ff00;">'music'</span> to check my more artistic side.
Thank you! And let's <a href="https://spacerpunk.bandcamp.com/" target="_blank" style="color: #00ff00;">talk</a> about working on a project together!
        </pre>`
        ,
    music: 'Composer, audio designer and explorer of soundscapes @'+ space +'<a href="https://spacerpunk.bandcamp.com/" target="_blank" style="font-family:JetBrains Mono;font-size:13px;color: #00ff00;">Bandcamp</a>'+ space +'and'+ space +' <a href="https://open.spotify.com/artist/6pUpuBZFid3AGpgTOnrIYr?si=XoUdX1YzRNyJwC3GbaYpKA" target="_blank" style="color: #00ff00;">Spotify.</a>',
    reel: 'Check out my 2024 reel with my latest work:&nbsp;<a href="https://youtu.be/fbZuxEJJvhA?feature=shared" target="_blank" style="color: #00ff00;">Reel</a>',
    work:`<pre>Freelance Music Composer & Sound Designer | 2013-2017 @ <a href="https://youtu.be/fbZuxEJJvhA?feature=shared" target="_blank" style="color: #00ff00;">bandcamp</a>
Audio Director | 2017-2020 @ <a href="https://tungstenofilms.com/" target="_blank" style="color: #00ff00;">Tungsteno Films</a>
VFX & 3D Generalist | 2018-2022 @ <a href="https://tungstenofilms.com/" target="_blank" style="color: #00ff00;">Tungsteno Films</a>  
Senior Video Editor | 2021-2023 @ <a href="https://www.monks.com/" target="_blank" style="color: #00ff00;">.Monks</a>
Senior Creative Technologist | 2023-Today @ <a href="https://www.monks.com/" target="_blank" style="color: #00ff00;">.Monks</a></pre>`,  
    labs: `<pre>
Explore my tech experiments on <a href="https://github.com/spacerpunk" target="_blank" style="color: #00ff00;">GitHub</a>, weird scripts, apps, and ideas ( most of them are WIP =) )
<a href="https://github.com/spacerpunk/in-the-nature-of-js" target="_blank" style="color: #00ff00;">In the nature of JS</a>
<a href="https://nrequena.itch.io/the-glitch" target="_blank" style="color: #00ff00;">The Glitch</a>
<a href="https://github.com/spacerpunk/trackerplatz-RE" target="_blank" style="color: #00ff00;">trackerplatz-RE</a>
    </pre>`,
    contact: `
<pre>Find me at these selected platforms: 
<a href="mailto:requena.nicolas@gmail.com" style="color: #00ff00;">requena.nicolas@gmail.com</a>
<a href="https://www.linkedin.com/in/nicolas-requena-90b16110b/" target="_blank" style="color: #00ff00;">Linkedin</a>
<a href="https://www.behance.net/nicolasrequena" target="_blank" style="color: #00ff00;">Behance</a></pre>`,
    banner: `<pre style="color: #00ff00; line-height: 1.2;">
 ____                           ____              _    
/ ___| _ __   __ _  ___ ___ _ _|  _ \\ _   _ _ __ | | __
\\___ \\| '_ \\ / _\` |/ __/ _ \\ '__| |_) | | | | '_ \\| |/ /
 ___) | |_) | (_| | (_|  __/ |  |  __/| |_| | | | |   < 
|____/| .__/ \\__,_|\\___\\___|_|  |_|    \\__,_|_| |_|_|\\_\\
      |_|                                               
</pre>`,
    extras: [
        '<span style="color: #00ff00;">start' + space.repeat(7) + '</span>.makes music',
        '<span style="color: #00ff00;">stop' + space.repeat(8) + '</span>.stops music',
        '<span style="color: #00ff00;">visual' + space.repeat(6) + '</span> .visual portfolio grid',   
        '<span style="color: #00ff00;">sound' + space.repeat(7) + '</span>.sound portfolio grid',
        '<span style="color: #00ff00;">welcome' + space.repeat(5) + '</span>.hello there',
        '<span style="color: #00ff00;">banner' + space.repeat(6) + '</span>.spcrpnk',
        '<span style="color: #00ff00;">clear' + space.repeat(7) + '</span>.clear the terminal'
    ],
    start: 'Generating procedural music with MagentaJS, ToneJS and TonalJS.',
    stop: 'Music Stopped.',
    visual: 'Loading... VISUAL Portfolio',
    sound: 'Loading... SOUND Portfolio',
    welcome: 'pupi'
};

// Make commands globally accessible
window.terminalCommands = commands;
