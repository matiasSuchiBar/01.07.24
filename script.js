const fs = require('fs')
// fs significa 'file system', é um módulo do js que interfere com os arquivos do sistema, ou seja, importa e exporta dados locais, como texto, fotos, pastas, etc.

// readFile significa "ler o arquivo" de um arquivo de texto
fs.readFile('texto.txt', 'utf8', (erro, data) => {
    if(erro){
        console.log(erro);
        return
    }

    console.log(data);
})

// write file significa 'escrever no arquivo'
const conteudo = 'Texto para ser sobreescrito no arquivo'

fs.writeFile('texto.txt', conteudo, 'utf8', (erro) => 
{
    if(erro){
        console.log(erro);
        return
    }

    console.log('Arquivo foi sobreescrito com sucesso!');
})

const novaPasta = 'novaPasta';

if(!fs.existsSync(novaPasta)){
    fs.mkdir(novaPasta, (erro) => {
        if(erro){
            console.log(erro);
            return
        }

        console.log('pasta criada com sucesso!');
    });

} else {
    console.log('a pasta ja existe!');
}

// listar arquivos (read = ler, dir = diretório [pasta] )
fs.readdir('.', (erro, arquivos) => {
    if(erro) {
        console.log(erro);
        return;
    }

    console.log('Arquivo na pasta atual: ', arquivos);
})

// renomear 
const arquivoParaRenomear = 'nomeAntigo.txt' ;
const novoNome = 'novoNome.txt' ;

if (fs.existsSync(arquivoParaRenomear)) {
    fs.rename(arquivoParaRenomear, novoNome, (erro) => {
        if(erro) {
            console.log(erro)
            return
        }

        console.log('Arquivo renomeado com sucesso!');
    })
} else {
    console.log('O arquivo a ser renomeado não existe!');
}

// excluir
const arquivoParaExcluir = 'texto.txt';

if(fs.existsSync(arquivoParaExcluir)) {
    fs.unlink(arquivoParaExcluir, (erro) => {
        if(erro) {
            console.log(erro);
             return;
        }

        console.log('Arquivo excluido com sucesso!');
    });

} else {
    console.log('O arquivo a ser excluido não existe!');
}


const origem = 'origem.txt';
const destino  = 'destino.txt';

fs.copyFile(origem, destino, (erro) => {
    if(erro) {
        console.log(erro);
        return;
    }

    console.log('Arquivo copiado com sucesso!');
})

const conteudoAppend = 'melhor prof, com os aluno comédia'

fs.appendFile(origem, conteudoAppend, 'utf8', (erro) => {
    if(erro) {
        console.log(erro);
        return;
    }

    console.log('Arquivo add com sucesso!');
});

// monitora mudanças em um determinado arq.

const monitorar = 'origem.txt' 

fs.watch(monitorar, (arquivo) => {
    if(arquivo) {
        console.log(`${arquivo} foi modificado!`);
    } console.log('deu ruim');
})