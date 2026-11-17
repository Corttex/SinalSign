# Dockerfile Otimizado para Coolify / VPS
FROM node:20-alpine AS builder

RUN apk add --no-cache libc6-compat
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
ENV DATABASE_URL="postgresql://dummy:dummy@localhost:5432/dummy"

# Copia explicitamente os arquivos de manifesto para garantir integridade
COPY package.json package-lock.json ./
COPY prisma ./prisma/

# Instala as dependências travadas pelo lockfile
RUN npm ci || npm install

# Copia todo o código fonte
COPY . .

# Gera o client do Prisma e compila o Next.js
RUN npx prisma generate
RUN npm run build

# Imagem de execução final
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
RUN mkdir .next && chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json
COPY --from=builder --chown=nextjs:nodejs /app/prisma ./prisma

USER nextjs

EXPOSE 3000

CMD ["npm", "start"]
