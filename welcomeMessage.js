// welcomeMessage.js
// Add timestamp
const timestamp = new Date().toLocaleTimeString();


const welcomeMessage = `<pre style="font-family:JetBrains Mono;font-size:13px;">
<span style="color:#ffffff">Welcome to the <span style="font-family:JetBrains Mono;font-size:16px;color:#00ff00">SPCRPNK</span> interface</span>

<span style="color:#ffffff">The weather is:</span>
<span style="color:#00ff00">30° Celcius, Clear, Night</span>
<span style="color:#00ff00">${timestamp}, Colegiales, Buenos Aires, Argentina</span>
<span style="color:#ffffff">-------------------------------------------</span>

<span style="color:#ffffff">Type</span> <span style="color:#00ff00">'help'</span> and press <span style="color:#00ff00">'ENTER'</span> to see available commands.
</pre>`;

// Export the welcome message so it can be imported in other files
const welcomeLog = `<pre style="font-family:JetBrains Mono;font-size:13px;">
<span style="font-family:JetBrains Mono;font-size:11px;style="color:#ffffff">Version S1.00</span>
<span style="font-family:JetBrains Mono;font-size:11px;style="color:#ffffff">64280 Tera Bytes free</span>
<span style="font-family:JetBrains Mono;font-size:11px;style="color:#ffffff">Copyright SPCRPNK Copr. 2024,2025,2026</span>
</pre>`;

export { welcomeMessage };
export { welcomeLog };
