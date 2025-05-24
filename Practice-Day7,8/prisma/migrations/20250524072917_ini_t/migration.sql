-- CreateTable
CREATE TABLE "Dummy_user" (
    "user_id" SERIAL NOT NULL,
    "user_name" TEXT NOT NULL,
    "emailid" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phoneno" TEXT NOT NULL,

    CONSTRAINT "Dummy_user_pkey" PRIMARY KEY ("user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Dummy_user_emailid_key" ON "Dummy_user"("emailid");
