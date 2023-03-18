FROM public.ecr.aws/lambda/nodejs:14

COPY . .

RUN npm ci

CMD ["npm","run","watch"]
