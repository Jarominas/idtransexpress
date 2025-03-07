-- CreateEnum
CREATE TYPE "WasteType" AS ENUM ('SORTED_WASTE', 'BRICKS_CERAMIC', 'MIXED_WASTE', 'BULKY_WASTE', 'GENERAL');

-- CreateEnum
CREATE TYPE "SizeType" AS ENUM ('SIZE_10', 'SIZE_12', 'SIZE_15', 'SIZE_20', 'SIZE_30', 'TRANSPORT_FEE', 'OUTSIDE_CITY_KM', 'CITY_HOUR', 'CONTAINER_RENT_SMALL', 'CONTAINER_RENT_MEDIUM', 'CONTAINER_RENT_LARGE');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Price" (
    "id" TEXT NOT NULL,
    "vatRate" DECIMAL(10,2) NOT NULL,
    "wasteType" "WasteType" NOT NULL,
    "sizeType" "SizeType",
    "amount" DECIMAL(10,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Price_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
