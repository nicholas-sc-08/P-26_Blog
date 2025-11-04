O Blog é uma plataforma dinâmica para compartilhamento de conteúdo e interação entre usuários. Ele permite que autores publiquem artigos, tutoriais e notícias em diferentes categorias, enquanto leitores podem visualizar, comentar e interagir com as postagens. A aplicação oferece funcionalidades de cadastro, login seguro com autenticação JWT, gerenciamento de postagens, comentários, curtidas e busca por conteúdos, proporcionando uma experiência completa e interativa para todos os usuários. Sendo utilizadas as tecnologias Typescript, Next.js, React, HTML, Tailwind para o front-end já para o back-end seria TypeScript, Json Web Token (JWT), PrismaORM, Fastify, Cors, PNPM e junto com o Node.js/ts-node.

| Requisito Funcional | Titulo | Descrição | Prioridade | Módulo/Área | Tipo do Usuário |
|---------------------|--------|-----------|------------|-------------|-----------------|
| RF-001 | Cadastro de Usuário | O sistema deve permitir o usuário poder realizar o cadastro na plataforma | Alta | Autenticação | USER |
| RF-002 | Login de Usuário | O sistema deve permitir o usuário poder realizar o login na plataforma | Alta | Autenticação | USER |
| RF-003 | Perfil de Usuário | O sistema deve permitir que o usuário consiga acessar o seu perfil e visualizar suas informações ou altera-las | Média | Usuário | USER |
| RF-004 | Logout | O sistema deve permitir que o usuário possa realizar o "logout" deslogando sua conta do sistema do navegador | Baixa | Usuário | USER |
| RF-005 | Criar Postagem | O sistema deve permitir que o escritor possa criar uma postagem dentro da plataforma | Alta | Postagem | ESCRITOR |
| RF-006 | Editar Postagem | O sistema deve permitir que o escritor possa editar a postagem já criada na plataforma | Alta | Postagem | ESCRITOR |
| RF-007 | Excluir Postagem | O sistema deve permitir que o escritor que criou a postagem possa excluir a postagem do sistema a qualquer momento | Alta | Postagem | ESCRITOR |
| RF-008 | Listar Postagem | O sistema deve listar todas as postagens escritas por todos os usuários do tipo "ESCRITOR" para os usuários do tipo "USER" possam visualizar as postagens no sistema | Alta | Postagem | USER |
| RF-009 | Comentar Postagem | O sistema deve permitir que os usuários do tipo "USER" possam comentar nas postagens realizadas pelos usuários do tipo "ESCRITOR" | Média | Postagem | USER |
| RF-010 | Editar Comentário | O sistema deve permitir que os usuários que realizaram os comentários nas postagens possam editar seus comentários | Média | Postagem | USER |
| RF-011 | Excluir Comentário | O sistema deve permitir que os usuários que criaram os comentários nas postagens possam excluir seus comentários | Média | Postagem | USER |
| RF-012 | Gerenciar Usuários | O sistema deve permitir que os usuários do tipo "ADMIN" possam gerenciar os usuários do tipo "USER" | Alta | Administração | ADMIN |

| Requisito Não Funional | Titulo | Descrição | Prioridade |
|------------------------|--------|-----------|------------|
| RF-001 | Segurança | Os dados sensiveis são armazenados no banco de dados criptografados com o bcrypt | Alta |
| RF-002 | Autenticação JWT | Ao realizar o login na plataforma, é feito uma autenticação JWT e se o login for válido é gerado um token temporário criptografado de 1hr | Alta |
| RF-003 | Responsividade | O sistema deve ser responsível em todos os tipos de tela ( Celulares, Tablets, Notebooks e PCs ) | Média |
| RF-004 | Performace | O sistema deve ter um tempo de resposta rápido, equivalente a no máximo 2seg | Alta |
| RF-005 | Banco de Dados | O sistema deve ter um banco de dados de SQL | Média |
| RF-006 | Logs | O sistema deve anunciar os erros em logs carro ocorra algum erro de resposta de api | Média |
