const questions = [
    { id: 1, question: "¿Qué significa el acrónimo CARE?", options: ["Conectar, Apreciar, Respetar, Everyone", "Calidad, Atención, Rapidez, Eficiencia", "Cocinar, Almacenar, Revisar, Entregar", "Cliente, Amabilidad, Respuesta, Éxito"], correct: 0, category: "Atención", explanation: "CARE (Pág. 116): Es la base de la hospitalidad en BK. Conectar con el cliente, Apreciar su visita, Respetar a todos y tratar a Everyone (todos) con cortesía." },
    { id: 2, question: "¿Procedimiento EDSD ante quejas?", options: ["Escuchar, Dar solución, Sonreír, Despedirse", "Escuchar, Disculparse, Satisfacer, Dar las gracias", "Explicar, Discutir, Solucionar, Documentar", "Entender, Decidir, Solucionar, Derivar"], correct: 1, category: "Atención", explanation: "EDSD (Pág. 117): Escuchar activamente, Disculparse sinceramente, Satisfacer el inconveniente y Dar las gracias por el feedback." },
    { id: 3, question: "¿Cuándo comprobar higienizante?", options: ["Después de lavar", "Al final del turno", "ANTES de sumergir verduras", "Solo si está sucia"], correct: 2, category: "Seguridad", explanation: "Seguridad Alimentaria (Pág. 112): Es crítico comprobar la concentración del higienizante ANTES de introducir las verduras para garantizar su desinfección." },
    { id: 4, question: "¿Sección 'TOLERANCIA CERO'?", options: ["Retrasos", "Seguridad y Normas Críticas", "Uso móvil", "Limpieza mesas"], correct: 1, category: "Normativa", explanation: "Tolerancia Cero (Pág. 1): Se aplica a normas críticas de Seguridad Alimentaria y Seguridad Laboral que no admiten errores." },
    { id: 5, question: "¿Freidora SIN GLUTEN?", options: ["Patatas", "Multiproducto", "Específica vegetal/sin gluten", "Cualquier limpia"], correct: 2, category: "Operaciones", explanation: "Operaciones (Pág. 73): El manual especifica el uso de la freidora de cuba multiproducto para opciones vegetales y sin gluten para evitar contaminación cruzada." },
    { id: 6, question: "¿Siglas EDSD?", options: ["Escuchar, Disculparse, Satisfacer, gracias", "Entregar, Despachar, Saludar, Despedir", "Eficiencia, Dedicación, Servicio, Dulzura", "Escuchar, Decidir, Solucionar, Devolver"], correct: 0, category: "Atención", explanation: "Protocolo EDSD (Pág. 117): Es el estándar de recuperación de servicio ante cualquier incidencia con un cliente." },
    { id: 7, question: "¿Primer paso Tolerancia Cero?", options: ["Turno", "Seguridad Alimentaria", "Limpieza", "Apertura"], correct: 1, category: "Seguridad", explanation: "Normas Críticas (Pág. 1): El índice de Tolerancia Cero prioriza la Seguridad Alimentaria como el pilar fundamental de la operación." },
    { id: 8, question: "¿Temperatura mínima carne?", options: ["60°C", "75°C", "82°C", "70°C"], correct: 1, category: "Seguridad", explanation: "Seguridad Alimentaria (Pág. 53): Para garantizar la eliminación de bacterias, la carne debe alcanzar una temperatura interna mínima de 75°C (165°F)." },
    { id: 9, question: "¿Vida Whopper en PHC?", options: ["15m", "30m", "20m", "10m"], correct: 2, category: "Calidad", explanation: "Calidad de Producto (Pág. 63): El tiempo máximo de mantenimiento (Holding Time) para una Whopper en el PHC es de 20 minutos." },
    { id: 10, question: "¿Tiempo frotado manos?", options: ["10s", "20s", "30s", "5s"], correct: 1, category: "Higiene", explanation: "Higiene de Manos (Pág. 4): Indica que el frotado con jabón debe durar al menos 20 segundos para ser efectivo." },
    { id: 11, question: "¿Luz roja broiler?", options: ["Temp ok", "Fallo llama/sistema", "Cargar carne", "Limpiar"], correct: 1, category: "Mantenimiento", explanation: "Mantenimiento Broiler (Pág. 66): Una luz roja parpadeante indica un fallo de llama o un error crítico que requiere atención." },
    { id: 12, question: "¿Distancia suelo-alimento?", options: ["5cm", "10cm", "15cm", "20cm"], correct: 2, category: "Logística", explanation: "Logística y Almacén (Pág. 42): Toda mercancía debe almacenarse al menos a 15 cm del suelo para higiene y evitar plagas." },
    { id: 13, question: "¿Limpieza mesas comedor?", options: ["Agua", "Multiusos", "Higienizante Quat", "Cristales"], correct: 2, category: "Limpieza", explanation: "Limpieza Quat (Pág. 112): Las mesas deben limpiarse exclusivamente con higienizante Quat a la concentración correcta (200-400ppm)." },
    { id: 14, question: "¿Qué es el SOS?", options: ["Speed of Service", "Standard of Safety", "Service of Smiles", "System of Sales"], correct: 0, category: "Métricas", explanation: "Métricas de Rapidez (Pág. 131): SOS significa Speed of Service y mide el tiempo desde el pedido hasta la entrega." },
    { id: 15, question: "¿Objetivo SOS Auto King?", options: ["< 150 seg", "< 180 seg", "< 210 seg", "< 120 seg"], correct: 1, category: "Métricas", explanation: "Métricas Auto King (Pág. 131): El objetivo estándar para el servicio en Auto King es de menos de 180 segundos en total." },
    { id: 16, question: "¿Turno con más King Fries?", options: ["Desayuno", "Comida", "Cena", "Merienda"], correct: 2, category: "Ventas", explanation: "Ventas por Turno (Pág. 131): Los datos operativos muestran que el turno de cena tiene la mayor incidencia de venta de productos King Fries." },
    { id: 17, question: "¿Significado de LTO?", options: ["Limited Time Offer", "Long Term Operation", "Local Team Organization", "Low Temperature Option"], correct: 0, category: "Ventas", explanation: "Marketing (Pág. 131): LTO son ofertas por tiempo limitado, como los lanzamientos especiales de productos estacionales." },
    { id: 18, question: "¿Coordinación de Delivery?", options: ["Zello", "Coordinador HD", "WhatsApp", "Papel"], correct: 1, category: "Delivery", explanation: "Home Delivery (Pág. 131): El Coordinador de HD es la figura encargada de gestionar los tiempos y rutas de los repartidores." },
    { id: 19, question: "¿Control de Turno?", options: ["Inventario", "Objetivos SOS y Ventas", "Nóminas", "Publicidad"], correct: 1, category: "Gestión", explanation: "Gestión de Turno (Pág. 131): El control se centra en monitorizar si se están cumpliendo los objetivos de ventas y rapidez fijados." },
    { id: 20, question: "¿Venta Sugerida?", options: ["Molestar", "Bajar ticket", "Subir ticket medio", "Acelerar"], correct: 2, category: "Ventas", explanation: "Sugerencia de Venta (Pág. 88): La meta es aumentar el Ticket Medio ofreciendo complementos o postres al cliente." },
    { id: 21, question: "¿Qué es SOS HD?", options: ["Home Delivery Speed", "High Service", "Hard System", "Helping Delivery"], correct: 0, category: "Delivery", explanation: "Métricas Delivery (Pág. 131): SOS HD mide la rapidez en la entrega a domicilio, desde el pedido hasta que sale del local." },
    { id: 22, question: "¿Dónde anotar objetivos?", options: ["PHC", "Tablero de objetivos", "Broiler", "Vestuario"], correct: 1, category: "Gestión", explanation: "Comunicación Interna (Pág. 131): Los objetivos deben estar visibles para todo el equipo en el tablero de coordinación del turno." },
    { id: 23, question: "¿Shock Events?", options: ["Agua", "Nuevos lanzamientos", "Solo Whopper", "Ensaladas"], correct: 1, category: "Ventas", explanation: "Eventos Especiales (Pág. 131): Los Shock Events son eventos de alto volumen enfocados en promocionar nuevos productos." },
    { id: 24, question: "¿Verificación motos?", options: ["Batería", "Limpieza", "Presión", "Todas"], correct: 3, category: "Delivery", explanation: "Seguridad en Delivery (Pág. 131): El mantenimiento incluye revisar batería, limpieza y presión de neumáticos según el manual." },
    { id: 25, question: "¿Ticket Medio?", options: ["Precio Whopper", "Promedio gasto cliente", "Ticket barato", "Ticket mediodía"], correct: 1, category: "Métricas", explanation: "Análisis de Ventas (Pág. 131): El ticket medio es la métrica que indica cuánto gasta, de media, cada cliente en el restaurante." },
    { id: 26, question: "¿Prioridad 1?", options: ["Ventas", "Rapidez", "Seguridad Alimentaria", "Limpieza"], correct: 2, category: "Seguridad", explanation: "Prioridad Absoluta (Pág. 1): Nada es más importante que la Seguridad Alimentaria; es el pilar para proteger al cliente." },
    { id: 27, question: "¿Área de juegos?", options: ["Gerencia", "Cumpleaños", "Inventario", "Descansos"], correct: 1, category: "Hospitalidad", explanation: "Hospitalidad (Pág. 131): El área de juegos es el espacio principal para la celebración de cumpleaños y eventos familiares." },
    { id: 28, question: "¿Incidencia Unidad Completa?", options: ["Fallos", "Venta de combos", "Stock", "Devoluciones"], correct: 1, category: "Ventas", explanation: "Ventas Sugeridas (Pág. 88): Mide el éxito al vender el 'Menú Completo' en lugar de productos individuales (up-selling)." },
    { id: 29, question: "¿Cambio de turno?", options: ["Cerrar", "Entre comida y cena", "Cada hora", "Alta demanda"], correct: 1, category: "Gestión", explanation: "Transición de Turno (Pág. 131): Se usa para evaluar el cumplimiento del primer turno y fijar metas para el siguiente." },
    { id: 30, question: "¿Auto King?", options: ["Limpieza", "Servicio en coche", "Automático", "Caja"], correct: 1, category: "Servicio", explanation: "Canales de Venta (Pág. 131): El Auto King es el canal de servicio directo a vehículos, vital para el volumen de ventas." },
    { id: 31, question: "¿Color paño carne cruda?", options: ["Azul", "Amarillo", "Rojo", "Verde"], correct: 2, category: "Higiene", explanation: "Seguridad Alimentaria (Pág. 31): El color ROJO se usa siempre para el contacto con carne cruda para evitar contaminar otras áreas." },
    { id: 32, question: "¿Lavado de manos?", options: ["Cada 2h", "Cada 30m o cambio tarea", "Una vez", "Final"], correct: 1, category: "Higiene", explanation: "Higiene Personal (Pág. 4): Es obligatorio lavarse las manos cada 30 minutos o siempre que se cambie de tarea o se toquen superficies." },
    { id: 33, question: "¿Termómetro aguja?", options: ["Aire", "Temp interna carne", "Fiebre", "Aceite"], correct: 1, category: "Seguridad", explanation: "Seguridad Alimentaria (Pág. 53): Es la herramienta para verificar que el centro de la carne ha alcanzado la temperatura mínima de seguridad de 75°C." },
    { id: 34, question: "¿Zona peligro?", options: ["0-100", "4-65", "10-40", "-18-0"], correct: 1, category: "Seguridad", explanation: "Bacteriología (Pág. 53): Entre 4°C y 65°C las bacterias se multiplican rápido; los alimentos no deben permanecer en este rango." },
    { id: 35, question: "¿Descongelar?", options: ["Sol", "Cámara frigorífica", "Agua caliente", "Mostrador"], correct: 1, category: "Seguridad", explanation: "Manejo de Alimentos (Pág. 45): La descongelación debe ser lenta y controlada dentro de la cámara frigorífica para evitar riesgos." },
    { id: 36, question: "¿FIFO?", options: ["First In, First Out", "Fast", "Final", "Food"], correct: 0, category: "Logística", explanation: "Rotación de Stock (Pág. 42): FIFO significa 'Lo primero que entra es lo primero que sale' para garantizar frescura." },
    { id: 37, question: "¿Estante pollo crudo?", options: ["Arriba", "Bajo ternera", "Bajo listos para comer", "Cualquier"], correct: 2, category: "Seguridad", explanation: "Almacenamiento (Pág. 42): El pollo crudo siempre va en el estante inferior para evitar que sus jugos goteen sobre otros alimentos." },
    { id: 38, question: "¿Mala concentración Quat?", options: ["Igual", "Agua", "Mezcla nueva", "Ignorar"], correct: 2, category: "Higiene", explanation: "Limpieza Quat (Pág. 112): Si la tira reactiva no marca el rango de 200-400ppm, la desinfección no es efectiva y hay que repetirla." },
    { id: 39, question: "¿Temp congelados?", options: ["< -18°C", "< 0°C", "< 4°C", "< -10°C"], correct: 0, category: "Logística", explanation: "Logística de Frío (Pág. 45): Los productos congelados deben mantenerse por debajo de los -18°C en todo momento para su conservación." },
    { id: 40, question: "¿Contaminación cruzada?", options: ["Mezclar pedidos", "Paso de patógenos", "Hablar", "Cruzar cocina"], correct: 1, category: "Seguridad", explanation: "Seguridad Alimentaria (Pág. 31): Es el traspaso de bacterias de alimentos crudos o manos sucias a productos listos para comer." },
    { id: 41, question: "¿Joyas?", options: ["Sí", "Lisos", "Prohibido (excepto alianza)", "Pendientes"], correct: 2, category: "Higiene", explanation: "Higiene Personal (Pág. 48): Por seguridad, solo se permite una alianza lisa (sin piedras) durante el trabajo en cocina." },
    { id: 42, question: "¿Pelo?", options: ["Suelto", "Recogido y gorra", "Coleta", "Cualquier"], correct: 1, category: "Higiene", explanation: "Imagen Personal (Pág. 48): El pelo debe estar totalmente contenido bajo la gorra para evitar caídas sobre los alimentos." },
    { id: 43, question: "¿Gripe?", options: ["Mascarilla", "No manipular", "Caja", "Nada"], correct: 1, category: "Normativa", explanation: "Salud Laboral (Pág. 49): Las enfermedades contagiosas son motivo de baja laboral inmediata para proteger la seguridad alimentaria." },
    { id: 44, question: "¿Derrames?", options: ["Final", "Inmediatamente", "Bajo SOS", "Queja"], correct: 1, category: "Seguridad", explanation: "Prevención Riesgos (Pág. 94): Los derrames deben limpiarse al instante para evitar resbalones y mantener la higiene del local." },
    { id: 45, question: "¿Delantal azul?", options: ["Baños", "Carne cruda", "Pedidos", "Basura"], correct: 1, category: "Higiene", explanation: "Protección (Pág. 51): El delantal azul se usa exclusivamente para manipular carnes crudas y debe retirarse al salir de esa área." },
    { id: 46, question: "¿Conc. Quat?", options: ["100-200", "200-400", "0-50", "500"], correct: 1, category: "Higiene", explanation: "Desinfección (Pág. 112): El rango estándar de seguridad para el higienizante Quat es de 200 a 400 partes por millón (ppm)." },
    { id: 47, question: "¿Temp refrigeración?", options: ["1-4", "5-10", "-2", "15"], correct: 0, category: "Seguridad", explanation: "Logística de Frío (Pág. 53): La temperatura ideal para conservar alimentos frescos en cámara es entre 1°C y 4°C." },
    { id: 48, question: "¿Lata abollada?", options: ["Oferta", "Riesgo botulismo", "Inmediato", "Nada"], correct: 1, category: "Seguridad", explanation: "Calidad de Envases (Pág. 42): Una abolladura puede haber dañado el revestimiento interno, permitiendo toxinas peligrosas." },
    { id: 49, question: "¿Secar manos?", options: ["Paño", "Papel un solo uso", "Pantalón", "Aire"], correct: 1, category: "Higiene", explanation: "Higiene de Manos (Pág. 4): El papel desechable elimina mecánicamente los gérmenes residuales de forma segura." },
    { id: 50, question: "¿'E' en EDSD?", options: ["Escuchar", "Entender", "Esperar", "Enviar"], correct: 0, category: "Atención", explanation: "Hospitalidad (Pág. 117): Escuchar activamente es el primer paso vital para resolver el problema del cliente." },
    { id: 51, question: "¿PHC?", options: ["Product Holding Cabinet", "Power", "Primary", "Public"], correct: 0, category: "Operaciones", explanation: "Equipamiento (Pág. 63): Es el mueble caliente donde se mantienen los productos cocinados garantizando su frescura." },
    { id: 52, question: "¿Temp PHC?", options: ["SOS", "Frescura/Vida útil", "Hora", "Apagar"], correct: 1, category: "Calidad", explanation: "Tiempos de Vida (Pág. 63): El temporizador nos avisa cuando el tiempo de Holding ha terminado y el producto debe ser descartado." },
    { id: 53, question: "¿Salsa Stacker?", options: ["Whopper", "Big King", "King Huevo", "Stacker"], correct: 3, category: "Productos", explanation: "Recetario (Pág. 61): La salsa Stacker es un ingrediente especializado exclusivo de la familia de productos Stacker." },
    { id: 54, question: "¿Queso?", options: ["Alineado", "Escalonado", "Encima", "Doblado"], correct: 1, category: "Calidad", explanation: "Montaje (Pág. 75): Colocar las lonchas en forma de estrella (puntos escalonados) garantiza que se funda mejor." },
    { id: 55, question: "¿Sal ternera?", options: ["Antes", "Después (PHC)", "Cliente", "No"], correct: 1, category: "Calidad", explanation: "Recetario (Pág. 63): La carne de ternera se sala únicamente después de pasar por el broiler para no secar la carne." },
    { id: 56, question: "¿Responsable visual?", options: ["Gerente", "Make-up", "Repartidor", "Cliente"], correct: 1, category: "Calidad", explanation: "Control de Calidad (Pág. 81): La persona que monta la hamburguesa (Board) es el último filtro de calidad antes del cliente." },
    { id: 57, question: "¿Tostar pan?", options: ["Broiler", "Toaster", "Plancha", "No"], correct: 1, category: "Operaciones", explanation: "Preparación (Pág. 65): El pan se tuesta en la tostadora vertical para que soporte las salsas sin ablandarse." },
    { id: 58, question: "¿Broiler?", options: ["Enfriar", "Parrilla", "Lavar", "Batidos"], correct: 1, category: "Operaciones", explanation: "Equipamiento (Pág. 66): El broiler cocina la carne a fuego directamente sobre la llama, el sello distintivo de BK." },
    { id: 59, question: "¿Lechuga?", options: ["Pachucha", "Fresca y fría", "Ambiente", "Cocida"], correct: 1, category: "Calidad", explanation: "Frescura (Pág. 112): La lechuga debe estar cortada fresca y mantenida fría para mantener su textura ultra crujiente." },
    { id: 60, question: "¿Mayo?", options: ["Poca", "Uniforme", "Medio", "X"], correct: 1, category: "Calidad", explanation: "Board (Pág. 68): La mayonesa debe cubrir todo el pan de centro a borde uniformemente para un sabor balanceado." },
    { id: 61, question: "¿Check 10?", options: ["Mirar PHC cada 10m", "10 seg", "10 pers", "10 min"], correct: 0, category: "Operaciones", explanation: "Operaciones (Pág. 63): Cada 10 minutos se debe revisar el PHC para descartar productos caducados y asegurar la frescura." },
    { id: 62, question: "¿Fritura patatas?", options: ["2", "3", "5", "1"], correct: 1, category: "Operaciones", explanation: "Fritura (Pág. 73): El tiempo estándar de cocción para las patatas clásicas es de 3 minutos para obtener la textura ideal." },
    { id: 63, question: "¿Aceite malo?", options: ["Usar", "Filtrar/Cambiar", "Agua", "Mezclar"], correct: 1, category: "Calidad", explanation: "Seguridad Alimentaria (Pág. 73): El aceite degradado afecta al sabor; el filtrado diario y cambio periódico son obligatorios." },
    { id: 64, question: "¿Whopper?", options: ["K/M/L/T/C/P", "Mostaza", "BBQ", "Huevo"], correct: 0, category: "Productos", explanation: "Recetario (Pág. 75): Ketchup, mayonesa, lechuga, tomate, cebolla y pepinillo son los componentes de la Whopper estándar." },
    { id: 65, question: "¿Pan Whopper?", options: ["4 pulgadas", "5 con sésamo", "Brioche", "Molde"], correct: 1, category: "Productos", explanation: "Especificaciones (Pág. 122): La Whopper utiliza un pan de 5 pulgadas con semillas de sésamo para su tamaño distintivo." },
    { id: 66, question: "¿Apreciar?", options: ["Valor cliente", "Cobrar", "Comer", "Manual"], correct: 0, category: "Hospitalidad", explanation: "CARE (Pág. 116): Apreciar es demostrar al cliente que su visita es sinceramente valorada por todo el equipo." },
    { id: 67, question: "¿Ticket?", options: ["No", "Mano y gracias", "Tirar", "Bolsa"], correct: 1, category: "Atención", explanation: "Servicio (Pág. 78): La entrega del ticket en mano con un agradecimiento es parte del estándar de atención de calidad." },
    { id: 68, question: "¿Siempre en caja?", options: ["¿Algo más?", "Venta sugerida", "¿Nombre?", "A y B"], correct: 3, category: "Ventas", explanation: "Técnicas de Venta (Pág. 88): Siempre se debe preguntar '¿Algo más?' e intentar una venta sugerida de postre o complemento." },
    { id: 69, question: "¿Área prep?", options: ["Main Board / Board", "The Table", "Cooking Zone", "The Box"], correct: 0, category: "Operaciones", explanation: "Board (Pág. 81): El 'Board' es la zona central de montaje donde se preparan los pedidos siguiendo las recetas." },
    { id: 70, question: "¿Wrap?", options: ["Envolver el producto", "Un tipo de baile", "Bolsa de basura", "Uniforme"], correct: 0, category: "Operaciones", explanation: "Empaquetado (Pág. 81): Aplicar el wrap correcto asegura que el calor se mantenga y la presentación sea impecable." },
    { id: 71, question: "¿Pepinillo?", options: ["Encima del tomate", "Debajo de la carne", "En el pan inferior", "No importa"], correct: 0, category: "Calidad", explanation: "Recetario (Pág. 83): El estándar de montaje BK sitúa los pepinillos sobre los tomates para equilibrar la acidez del producto." },
    { id: 72, question: "¿Holding Time?", options: ["Tiempo de espera cliente", "Tiempo de vida útil del producto", "Tiempo de descanso", "Tiempo de cocción"], correct: 1, category: "Calidad", explanation: "Frescura (Pág. 63): Es el tiempo máximo que un producto puede permanecer en el PHC antes de perder su estándar de calidad." },
    { id: 73, question: "¿Blue Scoop?", options: ["Servir helado", "Servir patatas", "Servir hielo", "Limpiar"], correct: 1, category: "Operaciones", explanation: "Herramientas (Pág. 87): El recogedor azul es el estándar exclusivo para servir las raciones de patatas fritas." },
    { id: 74, question: "¿POS?", options: ["Point of Sale (Caja)", "Post Office System", "Place of Service", "Power on Speed"], correct: 0, category: "Métricas", explanation: "Sistemas (Pág. 88): El POS (Point of Sale) es la terminal donde se gestionan los pedidos y se registran las ventas." },
    { id: 75, question: "¿Saludar?", options: ["Con una sonrisa y saludo amable", "Sin mirar", "Solo con 'Dime'", "Esperar que hable él"], correct: 0, category: "Hospitalidad", explanation: "Hospitalidad (Pág. 89): Un saludo cálido y contacto visual son obligatorios para iniciar una experiencia positiva." },
    { id: 76, question: "¿Aceite caliente derramado?", options: ["Echar agua", "Cubrir con sal/arena y señalizar", "Limpiar con la mano", "Ignorar hasta que se enfríe"], correct: 1, category: "Seguridad", explanation: "Seguridad Laboral (Pág. 94): El agua con aceite caliente causa explosiones; se debe usar material absorbente seco." },
    { id: 77, question: "¿MS/DS?", options: ["En el baño", "Cerca de productos químicos (fichas seguridad)", "En la caja fuerte", "No existe"], correct: 1, category: "Seguridad", explanation: "Normativa (Pág. 92): Las fichas MS/DS deben estar accesibles para saber cómo actuar ante contacto con químicos." },
    { id: 78, question: "¿Cómo se levanta una caja pesada?", options: ["Con la espalda recta y doblando rodillas", "Inclinando la espalda", "Con una sola mano", "A tirones"], correct: 0, category: "Seguridad", explanation: "Prevención (Pág. 94): Siempre dobla las rodillas y mantén la espalda recta para evitar lesiones lumbares crónicas." },
    { id: 79, question: "¿Qué hacer en caso de incendio de grasa?", options: ["Usar agua", "Usar extintor clase K o manta ignífuga", "Soplar", "Tapar con cartón"], correct: 1, category: "Seguridad", explanation: "Incendios (Pág. 96): Los fuegos de grasa solo se apagan con extintores de Clase K o mantas para asfixiar la llama." },
    { id: 80, question: "¿Qué significa 'S' en EDSD?", options: ["Satisfacer", "Sonreír", "Solucionar", "Saludar"], correct: 0, category: "Atención", explanation: "Protocolo EDSD (Pág. 117): Satisfacer implica corregir el error de inmediato para recuperar la confianza del cliente." },
    { id: 81, question: "¿Qué es el Rev (Audit)?", options: ["Visita de amigos", "Auditoría de estándares de la marca", "Fiesta", "Revisión de nóminas"], correct: 1, category: "Gestión", explanation: "Auditoría de Marca (Pág. 99): El REV es la revisión periódica que asegura que el restaurante cumple los exigentes estándares globales de BK." },
    { id: 82, question: "¿Qué se mide en el SOS de Auto King?", options: ["Desde que llega al altavoz hasta que recibe el pedido", "Solo el tiempo de pago", "Solo el tiempo de cocina", "Desde que sale del coche"], correct: 0, category: "Métricas", explanation: "Métricas Auto King (Pág. 131): Se mide la experiencia total: desde que el cliente habla al altavoz hasta que recibe su pedido." },
    { id: 83, question: "¿Cómo debe estar el uniforme?", options: ["Arrugado", "Limpio, completo y planchado", "Como sea", "Solo la gorra"], correct: 1, category: "Normativa", explanation: "Imagen e Higiene (Pág. 101): El uniforme proyecta la profesionalidad y limpieza de la marca ante el cliente." },
    { id: 84, question: "¿Se puede usar el móvil en el puesto de trabajo?", options: ["Sí", "No (Tolerancia Cero)", "Solo para música", "Si no hay clientes"], correct: 1, category: "Normativa", explanation: "Tolerancia Cero (Pág. 1): El uso de teléfonos personales está prohibido durante la jornada por razones de higiene y seguridad." },
    { id: 85, question: "¿Qué hacer si falta un producto en el pedido?", options: ["Culpar al compañero", "Disculparse y darlo inmediatamente", "Decir que no queda", "Ignorar"], correct: 1, category: "Atención", explanation: "Recuperación de Servicio (Pág. 117): Siguiendo el protocolo EDSD, se debe disculpar y dar la solución de inmediato." },
    { id: 86, question: "¿Qué es el 'Stock-out'?", options: ["Tener mucho stock", "Quedarse sin un producto", "Vender todo", "Inventario bien hecho"], correct: 1, category: "Logística", explanation: "Gestión de Inventario (Pág. 112): El stock-out es un fallo crítico que impide servir productos y afecta directamente la experiencia del cliente." },
    { id: 87, question: "¿Cómo se limpian los baños?", options: ["Con los mismos paños de cocina", "Con equipo y productos específicos", "Solo con agua", "Una vez por semana"], correct: 1, category: "Limpieza", explanation: "Protocolo de Limpieza (Pág. 115): Los utensilios de limpieza para baños nunca deben entrar en la zona de producción de alimentos." },
    { id: 88, question: "¿Qué significa 'Everyone' en CARE?", options: ["Solo clientes", "Solo jefes", "Tratar a todos con respeto (clientes y equipo)", "Nadie"], correct: 2, category: "Hospitalidad", explanation: "CARE (Pág. 116): El respeto mutuo entre compañeros es vital para dar un servicio de calidad mundial al cliente." },
    { id: 89, question: "¿Qué es el 'O-ring' del broiler?", options: ["Una joya", "Una junta de goma para evitar fugas", "Un círculo de carne", "El botón de encendido"], correct: 1, category: "Mantenimiento", explanation: "Mantenimiento Preventivo (Pág. 118): Los O-rings son juntas que garantizan que el equipo no pierda líquidos o presión interna." },
    { id: 90, question: "¿Para qué sirve el aceite de oliva en cocina?", options: ["Freír", "Ensaladas", "No se usa", "Limpiar metal"], correct: 1, category: "Productos", explanation: "Recetario (Pág. 120): El aceite de oliva se usa únicamente para aderezar ensaladas en sobres de ración individual." },
    { id: 91, question: "¿A qué distancia debe estar el cliente del mostrador?", options: ["Pegado", "Distancia de cortesía", "2 metros", "No importa"], correct: 1, category: "Atención", explanation: "Hospitalidad (Pág. 89): La distancia de cortesía permite que el cliente sienta su espacio respetado mientras decide su pedido." },
    { id: 92, question: "¿Cómo se llama el pan con sésamo pequeño?", options: ["Pan Whopper", "Pan Royal / 4 pulgadas", "Pan de queso", "Pan integral"], correct: 1, category: "Productos", explanation: "Especificaciones (Pág. 122): El pan de 4 pulgadas es el estándar para hamburguesas individuales como la Cheeseburger." },
    { id: 93, question: "¿Qué hacer con comida caída al suelo?", options: ["Limpiar y servir", "Descartar inmediatamente", "Dar al perro", "Comerla yo"], correct: 1, category: "Seguridad", explanation: "Seguridad Alimentaria (Pág. 1): Cualquier alimento en contacto con el suelo es desperdicio inmediato (Waste) sin excepción." },
    { id: 94, question: "¿Cómo se organiza la cámara según FIFO?", options: ["Lo nuevo delante", "Lo antiguo delante/a mano", "Todo mezclado", "Por colores"], correct: 1, category: "Logística", explanation: "Rotación de Stock (Pág. 42): Colocar lo más próximo a caducar al frente asegura que no se desperdicie producto por vencimiento." },
    { id: 95, question: "¿Qué es un 'Ghost Order'?", options: ["Pedido fantasma", "Pedido no registrado correctamente", "Pedido de Halloween", "Pedido para llevar"], correct: 1, category: "Métricas", explanation: "Sistemas (Pág. 88): Un pedido fantasma es un fallo en la sincronización entre el POS y la pantalla de cocina." },
    { id: 96, question: "¿Cómo debe estar la zona de juegos?", options: ["Sucio", "Limpio y seguro para niños", "Cerrado siempre", "Lleno de trastos"], correct: 1, category: "Limpieza", explanation: "Seguridad Infantil (Pág. 131): La seguridad infantil en el PlayKing es una prioridad legal y de imagen de marca absoluta." },
    { id: 97, question: "¿Qué significa la 'D' final en EDSD?", options: ["Despedirse", "Dar las gracias", "Dormir", "Devolver"], correct: 1, category: "Atención", explanation: "EDSD (Pág. 117): Terminar una queja agradeciendo al cliente ayuda a cerrar el ciclo de servicio de forma positiva." },
    { id: 88, question: "¿Qué temperatura tiene el café aproximadamente?", options: ["40°C", "85°C", "100°C", "20°C"], correct: 1, category: "Seguridad", explanation: "Control de Temperatura (Pág. 53): El café se sirve a unos 85°C para que esté en su punto óptimo de sabor y seguridad." },
    { id: 99, question: "¿Qué significa 'R' en CARE?", options: ["Respetar", "Rapidez", "Revisar", "Responder"], correct: 0, category: "Hospitalidad", explanation: "CARE (Pág. 116): El respeto es universal: hacia el cliente, el producto y las normas técnicas del manual." },
    { id: 100, question: "¿Cuál es la meta final de este entrenamiento?", options: ["Aprobar el examen", "Dar un servicio excelente y seguro", "Ganar más dinero", "Ambas A y B"], correct: 3, category: "Final", explanation: "Compromiso BK (Pág. 1): Este entrenamiento te prepara para superar el REV y ofrecer un servicio excepcional y seguro." },
];

let currentQuestionIndex = -1;
let stats = {
    correct: 0,
    wrong: 0,
    history: [],
    userName: '',
    sessionActive: false,
    sessionAsked: [], // IDs of questions asked in current session
    categoryStats: {} // { category: { correct: 0, total: 0 } }
};

let filteredQuestions = [...questions];
let selectedCategories = [];

// Elements
const loginScreen = document.getElementById('loginScreen');
const appContainer = document.getElementById('app');
const userNameInput = document.getElementById('userNameInput');
const startSessionBtn = document.getElementById('startSessionBtn');
const currentUserNameEl = document.getElementById('currentUserName');

const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const feedback = document.getElementById('feedback');
const nextBtn = document.getElementById('nextBtn');
const progressFill = document.getElementById('progressFill');
const categoryLabel = document.getElementById('categoryLabel');
const correctCountEl = document.getElementById('correctCount');
const wrongCountEl = document.getElementById('wrongCount');
const historyList = document.getElementById('historyList');
const resetBtn = document.getElementById('resetHistory');
const explanationEl = document.getElementById('explanation');
const themeOptionsContainer = document.getElementById('themeOptions');
const questionCountInfo = document.getElementById('questionCountInfo');
const selectAllBtn = document.getElementById('selectAllThemes');
const deselectAllBtn = document.getElementById('deselectAllThemes');
const categoryKpisContainer = document.getElementById('categoryKpis');

function init() {
    loadStats();
    initCategories();

    startSessionBtn.addEventListener('click', () => {
        const name = userNameInput.value.trim();
        if (name) startSession(name);
    });

    userNameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const name = userNameInput.value.trim();
            if (name) startSession(name);
        }
    });

    nextBtn.addEventListener('click', showNextQuestion);
    resetBtn.addEventListener('click', resetHistory);
    selectAllBtn.addEventListener('click', () => toggleAllCategories(true));
    deselectAllBtn.addEventListener('click', () => toggleAllCategories(false));

    if (stats.sessionActive) {
        showApp();
    }
}

function startSession(name) {
    stats.userName = name;
    stats.sessionActive = true;
    stats.sessionAsked = []; // Reset asked questions for new session
    saveStats();
    showApp();
    showNextQuestion();
}

function showApp() {
    loginScreen.style.display = 'none';
    appContainer.style.display = 'block';
    currentUserNameEl.textContent = stats.userName;
    updateStatsUI();
}

function initCategories() {
    const categories = [...new Set(questions.map(q => q.category))].sort();
    const savedCategories = localStorage.getItem('bk_quiz_selected_categories');
    selectedCategories = savedCategories ? JSON.parse(savedCategories) : categories;

    themeOptionsContainer.innerHTML = '';
    categories.forEach(cat => {
        const totalInCat = questions.filter(q => q.category === cat).length;
        const askedInCat = stats.sessionAsked.filter(id => {
            const q = questions.find(quest => quest.id === id);
            return q && q.category === cat;
        }).length;
        const isCompleted = askedInCat >= totalInCat;

        const label = document.createElement('label');
        label.className = `theme-checkbox ${isCompleted ? 'completed-theme' : ''}`;
        const isChecked = selectedCategories.includes(cat);
        label.innerHTML = `
            <input type="checkbox" value="${cat}" ${isChecked ? 'checked' : ''} ${isCompleted ? 'disabled' : ''}>
            <span>${cat} ${isCompleted ? '✓' : ''}</span>
        `;
        if (!isCompleted) {
            label.querySelector('input').addEventListener('change', (e) => {
                updateCategorySelection(cat, e.target.checked);
            });
        }
        themeOptionsContainer.appendChild(label);
    });

    applyFilters();
}

function updateCategorySelection(category, isSelected) {
    if (isSelected) {
        if (!selectedCategories.includes(category)) selectedCategories.push(category);
    } else {
        selectedCategories = selectedCategories.filter(c => c !== category);
    }
    localStorage.setItem('bk_quiz_selected_categories', JSON.stringify(selectedCategories));
    applyFilters();
}

function toggleAllCategories(select) {
    const checkboxes = themeOptionsContainer.querySelectorAll('input[type="checkbox"]');
    selectedCategories = select ? [...new Set(questions.map(q => q.category))] : [];
    checkboxes.forEach(cb => cb.checked = select);
    localStorage.setItem('bk_quiz_selected_categories', JSON.stringify(selectedCategories));
    applyFilters();
}

function applyFilters() {
    filteredQuestions = questions.filter(q => selectedCategories.includes(q.category));
    questionCountInfo.textContent = `(${filteredQuestions.length} seleccionadas)`;

    if (filteredQuestions.length === 0) {
        questionText.textContent = "Por favor, selecciona al menos un tema.";
        optionsContainer.innerHTML = '';
        categoryLabel.textContent = "-";
        feedback.textContent = '';
        explanationEl.style.display = 'none';
        nextBtn.style.display = 'none';
    } else if (stats.sessionActive && (currentQuestionIndex === -1 || !selectedCategories.includes(questions[currentQuestionIndex]?.category))) {
        showNextQuestion();
    }
}

function loadStats() {
    const saved = localStorage.getItem('bk_quiz_stats_v2'); // New version for extended stats
    if (saved) {
        stats = { ...stats, ...JSON.parse(saved) };
        updateStatsUI();
    }
}

function saveStats() {
    localStorage.setItem('bk_quiz_stats_v2', JSON.stringify(stats));
    updateStatsUI();
}

function updateStatsUI() {
    correctCountEl.textContent = stats.correct;
    wrongCountEl.textContent = stats.wrong;

    // KPI Updates
    categoryKpisContainer.innerHTML = '';
    const categories = [...new Set(questions.map(q => q.category))].sort();
    categories.forEach(cat => {
        const catStat = stats.categoryStats[cat] || { correct: 0, total: 0 };
        const percent = catStat.total > 0 ? Math.round((catStat.correct / catStat.total) * 100) : 0;

        const kpiItem = document.createElement('div');
        kpiItem.className = 'kpi-item';
        kpiItem.innerHTML = `
            <div class="kpi-label">
                <span>${cat}</span>
                <span>${percent}%</span>
            </div>
            <div class="kpi-bar-bg">
                <div class="kpi-bar-fill" style="width: ${percent}%"></div>
            </div>
        `;
        categoryKpisContainer.appendChild(kpiItem);
    });

    historyList.innerHTML = '';
    stats.history.slice().reverse().slice(0, 10).forEach(item => {
        const div = document.createElement('div');
        div.className = 'history-item';
        const statusClass = item.correct ? 'correct-tag' : 'wrong-tag';
        const statusText = item.correct ? 'ACIERTO' : 'ERROR';
        div.innerHTML = `
            <span>${item.question.substring(0, 30)}...</span>
            <span class="${statusClass}">${statusText}</span>
        `;
        historyList.appendChild(div);
    });

    updateProgress();
}

function showNextQuestion() {
    feedback.textContent = '';
    if (filteredQuestions.length === 0) return;

    // Check if any currently selected theme is exhausted
    const activeThemes = [...new Set(filteredQuestions.map(q => q.category))];
    activeThemes.forEach(cat => {
        const totalInCat = questions.filter(q => q.category === cat).length;
        const askedInCat = stats.sessionAsked.filter(id => {
            const q = questions.find(quest => quest.id === id);
            return q && q.category === cat;
        }).length;

        if (askedInCat >= totalInCat && selectedCategories.includes(cat)) {
            // Theme completed!
            updateCategorySelection(cat, false);
            // Refresh checkboxes UI immediately
            const cb = themeOptionsContainer.querySelector(`input[value="${cat}"]`);
            if (cb) {
                cb.checked = false;
                cb.disabled = true;
                const label = cb.parentElement;
                label.classList.add('completed-theme');
                const span = label.querySelector('span');
                if (span && !span.textContent.includes('✓')) {
                    span.textContent += ' ✓';
                }
            }

            feedback.textContent = `¡Tema "${cat}" completado! Selecciona uno nuevo.`;
            feedback.style.color = '#d62300';
        }
    });

    // Re-filter after potential auto-deselection
    filteredQuestions = questions.filter(q => selectedCategories.includes(q.category));

    if (filteredQuestions.length === 0) {
        questionText.textContent = "Has completado todos los temas seleccionados. ¡Excelente trabajo! Por favor, selecciona nuevos temas para continuar.";
        optionsContainer.innerHTML = '';
        categoryLabel.textContent = "-";
        nextBtn.style.display = 'none';
        return;
    }

    // Non-repetition logic: find questions not yet asked in this session
    let availableQuestions = filteredQuestions.filter(q => !stats.sessionAsked.includes(q.id));

    if (availableQuestions.length === 0) {
        // This part should technically not be reached with the auto-close logic above,
        // but kept as safety
        stats.sessionAsked = stats.sessionAsked.filter(id => !filteredQuestions.some(q => q.id === id));
        availableQuestions = [...filteredQuestions];
    }

    explanationEl.style.display = 'none';
    nextBtn.style.display = 'none';
    optionsContainer.innerHTML = '';

    // Pick random from available
    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    const q = availableQuestions[randomIndex];

    currentQuestionIndex = questions.findIndex(quest => quest.id === q.id);
    categoryLabel.textContent = q.category;
    questionText.textContent = q.question;

    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.onclick = () => handleAnswer(idx);
        optionsContainer.appendChild(btn);
    });

    updateProgress();
}

function handleAnswer(selectedIndex) {
    const q = questions.find(quest => quest.id === questions[currentQuestionIndex].id);
    const isCorrect = selectedIndex === q.correct;

    // Mark as asked in this session
    if (!stats.sessionAsked.includes(q.id)) {
        stats.sessionAsked.push(q.id);
    }

    // Update Category Stats
    if (!stats.categoryStats[q.category]) {
        stats.categoryStats[q.category] = { correct: 0, total: 0 };
    }
    stats.categoryStats[q.category].total++;
    if (isCorrect) stats.categoryStats[q.category].correct++;

    const buttons = optionsContainer.querySelectorAll('.option-btn');
    buttons.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === q.correct) btn.classList.add('correct');
        if (idx === selectedIndex && !isCorrect) btn.classList.add('wrong');
    });

    if (isCorrect) {
        stats.correct++;
        feedback.textContent = '¡Correcto! Muy bien.';
        feedback.style.color = '#4caf50';
    } else {
        stats.wrong++;
        feedback.textContent = 'Oh, incorrecto.';
        feedback.style.color = '#f44336';
    }

    explanationEl.innerHTML = `<strong>Explicación:</strong> ${q.explanation}`;
    explanationEl.style.display = 'block';

    stats.history.push({
        question: q.question,
        correct: isCorrect,
        timestamp: new Date().toISOString()
    });

    saveStats();
    nextBtn.style.display = 'block';
}

function updateProgress() {
    const totalAns = stats.correct + stats.wrong;
    const progress = totalAns > 0 ? Math.round((stats.correct / totalAns) * 100) : 0;
    progressFill.style.width = `${progress}%`;
    const progressText = document.getElementById('progressText');
    if (progressText) progressText.textContent = `${progress}%`;
}

function resetHistory() {
    if (confirm('¿Estás seguro? Se borrarán puntuaciones, KPIs y sesiones.')) {
        stats = {
            correct: 0,
            wrong: 0,
            history: [],
            userName: '',
            sessionActive: false,
            sessionAsked: [],
            categoryStats: {}
        };
        saveStats();
        location.reload();
    }
}

init();
