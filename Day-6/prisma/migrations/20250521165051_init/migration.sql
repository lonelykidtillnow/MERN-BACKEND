-- CreateTable
CREATE TABLE "restaurants" (
    "restaurants_id" TEXT NOT NULL,
    "restaurant_name" TEXT NOT NULL,
    "imageurl" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "offer" INTEGER NOT NULL,

    CONSTRAINT "restaurants_pkey" PRIMARY KEY ("restaurants_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "restaurants_restaurant_name_key" ON "restaurants"("restaurant_name");
