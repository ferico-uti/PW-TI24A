# Pemrograman Web (TI 24 A)

---

## Setup Aplikasi

### 1. Buka Terminal / Console

### 2. Cloning Repository

   ```bash
   git clone https://github.com/ferico-uti/PW-TI24A.git
   cd PW-TI24A
   code .
   ```
### 3. Project Setup

- Buka terminal dan jalankan perintah berikut.
  
    ```bash
    npm i
    ```

- Ubah file ``` .env.example ``` menjadi ``` .env ``` 
    
- Sesuaikan konfigurasi postgresql ``` DATABASE_URL ``` pada perangkat PC/Laptop.
    ```bash
    DATABASE_URL="postgresql://postgres:postgres@localhost:5432/db_ti24a?schema=public"
    ```
    
- Jalankan perintah migrasi database (jika database belum ada pada perangkat PC/Laptop)
    ```bash
    npx prisma migrate dev
    ```
    
- Jalankan aplikasi
    ```bash
    npm run dev
    ```