# User API

## Registrasi API

Enpoint POST /api/auth/registrasi

Request Body :

```json
{
  "username": "dona",
  "password": "12345"
}
```

Response Body Success :

```json
{
  "msg": "selamat akun berhasil dibuat"
}
```

Response Body Error :

```json
{
  "msg": "username telah digunakan"
}
```

## Login User API

Enpoint POST /api/auth/login

Request Body :

```json
{
  "username": "dona",
  "password": "12345"
}
```

Response Body Success :

```json
{
  "token": "token unik"
}
```

Response Body Error :

```json
{
  "msg": "username dan password salah"
}
```

## Get Data User

Endpoint : GET /api/user

Headers :

- Authorization : token

Response Body Success :

```json
{
  "username": "naili",
  "noHp": "086213231"
}
```

Response Body Error :

```json
{
  "errors": "Unauthorized"
}
```

## Logout User API

Endpoint : DELETE /api/auth/logout

Headers :

- Authorization : token

Response Body Success :

```json
{
  "msg": "oke"
}
```

Response Body Error :

```json
{
  "errors": "Unauthorized"
}
```
