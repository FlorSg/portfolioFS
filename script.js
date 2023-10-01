let menuVisible = false;


//Función que oculta o muestra el menu
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}


function seleccionar() {
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//Formulario de contacto

const form = document.getElementById("contact-form")
 
async function handleSubmit(event){
    event.preventDefault();
    const form = new FormData(this);
   const response = await fetch(this.action,{
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    });
    if(response.ok){
        this.reset()
        alert('Gracias por contactarme, te responderé pronto.')
    }
}

form.addEventListener('submit', handleSubmit);