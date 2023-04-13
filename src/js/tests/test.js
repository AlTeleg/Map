import ErrorRepository from './error';

describe('ErrorRepository', () => {
    const errRep = new ErrorRepository();

    test('add function test', () => {
        expect(typeof errRep.add).toBe('function');
        errRep.add(404, 'Стандартный код ответа HTTP о том, что клиент был в состоянии общаться с сервером, но сервер не может найти данные согласно запросу');
        expect(errRep.errors.size).toBe(1);
    });

    test('translate code test', () => {
        const result1 = errRep.translate('404');
        expect(result1).toBe('Стандартный код ответа HTTP о том, что клиент был в состоянии общаться с сервером, но сервер не может найти данные согласно запросу');
        const result2 = errRep.translate('401');
        expect(result2).toBe('Unknown error');
      });
});
