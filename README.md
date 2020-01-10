# Instagram Story API
Private NodeJS Instagram story API server.

## Usage

`GET api/stories/{username}`

#### Example Response

```json
{
  "data": {
    "owner": {
      "username": "msaistanbul",
      "id": "37473657",
      "picture_url": "https://scontent-hkg3-2.cdninstagram.com/v/t51.2885-19/11881767_743326829127820_1373246811_a.jpg?_nc_ht=scontent-hkg3-2.cdninstagram.com&_nc_ohc=ekxa6S7v674AX9MlJDh&oh=4bde90b3a0f9230d8ffbe03b1de38763&oe=5EA46FF5"
    },
    "stories": [
      {
        "type": "image",
        "publishingDate": 1578560534,
        "url": "https://scontent-hkg3-2.cdninstagram.com/v/t51.12442-15/e35/79378287_118437392724768_3427251054296550072_n.jpg?_nc_ht=scontent-hkg3-2.cdninstagram.com&_nc_cat=100&_nc_ohc=103GwSPzp3cAX-kDOPF&oh=c09ffee6d0c4dbd922c242603ba33d15&oe=5E1ADD40"
      },
      {
        "type": "image",
        "publishingDate": 1578560546,
        "url": "https://scontent-hkg3-2.cdninstagram.com/v/t51.12442-15/e35/80062721_513199802633511_4307817043011563537_n.jpg?_nc_ht=scontent-hkg3-2.cdninstagram.com&_nc_cat=103&_nc_ohc=ZUOvkk3kyKsAX_JshPw&oh=335007cc12741c1b64f8b580656cd240&oe=5E1AF9F0"
      },
      {
        "type": "image",
        "publishingDate": 1578560622,
        "url": "https://scontent-hkg3-2.cdninstagram.com/v/t51.12442-15/e35/79588024_194092521768191_3374032076697267910_n.jpg?_nc_ht=scontent-hkg3-2.cdninstagram.com&_nc_cat=111&_nc_ohc=NPXMSyxaGRwAX_vrjqA&oh=8b1ef46229175ea1e257fe441f015ebb&oe=5E1A7670"
      },
      {
        "type": "image",
        "publishingDate": 1578641402,
        "url": "https://scontent-hkg3-2.cdninstagram.com/v/t51.12442-15/e35/p1080x1080/79600067_178979433175325_4091119800229507224_n.jpg?_nc_ht=scontent-hkg3-2.cdninstagram.com&_nc_cat=105&_nc_ohc=O3Yw8mfD3FkAX-QlN76&oh=06f872a74a84bbd0eed76f8a4bec1cb2&oe=5E1A6F4F"
      },
      {
        "type": "video",
        "publishingDate": 1578641557,
        "url": "https://scontent-hkg3-2.cdninstagram.com/v/t51.12442-15/e35/82566915_624219808338702_7133025603475246711_n.jpg?_nc_ht=scontent-hkg3-2.cdninstagram.com&_nc_cat=106&_nc_ohc=q9pAKWFWCNoAX92l_7O&oh=eba5a9f599f02a2ee6e6c5ba0cd4e3b4&oe=5E1AB343"
      }
    ]
  }
}
```

#### Error Messages


```json
{
  "error": {
    "message": "Story not found or this account is private!"
  }
}
```


```json
{
  "error": {
    "message": "User not found!"
  }
}
```
