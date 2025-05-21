-- CreateTable
CREATE TABLE "dummy_Student" (
    "rollno" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" TEXT NOT NULL,
    "emailid" TEXT NOT NULL,
    "phoneno" INTEGER NOT NULL,
    "address" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "dummy_Student_rollno_key" ON "dummy_Student"("rollno");
