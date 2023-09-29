interface Topico {
    id: number;
    descricao: string;
    autor: Autor;
    create_at: Date;
    tags: string[];
    active: boolean;
}