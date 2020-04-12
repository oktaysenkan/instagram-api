# Instagram API

Private Instagram API library, no required any API token or login credentials.

## Usage

```js
import instagramApi from 'instagram-api';

const instance = instagramApi({
  sessionId: 'YOUR_SESSION_ID',
});
```

```js
const user = await instance.getUser('msaistanbul');
```

```json
{
  "id": 37473657,
  "username": "msaistanbul",
  "fullName": "Mutfak Sanatları Akademisi",
  "isPrivate": false,
  "pictureUrl": "https://instagram.fadb5-1.fna.fbcdn.net/v/t51.2885-19/11881767_743326829127820_1373246811_a.jpg?_nc_ht=instagram.fadb5-1.fna.fbcdn.net&_nc_ohc=6pn4wasDKOkAX_tAn9_&oh=104aa335ea964ffe2187785d214f7165&oe=5EBCE90B",
  "isVerified": false
}
```

```js
const profile = await instance.getProfile(user.id);
```

```json
{
  "id": 37473657,
  "username": "msaistanbul",
  "fullName": "Mutfak Sanatları Akademisi",
  "isPrivate": false,
  "isVerified": false,
  "category": "Education",
  "mediaCount": 3068,
  "followerCount": 127549,
  "followingCount": 1,
  "biography": "Türkiye'nin profesyonel mutfak okulu",
  "pictureUrl": "https://instagram.fadb5-1.fna.fbcdn.net/v/t51.2885-19/11881767_743326829127820_1373246811_a.jpg?_nc_ht=instagram.fadb5-1.fna.fbcdn.net&_nc_ohc=6pn4wasDKOkAX_tAn9_&oh=104aa335ea964ffe2187785d214f7165&oe=5EBCE90B",
  "pictureUrlHD": "https://instagram.fadb5-1.fna.fbcdn.net/v/t51.2885-19/11881767_743326829127820_1373246811_a.jpg?_nc_ht=instagram.fadb5-1.fna.fbcdn.net&_nc_ohc=6pn4wasDKOkAX_tAn9_&oh=104aa335ea964ffe2187785d214f7165&oe=5EBCE90B"
}
```

```js
const stories = await instance.getStories(user.id);
```

```json
[
  {
    "type": "image",
    "publishingDate": 1586682298,
    "url": "https://instagram.fadb5-1.fna.fbcdn.net/v/t51.12442-15/e35/92705030_698473380897285_9122577853264652700_n.jpg?_nc_ht=instagram.fadb5-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=xdZFFlYI_akAX_vY9C3&oh=b8d5ee2d24e5753a13da379df8595996&oe=5E95B447&ig_cache_key=MjI4NTU3OTI3MjA4NTM3ODQ3MQ%3D%3D.2"
  },
  {
    "type": "image",
    "publishingDate": 1586686936,
    "url": "https://instagram.fadb5-1.fna.fbcdn.net/v/t51.12442-15/e35/92770835_696332224475311_4243176858723839369_n.jpg?_nc_ht=instagram.fadb5-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=0lUYv_NPo5wAX-lvuU0&oh=0b53faad2b07a3ce9378113070eb49d0&oe=5E9567D1&ig_cache_key=MjI4NTYxODE3MDU2Mzk1OTc4MQ%3D%3D.2"
  }
]
```

```js
const stories = await instance.getHighlights(user.id);
```

```json
[
  {
    "id": 18018470521080390,
    "title": "15 Detay",
    "pictureUrl": "https://instagram.fadb5-1.fna.fbcdn.net/v/t51.2885-15/s150x150/92926914_225992381986206_1535753481570063672_n.jpg?_nc_ht=instagram.fadb5-1.fna.fbcdn.net&_nc_ohc=elQyb7IDbOQAX9zI0j_&oh=238e2c1ca1747119448043d087b93d38&oe=5EBCB9D1",
    "pictureUrlHD": "https://instagram.fadb5-1.fna.fbcdn.net/v/t51.12442-15/sh0.08/e35/c0.476.1080.1080a/s640x640/50515163_2264397003826094_2749210194251713412_n.jpg?_nc_ht=instagram.fadb5-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=z52OA3oBBbsAX_IHLoW&oh=16b22ed0091978268664c3af3c604ed0&oe=5E959C23&ig_cache_key=MTk3Mjc4ODk1OTMyOTA1NTg2MA%3D%3D.2.c"
  },
  {
    "id": 17867663563236912,
    "title": "Güncel Haberler",
    "pictureUrl": "https://instagram.fadb5-1.fna.fbcdn.net/v/t51.2885-15/s150x150/92138770_242284240153627_1193764694243861466_n.jpg?_nc_ht=instagram.fadb5-1.fna.fbcdn.net&_nc_ohc=feJmnX_dVKkAX8NoeiR&oh=5b745e91cc0c773971c609a7be46af97&oe=5EBDD60D",
    "pictureUrlHD": "https://instagram.fadb5-1.fna.fbcdn.net/v/t51.12442-15/sh0.08/e35/c0.292.750.750a/s640x640/90672480_1486643088168804_7571487693743469584_n.jpg?_nc_ht=instagram.fadb5-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=LOGM2QTPZt4AX-iI6_p&oh=021176452baae0505d0af38a2bcc691a&oe=5E95A648&ig_cache_key=MjI3MDU4MzA4OTAxMzQwMDc5MQ%3D%3D.2.c"
  },
  {
    "id": 17957043859167402,
    "title": "Listeler",
    "pictureUrl": "https://instagram.fadb5-1.fna.fbcdn.net/v/t51.2885-15/s150x150/80039215_619108755499093_8109592456435103106_n.jpg?_nc_ht=instagram.fadb5-1.fna.fbcdn.net&_nc_ohc=JsHsWFqVVjoAX8MAPet&oh=d8413c31d2570b8fbf65502e2009e472&oe=5EBC606F",
    "pictureUrlHD": "https://instagram.fadb5-1.fna.fbcdn.net/v/t51.12442-15/sh0.08/e35/c0.476.1080.1080a/s640x640/46624987_2248652905419942_7963609356875917045_n.jpg?_nc_ht=instagram.fadb5-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=mRURLTwSsm0AX9K05Gx&oh=77ebc017a9096f4e8bce79b5fd902883&oe=5E957EEC&ig_cache_key=MTkyNzA5NDgxNzcwMTgyNTQ5Mw%3D%3D.2.c"
  },
  {
    "id": 18137090059035160,
    "title": "Sevgili Günlük",
    "pictureUrl": "https://instagram.fadb5-1.fna.fbcdn.net/v/t51.2885-15/s150x150/92641970_231972834525725_3481302566092020027_n.jpg?_nc_ht=instagram.fadb5-1.fna.fbcdn.net&_nc_ohc=ALM78ZbP8O8AX9awOVs&oh=bb1f90e0ab6629eddadef7277a3e6f2b&oe=5EBCCCE1",
    "pictureUrlHD": "https://instagram.fadb5-1.fna.fbcdn.net/v/t51.12442-15/sh0.08/e35/c0.292.750.750a/s640x640/92757208_530525980996139_996516879066484727_n.jpg?_nc_ht=instagram.fadb5-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=ZRekstBFrPkAX9GHJ5k&oh=9eda6e980048c556ff6ff546b806485f&oe=5E9571B7&ig_cache_key=MjI4MTQyOTYzMDQ2MDQ3Mzk3Mg%3D%3D.2.c"
  }
]
```

```js
const stories = await instance.getHightlightedStories(highlights.shift().id);
```

```json
[
  {
    "type": "image",
    "publishingDate": 1586019183,
    "url": "https://instagram.fadb5-1.fna.fbcdn.net/v/t51.12442-15/e35/p1080x1080/91810848_160743792107008_6710558220805873673_n.jpg?_nc_ht=instagram.fadb5-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=otYBPF1ITwwAX8d6HPf&oh=981b2d91fa2ff2837feb7f3bdda5d634&oe=5E9591E7&ig_cache_key=MjI4MDAxNjY0NTk4OTA2ODA1Nw%3D%3D.2"
  },
  {
    "type": "image",
    "publishingDate": 1586019172,
    "url": "https://instagram.fadb5-1.fna.fbcdn.net/v/t51.12442-15/e35/p1080x1080/92447742_2559147737685200_5115363576448154217_n.jpg?_nc_ht=instagram.fadb5-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=n5vf7mvn4i4AX-A6P8f&oh=e4d388607851f83b46df3a338245bca5&oe=5E95E1A0&ig_cache_key=MjI4MDAxNjU1NTE5OTAyNDk0Mg%3D%3D.2"
  },
  {
    "type": "image",
    "publishingDate": 1586019163,
    "url": "https://instagram.fadb5-1.fna.fbcdn.net/v/t51.12442-15/e35/p1080x1080/91579067_530796817871732_213293025869538450_n.jpg?_nc_ht=instagram.fadb5-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=_Q0bvfnb0nUAX9ZI3uM&oh=f9a84226dc2d797136963fac1de0edae&oe=5E95EBF2&ig_cache_key=MjI4MDAxNjQ3OTU0MjA5MjY4NA%3D%3D.2"
  }
]
```

```js
const posts = await instance.getPosts(user.id);
```

```json
{
  "posts": [
    {
      "type": "image",
      "dimensions": {
        "height": 1080,
        "width": 1080
      },
      "displayUrl": "https://instagram.fadb5-1.fna.fbcdn.net/v/t51.2885-15/e35/92453231_330658684563596_8919854620364666586_n.jpg?_nc_ht=instagram.fadb5-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=_6PW3taMVqYAX990RYH&oh=3afaf0d423d30ad8e257d5aa5849c5d2&oe=5EBE2FA5&ig_cache_key=MjI4NTgyMjMyNzEzNjgwMzM1NA%3D%3D.2",
      "publishingDate": 1586711277,
      "caption": "Tekrar tekrar bunları izlediklerine eminim!",
      "location": null,
      "preview": null,
      "like": 20554
    }
  ],
  "pageInfo": {
    "hasNextPage": true,
    "endCursor": "QVFDTVJreDJFZzdDdXlKWk1BU25lbjE4czJkMUhxY2V1Uy14MGpPckh0aDU3V2lTWFNvcEhHeU5tQUplT1pCanZVOFNnbkJRTndzZ0ZQUWtVaXpMMnRTMA=="
  }
}
```
