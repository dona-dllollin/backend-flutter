# Food API

## Create Food API

Endpoint : POST /api/makanan

Headers :

- Authorization : token

Request Body :

```json
{
  "nama": "nasi goreng",
  "harga": 10000,
  "gambar": "uploads/Ayam_geprek.jpg",
  "deskripsi": "Ayam geprek murah dan lezat cocok untuk perut lapar. rasanya renyah crispy pedes nampol",
  "jumlah": 100000,
  "categoryId": ["id-kategori-1", "id-kategori-2"]
}
```

Response Body Success :

```json
{
  "nama": "nasi goreng",
  "harga": 10000,
  "gambar": "uploads/Ayam_geprek.jpg",
  "deskripsi": "Ayam geprek murah dan lezat cocok untuk perut lapar. rasanya renyah crispy pedes nampol",
  "jumlah": 100000,
  "Kategori": ["id-kategori-1", "id-kategori-2"]
}
```

Response Body Error :

```json
{
  "error": "server error"
}
```

## Get All Food API

Endpoint : GET /api/makanan

Response Body Success :

```json
[
  {
    "_id": "667926cc554c8f960331f275",
    "nama": "Ayam Geprek",
    "harga": 10000,
    "gambar": "uploads/Ayam_geprek.jpg",
    "deskripsi": "Ayam geprek murah dan lezat cocok untuk perut lapar. rasanya renyah crispy pedes nampol",
    "jumlah": 100000,
    "kategori": [
      {
        "_id": "667a81a1f851510296271912",
        "nama": "Makanan"
      }
    ],
    "__v": 0
  },

  {
    "_id": "667a6f1e9d6bcb9dbc1b2db5",
    "nama": "Nasi goreng",
    "harga": 15000,
    "gambar": "uploads/nasi_goreng.jpg",
    "deskripsi": "Nasi goreng murah dan lezat cocok untuk perut lapar. rasanya medok dengan cita rasa bumbu indonesia",
    "jumlah": 100000,
    "kategori": [
      {
        "_id": "667a81a1f851510296271912",
        "nama": "Makanan"
      }
    ],
    "__v": 0
  }
]
```

Response Body Error :

````json
{
    "message" : "error.message"
}```

````

## Get Food By Id API

Endpoint : GET /api/makanan/:foodId

Response Body Success :

```json
{
  "_id": "667a6f1e9d6bcb9dbc1b2db5",
  "nama": "Nasi goreng",
  "harga": 15000,
  "gambar": "uploads/nasi_goreng.jpg",
  "deskripsi": "Nasi goreng murah dan lezat cocok untuk perut lapar. rasanya medok dengan cita rasa bumbu indonesia",
  "jumlah": 100000,
  "kategori": [
    {
      "_id": "667a81a1f851510296271912",
      "nama": "Makanan"
    }
  ]
}
```

Response Body Error :

```json
{
  "message": "error.message"
}
```

## Get Food By Kategori API

Endpoint : GET /api/makanan/kategori/:categoryId

Headers :

- Authorization : token

Response Body Success :

```json
[
  {
    "_id": "667926cc554c8f960331f275",
    "nama": "Ayam Geprek",
    "harga": 10000,
    "gambar": "uploads/Ayam_geprek.jpg",
    "deskripsi": "Ayam geprek murah dan lezat cocok untuk perut lapar. rasanya renyah crispy pedes nampol",
    "jumlah": 100000,
    "kategori": [
      {
        "_id": "667a81a1f851510296271912",
        "nama": "Makanan"
      }
    ]
  },
  {
    "_id": "667a6f1e9d6bcb9dbc1b2db5",
    "nama": "Nasi goreng",
    "harga": 15000,
    "gambar": "uploads/nasi_goreng.jpg",
    "deskripsi": "Nasi goreng murah dan lezat cocok untuk perut lapar. rasanya medok dengan cita rasa bumbu indonesia",
    "jumlah": 100000,
    "kategori": [
      {
        "_id": "667a81a1f851510296271912",
        "nama": "Makanan"
      }
    ]
  }
]
```

Response Body Error :

- send({"message" : "error.message"})

## Update Food API

Endpoint : PUT /api/makanan/edit/:foodId

Headers :

- Authorization : token

Request Body (optional) :

```json
{
  "nama": "nasi goreng",
  "harga": 10000,
  "gambar": "uploads/Ayam_geprek.jpg",
  "deskripsi": "Ayam geprek murah dan lezat cocok untuk perut lapar. rasanya renyah crispy pedes nampol",
  "jumlah": 100000,
  "categoryId": ["id-kategori-1", "id-kategori-2"]
}
```

Response Body Success :

```json
{
  "message": "food updated"
}
```

Response Body Error :

```json
{
  "message": "Food Not Found"
}
```

## Delete Food API

Endpoint : DELETE /api/makanan/hapus/:foodId

Headers :

- Authorization : token

Response Body Success :

```json
{
  "message": "food delete success"
}
```

Response Body Error :

```json
{
  "message": "food not found"
}
```
