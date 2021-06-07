const open = document.getElementById('open');
const close = document.getElementById('close');
const social = document.getElementById('social');
const profile = document.getElementById('profile');

open.addEventListener('click', () => {
  if(social.style.display === 'none') {
    social.style.display = 'block';
    profile.style.display = 'none';
  } else {
    social.style.display = 'none';
  }
})

close.addEventListener('click', () => {
  if(profile.style.display === 'none') {
    profile.style.display = 'flex';
    social.style.display = 'none';
  } else {
    profile.style.display = 'none';
  }
})