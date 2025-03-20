-- CreateTable
CREATE TABLE "Prices" (
    "id" SERIAL NOT NULL,
    "vat_rate" DOUBLE PRECISION NOT NULL DEFAULT 0.22,
    "sortedWaste_size_10" DOUBLE PRECISION NOT NULL DEFAULT 250,
    "sortedWaste_size_12" DOUBLE PRECISION NOT NULL DEFAULT 270,
    "sortedWaste_size_15" DOUBLE PRECISION NOT NULL DEFAULT 300,
    "bricksCeramic_size_10" DOUBLE PRECISION NOT NULL DEFAULT 350,
    "mixedWaste_transport_fee" DOUBLE PRECISION NOT NULL DEFAULT 180,
    "bulkyWaste_size_10" DOUBLE PRECISION NOT NULL DEFAULT 320,
    "bulkyWaste_size_12" DOUBLE PRECISION NOT NULL DEFAULT 360,
    "bulkyWaste_size_15" DOUBLE PRECISION NOT NULL DEFAULT 410,
    "bulkyWaste_size_20" DOUBLE PRECISION NOT NULL DEFAULT 510,
    "bulkyWaste_size_30" DOUBLE PRECISION NOT NULL DEFAULT 640,
    "general_outside_city_km" DOUBLE PRECISION NOT NULL DEFAULT 1.45,
    "general_city_hour" DOUBLE PRECISION NOT NULL DEFAULT 40,
    "general_container_rent_small" DOUBLE PRECISION NOT NULL DEFAULT 3.5,
    "general_container_rent_medium" DOUBLE PRECISION NOT NULL DEFAULT 5,
    "general_container_rent_large" DOUBLE PRECISION NOT NULL DEFAULT 6,

    CONSTRAINT "Prices_pkey" PRIMARY KEY ("id")
);
