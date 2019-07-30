var toggle = document.getElementsByClassName('toggle-btn');
toggle.innerHTML = `
                        <span></span>
                        <span></span>
                        <span></span>
                   `;
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('active');
}

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});