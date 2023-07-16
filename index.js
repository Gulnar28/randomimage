
    const images = document.querySelector('.image');

     function RandomImages(count) {

      const apiKey = 'TxFT2eeMM0sSmCswpkQ1nJ32UHR5XbH-0x6s1bMHk_Q';
      const response = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

      fetch(response)
        .then(response => response.json())
        .then(data => {
        
          data.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image.urls.small;
            imgElement.alt = image.alt_description;
            images.appendChild(imgElement);
          });
        })
        
    }