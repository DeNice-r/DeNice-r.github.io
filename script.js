let data_field = document.getElementById("data");
data_field.innerText += Math.round(Math.random() * 101 - .5);

let seed = "";

function operate_seed_gen(){
    document.onmousemove = mouse_seed_gen;
    document.onkeydown = keyboard_seed_gen;
    setTimeout(() => {
        document.onmousemove = null;
        document.onkeydown = null;
        let from_number = parseInt(document.getElementById("r_from").value),
            to_number =   parseInt(document.getElementById("r_to").value),
            number =      parseInt(document.getElementById("r_num").value);
        Math.seedrandom(seed);
        data_field.innerText = "";
        for(let x = 0; x < number; x++)
            data_field.innerText += Math.floor((Math.random() * (to_number - from_number + 1)) + from_number) + "\n";
    }, 3000);
}

function mouse_seed_gen(e){
    seed += e.pageX + e.pageY;
}

function keyboard_seed_gen(e){
    seed += e.key;
}