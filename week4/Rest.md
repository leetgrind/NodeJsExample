## Rest API status codes

### 1xx status codes

Informational

- 100 Continue  
- 101 Switching of protocol  
- 102 Processing

### 2xx Status code 
Success

- 200 OK 
- 201 Created
- 202 Accepted 
- 204 No content

### 3xx Redirection
- 301 Moved Permantently

### 4xx Client Error
- 400 Bad request
-  
- 403 Forbidden
- 405 Method not allowed
- 407 Proxy required

### 5xx Server error
- 500 Internal server error
- 501 HTTP method not implemented
- 502 Bad gateway
- 503 Service unavailable

## HTTP Methods

### HTTP GET

- It is used to get a resource
- It is idempotent
- If the resourse is not found return 404 (NOT FOUND)
- 400 Bad request in case of malformed request

Example

- ALL THE USERS -> `GET localhost:8080/users`
- Specific user `GET localhost:8080/users/1`

### HTTP POST

- It is used to create a new resourse
- It is *not idempotent*
- 201 Code (Created)
- 200 and 204 can be sent

Example
- Create a user  
```
HTTP POST localhost:8080/users
BODY
{
    "email":"abc@gmail.com"
    "password":"12345"
}
```
### HTTP PUT
- Put is used to update a resource
- 200 or 204 after the resource has been updated
- Idempotent

```
HTTP PUT localhost:8080/users/123

BODY
{
    "email":"def@gmail.com",
    "password":"123456"
}
```

### HTTP PATCH

- Partial Updates
- It is not idempotent
```
HTTP PATCH localhost:8080/users/123

BODY
{
    "password":"123456"
}
```

## Idempotent

f(f(x)) = f(x)


## REST URL Scheme

```
/customers -> Represent collection of customers  
/customer/{id} -> Represent a single customer with ID
```

### Sub resources
Book resource
```
{
    "id": 435
    "name" : "Book name"
    "author" : {
        "id":1234
        "name": "First name",
        "gender": "Gender",
        "country": "Canada"
    }
}
```

`GET /books/435/authors` 

- `POST /books` To create a resource  
- `GET /books` To get all the books  
- `GET /books/{id}` To get a particular book

