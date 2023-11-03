const fetchData = () => {
    fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
        const liveDataContainer = document.getElementById('live-data');
        liveDataContainer.innerHTML = '';
        data.forEach(item => {
            const listItem = document.createElement('div');
            listItem.textContent = `${item.name}: ${item.value}`;
            liveDataContainer.appendChild(listItem);
        });
    }) 
    .catch(error => {
        console.error('Error fetching data:', error);
      });
  };
  setInterval(fetchData, 5000);
  fetchData();