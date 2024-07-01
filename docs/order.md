# Order API

## Create Order API

Endpoint : POST /api/order

Request Body :

```json
{
  "namaPemesan": "dona",
  "noMeja": "10",
  "items": [
    {
      "nama": "nasi goreng",
      "harga": 10000,
      "quantity": 4
    },
    {
      "nama": "Mie Goreng",
      "harga": 10000,
      "quantity": 3
    }
  ]
}
```

Response Body Success :

```json
{
  "namaPemesan": "dona",
  "items": [
    {
      "nama": "nasi goreng",
      "harga": 10000,
      "quantity": 4
    },
    {
      "nama": "Mie Goreng",
      "harga": 10000,
      "quantity": 3
    }
  ],
  "status": "proses",
  "totalHarga": 70000
}
```

Response Body Error :

- status(401).json({msg: "stok makanan tidak mencukupi"})
- status(402).json({msg: "stok makanan sudah habis"})
- status(404).json({msg: "makanan tidak ditemukan"})

## Get All Order API

Endpoint : GET /api/order

Response Body Success :

```json
[
  {
    "_id": "667a704b9d6bcb9dbc1b2dc5",
    "namaPemesan": "handoko",
    "noMeja": "12",
    "items": [
      {
        "nama": "megono",
        "harga": 3000,
        "quantity": 2,
        "total": 6000,
        "_id": "667a704b9d6bcb9dbc1b2dc6"
      },
      {
        "nama": "mie goreng",
        "harga": 12000,
        "quantity": 3,
        "total": 36000,
        "_id": "667a704b9d6bcb9dbc1b2dc7"
      }
    ],
    "totalHarga": 42000,
    "status": "proses",
    "__v": 0
  },
  {
    "_id": "667a70999d6bcb9dbc1b2dcd",
    "namaPemesan": "handoko",
    "noMeja": "12",
    "items": [
      {
        "nama": "burger",
        "harga": 10000,
        "quantity": 2,
        "total": 20000,
        "_id": "667a70999d6bcb9dbc1b2dce"
      },
      {
        "nama": "mie goreng",
        "harga": 12000,
        "quantity": 3,
        "total": 36000,
        "_id": "667a70999d6bcb9dbc1b2dcf"
      }
    ],
    "totalHarga": 56000,
    "status": "unpaid",
    "__v": 0
  }
]
```

Response Body Error :

```json
{
  "msg": "server error"
}
```

## Update Order API

Endpoint : PUT /api/order/:id

Headers :

- Authorization : token

Request Body :

```json
{
  "status": "selesai"
}
```

Response Body Success :

```json
{
  "msg": "status orderan telah diubah"
}
```

Response Body Error :

```json
{
  "msg": "Order tidak ditemukan"
}
```

## Get Detail Order

Endpoint : GET /api/order/:id

Response Body Success:

```json
{
  "_id": "667a704b9d6bcb9dbc1b2dc5",
  "namaPemesan": "handoko",
  "noMeja": "12",
  "items": [
    {
      "nama": "megono",
      "harga": 3000,
      "quantity": 2,
      "total": 6000,
      "_id": "667a704b9d6bcb9dbc1b2dc6"
    },
    {
      "nama": "mie goreng",
      "harga": 12000,
      "quantity": 3,
      "total": 36000,
      "_id": "667a704b9d6bcb9dbc1b2dc7"
    }
  ],
  "totalHarga": 42000,
  "status": "proses"
}
```

Response Body Error :

```json
{
  "msg": "maaf, data order tidak ditemukan"
}
```
