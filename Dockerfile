# Use oven/bun:1 as base image
FROM oven/bun:1 AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package.json bun.lockb ./
RUN bun install

# Build the application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN bun run build
RUN bun pm cache rm

# Set up runner environment
FROM base AS runner
WORKDIR /app
RUN addgroup --system --gid 1001 bunuser
RUN adduser --system --uid 1001 bunuser
COPY --from=builder /app .
USER bunuser
EXPOSE 3000
ENV PORT=3000
CMD ["bun", ".output/server/index.mjs"]
