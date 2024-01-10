

## DAY1: We focused on building the BackEnd for our notes taking application with following features:

### A new user should be able to register.
### A registered user should be able to authenticate.
### A user should be able to create a new note.
### A user should be able view his/her notes.
### A user should be able update his/her notes.
### A user should be able delete his/her notes.

## Implementing User Authentication and Authorization using JWT (JSON Web Tokens) and bcrypt

### User section 

#### Step 1: Create a Registration system, take care of the hashing as well.

#### Step 2: Create a Auth system, by the help of JWT.

----

### Notes  sction

#### Create: /notes/create → POST

#### Read: /notes → GET

#### Update: /notes/update/:noteID → PATCH

#### Delete: /notes/delete/:noteID DELETE

All these routes will be restricted,
Also a user should be able to Read,
Update and Delete his or her notes only....

#### Relationship 
#### propdriling

```Login Rout => Middleware ==> Notes```

### Deploy BE application ,create frontend
Application Deployment, also known as Software Deployment, is the process of installing, configuring, updating, and enabling one application or suite of applications that make a software system available for use, like facilitating a certain URL on a server.

### AWS/Azure not using 

### using render / Cyclic and Railway I have to deploy ..

### link :https://notes-server-o8j5.onrender.com


### *** POST:

### users

1) /users/register:

http://localhost:3000/users/register


//body:
```
{
"username":"user22",
  "email": "user22@gmail.com",
     "password": "user22"
}
```
o/p:
```
{"msg":"The new user has been registered","registeredUser":{"username":"user22","email":"user22@gmail.com","password":"$2b$08$0gN8vr0RU1PtoNUCJtShV.R9u2TDr5GuCwiH07c/X.kNMj4.XU/hO","_id":"659cea0c4293674305fbaff8"}}
```

2) /users/login:

http://localhost:3000/users/login

//body:
```
{
  "email": "user22@gmail.com",
     "password": "user22"
}
```

o/p:
```
{
    "msg": "Login successful!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NTljZWEwYzQyOTM2NzQzMDVmYmFmZjgiLCJ1c2VybmFtZSI6InVzZXIyMiIsImlhdCI6MTcwNDc4MjUxNH0.ViiFcHjy1OVkJwlaH7F75StYpS91OYaARkF3KqSBM00"
}
```
 
### notes
1)notes/create

http://localhost:3000/notes/create

// pass the token in Headers ==> key : value 

```Authorization
```
```
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NTljZWEwYzQyOTM2NzQzMDVmYmFmZjgiLCJ1c2VybmFtZSI6InVzZXIyMiIsImlhdCI6MTcwNDc4MjUxNH0.ViiFcHjy1OVkJwlaH7F75StYpS91OYaARkF3KqSBM00

```

//body:
```
{
  "title": "Relationships",
  "body": "I implimented Relationship today"
}
```
o/p:
```
{
    "msg": "A new note has been Created",
    "Note": {
        "title": "Relationships",
        "body": "I implimented Relationship today",
        "userID": "659cea0c4293674305fbaff8",
        "username": "user22",
        "_id": "659cf10a5e4ae552ecd420ec"
    }
}

```

a single user can add multiple notes like this 
//body:
```
{
  "title": "RBAC",
  "body": "I implimented RBAC today"
}
```
o/p:
```
{
    "msg": "A new note has been Created",
    "Note": {
        "title": "RBAC",
        "body": "I implimented RBAC today",
        "userID": "659cea0c4293674305fbaff8",
        "username": "user22",
        "_id": "659cf2fb0acea10c4e4bface"
    }
}

```

---

### *** GET:

### users

1) /users/logout:

http://localhost:3000/users/logout

//body:
```

```

o/p:
```
{
    "msg": "Logged out !",
}
```

---

### notes

1)notes/

http://localhost:3000/notes/

// pass the token in Headers ==> key : value 


```Authorization
```
```
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NTljZWEwYzQyOTM2NzQzMDVmYmFmZjgiLCJ1c2VybmFtZSI6InVzZXIyMiIsImlhdCI6MTcwNDc4MjUxNH0.ViiFcHjy1OVkJwlaH7F75StYpS91OYaARkF3KqSBM00

```

//body:
```

```

u will get the notes only added by user 22 as o/p:
```
[
    {
        "_id": "659cf10a5e4ae552ecd420ec",
        "title": "Relationships",
        "body": "I implimented Relationship today",
        "userID": "659cea0c4293674305fbaff8",
        "username": "user22"
    },
    {
        "_id": "659cf2fb0acea10c4e4bface",
        "title": "RBAC",
        "body": "I implimented RBAC today",
        "userID": "659cea0c4293674305fbaff8",
        "username": "user22"
    }
]

```

### *** UPDATE/PATCH:


### notes
1)notes/update/:noteID

http://localhost:3000/notes/update/:noteID

// pass the token in Headers ==> key : value 
//pass noteID in params :659e258510ef807111c29a87

```Authorization
```
```
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NTljZWEwYzQyOTM2NzQzMDVmYmFmZjgiLCJ1c2VybmFtZSI6InVzZXIyMiIsImlhdCI6MTcwNDc4MjUxNH0.ViiFcHjy1OVkJwlaH7F75StYpS91OYaARkF3KqSBM00

```

//body:
```
{
  "title": "FIGMA ,WEB Designing ",
  "body": "I implimented FIGMA ,WEB Designing today"
}
```

u will get the notes update only added by user 22 as o/p:
```
{
    "msg": "Note with Id:659e258510ef807111c29a87 has been updated"
}

```



### *** DELETE:


### notes
1)notes/delete/:noteID

http://localhost:3000/notes/delete/:noteID

// pass the token in Headers ==> key : value 
//pass noteID in params ex: 659cf2fb0acea10c4e4bface

```Authorization
```
```
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NTljZWEwYzQyOTM2NzQzMDVmYmFmZjgiLCJ1c2VybmFtZSI6InVzZXIyMiIsImlhdCI6MTcwNDc4MjUxNH0.ViiFcHjy1OVkJwlaH7F75StYpS91OYaARkF3KqSBM00

```

//body:
```
NA
```
```
{
    "msg": "Note with Id:659e257610ef807111c29a85 has been deleted"
}

```
