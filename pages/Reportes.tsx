import ProtectedRoute from '@/components/auth/ProtectedRoute';
import { GetMovimientosByCategorias } from '@/services/MovimientoService';

const Reportes = () => {
    const getReporteMensual = async () => {
        const response = await GetMovimientosByCategorias();
        console.log('response', response);
    };

    return (
        <ProtectedRoute>
            <div className="flex flex-col items-center my-5">
                <div className="my-5">
                    <h1>Reportes</h1>
                </div>
                <div>
                    <h2>Septiembre</h2>
                    <button onClick={getReporteMensual}>
                        Descargar reporte
                    </button>
                </div>
            </div>
        </ProtectedRoute>
    );
};

export default Reportes;
