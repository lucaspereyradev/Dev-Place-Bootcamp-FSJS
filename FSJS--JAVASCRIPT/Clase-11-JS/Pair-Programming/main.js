const cargarPost = async () => {
    try {
        const url = "https://jsonplaceholder.typicode.com/posts";
        const res = await fetch(url);
        if (res.ok) {
            const datos = await res.json();
            const post = document.getElementById("post");
            datos.forEach((element) => {
                let texto = element.title;
                let cuerpo = element.body;
                var id = element.id;
                texto = texto.toUpperCase();
                let columna = document.createElement("div");
                columna.classList.add("col-3", "p-3");
                let card = document.createElement("div");
                card.classList.add("card", "p-1");
                let cardBody = document.createElement("div");
                cardBody.classList.add("card-body");
                let p = document.createElement("h5");
                p.classList.add("card-title");
                p.innerHTML = texto;
                let botonCrear = document.createElement("button");
                botonCrear.classList.add("btn-primary", "btn");
                botonCrear.textContent = "Comentarios";
                botonCrear.setAttribute("type", "button");
                botonCrear.setAttribute("data-bs-toggle", "modal");
                botonCrear.setAttribute("data-bs-target", "#modal");
                let cuerpodiv = document.createElement("div");

                cuerpodiv.innerHTML = cuerpo;
                cardBody.appendChild(p);
                cardBody.appendChild(cuerpodiv);
                card.appendChild(cardBody);
                card.appendChild(botonCrear);
                columna.appendChild(card);
                post.appendChild(columna);

                return id;
            });

            console.log(datos);
        } else {
            console.log(res.status);
        }
    } catch (err) {
        console.log(err);
    }
};

cargarPost();

const cargarComentarios = async (id) => {
    try {
        const urlcomments = "https://jsonplaceholder.typicode.com/comments";
        const respuesta = await fetch(urlcomments);
        if (respuesta.ok) {
            const datos = await respuesta.json();
            const comentarios = document.getElementById("comments");

            var postId = datos.postId;

            datos.forEach((element) => {
                let nombre = element.name;
                let email = element.email;
                let cuerpo = element.body;

                nombre = nombre.toUpperCase();
                if (id === postId) {
                    let name = document.createElement("h5");
                    name.classList.add("modal-title");
                    name.innerHTML = nombre;
                    let mail = document.createElement("p");
                    mail.innerHTML = email;
                    let cuerpote = document.createElement("p");
                    cuerpote.innerHTML = cuerpo;

                    comentarios.appendChild(name);
                    comentarios.appendChild(mail);
                    comentarios.appendChild(cuerpote);
                }
            });

            console.log(datos);
        } else {
            console.log(respuesta.status);
        }
    } catch (err) {
        console.log(err);
    }
};
cargarComentarios();
