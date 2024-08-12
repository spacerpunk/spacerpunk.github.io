function goToRandomLab() {
    const labPages = ['lab1.html', 'lab2.html', 'lab3.html', 'lab4.html'];
    const randomIndex = Math.floor(Math.random() * labPages.length);
    window.location.href = labPages[randomIndex];
}