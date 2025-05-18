
const urlParams = new URLSearchParams(window.location.search);
const imageUrls = urlParams.getAll('image');

const imageContainer = document.getElementById('imageContainer');

if (imageUrls.length > 0) {
  // 修改为纵向排列
  imageContainer.style.display = "flex";
  imageContainer.style.flexDirection = "column"; // 关键修改
  imageContainer.style.gap = "20px";
  imageContainer.style.alignItems = "center"; // 可选：居中对齐

  imageUrls.forEach(url => {
    const imgWrapper = document.createElement('div');
    imgWrapper.style.width = "100%"; // 改为100%宽度
    
    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Medical Scan';
    img.style.maxWidth = "100%";
    img.style.height = "auto";
    
    imgWrapper.appendChild(img);
    imageContainer.appendChild(imgWrapper);
  });
} else {
  imageContainer.innerHTML = "<p>No images found</p>";
}
