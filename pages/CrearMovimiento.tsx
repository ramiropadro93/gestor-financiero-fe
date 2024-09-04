import CrearMovimientoForm from "@/components/CrearMovimientoForm";
import { useState } from "react";

const CrearMovimiento = () => {
  const [descripcion, setDescripcion] = useState('');
  const [tipo, setTipo] = useState('Gasto');
  const [monto, setMonto] = useState(0);
  const [categoria, setCategoria] = useState('');
  const [recurrente, setRecurrente] = useState(false);
  const [medio, setMedio] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch('/api/movimientos/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        descripcion,
        tipo,
        monto,
        categoria,
        recurrente,
        medio,
      }),
    });

    if (response.ok) {
      alert('Movimiento creado con éxito');
      // Limpiar el formulario o redirigir
    } else {
      alert('Error al crear el movimiento');
    }
  };

  return (
    <div className="max-w-md mx-auto">
		<CrearMovimientoForm />
	</div>
  );
};

export default CrearMovimiento;
