document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.querySelector('.product-grid');

});

let edadIngresada = prompt("ingrese su edad")
if (edadIngresada<18) {close}
else {open}

document.getElementById("ig").addEventListener("click", cambiararosa)

function cambiararosa(){
    document.getElementById("ig").style.color = "#cf0463"
}

function descpizza(){
    alert("¡Prepárate para el sabor! Nuestra pizza es una explosión de delicia: masa artesanal crujiente por fuera y suave por dentro, bañada en una salsa de tomate vibrante y coronada con la mozzarella más fresca y derretida. Cada bocado es la combinación ideal de tradición y sabor irresistible. ¡Pide la tuya y transforma tu día!")
}

function descpashmina(){
    alert("Envuelve tu estilo con nuestra pashmina. Un accesorio lujosamente suave que te ofrece la calidez que necesitas con la elegancia que deseas. Perfecta para cualquier ocasión, ya sea para un toque de color, para complementar un outfit de noche, o simplemente para resguardarte del frío con clase. ¡La versatilidad que tu guardarropa necesita!")
}

function desccartera(){
    alert("Descubre la cartera que combina diseño sofisticado y funcionalidad perfecta. Confeccionada con materiales premium y acabados impecables, es lo suficientemente espaciosa para tu día a día, pero tan elegante que eleva cualquier look. ¡Lleva todo lo que necesitas con estilo y marca tendencia! ¡Imprescindible en tu colección!")
}

function desctoallas(){
    alert("Experimenta la diferencia con nuestra toalla de lujo. Hecha con un algodón de absorción superior, te secarás rápidamente mientras disfrutas de una suavidad increíble contra tu piel. Duraderas, esponjosas y con colores que resisten los lavados. ¡Convierte tu rutina de baño en un momento de puro placer y confort!")
}

function desccubresillon(){
    alert("Dale una vida nueva a tu sala con nuestro cubre sillón de ajuste perfecto. No solo protege tu mueble de manchas, mascotas y el desgaste diario, sino que lo transforma al instante con un toque de color y estilo moderno. Es fácil de poner, lavable a máquina y tan suave que querrás pasar horas en él. ¡Renueva sin comprar un sillón nuevo!")
}

function desccepillos(){
    alert("Despídete de los tirones y el frizz con nuestro cepillo revolucionario. Diseñado con cerdas flexibles y tecnología anti-quiebre, desenreda sin esfuerzo, suaviza y le da un brillo espectacular a tu cabello. Perfecto para usar en cabello seco o mojado. ¡Menos rotura, más luminosidad! ¡Consigue el tuyo y transforma tu rutina de peinado!")
}

document.getElementById("Bolsos").addEventListener("click", desccartera)

document.getElementById("Pashminas").addEventListener("click", descpashmina)

document.getElementById("TOALLONES").addEventListener("click", desctoallas)

document.getElementById("Cepillos").addEventListener("click", desccepillos)

document.getElementById("Pizzas").addEventListener("click", descpizza)

document.getElementById("Cubresillones").addEventListener("click", desccubresillon)
