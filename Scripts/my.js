console.log("Script loaded");

let authorname = document.getElementById("an")
let quotee = document.getElementById("qn")
let buttonfetch = document.getElementById("lpb")
let lpimg = document.getElementById("myimg")




function letspull() {
    // alert('msg');

    fetch("https://type.fit/api/quotes")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // console.log(data)
            randomnumber = Math.random() * data.length
            wholedigitforquote = Math.floor(randomnumber)
            author = data[wholedigitforquote]['author']
            quote = data[wholedigitforquote]['text']
            console.log(author, quote);
            if (author == null) {
                author = "Legend"
            }
            if (authorname.style.display == 'none') {
                authorname.style.display = "block"
            }
            if (quotee.style.display == 'none') {
                quotee.style.display = "block"
            }
            console.log(lpimg.src);
            lpimg.src = `https://picsum.photos/1400/400?random=${wholedigitforquote}`
            authorname.innerHTML = author
            quotee.innerHTML = quote
        });

}


buttonfetch.addEventListener("click", letspull)




