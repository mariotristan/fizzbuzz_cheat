const fizzbuzz = async () => {
    
    
    const $t = document.createElement("div");
    $t.innerHTML = await fetch(
        "https://google.com/search?q=fizzbuzz javascript stackoverflow"
    ).then((res) => res.text());
    const link = $t.querySelector("#search a").href;

    this.innerHTML = await fetch(link).then((res)=> res.text());
    const code = $t.querySelector(".answercell code").innerText;
    eval(code);
    console.log(code);
}

fizzbuzz();