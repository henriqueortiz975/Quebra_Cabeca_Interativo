# Exercícios com DOM

---

## Exercício 1 — DOM na prática

Explique com suas palavras:

- o que é o DOM
- para que ele serve

---

## Exercício 2 — Modificação do DOM

Altere o projeto para:

- mudar o texto de outro elemento
- mudar a cor de outro elemento
- adicionar uma nova classe via JavaScript

---

## Exercício 3 — Nova Peça

Crie uma segunda peça:

Requisitos:

- deve iniciar bloqueada
- deve ter botão próprio
- deve mudar usando JavaScript
- deve alterar:
    - texto
    - cor
    - ícone

---

## Exercício 4 — Controle de Estado

Utilize variável:

```
letativo=false;
```

Implemente:

- impedir múltiplos cliques
- ou permitir alternar entre ativo/inativo

---

## Desafio — DOM Avançado

Crie uma função que:

- altera vários elementos ao mesmo tempo
- use `getElementById` em múltiplos elementos

---

## Desafio — Interação

Faça uma peça que:

- muda cor a cada clique
- usa lógica com `if`

---

## Entrega

- enviar no Google Sala de Aula
- Link repositório GitHub projeto completo
- [README.md](http://README.md) completo com o desenvolvimento do projeto

---

# EXERCÍCIOS + MELHORIA DO PROJETO

---

# 🧪 Exercício 1 — Múltiplas Peças (Obrigatório)

Crie:

- 4 peças clicáveis
- cada uma funciona de forma independente

Regras:

- inicia bloqueada
- muda ao clicar
- usa `toggle`

---

# 🧪 Exercício 2 — Personalização

Cada peça deve:

- ter cor diferente quando ativada
- ter emoji diferente
- ter texto diferente

---

# 🧪 Exercício 3 — Alterar Visual

Adicione:

- efeito ao passar o mouse (`hover`)
- animação ao clicar
- melhoria no layout

---

# 🧩 Exercício 4 — Contador

Implemente:

- contador de peças ativadas

Dica:

```jsx
document.querySelectorAll(".peca.ativa").length
```

---

# 🧩 MELHORIA NO PROJETO — FASE 1

## 🎯 Objetivo

Melhorar o quebra-cabeça deixando mais próximo de um sistema real.

---

## 🔧 Melhorias obrigatórias

### ✔ 1. Layout organizado

- usar grid
- espaçamento correto
- centralização

---

### ✔ 2. Feedback visual

- cor diferente ao ativar
- animação
- mudança de ícone

---

### ✔ 3. Interação direta

- remover botão
- clicar diretamente na peça

---

---

# 🧩 DESAFIO (NÍVEL MÉDIO)

👉 Criar regra:

> Apenas UMA peça pode ficar ativa por vez
> 

Dica lógica:

```jsx
// Antes de ativar uma peça
// remover "ativa" de todas
```

---

# 🧩 DESAFIO (NÍVEL AVANÇADO)

👉 Criar mensagem final:

Quando todas estiverem ativas:

```
"Parabéns, você completou a fase 1!"
```

Dica:

- usar contador
- verificar quantidade

---

# 📦 Entrega

Enviar:

```
Evolução no projeto do GitHub
```

Com:

- index.html
- style.css
- script.js

---

# 🎯 Critérios de Avaliação

| Critério | Pontos |
| --- | --- |
| Uso de múltiplos elementos | 2 |
| Uso de eventos | 2 |
| Manipulação de classes | 3 |
| Funcionamento geral | 2 |
| Organização e visual | 1 |

---

# 📌 Observação

O projeto deve:

- funcionar corretamente
- não conter erros
- apresentar organização
- demonstrar uso dos conceitos da aula

---

# EXERCÍCIOS + EVOLUÇÃO DO PROJETO

## 🧪 Exercício 1 — Regra simples

---

Implemente:

👉 Só pode ativar **2 peças**

---

# 🧪 Exercício 2 — Nova regra

Implemente:

👉 Só pode ativar **3 peças**

---

# 🧪 Exercício 3 — Bloqueio total

👉 Quando atingir o limite:

- impedir novos cliques
- mostrar mensagem

---

# 🧪 Exercício 4 — Mensagem dinâmica

Quando atingir o limite:

```jsx
"Limite atingido!"
```

---

# 🧩 MELHORIA NO PROJETO

## 🎯 Objetivo

Transformar o sistema em algo mais próximo de um jogo.

---

## 🔧 Implementações obrigatórias

### ✔ 1. Limite de peças

- máximo de peças ativas

---

### ✔ 2. Feedback ao usuário

- alert
- mensagem visual

---

### ✔ 3. Contador funcionando

- atualizar sempre

---

# 🧩 DESAFIO (NÍVEL MÉDIO)

👉 Criar:

- botão "Resetar"
- limpa todas as peças

Dica:

```jsx
// remover classe de todas
```

---

# 🧩 DESAFIO (NÍVEL AVANÇADO)

👉 Criar condição de vitória:

Quando:

- todas as peças estiverem ativas

Mostrar:

```jsx
"Você venceu!"
```

---

# 📦 Entrega

Enviar:

- projeto completo
- atualizado
- funcionando

---

# 🎯 Critérios de Avaliação

| Critério | Pontos |
| --- | --- |
| Uso de lógica (if) | 3 |
| Implementação de regras | 3 |
| Funcionamento | 2 |
| Organização | 1 |
| Visual | 1 |

---

# 📌 Observação

O aluno deve demonstrar:

- entendimento da lógica
- aplicação correta
- controle do sistema
