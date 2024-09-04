import { Movimiento } from '@/models/Movimiento';
import React from 'react';

interface TransactionTableProps {
    movimientos: Movimiento[];
}

const TablaTransaccion: React.FC<TransactionTableProps> = ({ movimientos }) => {
    const setearColorTexto = (tipoMovimiento: string) => {
        if (tipoMovimiento == 'Ingreso') {
            return 'text-green-500';
        } else {
            return 'text-red-500';
        }
    };

    const getSaldo = () => {
        let saldo = 0;
        movimientos.forEach((transaction) => {
            if (transaction.tipomovimiento == 'Ingreso') {
                saldo += parseFloat(transaction.monto);
            } else {
                saldo -= parseFloat(transaction.monto);
            }
        });
        return saldo;
    };

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr className="bg-gray-200 text-gray-700">
                        <th className="px-4 py-2 text-left">Descripcion</th>
                        <th className="px-4 py-2 text-left">Monto</th>
                        <th className="px-4 py-2 text-left">Fecha</th>
                        <th className="px-4 py-2 text-left">Medio de pago</th>
                        <th className="px-4 py-2 text-left">Categoria</th>
                    </tr>
                </thead>
                <tbody>
                    {movimientos &&
                        movimientos.length > 0 &&
                        movimientos.map((transaction, index) => (
                            <tr key={index} className="border-t">
                                <td className="px-4 py-2">
                                    {transaction.descripcion}
                                </td>
                                <td className="px-4 py-2">
                                    <span
                                        className={`font-semibold text-base ${setearColorTexto(
                                            transaction.tipomovimiento
                                        )}`}
                                    >
                                        {transaction.monto}
                                    </span>
                                </td>
                                <td className="px-4 py-2">
                                    {new Date(
                                        transaction.fecha
                                    ).toLocaleDateString()}
                                </td>
                                <td className="px-4 py-2">
                                    {transaction.mediopago}
                                </td>
                                <td className="px-4 py-2">
                                    {transaction.categoria}
                                </td>
                            </tr>
                        ))}
                    <tr>
                        <td className="px-4 py-2">Total</td>
                        <td className="px-4 py-2">
                            <span className="font-semibold text-base">
                                {getSaldo().toFixed(2)}
                            </span>
                        </td>
                        <td className="px-4 py-2"></td>
                        <td className="px-4 py-2"></td>
                        <td className="px-4 py-2"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TablaTransaccion;
