-- CreateTable
CREATE TABLE "student" (
    "rollno" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" TEXT NOT NULL,
    "std" INTEGER NOT NULL,
    "bloodgroup" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "student_rollno_key" ON "student"("rollno");
