const images = document.querySelectorAll('.gallery img');
const previewImg = document.getElementById('preview-img');
const previewText = document.getElementById('preview-text');

images.forEach(image => {
  image.addEventListener('mouseover', () => {
    previewImg.src = image.src;
    previewText.textContent = image.alt;
  });

  image.addEventListener('mouseout', () => {
    previewImg.src = '';
    previewText.textContent = 'Hover over an image below to display here';
  });
});