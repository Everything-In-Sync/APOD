const currentDate = document.querySelector(".current-date");
const today = new Date();
const formattedDate = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();

currentDate.innerHTML = formattedDate;
