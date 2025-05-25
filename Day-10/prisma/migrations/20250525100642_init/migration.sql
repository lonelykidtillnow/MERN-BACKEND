-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('Male', 'Female');

-- CreateEnum
CREATE TYPE "Prooftype" AS ENUM ('AadharCard', 'PanCard', 'MarkSheet');

-- CreateEnum
CREATE TYPE "Payment" AS ENUM ('OfflinePay', 'BankTransfer', 'NetBanking');

-- CreateTable
CREATE TABLE "Students" (
    "roll_no" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" "Gender" NOT NULL,
    "dob" TEXT NOT NULL,
    "bloodgroup" TEXT NOT NULL,

    CONSTRAINT "Students_pkey" PRIMARY KEY ("roll_no")
);

-- CreateTable
CREATE TABLE "StudentsProof" (
    "proof_id" INTEGER NOT NULL,
    "proof_type" "Prooftype" NOT NULL,
    "proof_link" TEXT NOT NULL,
    "roll_no" INTEGER NOT NULL,

    CONSTRAINT "StudentsProof_pkey" PRIMARY KEY ("proof_id")
);

-- CreateTable
CREATE TABLE "StudentsFees" (
    "payment_id" INTEGER NOT NULL,
    "payment_method" "Payment" NOT NULL,
    "payment_amount" TEXT NOT NULL,
    "roll_no" INTEGER NOT NULL,

    CONSTRAINT "StudentsFees_pkey" PRIMARY KEY ("payment_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "StudentsProof_roll_no_key" ON "StudentsProof"("roll_no");

-- AddForeignKey
ALTER TABLE "StudentsProof" ADD CONSTRAINT "StudentsProof_roll_no_fkey" FOREIGN KEY ("roll_no") REFERENCES "Students"("roll_no") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentsFees" ADD CONSTRAINT "StudentsFees_roll_no_fkey" FOREIGN KEY ("roll_no") REFERENCES "Students"("roll_no") ON DELETE RESTRICT ON UPDATE CASCADE;
