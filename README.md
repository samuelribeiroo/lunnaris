<h1 align="start">
  Lunnaris AI - Construtor de Sites com Inteligência Artificial
</h1>

<img width="1280" alt="Astra Thumbnail" src="https://github.com/user-attachments/assets/8d11fc9c-8220-4d36-a0e3-271b73a7f23d">

## Introdução

Lunnaris é um site moderno e totalmente responsivo, construído com uma poderosa pilha de tecnologia. Este projeto demonstra o uso do Next.js para renderização no lado do servidor, TailwindCSS para um design elegante, Shadcn UI para componentes sofisticados e Clerk para autenticação segura.


## Stack utilizada

- **Next.js**: Para construir o site baseado em React.
- **TailwindCSS**: Para estilização com CSS utilitário.
- **Shadcn UI**: Para componentes de interface.
- **Magic UI**: Para componentes de interface.
- **Clerk**: Para autenticação de usuários.

## Início Rápido

### Pré-requisitos
Certifique-se de ter instalado:
- Node.js
- Git
- npm / yarn / pnpm / bun

1. Clone este repositório:

   ```bash
   git clone https://github.com/samuelribeiroo/lunnaris.git
   cd lunnaris-ai
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:

```bash
 # app
 NEXT_PUBLIC_URL=http://localhost:3000
 NEXT_PUBLIC_DOMAIN=localhost:3000

 # clerk
 CLERK_SECRET_KEY=
 NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
 NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
 NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
 NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
 NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

4. Inicie o servidor de desenvolvimento:
  ```bash
   npm run dev
   ```

