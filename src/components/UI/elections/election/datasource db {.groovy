datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider      = "prisma-client-js"
  output        = "@prisma/client"
  binaryTargets = ["native", "rhel-openssl-1.0.x"]
}

model Eleitor {
  id        String   @id @default(uuid())
  nome      String
  cpf       String   @unique
  email     String?  @unique
  senha     String
  votou     Boolean  @default(false)
  createdAt DateTime @default(now())
}

model Candidato {
  id        String   @id @default(uuid())
  nome      String
  cpf       String   @unique
  partido   String
  cargo     String
  votos     Voto[]
  createdAt DateTime @default(now())
}

model Voto {
  id           String  @id @default(uuid())
  eleitorId    String
  eleitor      Eleitor @relation(fields: [eleitorId], references: [id])
  candidatoId  String
  candidato    Candidato @relation(fields: [candidatoId], references: [id])
  createdAt    DateTime @default(now())

  @@unique([eleitorId, candidatoId])
}

model Resultado {
  id         String   @id @default(uuid())
  candidato  Candidato
  votos      Int
}


model Eleicao {
  id            Int       @id @default(autoincrement())
  tipoEleicao   String
  dataInicio    DateTime
  dataFim       DateTime
  candidatos    Candidato[]
  votantes      Votante[]
  votos         Voto[]
}

model Candidato {
  id            Int       @id @default(autoincrement())
  nome          String
  partido       String
  eleicao       Eleicao   @relation(fields: [eleicaoId], references: [id])
  eleicaoId     Int
  votos         Voto[]
}

model Votante {
  id            Int       @id @default(autoincrement())
  nome          String
  cpf           String
  eleicao       Eleicao   @relation(fields: [eleicaoId], references: [id])
  eleicaoId     Int
  votos         Voto[]
}

model Voto {
  id            Int       @id @default(autoincrement())
  candidato     Candidato @relation(fields: [candidatoId], references: [id])
  candidatoId   Int
  votante       Votante   @relation(fields: [votanteId], references: [id])
  votanteId     Int
}

