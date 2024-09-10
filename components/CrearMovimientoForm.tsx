import { Categoria } from '@/models/Categoria';
import { MedioPago } from '@/models/MedioPago';
import { TipoMovimiento } from '@/models/TipoMovimiento';
import { AddOrUpdateMovimiento } from '@/services/MovimientoService';
import { useRouter } from 'next/router';
import { useState } from 'react';

const CrearMovimientoForm = () => {
    const [tipoMovimiento, setTipoMovimiento] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [fechaMovimiento, setFechaMovimiento] = useState('');
    const [monto, setMonto] = useState(0);
    const [categoria, setCategoria] = useState('');
    const [recurrente, setRecurrente] = useState(false);
    const [medio, setMedio] = useState('');

    const router = useRouter();

    const tiposMovimiento: TipoMovimiento[] = [
        { Id: 1, Nombre: 'Ingreso' },
        { Id: 2, Nombre: 'Egreso' },
    ];

    const categoriasIngreso: Categoria[] = [
        { Id: 1, Nombre: 'Salario' },
        { Id: 2, Nombre: 'Ventas' },
    ];

    const categoriasEgreso: Categoria[] = [
        { Id: 1, Nombre: 'Delivery' },
        { Id: 2, Nombre: 'Comida' },
        { Id: 3, Nombre: 'Transporte' },
        { Id: 4, Nombre: 'Entretenimiento' },
        { Id: 5, Nombre: 'Educación' },
        { Id: 6, Nombre: 'Salud' },
        { Id: 7, Nombre: 'Ropa' },
        { Id: 8, Nombre: 'Hogar' },
        { Id: 9, Nombre: 'Otros' },
        { Id: 10, Nombre: 'Impuestos' },
        { Id: 11, Nombre: 'Servicios' },
        { Id: 12, Nombre: 'Ahorro' },
    ];

    const mediosPago: MedioPago[] = [
        { Id: 1, Nombre: 'Efectivo' },
        { Id: 2, Nombre: 'Tarjeta de crédito' },
        { Id: 3, Nombre: 'Tarjeta de débito' },
        { Id: 4, Nombre: 'Transferencia' },
        { Id: 5, Nombre: 'Mercado pago' },
    ];

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const body = {
            TipoMovimiento: tipoMovimiento,
            FechaMovimiento: fechaMovimiento,
            Monto: monto,
            Descripcion: descripcion,
            Categoria: categoria,
            Recurrente: recurrente,
            Medio: medio,
        };

        const Result = await AddOrUpdateMovimiento(body);

        if (Result) router.push('/SituacionFinanciera');
    };

    const setearMedio = (medioId: number) => {
        const medioPago = mediosPago.find(
            (objeto: MedioPago) => objeto.Id == medioId
        );
        setMedio(medioPago?.Nombre || '');
    };

    const setearCategoria = (categoriaId: number) => {
        if (tipoMovimiento == 'Ingreso') {
            const categoria = categoriasIngreso.find(
                (objeto: Categoria) => objeto.Id == categoriaId
            );
            setCategoria(categoria?.Nombre || '');
        } else {
            const categoria = categoriasEgreso.find(
                (objeto: Categoria) => objeto.Id == categoriaId
            );
            setCategoria(categoria?.Nombre || '');
        }
    };

    const setearTipoMovimiento = (tipoMovimientoId: number) => {
        const tipoMovimiento = tiposMovimiento.find(
            (objeto: TipoMovimiento) => objeto.Id == tipoMovimientoId
        );
        setTipoMovimiento(tipoMovimiento?.Nombre || '');
    };

    const setearMonto = (monto: number) => {
        setMonto(monto);
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto mt-6">
            <h2 className="text-xl font-semibold mb-4 text-center">
                Crear nuevo movimiento
            </h2>
            <div className="mb-4">
                <label
                    htmlFor="tipo"
                    className="block text-gray-700 font-bold mb-2"
                >
                    Tipo de movimiento:
                </label>
                <select
                    id="tipo"
                    onChange={(e: any) => setearTipoMovimiento(e.target.value)}
                    className="block w-full border border-gray-300 p-2 rounded"
                    required
                >
                    <option value={0}>Seleccione un tipo de movimiento</option>
                    {tiposMovimiento.map((objeto: TipoMovimiento) => (
                        <option key={objeto.Id} value={objeto.Id}>
                            {objeto.Nombre}
                        </option>
                    ))}
                </select>
            </div>
            <div className="mb-4">
                <label
                    htmlFor="fechaMovimiento"
                    className="block text-gray-700 font-bold mb-2"
                >
                    Fecha del Movimiento:
                </label>
                <input
                    type="date"
                    className="block w-full border border-gray-300 p-2 rounded"
                    required
                    onChange={(e) => setFechaMovimiento(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <label
                    htmlFor="descripcion"
                    className="block text-gray-700 font-bold mb-2"
                >
                    Descripción:
                </label>
                <input
                    id="descripcion"
                    type="text"
                    className="block w-full border border-gray-300 p-2 rounded"
                    required
                    onChange={(e) => setDescripcion(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="monto"
                    className="block text-gray-700 font-bold mb-2"
                >
                    Monto:
                </label>
                <input
                    id="monto"
                    type="number"
                    className="block w-full border border-gray-300 p-2 rounded"
                    required
                    onChange={(e) => setearMonto(Number(e.target.value))}
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="categoria"
                    className="block text-gray-700 font-bold mb-2"
                >
                    Categoría:
                </label>
                {tipoMovimiento == 'Ingreso' ? (
                    <select
                        id="tipo"
                        onChange={(e: any) => setearCategoria(e.target.value)}
                        className="block w-full border border-gray-300 p-2 rounded"
                        required
                    >
                        <option value={0}>Seleccione una categoría</option>
                        {categoriasIngreso.map((objeto: Categoria) => (
                            <option key={objeto.Id} value={objeto.Id}>
                                {objeto.Nombre}
                            </option>
                        ))}
                    </select>
                ) : (
                    <select
                        id="tipo"
                        onChange={(e: any) => setearCategoria(e.target.value)}
                        className="block w-full border border-gray-300 p-2 rounded"
                        required
                    >
                        <option value={0}>Seleccione una categoría</option>
                        {categoriasEgreso.map((objeto: Categoria) => (
                            <option key={objeto.Id} value={objeto.Id}>
                                {objeto.Nombre}
                            </option>
                        ))}
                    </select>
                )}
            </div>
            <div className="mb-4">
                <label
                    htmlFor="recurrente"
                    className="block text-gray-700 font-bold mb-2"
                >
                    Recurrente:
                </label>
                <input
                    id="recurrente"
                    type="checkbox"
                    className="form-checkbox size-5"
                    onChange={(e) => setRecurrente(e.target.checked)}
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="medio"
                    className="block text-gray-700 font-bold mb-2"
                >
                    Medio:
                </label>
                <select
                    id="medio"
                    onChange={(e: any) => setearMedio(e.target.value)}
                    className="block w-full border border-gray-300 p-2 rounded"
                    required
                >
                    <option value={0}>Seleccione un medio de pago</option>
                    {mediosPago.map((objeto: MedioPago) => (
                        <option key={objeto.Id} value={objeto.Id}>
                            {objeto.Nombre}
                        </option>
                    ))}
                </select>
            </div>
            <button
                type="submit"
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
            >
                Registrar movimiento
            </button>
        </form>
    );
};
export default CrearMovimientoForm;
