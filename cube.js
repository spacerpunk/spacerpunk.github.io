let angleX = 0;
let angleY = 0;
let rotationSpeed = 0;
let targetSpeed = 0;

function setup() {
  createCanvas(768, 1344, WEBGL);

 // check for existence of method
 if (navigator.requestMIDIAccess) console.log('This browser supports WebMIDI!')
    else console.log('WebMIDI is not supported in this browser.')
  
    // ask for MIDI access
    navigator.requestMIDIAccess()
      .then(onMIDISuccess, onMIDIFailure);
}

function onMIDISuccess(midiAccess) {
    // console.log(midiAccess)
    const midi = midiAccess
    const inputs = midi.inputs.values()
    const input = inputs.next()
    console.log(input)
    input.value.onmidimessage = onMIDIMessage
  }

function onMIDIMessage(message) {
  const data = message.data // [command/channel, note, velocity]

  const cmd = data[0] >> 4
  channel = data[0] & 0xf
  type = data[0] & 0xf0
  note = data[1]
  velocity = data[2]

  // 248 is midi clock - how to turn it off?? (in op-z app maybe?)
  if (data[0] != 248) {
    //console.log(note)
  }

  /*
    with pressure/tilt off:
    note off: 128, cmd: 8
    note on: 144, cmd: 9
    
    with pressure/tilt on
    pressure: 176, cmd 11
    bend: 224, cmd: 14
  */

  switch (type) {
    case 144: // noteOn message type (always 144 no matter what channel)
      noteOn(channel, note, velocity)
      break
    case 128: //noteOff message type (always 128)
      noteOff(channel, note, velocity)
      break
  }
}

function noteOff(channel, note, velocity) {
    targetSpeed = 0;
}

function onMIDIFailure(e) {
  console.log('Could not access your MIDI devices: ', e)
}
  
function draw() {
  // Semi-transparent background for motion blur effect
  background(0);

  // Apply easing to the rotation speed
  rotationSpeed += (targetSpeed - rotationSpeed) * 0.03;
  
  rotateX(angleX);
  rotateY(angleY);
  fill(0);
  stroke(255);
  box(200);
  
  angleX += rotationSpeed / 10;
  angleY += rotationSpeed;
}

function keyPressed() {
  if (key === 'a') {
    targetSpeed = 0.01;
  } else if (key === 's') {
    targetSpeed = 0.05;
  } else if (key === 'd') {
    targetSpeed = 0.1;
  }
}

function keyReleased() {
  if (key === 'a' || key === 's' || key === 'd') {
    targetSpeed = 0;
  }
}

function noteOn(channel, note, velocity) {
    //const h = map(velocity, 0, 127, 0, 1)
    console.log(note);
    if (note === 24) {
        targetSpeed = 0.01;
      } else if (note === 29) {
        targetSpeed = 0.05;
      } else if (note === 31) {
        targetSpeed = 0.1;
      } else if (note === 33) {
        targetSpeed = 0.15;
      }
  }