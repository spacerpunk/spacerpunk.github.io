const sampleUrls = [
    '/sound/drones/Amin_Loop_01.mp3',
    '/sound/drones/Amin_Loop_02.mp3',
    '/sound/drones/Amin_Loop_03.mp3',
  ];
  
  const buffers = [];
  const loadPromises = sampleUrls.map(url => 
    Tone.Buffer.load(url).then(buffer => {
      buffers.push(buffer);
    })
  );
  
  Promise.all(loadPromises)
    .then(() => {
      console.log('All samples loaded');
      // Start your audio logic here
    })
    .catch(error => {
      console.error('Error loading samples:', error);
    });