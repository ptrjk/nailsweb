
let sections = ["oMne", "mojaPraca", "cennik", "kontakt", "objednanie"];

for (let i = 0; i < sections.length; i++) {
    let offset = (i == 1) ? 0 : 50;
        document.getElementById(i + 1 + "").addEventListener('click', () => {
            window.scrollTo({
                top: document.getElementById(sections[i]).offsetTop - offset,
                behavior: 'smooth'
            });
        });
}

