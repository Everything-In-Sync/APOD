const APOD_API_URL = 'https://api.nasa.gov/planetary/apod';
const API_KEY = 'EHFZhiwFaQRqsRZeJ8eUImFyIk5NxJfqnFb4Jo5i'; 
const nasaImage = document.querySelector('.nasa-image');
const nasaDescription = document.querySelector('.nasa-description')
const form = document.querySelector('.date-form');
const datePicker = document.getElementById('datePicker');
const archiveDate = document.querySelector('.archive-date');
const archiveImage = document.querySelector('.archive-image');
const archiveDescription = document.querySelector('.archive-description');
const podName = document.querySelector('.pod-name');



fetch(`${APOD_API_URL}?api_key=${API_KEY}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);

    const imageUrl = data.url;
    const explanation = data.explanation;
    const imageTitle = data.title;

    nasaImage.src = imageUrl;
    nasaImage.alt = imageTitle;
    nasaDescription.innerHTML = explanation;
    podName.innerHTML = imageTitle;

  })
  .catch(error => {
    console.error(`Error fetching APOD data: ${error}`);
  });



//   date: "2023-10-23"
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const selectedDate = datePicker.value;
  console.log(selectedDate);

  // Use the `date` parameter in API call with the selected date
  fetch(`${APOD_API_URL}?date=${selectedDate}&api_key=${API_KEY}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Failed to fetch data');
      }
    })
    .then(data => {
      // Extract the image URL and explanation from the returned data
      const imageUrl = data.url;
      const explanation = data.explanation;
      const imageTitle = data.title;

      console.log(imageUrl, explanation);
      archiveImage.src = imageUrl;
      archiveImage.alt = imageTitle;
      archiveDescription.innerHTML = explanation;
      archiveDate.innerHTML = imageTitle;

    })
    .catch(error => {
      console.error('Error:', error);
    });
});