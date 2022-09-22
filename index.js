let form = document.querySelector("form")
let input = document.querySelector("input")


form.addEventListener("submit", tempConv)

function tempConv(e) {
    e.preventDefault();

    let celsius = parseInt(input.value)


    const fahrenheit = parseInt(celsius * 1.8) + 32

    let print = document.getElementById("heading");

    print.innerHTML = `${celsius}&#8451; degree celsius is equal to ${fahrenheit}  &#8457;.`



    console.log(`${celsius} &#8451  is equal to ${fahrenheit} &#8457.`)

    form.reset()


}
