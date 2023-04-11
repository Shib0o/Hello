const todoInp = document.getElementById('Input');
const todoUpd = document.getElementById('Update');
const todoDat = document.getElementById('Data');
const todoDel = document.getElementById('Delete');
let numberId = 0;
function todoAdd() {
    if (todoInp.value != "") {
        todoDat.innerHTML += '<li type="1" id="'+numberId+'"> '+todoInp.value+' <input type="button" value="x" onclick="todoDelete('+numberId+')" class="but"> <input type="button" value="Done" onclick="todoDelete('+numberId+')" class="but"></li>';
        numberId++;
    }
}
function todoDelete(a) {
    document.getElementById(a).remove();
}
todoUpd.addEventListener("click", todoAdd);
