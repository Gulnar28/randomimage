
    const image = document.querySelector('.image');

    function RandomImages(count) {
      const apiKey = 'THDGMa0usvxWV7JrQssz9THaB__yTeYf8CUEfcWe0eM';
      const response = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

      fetch(response)
        .then(response => response.json())
        .then(data => {
       
          image.innerHTML = '';

          data.forEach(img => {
            const imgElement = document.createElement('img');
            imgElement.src = img.urls.small;
            imgElement.alt = img.alt_description;

            image.appendChild(imgElement);
          });
        })
       
    }