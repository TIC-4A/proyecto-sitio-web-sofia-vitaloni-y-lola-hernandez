document.addEventListener('DOMContentLoaded', () => {

    const edadIngresada = parseInt(prompt("Ingrese su edad (solo números):"));

    if (isNaN(edadIngresada) || edadIngresada < 18) {
        alert("Debes ser mayor de 18 años para acceder.");
        // Se intenta cerrar la ventana, aunque el navegador puede limitarlo por seguridad.
        window.close();
        return; // Detiene la ejecución
    }

    // Funciones de descripción
    function descPizza() {
        alert("¡Prepárate para el sabor! Nuestra pizza es una explosión de delicia: masa artesanal crujiente por fuera y suave por dentro, bañada en una salsa de tomate vibrante y coronada con la mozzarella más fresca y derretida. Cada bocado es la combinación ideal de tradición y sabor irresistible. ¡Pide la tuya y transforma tu día!");
    }

    function descPashmina() {
        alert("Envuelve tu estilo con nuestra pashmina. Un accesorio lujosamente suave que te ofrece la calidez que necesitas con la elegancia que deseas. Perfecta para cualquier ocasión, ya sea para un toque de color, para complementar un outfit de noche, o simplemente para resguardarte del frío con clase. ¡La versatilidad que tu guardarropa necesita!");
    }

    function descCartera() {
        alert("Descubre la cartera que combina diseño sofisticado y funcionalidad perfecta. Confeccionada con materiales premium y acabados impecables, es lo suficientemente espaciosa para tu día a día, pero tan elegante que eleva cualquier look. ¡Lleva todo lo que necesitas con estilo y marca tendencia! ¡Imprescindible en tu colección!");
    }

    function descToallas() {
        alert("Experimenta la diferencia con nuestra toalla de lujo. Hecha con un algodón de absorción superior, te secarás rápidamente mientras disfrutas de una suavidad increíble contra tu piel. Duraderas, esponjosas y con colores que resisten los lavados. ¡Convierte tu rutina de baño en un momento de puro placer y confort!");
    }

    function descCubresillon() {
        alert("Dale una vida nueva a tu sala con nuestro cubre sillón de ajuste perfecto. No solo protege tu mueble de manchas, mascotas y el desgaste diario, sino que lo transforma al instante con un toque de color y estilo moderno. Es fácil de poner, lavable a máquina y tan suave que querrás pasar horas en él. ¡Renueva sin comprar un sillón nuevo!");
    }

    function descCepillos() {
        alert("Despídete de los tirones y el frizz con nuestro cepillo revolucionario. Diseñado con cerdas flexibles y tecnología anti-quiebre, desenreda sin esfuerzo, suaviza y le da un brillo espectacular a tu cabello. Perfecto para usar en cabello seco o mojado. ¡Menos rotura, más luminosidad! ¡Consigue el tuyo y transforma tu rutina de peinado!");
    }

    function cambiarARosa() {
        document.getElementById("ig").style.color = "#cf0463";
    }

    // Asignación de eventos (solo si el elemento existe)
    document.getElementById("ig")?.addEventListener("click", cambiarARosa);
    document.getElementById("Bolsos")?.addEventListener("click", descCartera);
    document.getElementById("Pashminas")?.addEventListener("click", descPashmina);
    document.getElementById("TOALLONES")?.addEventListener("click", descToallas);
    document.getElementById("Cepillos")?.addEventListener("click", descCepillos);
    document.getElementById("Pizzas")?.addEventListener("click", descPizza);
    document.getElementById("Cubresillones")?.addEventListener("click", descCubresillon);
});
