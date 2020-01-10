# Instagram Story API
Private NodeJS Instagram story API server.

## Usage

`GET api/users/{username}`

#### Response

```json
{
  "id": "37473657",
  "username": "msaistanbul",
  "fullName": "Mutfak Sanatları Akademisi",
  "isPrivate": false,
  "pictureUrl": "https://instagram.fist7-2.fna.fbcdn.net/v/t51.2885-19/11881767_743326829127820_1373246811_a.jpg?_nc_ht=instagram.fist7-2.fna.fbcdn.net&_nc_ohc=hC4yoDhM3IgAX8jHkUI&oh=ff29c79d025b0498a6627944834a6ea8&oe=5EA46FF5",
  "isVerified": false
}
```

#### Error Messages

```json
{
  "message": "User not found!",
  "status": 404
}
```

`GET api/users/{username}/stories`

#### Response

```json
{
  "owner": {
    "username": "msaistanbul",
    "id": "37473657",
    "pictureUrl": "https://instagram.fist7-2.fna.fbcdn.net/v/t51.2885-19/11881767_743326829127820_1373246811_a.jpg?_nc_ht=instagram.fist7-2.fna.fbcdn.net&_nc_ohc=hC4yoDhM3IgAX8jHkUI&oh=ff29c79d025b0498a6627944834a6ea8&oe=5EA46FF5"
  },
  "stories": [
    {
      "type": "image",
      "publishingDate": 1578641402,
      "url": "https://instagram.fist7-2.fna.fbcdn.net/v/t51.12442-15/e35/p1080x1080/79600067_178979433175325_4091119800229507224_n.jpg?_nc_ht=instagram.fist7-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=O3Yw8mfD3FkAX8rxX4p&oh=b0e009ef6c70720427db337d05c63c64&oe=5E1B180F"
    },
    {
      "type": "video",
      "publishingDate": 1578641557,
      "url": "https://instagram.fist7-2.fna.fbcdn.net/v/t50.12441-16/82631069_216843475974100_4583083238131297029_n.mp4?_nc_ht=instagram.fist7-2.fna.fbcdn.net&_nc_cat=104&_nc_ohc=YFQd7cDEaJkAX_UOQkl&oe=5E1B4640&oh=95c17794991d0ddb86b689c672a08d1e"
    },
    {
      "type": "video",
      "publishingDate": 1578648614,
      "url": "https://instagram.fist7-2.fna.fbcdn.net/v/t50.12441-16/83117148_1501392399984542_3606743366048324393_n.mp4?_nc_ht=instagram.fist7-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=Txl_6bHl5PkAX8Sxoq5&oe=5E1B6B30&oh=2f7a0ced067e8c2790c0c155cd8fd8f4"
    },
    {
      "type": "video",
      "publishingDate": 1578655575,
      "url": "https://instagram.fist7-1.fna.fbcdn.net/v/t50.12441-16/82443423_2642985659126266_3730551967180099103_n.mp4?_nc_ht=instagram.fist7-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=4C0BQnZfEBMAX8yVgrS&oe=5E1B3A57&oh=fd1fa3d068eaed17f34ddc5fa0579032"
    },
    {
      "type": "image",
      "publishingDate": 1578665222,
      "url": "https://instagram.fist7-1.fna.fbcdn.net/v/t51.12442-15/e35/80338838_105072424285171_2752360313409122542_n.jpg?_nc_ht=instagram.fist7-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=EfNV2XQtJQIAX9cpEBD&oh=99a54edfac0224128c9f3e632621bdbb&oe=5E1B4866"
    },
    {
      "type": "image",
      "publishingDate": 1578665271,
      "url": "https://instagram.fist7-2.fna.fbcdn.net/v/t51.12442-15/e35/81985693_2502492353194836_3104348712482872447_n.jpg?_nc_ht=instagram.fist7-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=Kqxu5EJjZlQAX8APlAO&oh=1117f25fcf4c61b86add340b0bbefd3f&oe=5E1BA9C2"
    }
  ]
}
```

#### Error Messages

```json
{
  "message": "User not found!",
  "status": 404
}
```

```json
{
  "message": "This account is private!",
  "status": 401
}
```
