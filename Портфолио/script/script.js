const choose0 = document.getElementById('choose0');
const choose1 = document.getElementById('choose1');

console.log(choose0);
console.log(choose1);

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