-- CreateTable
CREATE TABLE "Bebe" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Nome" TEXT NOT NULL,
    "dataNascimento" TEXT NOT NULL,
    "pesoNascimento" REAL NOT NULL,
    "altura" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "Mae" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "dataNascimento" TEXT NOT NULL,
    CONSTRAINT "Mae_id_fkey" FOREIGN KEY ("id") REFERENCES "Bebe" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Medico" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "CRM" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "celular" TEXT NOT NULL,
    "especialidade" TEXT NOT NULL,
    CONSTRAINT "Medico_id_fkey" FOREIGN KEY ("id") REFERENCES "Bebe" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
