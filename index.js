async function connection(){
    if(typeof window !== "undefined"){
        await ethereum.request({ method: 'eth_requestAccounts'});
        document.getElementById("login_button").innerHTML= "Connected";
        } else {
            document.getElementById("login_button").innerHTML = "Install MetaMask"
        }
}

document.getElementById("login_button").onclick = connection;