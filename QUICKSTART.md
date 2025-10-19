# 🚀 Quick Start Guide

## ⚡ Para começar AGORA

```bash
# 1. Instalar dependências (já feito!)
npm install

# 2. Iniciar servidor de desenvolvimento
npm run dev

# 3. Abrir no navegador
# http://localhost:3000
```

## ✅ O que já está pronto

✅ Site completo com 12 seções  
✅ Design responsivo (mobile + desktop)  
✅ Modo claro e escuro  
✅ Animações suaves  
✅ Cores da bandeira francesa  
✅ Header fixo com navegação  
✅ Footer com redes sociais  
✅ Todas as seções funcionais  

## 🎯 Próximos Passos (IMPORTANTE!)

### 1. Personalize AGORA (15 min)

#### a) Chave PIX
📁 `src/components/sections/HowToContribute.tsx`
```typescript
const pixKey = 'SUBSTITUA_AQUI' // ⚠️ OBRIGATÓRIO
```

#### b) Redes Sociais (5 arquivos)
Buscar e substituir em todo projeto:
- `seuemail@example.com` → seu e-mail
- `@seuusuario` → seu Instagram
- `/in/seulinkedin` → seu LinkedIn
- Atualizar links do GitHub

#### c) Sua História
📁 `src/components/sections/MyStory.tsx`
- Personalize o texto
- Adicione sua foto

#### d) Seus Projetos
📁 `src/components/sections/Projects.tsx`
- Adicione seus projetos reais
- Links para GitHub/demo

#### e) Experiência
📁 `src/components/sections/Experience.tsx`
- Adicione experiências reais

### 2. Atualize Valores da Vaquinha

📁 `src/components/sections/Progress.tsx`
```typescript
const currentAmount = 0 // Atualizar quando receber doações
const goalAmount = 30000 // Sua meta
const supportersCount = 0 // Número de apoiadores
```

📁 `src/components/sections/BudgetBreakdown.tsx`
- Ajuste valores de despesas conforme sua realidade

### 3. Deploy (5 min)

```bash
# Opção A: Deploy automático via GitHub
git add .
git commit -m "Personalização inicial"
git push

# Depois: vercel.com/new → Import do GitHub

# Opção B: Deploy direto via CLI
npm i -g vercel
vercel
```

## 📚 Documentação Completa

- 📖 `README.md` - Visão geral e instruções
- ⚙️ `CUSTOMIZATION.md` - Guia de personalização detalhado
- 🚀 `DEPLOY.md` - Guia completo de deployment

## 🎨 Estrutura do Projeto

```
src/
├── app/
│   ├── globals.css          # Estilos globais
│   ├── layout.tsx            # Layout principal
│   └── page.tsx              # Página inicial
├── components/
│   ├── ui/
│   │   ├── Button.tsx        # Componente de botão
│   │   ├── Card.tsx          # Componente de card
│   │   └── Section.tsx       # Componente de seção
│   ├── sections/
│   │   ├── HeroSection.tsx      # Seção hero
│   │   ├── MyStory.tsx          # Sua história
│   │   ├── AcademicJourney.tsx  # Trajetória acadêmica
│   │   ├── Projects.tsx         # Projetos
│   │   ├── Experience.tsx       # Experiência
│   │   ├── AboutExchange.tsx    # Sobre intercâmbio
│   │   ├── BudgetBreakdown.tsx  # Orçamento
│   │   ├── Progress.tsx         # Progresso
│   │   ├── HowToContribute.tsx  # Como contribuir
│   │   ├── Gratitude.tsx        # Agradecimentos
│   │   ├── FollowJourney.tsx    # Acompanhe a jornada
│   │   └── Contact.tsx          # Contato/FAQ
│   ├── Header.tsx            # Cabeçalho
│   ├── Footer.tsx            # Rodapé
│   └── ThemeProvider.tsx     # Provedor de tema
```

## 🎯 Checklist Pré-Deploy

- [ ] Chave PIX atualizada
- [ ] Links de redes sociais corretos
- [ ] Textos personalizados
- [ ] Valores de orçamento ajustados
- [ ] Informações do intercâmbio corretas
- [ ] E-mail de contato atualizado
- [ ] FAQ relevante
- [ ] Testado no navegador

## 🐛 Problemas Comuns

### Porta 3000 em uso
```bash
# O Next.js usa automaticamente 3001
# Ou force a porta 3002:
next dev -p 3002
```

### Erros de Build
```bash
# Limpar cache e reinstalar:
rm -rf .next node_modules
npm install
npm run dev
```

## 💡 Dicas

1. **Teste sempre no mobile** - Use DevTools (F12) para testar responsividade
2. **Atualize o progresso regularmente** - Mantém os doadores engajados
3. **Compartilhe nas redes** - Use o link do deploy
4. **Adicione fotos reais** - Torna o site mais pessoal
5. **Mantenha transparência** - Atualize sobre o uso do dinheiro

## 🎉 Seu Site Está Pronto!

Agora é só:
1. Personalizar o conteúdo
2. Fazer deploy
3. Compartilhar o link
4. Alcançar seu objetivo! 🇫🇷

---

**Boa sorte com seu intercâmbio! 💙🤍❤️**

Dúvidas? Consulte os arquivos:
- `README.md` para visão geral
- `CUSTOMIZATION.md` para personalização detalhada
- `DEPLOY.md` para instruções de deployment
