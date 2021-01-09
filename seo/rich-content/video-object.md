# Video Object

Below you will find the code you can use to generate a `Video Object` rich data JSON.

### Your code
```php
SchemaVideoObject::make('Video')
	->description('Description')
	->thumbnail('https://example.com/photo-1.jpg')
	->thumbnail('https://example.com/photo-2.jpg')
	->contentUrl('http://www.example.com/video123.mp4')
	->embedUrl('http://www.example.com/videoplayer?video=123')
	->uploadDate(now())
	->duration(93)
	->interactionStatistic(
		SchemaInteractionCounter::make('WatchAction', 2347)
	)
	->expires(now()->addDays(3))
```

### The result
```json
{
	"@type":"VideoObject",
	"name":"Video",
	"description":"Description",
	"thumbnailUrl":[
		"https:\/\/example.com\/photo-1.jpg",
		"https:\/\/example.com\/photo-2.jpg"
	],
	"contentUrl":"http:\/\/www.example.com\/video123.mp4",
	"embedUrl":"http:\/\/www.example.com\/videoplayer?video=123",
	"uploadDate":"2021-01-09T17:55:01.073148Z",
	"duration":"PT0H1M33S",
	"interactionStatistic":{
		"@type":"InteractionCounter",
		"interactionType":{
			"@type":"http:\/\/schema.org\/WatchAction"
		},
		"userInteractionCount":2347
	},
	"expires":"2021-01-12T17:55:01.073976Z"
}
```

<EditOnGithub repo_name="packages" edit_url="seo/rich-content/video-object.md"/>
