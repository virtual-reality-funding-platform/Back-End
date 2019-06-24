# Virtual Reality Funding Platform

## API Documentation

### Dummy Data

#### Test users with projects

```
Users: [
  {
    "id": 1,
    "username": "admin",
    "password": "password"
    "name": "Test 1",
    "about": "test account",
    "projects": [
      {
        "id": 1, 
        "projectName": "Test project 1",
        "projectType": "Tech",
        "description": "Small tech business test project 1",
        "fundingAmount": 5000.00,
        "user_id": 1, 
      },
      {
        "id": 2, 
        "projectName": "Test project 2",
        "projectType": "Social",
        "description": "Small social business test project 2",
        "fundingAmount": 7500.00,
        "user_id": 1,
      },
    ]
  },
  {
    "id": 2, 
    "username": "admin2",
    "password": "password2",
    "name": "Test 2",
    "about": "test account 2",
    "projects": [
      {
        "id": 3, 
        "projectName": "Test project 3",
        "projectType": "Tech",
        "description": "Small tech business test project 3",
        "fundingAmount": 10000.00,
        "user_id": 2,
      },
    ]
  }
]
```

# Auth Routes
| Table | Method |       Endpoint |                      Description |
| ----- | :----: | -------------: | -------------------------------: |
| users |  POST  | /auth/register |            Registers a new user. |
| users |  POST  | /auth/login    | Logs in already registered user. |

## Register

### Registers a new user.

_Method URL:_ `/auth/register`

_HTTP Method:_ **[POST]**

#### Request Body 
| Name       |  Type  | Required |     Description |
| ---------  | :----: | -------: | --------------: |
| `username` | String |      Yes | Must be unique. |
| `password` | String |      Yes |                 |
| `name`     | String |      Yes |                 |
| `about`    | Text   |      Yes |                 |

#### Examples

```
{
  "username": "vrproject",
  "password": "ilovemoney",
  "name": "John",
  "about": "Tech developer"
}

```

#### Response

##### 201 (Created)

> If you successfully register a user, the endpoint will return an HTTP response with a status code `201`.

##### 400 (Bad Request)

> If you are missing a username or password, the endpoint will return an HTTP response with a status code of `400`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

## Login

### Logs in an already registered user.

_Method URL:_ `/auth/login`

_HTTP Method:_ **[POST]**

#### Request Body

| Name       |  Type  |                                                Description |
| ---------- | :----: | ---------------------------------------------------------: |
| `username` | String |                           Must match username in database. |
| `password` | String | Must match password to corresponding username in database. |

#### Example

```
{
  "username": "vrproject",
  "password": "ilovemoney"
}
```

#### Response

##### 200 (OK)

> If you successfully log in, the endpoint will return an HTTP response with a status code `200`.

##### 400 (Bad Request)

> If you are missing a username or a password, the endpoint will return an HTTP response with a status code of `400`.

##### 401 (Unauthorized)

> If you provide invalid credentials, the endpoint will return an HTTP response with a status code of `401`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

# User Routes

## Get Users

### Gets a list of users.

_Method URL:_ `/api/users/`

_HTTP Method:_ **[GET]**

#### Headers

| Name            |  Type  | Required |              Description |
| --------------- | :----: | -------: | -----------------------: |
| `Content-Type`  | String |      Yes | Must be application/JSON |
| `Authorization` | String |      Yes |           JSON Web Token |

#### Response

##### 200 (OK)

> If users are found, the endpoint will return an HTTP response with a status code `200`.

##### 404 (Not Found)

> If users are not found, the endpoint will return an HTTP response with a status code `404`.

##### 401 (Unauthorized)

> If user does not have access, the endpoint will return an HTTP response with a status code of `401`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

## Get User

### Gets user by ID with associated plants.

_Method URL:_ `/users/:id`

_HTTP Method:_ **[GET]**

#### Headers

| Name            |  Type  | Required |              Description |
| --------------- | :----: | -------: | -----------------------: |
| `Content-Type`  | String |      Yes | Must be application/JSON |
| `Authorization` | String |      Yes |           JSON Web Token |

#### Response

##### 200 (OK)

> If user with specified ID is found, the endpoint will return an HTTP response with a status code `200`.

##### 404 (Not Found)

> If user with specified ID is not found, the endpoint will return an HTTP response with a status code `404`.

##### 401 (Unauthorized)

> If user does not have access, the endpoint will return an HTTP response with a status code of `401`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

## Delete User

### Deletes user by ID.

_Method URL:_ `/users/:id`

_HTTP Method:_ **[DELETE]**

#### Headers

| Name            |  Type  | Required |              Description |
| --------------- | :----: | -------: | -----------------------: |
| `Content-Type`  | String |      Yes | Must be application/JSON |
| `Authorization` | String |      Yes |           JSON Web Token |

#### Response

##### 200 (OK)

> If user with specified ID is found and deleted, the endpoint will return an HTTP response with a status code `200`.

##### 404 (Not Found)

> If user with specified ID is not found, the endpoint will return an HTTP response with a status code `404`.

##### 401 (Unauthorized)

> If user does not have access, the endpoint will return an HTTP response with a status code of `401`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

## Update User

### Updates user by ID.

_Method URL:_ `/users/:id`

_HTTP Method:_ **[PUT]**

#### Headers

| Name            |  Type  | Required |              Description |
| --------------- | :----: | -------: | -----------------------: |
| `Content-Type`  | String |      Yes | Must be application/JSON |
| `Authorization` | String |      Yes |           JSON Web Token |

#### Body

| Name          |  Type  | Required |     Description |
| ------------- | :----: | -------: | --------------: |
| `username`    | String |      Yes | Must be unique. |
| `password`    | String |      Yes |                 |
| `phoneNumber` | String |       No |                 |

#### Example

```
{
  "username": "vrproject",
  "password": "ilovemoney",
  "name": "John",
  "about": "Tech developer"
}
```

#### Response

##### 200 (OK)

> If user with specified ID is found and updated, the endpoint will return an HTTP response with a status code `200`.

##### 404 (Not Found)

> If user with specified ID is not found, the endpoint will return an HTTP response with a status code `404`.

##### 401 (Unauthorized)

> If user does not have access, the endpoint will return an HTTP response with a status code of `401`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.
