# Instagram API
Private Instagram API library, writen by JavaScript.

## Usage

`GET api/users/{username}`

#### Response

```json
{
  "id": "37473657",
  "username": "msaistanbul",
  "fullName": "Mutfak Sanatları Akademisi",
  "isPrivate": false,
  "pictureUrl": "https://scontent-lhr3-1.cdninstagram.com/v/t51.2885-19/11881767_743326829127820_1373246811_a.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com&_nc_ohc=InQGGZP0GwkAX8N2CTu&oh=a768316077a5e86ce1875f9c6d23047a&oe=5EA46FF5",
  "isVerified": false,
  "urls": {
    "profile": "http://localhost:3000/api/users/msaistanbul/profile",
    "highlights": "http://localhost:3000/api/users/msaistanbul/highlights",
    "stories": "http://localhost:3000/api/users/msaistanbul/stories",
    "posts": "http://localhost:3000/api/users/msaistanbul/posts"
  }
}
```

#### Error Messages

```json
{
  "message": "User not found!",
  "status": 404
}
```

`GET api/users/{username}/profile`

#### Response

```json
{
  "id": "37473657",
  "username": "msaistanbul",
  "fullName": "Mutfak Sanatları Akademisi",
  "isPrivate": false,
  "isVerified": false,
  "media_count": 2976,
  "followerCount": 124709,
  "followingCount": 0,
  "biography": "Türkiye'nin profesyonel mutfak okulu",
  "pictureUrl": "https://scontent-lhr3-1.cdninstagram.com/v/t51.2885-19/11881767_743326829127820_1373246811_a.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com&_nc_ohc=InQGGZP0GwkAX8N2CTu&oh=a768316077a5e86ce1875f9c6d23047a&oe=5EA46FF5",
  "pictureUrlHD": "https://scontent-lhr3-1.cdninstagram.com/v/t51.2885-19/11881767_743326829127820_1373246811_a.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com&_nc_ohc=InQGGZP0GwkAX8N2CTu&oh=a768316077a5e86ce1875f9c6d23047a&oe=5EA46FF5",
  "urls": {
    "highlights": "http://localhost:3000/api/users/msaistanbul/highlights",
    "stories": "http://localhost:3000/api/users/msaistanbul/stories",
    "posts": "http://localhost:3000/api/users/msaistanbul/posts"
  }
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
    "pictureUrl": "https://scontent-lhr3-1.cdninstagram.com/v/t51.2885-19/11881767_743326829127820_1373246811_a.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com&_nc_ohc=InQGGZP0GwkAX8N2CTu&oh=a768316077a5e86ce1875f9c6d23047a&oe=5EA46FF5"
  },
  "stories": [
    {
      "type": "video",
      "publishingDate": 1579073900,
      "url": "https://scontent-lhr3-1.cdninstagram.com/v/t50.12441-16/83099631_125808145581941_3830968674841696004_n.mp4?_nc_ht=scontent-lhr3-1.cdninstagram.com&_nc_cat=105&_nc_ohc=81oEZ_ocD_YAX8wReoZ&oe=5E2297CE&oh=b6d119f8395c975bcd663ea8febb105f"
    },
    {
      "type": "video",
      "publishingDate": 1579074815,
      "url": "https://scontent-lhr3-1.cdninstagram.com/v/t50.12441-16/82711561_184372606296685_1900471825283287996_n.mp4?_nc_ht=scontent-lhr3-1.cdninstagram.com&_nc_cat=101&_nc_ohc=CNpp5T5AWowAX8oR4sY&oe=5E22EE4B&oh=da32ce05acdae404da4c699714eaaeec"
    },
    {
      "type": "video",
      "publishingDate": 1579080518,
      "url": "https://scontent-lhr3-1.cdninstagram.com/v/t50.12441-16/82950442_216794292663502_3257871799179389804_n.mp4?_nc_ht=scontent-lhr3-1.cdninstagram.com&_nc_cat=110&_nc_ohc=c32DFxEuu9IAX9Tv9EO&oe=5E22BEF9&oh=f2571a55838e81df1d9b7dc266bf4f05"
    }
  ],
  "urls": {
    "user": "http://localhost:3000/api/users/msaistanbul"
  }
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

```json
{
  "message": "Story not found!",
  "status": 404
}
```

`GET api/users/{username}/highlights`

#### Response

```json
{
  "owner": {
    "id": "37473657",
    "username": "msaistanbul",
    "pictureUrl": "https://scontent-lhr3-1.cdninstagram.com/v/t51.2885-19/11881767_743326829127820_1373246811_a.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com&_nc_ohc=InQGGZP0GwkAX8N2CTu&oh=a768316077a5e86ce1875f9c6d23047a&oe=5EA46FF5"
  },
  "highlights": [
    {
      "id": "18100294678073873",
      "title": "MSA PODCAST",
      "pictureUrl": "https://scontent-lhr3-1.cdninstagram.com/v/t51.12442-15/e35/c0.322.828.828a/s150x150/75208739_512697172973335_9214020521200125751_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=VsjKRxcjS-8AX8z6fY4&oh=3262f03370fdb316970d912a8ca8696a&oe=5E226BD2",
      "pictureUrlHD": "https://scontent-lhr3-1.cdninstagram.com/v/t51.12442-15/sh0.08/e35/c0.322.828.828a/s640x640/75208739_512697172973335_9214020521200125751_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=VsjKRxcjS-8AX8z6fY4&oh=9761aa2763c98716507043c9e53265c2&oe=5E22F321"
    },
    {
      "id": "17937113836136720",
      "title": "TANIŞMA GÜNÜ",
      "pictureUrl": "https://scontent-lhr3-1.cdninstagram.com/v/t51.2885-15/s150x150/65239693_2426947027327685_1005801188913695630_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com&_nc_ohc=1l2eSbCBbNgAX-xnUz0&oh=c150453dff112c1449fa46b37bac5cba&oe=5ED8CD2D",
      "pictureUrlHD": "https://scontent-lhr3-1.cdninstagram.com/v/t51.12442-15/sh0.08/e35/c0.420.1080.1080a/s640x640/37258546_210026109674575_2986517444987715584_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=6SloLxPS1RsAX9lf2gd&oh=3a470df5974913019b9d8b40c955e7bf&oe=5E22A53A"
    }
  ],
  "urls": {
    "profile": "http://localhost:3000/api/users/msaistanbul/profile",
    "highlights": [
      "http://localhost:3000/api/highlights/18100294678073873",
      "http://localhost:3000/api/highlights/17937113836136720"
    ]
  }
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

```json
{
  "message": "Highlight not found!",
  "status": 404
}
```

`GET api/users/{username}/posts`

#### Response

```json
{
  "owner": {
    "id": "37473657",
    "username": "msaistanbul",
    "pictureUrl": "https://scontent-lhr3-1.cdninstagram.com/v/t51.2885-19/11881767_743326829127820_1373246811_a.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com&_nc_ohc=InQGGZP0GwkAX8N2CTu&oh=a768316077a5e86ce1875f9c6d23047a&oe=5EA46FF5"
  },
  "posts": [
    {
      "type": "image",
      "displayUrl": "https://scontent-lhr3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/80015033_162659075001974_4898385341257170713_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com&_nc_cat=102&_nc_ohc=crcl1g6KJC4AX8Zr0w6&oh=8f3ab5d70ff62e4f8a59c51ed6383951&oe=5ED5C59D&ig_cache_key=MjIyMTk1Nzg1MDgyMjE4MTU1Ng%3D%3D.2",
      "publishingDate": 1579098038,
      "caption": "2019 Prochef mezunlarımızdan Ersin Çay ile sohbet ettik:\n⭐Geçmişten başlayarak anlatacak olursam; asıl mesleğim deri zanaatkarlığıydı. 8-9 yıl kadar bu sektörde çalışmaya devam ettim. Bu süreçte sevdiklerime sürekli yemek hazırlardım ve genellikle de güzel yorumlar aldım, mutfak aşkı içimde hep vardı. Zaman geçtikçe düşünüp karar verme şansım oldu ve sonunda yemek yapmayı meslek edinmeye karar verdim.\n⭐Bu kararı verdikten sonra ilk etapta kısa süreli bir kursa giderek teorik eğitim aldım. Eğitimi tamamladıktan sonra bir catering firmasında staj yapma şansım oldu. Stajın sonunda o zamanki şefimin isteği üzerine bir süre daha aynı yerde çalışmaya devam ettim. Sonrasında ise farklı birkaç restoran ve otelde çalışarak tecrübe edindim, kendimi geliştirdim. Şu an 7 yıldır bu işi yapıyorum ve bu mesleği seçtiğim için çok mutluyum.\n⭐Uzun denebilecek bir süredir bu sektördeyim ancak hala kendimi geliştirmem gereken noktalar var. MSA; hem çalışma arkadaşlarımızdan, hem de sektörden adını ve başarılarını sıkça duyduğumuz bir kurum. Ben de eğitim almaya karar verince MSA’yı tercih ettim.\n⭐Eğitimim boyunca gerçekten bilmediğim çok fazla teknik öğrendim. Farklı şeflerle çalışmak, hem farklı teknik hem de farklı deneyim demek. Daha önce deneyimleme şansım olmayan reçeteleri burada pratik etme şansım oldu. Hem deneyim edinmek, hem diploma almak, üstelik uluslararası geçerliliği olan bir diploma edinmek bence çok önemli bir fırsat.\n⭐Bundan sonraki süreçte de kendimi geliştirmeye devam etmek ve yurt dışına çıkarak yeni deneyimler edinmek istiyorum. #msadayız #msaistanbul",
      "location": "Mutfak Sanatları Akademisi",
      "preview": null,
      "like": 398
    },
    {
      "type": "image",
      "displayUrl": "https://scontent-lhr3-1.cdninstagram.com/v/t51.2885-15/e35/82660699_113720113494245_6386043191258230705_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com&_nc_cat=105&_nc_ohc=h2mvIl5f4moAX8IdGkX&oh=4865c398744fa09258e82d1c381190ae&oe=5EA248BC&ig_cache_key=MjIyMTc4MDA4MTcwNjQ0MDg3MQ%3D%3D.2",
      "publishingDate": 1579076847,
      "caption": "MSA Davet ekibinin, düğün organizasyonları için hazırladığı birbirinden nefis ikramlar 🤩  #msadavet",
      "location": null,
      "preview": null,
      "like": 310
    }
  ],
  "urls": {
    "profile": "http://localhost:3000/api/users/msaistanbul/profile"
  }
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

```json
{
  "message": "Post not found!",
  "status": 404
}
```

`GET api/highlights/{highlightedId}`

#### Response

```json
{
  "owner": {
    "username": "msaistanbul",
    "id": "37473657",
    "pictureUrl": "https://scontent-lhr3-1.cdninstagram.com/v/t51.2885-19/11881767_743326829127820_1373246811_a.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com&_nc_ohc=7t0KEQp8ODUAX8hxQ5t&oh=060b0f481c566ffdfdf8e901036bf708&oe=5EA46FF5"
  },
  "highlights": [
    {
      "type": "video",
      "publishingDate": 1578648614,
      "url": "https://scontent-lhr3-1.cdninstagram.com/v/t50.12441-16/83117148_1501392399984542_3606743366048324393_n.mp4?_nc_ht=scontent-lhr3-1.cdninstagram.com&_nc_cat=102&_nc_ohc=hwxC3-eIne8AX_FDM5O&oe=5E235430&oh=e04fc56d31b357044a8bd93afd47e6bd"
    },
    {
      "type": "video",
      "publishingDate": 1578050618,
      "url": "https://scontent-lhr3-1.cdninstagram.com/v/t50.12441-16/82412385_108576937200605_2584661019537851257_n.mp4?_nc_ht=scontent-lhr3-1.cdninstagram.com&_nc_cat=105&_nc_ohc=-Ir_0RhdlXoAX97jsHz&oe=5E234357&oh=8da47b7c1b8985da3833f5cc8fb963c5"
    }
  ],
  "urls": {
    "user": "http://47.254.156.197:3000/api/users/msaistanbul"
  }
}
```

#### Error Messages

```json
{
  "message": "Highlight not found!",
  "status": 404
}
```