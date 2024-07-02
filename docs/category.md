# Category API

## Get Catgeory API

Endpoint : GET /api/kategori

Response Body Success :

```json
[
  {
    "_id": "unique id",
    "nama": "Makanan",
    "gambar": "uploads/makan.jpg",
    "makanan": [
      {
        "_id": "667a6f1e9d6bcb9dbc1b2db5",
        "nama": "Nasi goreng",
        "harga": 15000,
        "gambar": "uploads/nasi_goreng.jpg",
        "deskripsi": "Nasi goreng murah dan lezat cocok untuk perut lapar. rasanya medok dengan cita rasa bumbu indonesia",
        "jumlah": 100000,
        "kategori": ["667a81a1f851510296271912"],
        "__v": 0
      }
    ]
  },

  {
    "_id": "667a81aff851510296271914",
    "nama": "Minuman",
    "gambar": "uploads/minum.png",
    "makanan": [
      {
        "_id": "6681a96e0313206582d78d2f",
        "nama": "Americano",
        "harga": 10000,
        "gambar": "uploads/americano.jpg",
        "deskripsi": "kopi americano yang sangat mantap disruput di waktu senja ditemani dengan pisang goreng dan rokok Juara jambu",
        "jumlah": 100000,
        "kategori": ["667a81aff851510296271914"]
      }
    ]
  }
]
```

Response Body Error :

- send("server error")

## Get Spesific Category

Enpoint : GET /api/kategori/:id

Response Body Success:

```json
{
  "nama": "makanan",
  "gambar": "/uploads/nama_gambar.jpg"
}
```

Response Body Error :

```json
{
  "message": "error"
}
```

## Create Category API

Endpoint : POST /api/kategori

Headers :

- Authorization : token

Request Body :

```json
{
  "nama": "makanan",
  "gambar": "uploads/makan.jpg"
}
```

Response Body Succes :

```json
{
  "nama": "makanan",
  "gambar": "uploads/makan.jpg"
}
```

Response Body Error :

```json
{
  "message": "nama makanan harus diisi"
}
```

## Update Category API

Endpoint : PUT /api/kategori/edit/:id

Headers :

- Authorization : token

Request Body :

```json
{
  "nama": "makanan-edit",
  "gambar": "uploads/makan.jpg"
}
```

Response Body Success :

```json
{
  "msg": "data kategori telah diperbarui"
}
```

Response Body error :

```json
{
  "message": "data kategori tidak ditemukan"
}
```

## Remove Category API

Endpoint : DELETE /api/kategori/hapus/:id

Headers :

- Authorization : token

Response Body Success :

```json
{
  "message": "data kategori telah dihapus"
}
```

Response Body Error :

```json
{
  "message": "data kategori tidak ditemukan"
}
```
