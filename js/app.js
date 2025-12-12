// ==========================================
// DATOS Y CONFIGURACIÓN
// ==========================================

const signosZodiacales = [
    { nombre: "Aries", nombreEn: "aries", icono: "♈", fechas: "21 Mar - 19 Abr", elemento: "fuego", planeta: "Marte", piedra: "Diamante", color: "Rojo" },
    { nombre: "Tauro", nombreEn: "taurus", icono: "♉", fechas: "20 Abr - 20 May", elemento: "tierra", planeta: "Venus", piedra: "Esmeralda", color: "Verde" },
    { nombre: "Géminis", nombreEn: "gemini", icono: "♊", fechas: "21 May - 20 Jun", elemento: "aire", planeta: "Mercurio", piedra: "Ágata", color: "Amarillo" },
    { nombre: "Cáncer", nombreEn: "cancer", icono: "♋", fechas: "21 Jun - 22 Jul", elemento: "agua", planeta: "Luna", piedra: "Perla", color: "Plateado" },
    { nombre: "Leo", nombreEn: "leo", icono: "♌", fechas: "23 Jul - 22 Ago", elemento: "fuego", planeta: "Sol", piedra: "Rubí", color: "Dorado" },
    { nombre: "Virgo", nombreEn: "virgo", icono: "♍", fechas: "23 Ago - 22 Sep", elemento: "tierra", planeta: "Mercurio", piedra: "Zafiro", color: "Beige" },
    { nombre: "Libra", nombreEn: "libra", icono: "♎", fechas: "23 Sep - 22 Oct", elemento: "aire", planeta: "Venus", piedra: "Ópalo", color: "Rosa" },
    { nombre: "Escorpio", nombreEn: "scorpio", icono: "♏", fechas: "23 Oct - 21 Nov", elemento: "agua", planeta: "Plutón", piedra: "Topacio", color: "Borgoña" },
    { nombre: "Sagitario", nombreEn: "sagittarius", icono: "♐", fechas: "22 Nov - 21 Dic", elemento: "fuego", planeta: "Júpiter", piedra: "Turquesa", color: "Púrpura" },
    { nombre: "Capricornio", nombreEn: "capricorn", icono: "♑", fechas: "22 Dic - 19 Ene", elemento: "tierra", planeta: "Saturno", piedra: "Granate", color: "Marrón" },
    { nombre: "Acuario", nombreEn: "aquarius", icono: "♒", fechas: "20 Ene - 18 Feb", elemento: "aire", planeta: "Urano", piedra: "Amatista", color: "Azul eléctrico" },
    { nombre: "Piscis", nombreEn: "pisces", icono: "♓", fechas: "19 Feb - 20 Mar", elemento: "agua", planeta: "Neptuno", piedra: "Aguamarina", color: "Turquesa" }
];

// Predicciones extensas para horóscopos más completos
const prediccionesBase = {
    general: [
        "Las estrellas se alinean favorablemente para vos hoy. La energía cósmica te impulsa hacia nuevos comienzos y oportunidades que no debes dejar pasar. Tu intuición estará especialmente aguda, así que confía en ella para tomar decisiones importantes. Es un día excelente para iniciar proyectos que habías postergado.",
        "El universo te envía señales de abundancia y prosperidad. Prestá atención a los pequeños detalles, porque en ellos pueden esconderse grandes oportunidades. Las personas a tu alrededor notarán tu energía positiva y se sentirán atraídas hacia vos. Aprovechá este magnetismo natural.",
        "Hoy es un día de reflexión y autoconocimiento. Los astros te invitan a mirar hacia adentro y reconocer tus verdaderas fortalezas. Puede que algunas verdades salgan a la luz, pero esto será positivo para tu crecimiento personal. Abrazá los cambios que están por venir.",
        "La luna influye poderosamente en tus emociones hoy. Sentirás una conexión especial con tu espiritualidad y podrías tener sueños reveladores. Es buen momento para meditar, hacer yoga o cualquier práctica que te conecte con tu interior. La paz mental será tu mayor tesoro.",
        "Un ciclo importante está llegando a su fin, preparando el terreno para nuevos comienzos. No te aferres a lo que ya no te sirve. El universo está reorganizando las piezas de tu vida para ofrecerte algo mejor. Mantené la fe y la paciencia.",
        "Tu creatividad está en su punto máximo. Las ideas fluyen libremente y podrías encontrar soluciones innovadoras a problemas antiguos. Es excelente momento para expresarte artísticamente o comenzar ese proyecto creativo que tenías en mente.",
        "Las conexiones sociales serán importantes hoy. Alguien de tu pasado podría reaparecer con un mensaje importante, o podrías conocer a alguien que cambiará tu perspectiva de vida. Mantené tu mente y corazón abiertos a nuevas experiencias.",
        "La energía de transformación te rodea. Sentirás el impulso de hacer cambios significativos en tu vida. No temas reinventarte; el universo apoya tu evolución. Los desafíos que enfrentes serán escalones hacia tu mejor versión.",
        "Hoy es día de cosecha. Los esfuerzos que has puesto en el pasado comenzarán a dar frutos. Reconocé tus logros y celebrá tu progreso, por pequeño que parezca. La gratitud multiplicará tus bendiciones.",
        "Los astros favorecen la comunicación clara y honesta. Es momento ideal para tener esas conversaciones pendientes o expresar lo que sentís. Tu palabra tendrá peso e influencia, así que usala sabiamente."
    ],
    amor: [
        "Venus te sonríe hoy. Si estás en pareja, vivirán momentos de gran conexión emocional y pasión renovada. Es perfecto para planear algo especial juntos. Si estás soltero/a, tu atractivo está en su punto más alto; podrías conocer a alguien especial donde menos lo esperás.",
        "El amor requiere paciencia hoy. Si hay tensiones en tu relación, recordá que la comunicación es la clave. Escuchá más de lo que hablás y tratá de entender la perspectiva del otro. Los solteros deberían enfocarse en el amor propio antes de buscar afuera.",
        "Una conexión profunda está por manifestarse en tu vida. Puede ser el inicio de un nuevo romance o el fortalecimiento de una relación existente. Dejate llevar por los sentimientos sin analizar demasiado. El corazón sabe cosas que la mente ignora.",
        "Hoy podrías sentir la necesidad de espacio personal. Esto no es negativo; a veces necesitamos estar solos para valorar mejor a quienes amamos. Usá este tiempo para reflexionar sobre qué querés realmente en el amor.",
        "La pasión se enciende en tu vida amorosa. Es momento de romper la rutina y sorprender a tu pareja con algo inesperado. Los solteros podrían vivir un encuentro intenso que les quite el aliento. Dejate llevar por el momento.",
        "El romanticismo está en el aire. Pequeños gestos de amor tendrán un gran impacto hoy. Una palabra dulce, una caricia inesperada, un mensaje cariñoso... Los detalles marcarán la diferencia en tus relaciones.",
        "Es tiempo de sanar heridas del pasado. Si arrastrás dolor de relaciones anteriores, hoy el universo te ayuda a soltar. Perdoná para liberarte. Cuando sanes completamente, el amor verdadero encontrará su camino hacia vos.",
        "Tu intuición amorosa está muy aguda. Si sentís que algo no está bien en tu relación, confía en esa sensación y buscá la verdad con tacto. Los solteros podrían sentir una atracción inexplicable hacia alguien; prestá atención a las señales.",
        "El compromiso está en el horizonte. Si tu relación está lista, podrían dar un paso importante juntos. Para los solteros, es momento de definir qué tipo de amor buscás y no conformarte con menos.",
        "Hoy el amor se presenta de formas inesperadas. Puede venir de una amistad que se transforma o de un encuentro casual. Mantené el corazón abierto y sin expectativas rígidas."
    ],
    trabajo: [
        "Tu carrera profesional recibe un impulso cósmico importante. Es excelente momento para pedir ese aumento, proponer nuevas ideas o buscar mejores oportunidades. Tu talento será reconocido por quienes importan. No subestimes tu valor.",
        "El trabajo en equipo será fundamental hoy. Colaborá generosamente con tus compañeros y notarás cómo las cosas fluyen mejor. Un proyecto grupal podría traerte reconocimiento. La humildad te abrirá puertas.",
        "Podrían presentarse desafíos laborales, pero tenés todas las herramientas para superarlos. Mantené la calma bajo presión y pensá antes de actuar. Tu capacidad de resolver problemas impresionará a tus superiores.",
        "Es momento de revisar tus metas profesionales. ¿Estás donde querés estar? Si la respuesta es no, hoy es buen día para trazar un nuevo plan. El universo apoya los nuevos comienzos laborales.",
        "Las finanzas mejoran. Podrías recibir un ingreso extra o encontrar una oportunidad de inversión interesante. Administrá bien tus recursos; la prosperidad que viene requiere responsabilidad.",
        "Tu liderazgo natural brilla hoy. Otros buscarán tu guía y consejo. Aceptá el rol con humildad pero confianza. Tenés la capacidad de inspirar y motivar a quienes te rodean.",
        "Un proyecto importante está por concretarse. Todo el esfuerzo que has puesto está a punto de dar resultados visibles. Mantené el enfoque en la meta final y no te distraigas con obstáculos menores.",
        "Es buen momento para el networking. Conectá con personas de tu industria, actualizá tu perfil profesional o asistí a eventos del rubro. Una conexión hecha hoy podría ser muy valiosa en el futuro.",
        "La creatividad es tu mejor herramienta laboral hoy. Pensá fuera de la caja y proponé soluciones innovadoras. Tus ideas frescas podrían revolucionar procesos establecidos.",
        "Podrías sentirte algo agotado/a laboralmente. Recordá que descansar también es productivo. Si podés, tomáte un momento para recargar energías. Un breve descanso mejorará significativamente tu rendimiento."
    ],
    salud: [
        "Tu vitalidad está alta hoy. Es excelente momento para iniciar una nueva rutina de ejercicios o retomar hábitos saludables. Tu cuerpo responderá positivamente a cualquier actividad física que realices.",
        "Prestá especial atención a tu alimentación hoy. Tu cuerpo te pide nutrientes específicos; escuchá esas señales. Incorporá más frutas, verduras y agua a tu dieta. Los pequeños cambios generan grandes resultados.",
        "El descanso es fundamental. Si has estado sacrificando horas de sueño, tu cuerpo te pasará factura. Priorizá dormir bien esta noche. Un sueño reparador mejorará todos los aspectos de tu vida.",
        "Tu salud emocional necesita atención. Rodeate de personas positivas y alejate de situaciones que te generen estrés innecesario. La meditación o ejercicios de respiración te ayudarán a encontrar equilibrio.",
        "Es buen día para hacerte ese chequeo médico pendiente. La prevención es la mejor medicina. Escuchá a tu cuerpo y no ignores pequeñas molestias; mejor atenderlas a tiempo.",
        "Las actividades al aire libre te beneficiarán enormemente. Si es posible, caminá en un parque, hacé ejercicio afuera o simplemente disfrutá del sol. La naturaleza tiene poder sanador.",
        "Tu energía mental está alta pero cuidado con el agotamiento. Tomá pausas regulares durante el día. La técnica Pomodoro (trabajo/descanso) podría ayudarte a mantener la productividad sin agotarte.",
        "Cuidá tu postura, especialmente si pasás muchas horas sentado/a. Estirá regularmente y considerá hacer yoga o pilates. Tu espalda y cuello te lo agradecerán.",
        "Hoy podrías sentir más sensibilidad de lo normal. Esto está conectado con los ciclos lunares. Tratáte con gentileza y evitá exigirte demasiado. El autocuidado no es egoísmo.",
        "Tu sistema inmunológico necesita refuerzo. Incorporá vitamina C, descansá bien y evitá el estrés. Pequeños cambios en tu rutina pueden prevenir malestares futuros."
    ]
};

const consejosDelDia = [
    { emoji: "💫", texto: "Recordá que cada día es una nueva oportunidad para brillar. No importa lo que pasó ayer; hoy podés escribir una historia diferente." },
    { emoji: "🌟", texto: "La actitud positiva no cambia tu realidad, pero cambia cómo la enfrentás. Y eso hace toda la diferencia." },
    { emoji: "✨", texto: "Los cambios que más temés suelen ser los que más necesitás. Abrazá la transformación." },
    { emoji: "🌙", texto: "Tu voz interior es más sabia de lo que creés. Hacé silencio y escuchala; tiene las respuestas que buscás." },
    { emoji: "⭐", texto: "La gratitud es el imán más poderoso para atraer abundancia. Agradecé lo que tenés mientras trabajás por lo que querés." },
    { emoji: "💎", texto: "Tu valor no depende de la opinión de los demás. Brillás con luz propia, aunque otros no puedan verla." },
    { emoji: "🔮", texto: "Confiá en el timing del universo. Todo llega en el momento exacto, aunque no siempre sea cuando lo esperás." },
    { emoji: "🌈", texto: "Después de cada tormenta sale el sol. Los momentos difíciles son temporales; tu fortaleza es permanente." },
    { emoji: "💜", texto: "El amor propio no es egoísmo, es supervivencia. No podés dar lo que no tenés; llenate primero vos." },
    { emoji: "🦋", texto: "La transformación requiere soltar lo viejo. Como la mariposa, tu metamorfosis exige dejar atrás lo que ya no sos." }
];

const cartasTarot = [
    { nombre: "El Mago", simbolo: "🎭", significado: "Tenés todas las herramientas que necesitás para lograr tus objetivos. Es momento de tomar acción y manifestar tus deseos. La creatividad y la voluntad son tus aliados. Confiá en tu capacidad de crear la realidad que deseás." },
    { nombre: "La Sacerdotisa", simbolo: "🌙", significado: "Escuchá tu intuición; tiene mensajes importantes para vos. Los secretos se revelan a quienes tienen paciencia. Es momento de mirar hacia adentro y conectar con tu sabiduría interior. Los sueños pueden traer revelaciones." },
    { nombre: "La Emperatriz", simbolo: "👑", significado: "La abundancia y la fertilidad te rodean. Es excelente momento para proyectos creativos o familiares. La naturaleza te llama; pasá tiempo al aire libre. El amor maternal o el cuidado de otros será importante." },
    { nombre: "El Emperador", simbolo: "🦅", significado: "Es momento de tomar el control y establecer orden en tu vida. La disciplina y la estructura te llevarán al éxito. Liderá con sabiduría y justicia. Las decisiones firmes serán bien recibidas." },
    { nombre: "El Hierofante", simbolo: "📿", significado: "Buscá guía espiritual o un mentor. Las tradiciones y enseñanzas del pasado tienen valor para tu presente. Es buen momento para estudiar o enseñar. La fe te sostendrá en momentos difíciles." },
    { nombre: "Los Enamorados", simbolo: "💕", significado: "Una decisión importante relacionada con el amor o los valores está por llegar. Seguí a tu corazón, pero no ignores a tu razón. Las relaciones importantes evolucionan. La armonía entre opuestos es posible." },
    { nombre: "El Carro", simbolo: "⚔️", significado: "Victoria y éxito están a tu alcance si mantenés el enfoque. Avanzá con determinación pero controlá tus impulsos. Los obstáculos serán superados con voluntad firme. El viaje es tan importante como el destino." },
    { nombre: "La Fuerza", simbolo: "🦁", significado: "Tu fortaleza interior es mayor de lo que creés. La paciencia y la compasión vencerán cualquier desafío. Domá tus miedos con amor, no con violencia. La gentileza es una forma de poder." },
    { nombre: "El Ermitaño", simbolo: "🏔️", significado: "Es tiempo de introspección y soledad productiva. Las respuestas que buscás están dentro de vos. Alejate del ruido externo para escuchar tu verdad interior. La sabiduría viene de la reflexión." },
    { nombre: "La Rueda de la Fortuna", simbolo: "🎡", significado: "Los ciclos cambian y la fortuna gira a tu favor. Lo que sube puede bajar, pero también viceversa. Adaptate a los cambios con gracia. El destino está trabajando a tu favor, aunque no lo veas." },
    { nombre: "La Justicia", simbolo: "⚖️", significado: "La verdad y la equidad prevalecerán. Decisiones legales o importantes se resolverán justamente. Actuá con integridad y recibirás lo mismo. El karma está activo; lo que das, recibís." },
    { nombre: "El Sol", simbolo: "☀️", significado: "Alegría, éxito y vitalidad te rodean. Es momento de brillar y compartir tu luz con otros. Los niños o la infancia interior pueden ser importantes. La claridad llega después de la oscuridad." },
    { nombre: "La Luna", simbolo: "🌕", significado: "Confía en tu intuición aunque el camino no esté claro. Los sueños y la imaginación son poderosos ahora. No todo es lo que parece; buscá más profundo. Enfrentá tus miedos para liberarte." },
    { nombre: "La Estrella", simbolo: "⭐", significado: "Esperanza y renovación llegan a tu vida. Después de tiempos difíciles, la calma regresa. Tus deseos más profundos pueden cumplirse. Mantené la fe; el universo escucha." },
    { nombre: "El Mundo", simbolo: "🌍", significado: "Un ciclo importante está completándose con éxito. Celebrá tus logros y prepárate para nuevos comienzos. La integración y la totalidad son tus temas. Sentís conexión con el todo." }
];

const compatibilidades = {
    fuego: { fuego: 80, tierra: 50, aire: 90, agua: 45 },
    tierra: { fuego: 50, tierra: 85, aire: 55, agua: 80 },
    aire: { fuego: 90, tierra: 55, aire: 75, agua: 60 },
    agua: { fuego: 45, tierra: 80, aire: 60, agua: 95 }
};

const fasesLunares = [
    { fase: "Luna Nueva", icono: "🌑", descripcion: "Ideal para nuevos comienzos" },
    { fase: "Luna Creciente", icono: "🌒", descripcion: "Momento de crecimiento" },
    { fase: "Cuarto Creciente", icono: "🌓", descripcion: "Tiempo de acción" },
    { fase: "Gibosa Creciente", icono: "🌔", descripcion: "Refinando planes" },
    { fase: "Luna Llena", icono: "🌕", descripcion: "Culminación y revelaciones" },
    { fase: "Gibosa Menguante", icono: "🌖", descripcion: "Gratitud y compartir" },
    { fase: "Cuarto Menguante", icono: "🌗", descripcion: "Liberación y soltar" },
    { fase: "Luna Menguante", icono: "🌘", descripcion: "Descanso y reflexión" }
];

// Estado de conexión a la API
let apiOnline = false;

// ==========================================
// FUNCIONES UTILITARIAS
// ==========================================

function obtenerIndiceDiario(signoIndex, arrayLength, offset = 0) {
    const hoy = new Date();
    const diaDelAno = Math.floor((hoy - new Date(hoy.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    return (diaDelAno + signoIndex + offset) % arrayLength;
}

function calcularFaseLunar() {
    const hoy = new Date();
    const lunarCycle = 29.53059;
    const knownNewMoon = new Date(2024, 0, 11); // Luna nueva conocida
    const daysSinceNew = (hoy - knownNewMoon) / (1000 * 60 * 60 * 24);
    const currentPhase = daysSinceNew % lunarCycle;
    const phaseIndex = Math.floor((currentPhase / lunarCycle) * 8);
    return fasesLunares[phaseIndex];
}

function mostrarToast(mensaje, tipo = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${tipo}`;

    const iconos = { success: '✅', error: '❌', info: 'ℹ️' };

    toast.innerHTML = `
        <span class="toast-icon">${iconos[tipo]}</span>
        <span class="toast-message">${mensaje}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'toastOut 0.4s ease forwards';
        setTimeout(() => toast.remove(), 400);
    }, 4000);
}

function guardarSignoFavorito(signoIndex) {
    localStorage.setItem('signoFavorito', signoIndex);
    actualizarBannerFavorito();
    mostrarToast(`${signosZodiacales[signoIndex].nombre} guardado como tu signo favorito`, 'success');
}

function obtenerSignoFavorito() {
    return localStorage.getItem('signoFavorito');
}

function actualizarBannerFavorito() {
    const favIndex = obtenerSignoFavorito();
    const banner = document.getElementById('favoriteBanner');

    if (favIndex !== null) {
        const signo = signosZodiacales[favIndex];
        document.getElementById('favoriteIcon').textContent = signo.icono;
        document.getElementById('favoriteName').textContent = signo.nombre;
        banner.classList.add('active');
    } else {
        banner.classList.remove('active');
    }
}

// ==========================================
// FUNCIONES DE API
// ==========================================

async function obtenerHoroscopoAPI(signoEn) {
    // API de Ohmanda via proxy CORS
    const apiUrl = `https://ohmanda.com/api/horoscope/${signoEn}/`;
    // Usar proxy CORS público
    const url = `https://corsproxy.io/?${encodeURIComponent(apiUrl)}`;

    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);

        const response = await fetch(url, {
            signal: controller.signal,
            headers: {
                'Accept': 'application/json'
            }
        });
        clearTimeout(timeoutId);

        if (response.ok) {
            const data = await response.json();
            if (data.horoscope) {
                return {
                    texto: data.horoscope,
                    fuente: 'Astrology.com'
                };
            }
        }
    } catch (error) {
        console.log('API no disponible:', error.message);
    }
    return null;
}

async function verificarConexionAPI() {
    const statusDot = document.getElementById('apiStatusDot');
    const statusText = document.getElementById('apiStatusText');

    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 8000);

        const apiUrl = 'https://ohmanda.com/api/horoscope/aries/';
        const url = `https://corsproxy.io/?${encodeURIComponent(apiUrl)}`;

        const response = await fetch(url, {
            signal: controller.signal
        });
        clearTimeout(timeoutId);

        if (response.ok) {
            statusDot.className = 'api-status-dot online';
            statusText.textContent = 'API conectada';
            apiOnline = true;
        } else {
            throw new Error('API no disponible');
        }
    } catch (error) {
        statusDot.className = 'api-status-dot offline';
        statusText.textContent = 'Modo offline';
        apiOnline = false;
    }
}

// ==========================================
// FUNCIONES DE RENDERIZADO
// ==========================================

function crearEstrellas() {
    const container = document.getElementById('starsContainer');
    const fragment = document.createDocumentFragment();
    const numStars = 200;

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = `star ${Math.random() > 0.9 ? 'large' : ''}`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.setProperty('--delay', `${Math.random() * 3}s`);
        star.style.setProperty('--duration', `${1.5 + Math.random() * 2}s`);
        fragment.appendChild(star);
    }

    // Estrellas fugaces
    for (let i = 0; i < 3; i++) {
        const shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star';
        shootingStar.style.top = `${Math.random() * 50}%`;
        shootingStar.style.left = `${Math.random() * 50}%`;
        shootingStar.style.animationDelay = `${i * 5 + Math.random() * 5}s`;
        fragment.appendChild(shootingStar);
    }

    // Insertar todos los elementos de una sola vez
    container.appendChild(fragment);
}

function mostrarFecha() {
    const opciones = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const fecha = new Date().toLocaleDateString('es-PY', opciones);
    document.getElementById('currentDate').textContent = fecha.charAt(0).toUpperCase() + fecha.slice(1);
}

function mostrarFaseLunar() {
    const fase = calcularFaseLunar();
    document.getElementById('moonIcon').textContent = fase.icono;
    document.getElementById('moonPhase').textContent = `${fase.fase} - ${fase.descripcion}`;
}

function crearGridSignos() {
    const grid = document.getElementById('signsGrid');
    const favIndex = obtenerSignoFavorito();

    signosZodiacales.forEach((signo, index) => {
        const card = document.createElement('div');
        card.className = 'sign-card';
        card.style.animationDelay = `${index * 0.08}s`;

        const isFavorite = favIndex == index;

        card.innerHTML = `
            <span class="sign-favorite-star ${isFavorite ? 'active' : ''}" data-index="${index}" title="Marcar como favorito">
                ${isFavorite ? '★' : '☆'}
            </span>
            <span class="sign-icon">${signo.icono}</span>
            <h3 class="sign-name">${signo.nombre}</h3>
            <p class="sign-dates">${signo.fechas}</p>
            <span class="sign-element element-${signo.elemento}">
                ${getElementIcon(signo.elemento)} ${signo.elemento}
            </span>
        `;

        // Click en la estrella de favorito
        card.querySelector('.sign-favorite-star').addEventListener('click', (e) => {
            e.stopPropagation();
            guardarSignoFavorito(index);
            actualizarEstrellasGrid();
        });

        // Click en la carta
        card.addEventListener('click', () => mostrarHoroscopo(signo, index));
        grid.appendChild(card);
    });
}

function actualizarEstrellasGrid() {
    const favIndex = obtenerSignoFavorito();
    const stars = document.querySelectorAll('.sign-favorite-star');

    stars.forEach((star, index) => {
        const isFavorite = favIndex == index;
        star.classList.toggle('active', isFavorite);
        star.textContent = isFavorite ? '★' : '☆';
    });
}

function getElementIcon(elemento) {
    const icons = {
        fuego: '🔥',
        tierra: '🌱',
        aire: '💨',
        agua: '💧'
    };
    return icons[elemento] || '✨';
}

async function mostrarHoroscopo(signo, index) {
    const modal = document.getElementById('modalOverlay');
    const modalContent = document.getElementById('modalContent');

    // Mostrar loading
    modalContent.innerHTML = `
        <div class="loading">
            <div class="loading-spinner"></div>
            <p class="loading-text">Consultando las estrellas...</p>
        </div>
    `;
    modal.classList.add('active');

    // Generar horóscopo
    const horoscopo = await generarHoroscopo(signo, index);

    // Generar estrellas para nivel de energía
    const estrellas = '★'.repeat(horoscopo.nivelEnergia) + '☆'.repeat(5 - horoscopo.nivelEnergia);

    modalContent.innerHTML = `
        <div class="modal-header">
            <button class="close-btn" onclick="cerrarModal()">&times;</button>
            <span class="modal-icon">${signo.icono}</span>
            <h2 class="modal-title">${signo.nombre}</h2>
            <p class="modal-meta">
                <span>📅 ${signo.fechas}</span>
                <span>🔮 ${signo.elemento}</span>
                <span>🪐 ${signo.planeta}</span>
            </p>
        </div>
        <div class="modal-body">
            <div class="horoscope-type-tabs">
                <button class="horoscope-type-btn active" data-type="general">🌟 General</button>
                <button class="horoscope-type-btn" data-type="amor">💕 Amor</button>
                <button class="horoscope-type-btn" data-type="trabajo">💼 Trabajo</button>
                <button class="horoscope-type-btn" data-type="salud">🏃 Salud</button>
            </div>

            <div class="horoscope-content active" id="generalContent">
                <div class="horoscope-section">
                    <h3 class="section-title">
                        <span class="emoji">🌟</span>
                        Predicción General
                    </h3>
                    <p class="horoscope-text ${horoscopo.general.fuente === 'API Horoscope' ? 'api-text' : ''}">${horoscopo.general.texto}</p>
                </div>
            </div>

            <div class="horoscope-content" id="amorContent">
                <div class="horoscope-section">
                    <h3 class="section-title">
                        <span class="emoji">💕</span>
                        Amor y Relaciones
                    </h3>
                    <p class="horoscope-text">${horoscopo.amor}</p>
                </div>
            </div>

            <div class="horoscope-content" id="trabajoContent">
                <div class="horoscope-section">
                    <h3 class="section-title">
                        <span class="emoji">💼</span>
                        Trabajo y Finanzas
                    </h3>
                    <p class="horoscope-text">${horoscopo.trabajo}</p>
                </div>
            </div>

            <div class="horoscope-content" id="saludContent">
                <div class="horoscope-section">
                    <h3 class="section-title">
                        <span class="emoji">🏃</span>
                        Salud y Bienestar
                    </h3>
                    <p class="horoscope-text">${horoscopo.salud}</p>
                </div>
            </div>

            <div class="indicators-grid">
                <div class="indicator-card">
                    <div class="indicator-icon">🔢</div>
                    <div class="indicator-label">Número de la Suerte</div>
                    <div class="indicator-value">${horoscopo.numeroSuerte}</div>
                </div>
                <div class="indicator-card">
                    <div class="indicator-icon">🎨</div>
                    <div class="indicator-label">Color del Día</div>
                    <div class="indicator-value">${horoscopo.colorSuerte}</div>
                </div>
                <div class="indicator-card">
                    <div class="indicator-icon">💑</div>
                    <div class="indicator-label">Compatible con</div>
                    <div class="indicator-value">${horoscopo.compatibilidad}</div>
                </div>
                <div class="indicator-card">
                    <div class="indicator-icon">⚡</div>
                    <div class="indicator-label">Nivel de Energía</div>
                    <div class="indicator-stars">${estrellas}</div>
                </div>
            </div>

            <div class="daily-advice">
                <div class="advice-title">
                    <span>💡</span>
                    Consejo del Día
                </div>
                <p class="advice-text">${horoscopo.consejo}</p>
            </div>
        </div>
        <div class="modal-actions">
            <button class="action-btn" onclick="compartirHoroscopo('${signo.nombre}')">
                <span>📤</span>
                Compartir
            </button>
            <button class="action-btn primary" onclick="guardarSignoFavorito(${index})">
                <span>⭐</span>
                Marcar como Favorito
            </button>
        </div>
    `;

    // Event listeners para los tabs
    const tabBtns = modalContent.querySelectorAll('.horoscope-type-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const type = btn.dataset.type;

            // Remover active de todos los tabs
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Mostrar contenido correspondiente
            const contents = modalContent.querySelectorAll('.horoscope-content');
            contents.forEach(content => content.classList.remove('active'));
            document.getElementById(`${type}Content`).classList.add('active');
        });
    });
}

async function generarHoroscopo(signo, signoIndex) {
    // Intentar obtener de API primero
    let generalTexto = null;
    if (apiOnline) {
        const apiData = await obtenerHoroscopoAPI(signo.nombreEn);
        if (apiData) {
            generalTexto = apiData;
        }
    }

    // Si no hay API, usar datos locales
    if (!generalTexto) {
        generalTexto = {
            texto: prediccionesBase.general[obtenerIndiceDiario(signoIndex, prediccionesBase.general.length, 0)],
            fuente: 'Local'
        };
    }

    return {
        general: generalTexto,
        amor: prediccionesBase.amor[obtenerIndiceDiario(signoIndex, prediccionesBase.amor.length, 1)],
        trabajo: prediccionesBase.trabajo[obtenerIndiceDiario(signoIndex, prediccionesBase.trabajo.length, 2)],
        salud: prediccionesBase.salud[obtenerIndiceDiario(signoIndex, prediccionesBase.salud.length, 3)],
        consejo: consejosDelDia[obtenerIndiceDiario(signoIndex, consejosDelDia.length, 4)].texto,
        numeroSuerte: ((obtenerIndiceDiario(signoIndex, 99, 5) + 1)),
        colorSuerte: signo.color,
        compatibilidad: signosZodiacales[(signoIndex + obtenerIndiceDiario(signoIndex, 12, 7)) % 12].nombre,
        nivelEnergia: (obtenerIndiceDiario(signoIndex, 5, 8) + 1)
    };
}

function cerrarModal() {
    document.getElementById('modalOverlay').classList.remove('active');
}

function compartirHoroscopo(signoNombre) {
    const url = window.location.href;
    const texto = `¡Mirá mi horóscopo de ${signoNombre} para hoy! ${url}`;

    if (navigator.share) {
        navigator.share({
            title: `Horóscopo ${signoNombre}`,
            text: texto,
            url: url
        });
    } else {
        navigator.clipboard.writeText(texto).then(() => {
            mostrarToast('Horóscopo copiado al portapapeles', 'success');
        });
    }
}

// ==========================================
// SECCIÓN DE COMPATIBILIDAD
// ==========================================

function inicializarCompatibilidad() {
    const sign1Select = document.getElementById('sign1Select');
    const sign2Select = document.getElementById('sign2Select');

    // Llenar selects
    signosZodiacales.forEach(signo => {
        const option1 = new Option(signo.nombre, signo.nombreEn);
        const option2 = new Option(signo.nombre, signo.nombreEn);
        sign1Select.add(option1);
        sign2Select.add(option2);
    });

    // Event listeners
    sign1Select.addEventListener('change', calcularCompatibilidad);
    sign2Select.addEventListener('change', calcularCompatibilidad);
}

function calcularCompatibilidad() {
    const sign1Select = document.getElementById('sign1Select');
    const sign2Select = document.getElementById('sign2Select');
    const resultDiv = document.getElementById('compatibilityResult');

    if (!sign1Select.value || !sign2Select.value) return;

    const signo1 = signosZodiacales.find(s => s.nombreEn === sign1Select.value);
    const signo2 = signosZodiacales.find(s => s.nombreEn === sign2Select.value);

    const compatibilidad = compatibilidades[signo1.elemento][signo2.elemento];

    // Descripciones basadas en compatibilidad
    let descripcion;
    if (compatibilidad >= 90) {
        descripcion = "¡Una combinación explosiva! Comparten una energía vibrante y apasionada. Su conexión es intensa y llena de aventura. Juntos pueden lograr grandes cosas.";
    } else if (compatibilidad >= 80) {
        descripcion = "Una pareja equilibrada y armoniosa. Se complementan perfectamente, creando un lazo fuerte y duradero. La confianza mutua es su mayor fortaleza.";
    } else if (compatibilidad >= 70) {
        descripcion = "Buena compatibilidad con potencial para crecer. Con comunicación y comprensión, pueden construir una relación sólida y satisfactoria.";
    } else if (compatibilidad >= 60) {
        descripcion = "Compatibilidad moderada. Pueden funcionar bien juntos si ambos están dispuestos a trabajar en la relación y respetar sus diferencias.";
    } else {
        descripcion = "Compatibilidad desafiante pero no imposible. Las diferencias pueden ser oportunidades de crecimiento si hay amor y respeto mutuo.";
    }

    resultDiv.innerHTML = `
        <div class="compatibility-meter" id="compatibilityMeter" style="--percentage: ${compatibilidad}%;">
            <span class="compatibility-percentage">${compatibilidad}%</span>
        </div>
        <p class="compatibility-description">${descripcion}</p>
    `;

    resultDiv.classList.add('active');
}

// ==========================================
// SECCIÓN DE TAROT
// ==========================================

function inicializarTarot() {
    const tarotCards = document.getElementById('tarotCards');
    const tarotMessage = document.getElementById('tarotMessage');
    const drawAgainBtn = document.getElementById('drawAgainBtn');

    // Crear cartas
    cartasTarot.forEach((carta, index) => {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'tarot-card';
        cardDiv.innerHTML = `
            <div class="tarot-card-back">🔮</div>
            <div class="tarot-card-front">
                <div class="card-symbol">${carta.simbolo}</div>
                <div class="card-name">${carta.nombre}</div>
            </div>
        `;

        cardDiv.addEventListener('click', () => {
            if (!cardDiv.classList.contains('flipped')) {
                // Voltear carta
                cardDiv.classList.add('flipped');

                // Mostrar mensaje después de un delay
                setTimeout(() => {
                    tarotMessage.innerHTML = `
                        <h3>${carta.nombre}</h3>
                        <p>${carta.significado}</p>
                    `;
                    tarotMessage.classList.add('active');
                    drawAgainBtn.style.display = 'block';
                }, 600);
            }
        });

        tarotCards.appendChild(cardDiv);
    });

    // Botón de sacar otra carta
    drawAgainBtn.addEventListener('click', () => {
        // Resetear todas las cartas
        document.querySelectorAll('.tarot-card').forEach(card => {
            card.classList.remove('flipped');
        });

        // Ocultar mensaje
        tarotMessage.classList.remove('active');
        drawAgainBtn.style.display = 'none';
    });
}

// ==========================================
// NAVEGACIÓN Y CONTROLES
// ==========================================

function inicializarNavegacion() {
    // Tabs principales
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tabName = btn.dataset.tab;

            // Remover active de todos los tabs
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Mostrar sección correspondiente
            document.querySelectorAll('.content-section').forEach(section => {
                section.classList.remove('active');
            });
            document.getElementById(`${tabName}Section`).classList.add('active');
        });
    });

    // Botones de navbar
    document.getElementById('refreshBtn').addEventListener('click', () => {
        location.reload();
    });

    document.getElementById('shareBtn').addEventListener('click', () => {
        compartirHoroscopo('Horóscopo Diario');
    });

    // Botón de leer horóscopo del signo favorito
    const readFavoriteBtn = document.getElementById('readFavoriteBtn');
    if (readFavoriteBtn) {
        readFavoriteBtn.addEventListener('click', () => {
            const favIndex = obtenerSignoFavorito();
            if (favIndex !== null) {
                const signo = signosZodiacales[favIndex];
                mostrarHoroscopo(signo, parseInt(favIndex));
            }
        });
    }
}

// Cerrar modal al hacer click fuera
document.getElementById('modalOverlay').addEventListener('click', function (e) {
    if (e.target === this) {
        cerrarModal();
    }
});

// Cerrar modal con ESC
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        cerrarModal();
    }
});

// ==========================================
// INICIALIZACIÓN
// ==========================================

async function inicializar() {
    // Ocultar loader después de un delay
    setTimeout(() => {
        document.getElementById('pageLoader').classList.add('hidden');
    }, 2000);

    // Inicializar componentes
    crearEstrellas();
    mostrarFecha();
    mostrarFaseLunar();
    crearGridSignos();
    inicializarCompatibilidad();
    inicializarTarot();
    inicializarNavegacion();
    actualizarBannerFavorito();

    // Verificar conexión API
    await verificarConexionAPI();
}

// Iniciar aplicación
document.addEventListener('DOMContentLoaded', inicializar);