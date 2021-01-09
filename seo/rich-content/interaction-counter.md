# Interaction Counter

Below you will find the code you can use to generate a `Interaction Counter` rich data JSON.

### Your code
```php
SchemaInteractionCounter::make('WatchAction', 2347);
```

### The result
```json
{
	"@type":"InteractionCounter",
	"interactionType":{
		"@type":"http:\/\/schema.org\/WatchAction"
	},
	"userInteractionCount":2347
}
```

<EditOnGithub repo_name="packages" edit_url="seo/rich-content/interaction-counter.md"/>
