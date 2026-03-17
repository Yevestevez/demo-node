export interface CRUD<T extends { id: unknown }> {
    readAll: () => T[];
    readById: (id: T['id']) => T;
    create: (data: Omit<T, 'id'>) => T;
    update: (id: T['id'], data: Partial<Omit<T, 'id'>>) => T;
    delete: (id: T['id']) => void;
}
