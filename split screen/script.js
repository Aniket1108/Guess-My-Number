document.addEventListener('DOMContentLoaded', () => {
  let wrapper = document.getElementById('wrapper');
  let topLayer = wrapper.querySelector('.top');
  let handle = wrapper.querySelector('.handle');

  if(wrapper.className.indexOf('skewed') != -1){
    skew = 1000;
  }
    
  wrapper.addEventListener('mousemove', (e) => {
    delta = (e.clientX - window.innerWidth) *0.5;
    
    handle.style.left = e.clientX + delta + 'px';
    topLayer.style.width= e.clientX + skew + delta + 'px';
  });
});