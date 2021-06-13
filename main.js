function createPassword(){
    
    var buyukHarf = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~`!@#$%^&*()_-+={[}]|\:'<>.?/";
    var password = '';
    var inp = document.getElementById("degerinput").value;
    for (let i = 0; i < inp; i++) {
        password += buyukHarf.charAt(Math.floor(Math.random() * buyukHarf.length));
        // console.log(password);
        var input = document.getElementById("inputumuz").value;
        document.getElementById("inputumuz").value = password;
        document.getElementById("degerinput").value = "";
    } return password;
}


function copy(){
    var inputcopy = document.getElementById("inputumuz");
    inputcopy.select();
    document.execCommand("copy");
    alert("Şifreniz kopyalandı!")
}

function temizle(){
    document.getElementById("inputumuz").value = "";
}

const myNum = document.getElementById("degerinput");
myNum.addEventListener("keypress", function (e) {
    if (this.value.length == 3) {
        document.getElementById("degerinput").value = "";
        e.preventDefault();
        return false;
    }
});


