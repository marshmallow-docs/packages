# How to step

Below you will find the code you can use to generate a `How to step` rich data JSON.

### Your code
```php
SchemaHowToStep::make('Preheat')
		->text('Preheat the oven to 350 degrees F. Grease and flour a 9x9 inch pan.')
		->url('https://example.com/party-coffee-cake#step1')
		->image('https://example.com/photos/party-coffee-cake/step1.jpg');
```

### The result
```json
{
	"@type":"HowToStep",
	"name":"Preheat",
	"text":"Preheat the oven to 350 degrees F. Grease and flour a 9x9 inch pan.",
	"url":"https:\/\/example.com\/party-coffee-cake#step1",
	"image":"https:\/\/example.com\/photos\/party-coffee-cake\/step1.jpg"
}
```

<EditOnGithub repo_name="packages" edit_url="seo/rich-content/how-to-step.md"/>
