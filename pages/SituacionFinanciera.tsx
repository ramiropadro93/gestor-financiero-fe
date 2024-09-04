import TablaTransaccion from '@/components/TablaTransaccion';
import { Movimiento } from '@/models/Movimiento';
import { GetMovimientos } from '@/services/MovimientoService';
import { useEffect, useState } from 'react';

const SituacionFinanciera = () => {
    const [movimientos, setMovimientos] = useState<Movimiento[]>([]);

    const getMovimientos = async () => {
        const response = await GetMovimientos();
        setMovimientos(response);
    };

    useEffect(() => {
        getMovimientos();
    }, []);

    return (
        <div className="flex flex-col items-center my-5">
            <div className="flex flex-col w-2/3 gap-10">
                <div className="flex">
                    <h1 className="text-2xl font-bold">Situación Financiera</h1>
                </div>
                <div className="flex flex-col gap-5">
                    <h2 className='text-base font-semibold'>Movimientos</h2>
                    <TablaTransaccion movimientos={movimientos} />
                </div>
            </div>
        </div>
    );
};

export default SituacionFinanciera;
