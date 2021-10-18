# Singleton

Permitir apenas uma instancia de uma classe, e garantir seu acesso global para a mesma. Ele e geralmente usado para cenarios que precisam de acesso compartilhado.

- Banco de dados;
- Servidor de arquivos;
- Servidor de impressao;
- Modulos de importacao;
- Objetos de config do sistema;

## Pontos de Acesso Global

- Variaveis ou recursos de acesso global;
- Encapsulamento privado da instancia;

## Caracteristicas

### Atributos

- Atributo estatico e privado para a instancia;
- Qualquer dado necessario

### Operacoes

- Construtor privado com a instancia, impedindo de criar uma nova instancia com o new;
- Getter para a instancia, caso nao exista e criada, se existir, retorna a propria instancia;
- Qualquer outra operacao necessaria;

### Exemplo

```typescript
	class Singleton {
		private static _instance: Singleton || null = null;

		private constructor() {

		}

		static get instance(): Singleton {
			if (Singleton._instance === null) {
				Singleton._instance = new Singleton();
			}

			return Singleton._instance;
		}
	}

const instance1 = Singleton.instance;
const instance2 = Singleton.instance;

console.log(instance1 === instance2);
```

### Aplicabilidade

- Precisa ter apenas uma instancia disponivel no programa;
- Usando variaveis globais para coisas importantes;

### Pros e Contras

PROPS

- Acesso controlado;
- Lazy instantiation;

CONTRAS

- Dificil de testar;
- Requer tratamento especial;
