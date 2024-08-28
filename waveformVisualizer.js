// waveformVisualizer.js

class WaveformVisualizer {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.context = this.canvas.getContext('2d');
        this.waveform = null;
        this.isRunning = false;
    }

    setup() {
        // Ensure the canvas size matches its display size
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;

        this.waveform = new Tone.Waveform(1024);
        Tone.Master.connect(this.waveform);
    }

    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.draw();
        }
    }

    stop() {
        this.isRunning = false;
    }

    draw() {
        if (!this.isRunning) return;

        requestAnimationFrame(() => this.draw());
        
        // Clear the canvas
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw the waveform
        this.context.beginPath();
        this.context.lineWidth = 2;
        this.context.strokeStyle = '#00ff00'; // Green color
        
        const buffer = this.waveform.getValue();
        const sliceWidth = this.canvas.width / buffer.length;
        let x = 0;
        
        for (let i = 0; i < buffer.length; i++) {
            const v = buffer[i] / 2 + 0.5;
            const y = v * this.canvas.height;

            if (i === 0) {
                this.context.moveTo(x, y);
            } else {
                this.context.lineTo(x, y);
            }

            x += sliceWidth;
        }
        
        this.context.lineTo(this.canvas.width, this.canvas.height / 2);
        this.context.stroke();
    }
}

// Export the class so it can be imported in other files
export default WaveformVisualizer;