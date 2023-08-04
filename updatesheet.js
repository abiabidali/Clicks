function getData() {
  fetch('https://script.google.com/macros/s/AKfycbxPGKvrGVAAMspcSFLhR-qIv2_Xh1zZV--XFyL_uf6SvVolVNk0wQ3kvSrvF6bh6bIz/exec')
    .then(response => response.json())
    .then(data => {
      // Display the data as HTML headings
      document.getElementById('data-heading1').innerHTML = "<a>" + data[0] + "</a>";
      document.getElementById('data-heading2').innerHTML = "<a>" + data[1] + "</a>";
      document.getElementById('data-heading3').innerHTML = "<a>" + data[2] + "</a>";
    });
}

// Call the getData function when the page loads
window.onload = function() {
  getData();
};