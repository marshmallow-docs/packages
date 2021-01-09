# Aggregate Rating

Below you will find the code you can use to generate a `Aggregate Rating` rich data JSON.

### Your code
```php
SchemaAggregateRating::make(9.5, 325)
	->bestRating(10)
	->worstRating(5);
```

### The result
```json
{
	"@type":"AggregateRating",
	"ratingValue":9.5,
	"reviewCount":325,
	"bestRating":10,
	"worstRating":5
}
```

<EditOnGithub repo_name="packages" edit_url="seo/rich-content/aggregate-rating.md"/>
