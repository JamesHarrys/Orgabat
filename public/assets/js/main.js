var toggle = document.getElementsByClassName('toggle-btn');
toggle.innerHTML = `
                        <span></span>
                        <span></span>
                        <span></span>
                   `;
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('active');
}