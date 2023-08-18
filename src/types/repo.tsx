export type RepoType = {
    id: number;
    full_name: string;
    language: string;
    owner: {
        avatar_url: string;
        name: string;
        login:string;
        location: string;
        id:number;
        followers: number;
        public_repos: number;
        repos_url: string;
    }
}
// Foto, nome, login, localização, o ID, quantidade de seguidores, quantidade de repositórios públicos e uma lista com todos os repositórios(nome do repositório, linguagem utilizada, descriçao, data de criaçao, data do ultimo push)