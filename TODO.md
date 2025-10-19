# 🎯 Lista de TODOs - Personalizações Obrigatórias

## ⚠️ CRÍTICO - Atualizar ANTES do Deploy

### 1. Chave PIX (OBRIGATÓRIO)
- [ ] `src/components/sections/HowToContribute.tsx` - linha 10
  ```typescript
  const pixKey = 'seuemail@example.com' // ← SUBSTITUIR
  ```

### 2. E-mail de Contato (7 ocorrências)
Buscar e substituir `seuemail@example.com` em:
- [ ] `src/components/Footer.tsx`
- [ ] `src/components/sections/MyStory.tsx`
- [ ] `src/components/sections/HowToContribute.tsx`
- [ ] `src/components/sections/Contact.tsx`

### 3. Instagram (6 ocorrências)
Buscar e substituir `@seuusuario` em:
- [ ] `src/components/sections/FollowJourney.tsx`
- [ ] `src/components/sections/Contact.tsx`
- [ ] `src/components/Footer.tsx`

### 4. LinkedIn (5 ocorrências)
Buscar e substituir `/in/seulinkedin` em:
- [ ] `src/components/Footer.tsx`
- [ ] `src/components/sections/MyStory.tsx`
- [ ] `src/components/sections/Contact.tsx`

### 5. GitHub
- [ ] Atualizar link para seu perfil em:
  - `src/components/Footer.tsx`
  - `src/components/sections/MyStory.tsx`
  - `README.md`

## 📝 IMPORTANTE - Conteúdo Textual

### Minha História
- [ ] `src/components/sections/MyStory.tsx`
  - Substituir texto pela sua biografia real
  - Adicionar foto pessoal (substituir emoji 📸)
  - Atualizar links sociais

### Trajetória Acadêmica
- [ ] `src/components/sections/AcademicJourney.tsx`
  - Verificar se as conquistas refletem sua realidade
  - Ajustar instituição de ensino se necessário

### Projetos
- [ ] `src/components/sections/Projects.tsx`
  - Substituir pelos seus 2-3 projetos reais
  - Adicionar links corretos (GitHub + Demo)
  - Trocar emojis por imagens reais
  - Atualizar tecnologias usadas

### Experiência Profissional
- [ ] `src/components/sections/Experience.tsx`
  - Atualizar informações da Petlove ou adicionar outras experiências
  - Verificar período, cargo e descrição
  - Ajustar tecnologias

### Sobre o Intercâmbio
- [ ] `src/components/sections/AboutExchange.tsx`
  - Nome correto da universidade francesa
  - Cidade específica
  - Datas exatas (não só "Janeiro 2026")
  - Duração precisa

### Orçamento
- [ ] `src/components/sections/BudgetBreakdown.tsx`
  - Verificar TODOS os valores (atualmente estimados)
  - Ajustar total se necessário
  - Adicionar ou remover categorias conforme necessário

### Progresso da Vaquinha
- [ ] `src/components/sections/Progress.tsx`
  ```typescript
  const currentAmount = 5000 // ← Valor inicial (atualizar regularmente)
  const goalAmount = 30000  // ← Sua meta total
  const supportersCount = 23 // ← Número de apoiadores
  ```

### FAQ
- [ ] `src/components/sections/Contact.tsx`
  - Revisar todas as perguntas e respostas
  - Adicionar/remover perguntas conforme necessário

## 🎨 Opcional mas Recomendado

### Imagens
- [ ] Criar pasta `public/images/`
- [ ] Adicionar sua foto → `public/images/profile.jpg`
- [ ] Adicionar fotos de projetos → `public/images/projects/`
- [ ] Gerar QR Code PIX → `public/images/qr-code-pix.png`
- [ ] Atualizar componentes para usar imagens reais

### QR Code PIX Real
- [ ] Instalar: `npm install qrcode.react`
- [ ] Implementar em `HowToContribute.tsx`:
  ```typescript
  import QRCodeReact from 'qrcode.react'
  <QRCodeReact value={pixKey} size={256} />
  ```

### Metadata SEO
- [ ] `src/app/layout.tsx`
  - Título personalizado
  - Descrição otimizada
  - Keywords relevantes

### Redes Sociais (Links)
- [ ] `src/components/sections/FollowJourney.tsx`
  - YouTube (se tiver)
  - Instagram
  - Outros canais

## 🚀 Antes do Deploy

### Teste Local
- [ ] Rodar `npm run dev`
- [ ] Testar todas as seções
- [ ] Verificar links funcionando
- [ ] Testar modo claro/escuro
- [ ] Testar em mobile (DevTools)

### Build de Produção
- [ ] Rodar `npm run build`
- [ ] Verificar sem erros
- [ ] Rodar `npm start` e testar

### Deploy Checklist
- [ ] Código commitado no GitHub
- [ ] Todos os TODOs acima completos
- [ ] README.md atualizado (opcional)
- [ ] Deploy na Vercel
- [ ] Testar site em produção
- [ ] Verificar certificado SSL (https)

## 📊 Manutenção Regular

### Atualizar Semanalmente
- [ ] Progresso da vaquinha (`Progress.tsx`)
- [ ] Número de apoiadores
- [ ] Posts nas redes sociais sobre progresso

### Adicionar Conforme Necessário
- [ ] Novos projetos
- [ ] Novas experiências profissionais
- [ ] Atualizações do intercâmbio
- [ ] Novas perguntas no FAQ

## 🎯 Prioridades

**Alta Prioridade (Fazer AGORA):**
1. ✅ Chave PIX
2. ✅ E-mail de contato
3. ✅ Links de redes sociais
4. ✅ Valores de orçamento corretos
5. ✅ Informações do intercâmbio

**Média Prioridade (Antes do Deploy):**
1. ⚠️ Textos personalizados
2. ⚠️ Projetos reais
3. ⚠️ Experiências atualizadas
4. ⚠️ FAQ relevante

**Baixa Prioridade (Pode fazer depois):**
1. 📌 Imagens reais
2. 📌 QR Code real
3. 📌 Analytics
4. 📌 Domínio personalizado

---

## ✅ Checklist Rápido

Antes de compartilhar o site:
- [ ] Todos os "OBRIGATÓRIO" completos
- [ ] Testado no navegador
- [ ] Testado no celular
- [ ] Links funcionando
- [ ] Site no ar (deploy feito)
- [ ] Link copiado para compartilhar

**Status:** 🔴 Precisa de personalização  
**Depois de personalizar:** 🟢 Pronto para deploy!

---

💡 **Dica:** Use o atalho Ctrl+F (ou Cmd+F) para buscar e substituir todos os placeholders de uma vez no VS Code!
