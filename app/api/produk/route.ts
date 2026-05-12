// buat fungsi untuk tampil data
// function getData(a, b, c) {

import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { NextRequest, NextResponse } from "next/server";

// }

// arrow function
// const getData = (a,b,c) => {

// }

// buat variabel prisma
// const prisma = new PrismaClient();
const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
});

// buat fungsi untuk ambil/baca data
export const GET = async () => {
  // tampilkan hasil respon
  // return NextResponse.json({
  //   message: "Belajar API",
  //   success: true,
  //   data: [
  //     {
  //       id: 1,
  //       nama: "Baju",
  //     },
  //     {
  //       id: 2,
  //       nama: "Celana",
  //     },
  //   ],
  // });

  // ambil/baca data dari tb_produk
  const data = await prisma.tb_produk.findMany();
  // tampilkan hasil respon
  return NextResponse.json(data);
};

// fungsi untuk tambah data
export const POST = async (request: NextRequest) => {
  // buat variabel untuk kirim data
  const formData = await request.formData();

  // proses simpan data
  await prisma.tb_produk.create({
    data:{
      kode: formData.get("kode") as string,
      nama: formData.get("nama") as string,
      harga: Number(formData.get("harga")),
      keterangan: formData.get("keterangan") as string,
    }
  })

  // tampilkan hasil respon
  return NextResponse.json({
    message: "Data berhasil disimpan",
    success: true,
  });
};
