# Upload Gambar API

Endpoint : /uploadGambar

Request Body :

```
'gambar' : 'file.jpg/png'
```

Response Body Success :

```json
{
  "imagePath": "/uploads/nama-gambar.jpg"
}
```

Response Body Error :

```json
{
  "message": "File gambar tidak ditemukan!"
}
```
