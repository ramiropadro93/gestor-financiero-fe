import { API_URL } from '@/constants/constants';
import { getApi, postApi } from '@/helpers/ApiUtility';

export const AddOrUpdateMovimiento = async (objeto: any) => {
    const url = API_URL + '/create';
    const response = await postApi(url, objeto);
    return response;
};

export const GetMovimientos = async () => {
    const url = API_URL + '/get';
    const response = await getApi(url);
    return response;
};

export const GetMovimientosByCategorias = async () => {
    const url = API_URL + '/gastosPorCategoriaPDF';
    const response = await getApi(url);
    return response;
};
