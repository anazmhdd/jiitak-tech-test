# -------- Build Step --------
FROM node:18 as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# -------- Serve Step --------
FROM node:18
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
