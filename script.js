document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Lógica de verificación de edad ---
    // Nota: El uso de 'close' puede no funcionar en todos los navegadores y es una mala práctica.
    let edadIngresada = prompt("ingrese su edad");
    if (edadIngresada < 18) {
        // En un entorno real, aquí se redirigiría o se mostraría un mensaje de error.
        console.log("Acceso denegado por edad.");
    } else {
        console.log("Acceso permitido.");
    }

    // --- 2. Configuración de datos de los productos ---
    // Usamos las rutas de imagen de tu HTML y las descripciones que enviaste.
    const productsData = {
        'Bolsos': {
            title: 'Bolsos de Tendencia',
            imageSrc: 'https://www.milokitaaccesorios.com/wp-content/uploads/MAB0770000000-1.jpg',
            description: "Descubre la cartera que combina diseño sofisticado y funcionalidad perfecta. Confeccionada con materiales premium y acabados impecables, es lo suficientemente espaciosa para tu día a día, pero tan elegante que eleva cualquier look. ¡Lleva todo lo que necesitas con estilo y marca tendencia! ¡Imprescindible en tu colección!"
        },
        'Pashminas': {
            title: 'Pashminas de Lujo',
            imageSrc: 'https://m.media-amazon.com/images/I/61PqBmnhRWL._UY1000_.jpg',
            description: "Envuelve tu estilo con nuestra pashmina. Un accesorio lujosamente suave que te ofrece la calidez que necesitas con la elegancia que deseas. Perfecta para cualquier ocasión, ya sea para un toque de color, para complementar un outfit de noche, o simplemente para resguardarte del frío con clase. ¡La versatilidad que tu guardarropa necesita!"
        },
        // Cambié "TOALLONES" a "Toallones" para coincidir con tu ID de HTML
        'Toallones': { 
            title: 'Toallones de Algodón Premium',
            imageSrc: 'https://http2.mlstatic.com/D_NQ_NP_638481-MLA83770716549_042025-O.webp',
            description: "Experimenta la diferencia con nuestra toalla de lujo. Hecha con un algodón de absorción superior, te secarás rápidamente mientras disfrutas de una suavidad increíble contra tu piel. Duraderas, esponjosas y con colores que resisten los lavados. ¡Convierte tu rutina de baño en un momento de puro placer y confort!"
        },
        'Cepillos': {
            title: 'Cepillos Desenredantes',
            imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXixPDsICXA4sW-Mc7UX9P2cAxWDCm23DGAQ&s',
            description: "Despídete de los tirones y el frizz con nuestro cepillo revolucionario. Diseñado con cerdas flexibles y tecnología anti-quiebre, desenreda sin esfuerzo, suaviza y le da un brillo espectacular a tu cabello. Perfecto para usar en cabello seco o mojado. ¡Menos rotura, más luminosidad! ¡Consigue el tuyo y transforma tu rutina de peinado!"
        },
        'Pizzas': {
            title: 'Pizza Artesanal Clásica',
            imageSrc: 'https://resizer.glanacion.com/resizer/v2/pizza-6PHUOGGNFJHU3DDC2PFUKIK5TI.jpg?auth=b5d3b01711017e49469bfa387a69a48b6aa8ec943e5ce401ae71491abe73c9a0&width=420&height=280&quality=70&smart=true',
            description: "¡Prepárate para el sabor! Nuestra pizza es una explosión de delicia: masa artesanal crujiente por fuera y suave por dentro, bañada en una salsa de tomate vibrante y coronada con la mozzarella más fresca y derretida. Cada bocado es la combinación ideal de tradición y sabor irresistible. ¡Pide la tuya y transforma tu día!"
        },
        'Cubresillones': {
            title: 'Cubresillones de Ajuste Universal',
            imageSrc: 'https://blancostore.com.ar/wp-content/uploads/cubresillon-catalina-abierto.jpg',
            description: "Dale una vida nueva a tu sala con nuestro cubre sillón de ajuste perfecto. No solo protege tu mueble de manchas, mascotas y el desgaste diario, sino que lo transforma al instante con un toque de color y estilo moderno. Es fácil de poner, lavable a máquina y tan suave que querrás pasar horas en él. ¡Renueva sin comprar un sillón nuevo!"
        }
    };

   // --- 3. Referencias del DOM y Productos ---
    
   

    const bolsosElement = document.getElementById('Bolsos');
    const pashminasElement = document.getElementById('Pashminas');
    const toallonesElement = document.getElementById('Toallones'); // Nota: Es 'Toallones' con 'T' mayúscula
    const cepillosElement = document.getElementById('Cepillos');
    const pizzasElement = document.getElementById('Pizzas');
    const cubresillonesElement = document.getElementById('Cubresillones');

    // Array de IDs de los productos para la asignación de eventos (usado en el paso 5)
    const productIds = ['Bolsos', 'Pashminas', 'Toallones', 'Cepillos', 'Pizzas', 'Cubresillones'];
    // --- 4. Función principal para abrir el modal ---
    function openProductModal(productId) {
        const data = productsData[productId];
        if (data) {
            modalImage.src = data.imageSrc;
            modalTitle.textContent = data.title;
            modalDescription.textContent = data.description;
            modal.style.display = 'block'; // Mostrar el modal
        }
    }

    // --- 5. Asignar eventos de click a cada producto ---
    productIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            // Se añade el evento al elemento padre que tiene el ID
            element.addEventListener('click', () => openProductModal(id));
        }
    });

    // --- 6. Eventos para cerrar el modal ---
    
    // Cerrar al hacer click en la 'X'
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Cerrar al hacer click fuera del contenido del modal
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // --- 7. Función de cambio de color del Instagram (copiada de tu script) ---
    document.getElementById("ig")?.addEventListener("click", cambiararosa);

    function cambiararosa(){
        const igElement = document.getElementById("ig");
        if(igElement) {
            igElement.style.color = "#cf0463";
        }
    }
});


