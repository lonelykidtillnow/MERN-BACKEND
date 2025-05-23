-- CreateTable
CREATE TABLE "User" (
    "user_id" SERIAL NOT NULL,
    "email_id" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phoneno" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_id_key" ON "User"("email_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_phoneno_key" ON "User"("phoneno");
