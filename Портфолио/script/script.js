const choose0 = document.getElementById('choose0');
const choose1 = document.getElementById('choose1');
const link0 = document.getElementById('link0');
const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');

choose0.onclick = function(e) {
    e.preventDefault();
    choose0.classList.add('active_choose');
    choose0.classList.remove('notactive_choose');
    choose1.classList.remove('active_choose1');
    choose1.classList.add('notactive_choose');
}

choose1.onclick = function(e) {
    e.preventDefault();
    choose1.classList.add('active_choose1');
    choose1.classList.remove('notactive_choose');
    choose0.classList.remove('active_choose');
    choose0.classList.add('notactive_choose');
}

link0.onclick = function(e) {
    e.preventDefault();
    link0.classList.add('active');
    link0.classList.remove('next');
    link1.classList.add('next');
    link2.classList.add('next');
    link3.classList.add('next');
    link1.classList.remove('active');
    link2.classList.remove('active');
    link3.classList.remove('active');
}

link1.onclick = function(e) {
    e.preventDefault();
    link0.classList.add('next');
    link1.classList.add('active');
    link1.classList.remove('next');
    link2.classList.add('next');
    link3.classList.add('next');
    link0.classList.remove('active');
    link2.classList.remove('active');
    link3.classList.remove('active');
}

link2.onclick = function(e) {
    e.preventDefault();
    link0.classList.add('next');
    link1.classList.add('next');
    link2.classList.add('active');
    link2.classList.remove('next');
    link3.classList.add('next');
    link0.classList.remove('active');
    link1.classList.remove('active');
    link3.classList.remove('active');
}

link3.onclick = function(e) {
    e.preventDefault();
    link0.classList.add('next');
    link1.classList.add('next');
    link2.classList.add('next');
    link3.classList.add('active');
    link3.classList.remove('next');
    link0.classList.remove('active');
    link1.classList.remove('active');
    link2.classList.remove('active');
}