function openTab(tabId) {
  const buttons = document.querySelectorAll('.tab-button');
  const contents = document.querySelectorAll('.tab-content');

  buttons.forEach(btn => btn.classList.remove('active'));
  contents.forEach(content => content.classList.remove('active'));

  document.querySelector(`[onclick="openTab('${tabId}')"]`).classList.add('active');
  document.getElementById(tabId).classList.add('active');
}

items.forEach((item, index) => {
    const spacing = 180;  // distância horizontal entre as imagens
    item.style.left = (index * spacing) + "px";
});
