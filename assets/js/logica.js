  const Image = document.getElementById('IMG');
  const Name = document.getElementById('NAME');
  const Level = document.getElementById('LEVEL');
  const digimonSelect = document.getElementById("digimonSelect");

  fetch('https://digimon-api.vercel.app/api/digimon')
    .then(response => response.json())
    .then(data => {
      data.forEach(digimon => {
        const option = document.createElement("option");
        option.value = digimon.name;
        option.text = digimon.name;
        digimonSelect.appendChild(option);
      });
    })
    .catch(error => console.error(error));

  function getDigimonData() {
    const selectedValue = digimonSelect.value;
    fetch(`https://digimon-api.vercel.app/api/digimon/name/${selectedValue}`)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          const selectedDigimon = data[0];
          Image.src = selectedDigimon.img;
          Name.innerText = selectedDigimon.name;
          Level.innerText = selectedDigimon.level;
        }
      })
      .catch(error => console.error(error));
  }
  