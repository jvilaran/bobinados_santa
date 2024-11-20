// Días de la semana y horarios
const days = [
    { name: "Lunes", hours: "8 AM - 6 PM" },
    { name: "Martes", hours: "8 AM - 6 PM" },
    { name: "Miércoles", hours: "8 AM - 6 PM" },
    { name: "Jueves", hours: "8 AM - 6 PM" },
    { name: "Viernes", hours: "8 AM - 6 PM" },
    { name: "Sábado", hours: "9 AM - 2 PM" },
    { name: "Domingo", hours: "Cerrado" },
  ];
  
  // Obtener día actual
  const currentDayIndex = new Date().getDay(); // 0 es Domingo, 6 es Sábado
  const todayText = currentDayIndex === 0 ? "Cerrado" : `Abierto hoy de ${days[currentDayIndex - 1].hours}`;
  
  // Generar opciones
  const horarioSelect = document.getElementById("horario");
  days.forEach((day, index) => {
    const option = document.createElement("option");
    if (index === currentDayIndex - 1) {
      option.textContent = todayText;
      option.value = "hoy";
    } else {
      option.textContent = `${day.name}: ${day.hours}`;
      option.value = day.name.toLowerCase();
    }
    horarioSelect.appendChild(option);
  });
  