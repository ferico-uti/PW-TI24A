-- CreateTable
CREATE TABLE "tb_produk" (
    "id" SERIAL NOT NULL,
    "kode" VARCHAR(20) NOT NULL,
    "nama" VARCHAR(100) NOT NULL,
    "harga" INTEGER NOT NULL,
    "keterangan" VARCHAR(100),

    CONSTRAINT "tb_produk_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tb_produk_kode_key" ON "tb_produk"("kode");
