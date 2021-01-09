# Recipe

Below you will find the code you can use to generate a `Recipe` rich data JSON.

### Your code
```php
SchemaRecipe::make('Recept name')
	->image('image.jpg')
	->image('another-image.jpg')
	->author('Marshmallow')
	->datePublished(now())
	->description('description')
	->prepTime(20)
	->cookTime(50)
	->totalTime(70)
	->keywords(['Marshmallows', 'Sugary'])
	->recipeYield(3)
	->recipeCategory('Sweets')
	->recipeCuisine('American')
	->nutrition(
		SchemaNutritionInformation::make()
			->calories(1)
			->carbohydrate(2)
			->cholesterol(20)
			->fat(3)
			->fiber(4)
			->protein(5)
			->saturatedFat(6)
			->servingSize(7)
			->sodium(8)
			->sugar(9)
			->transFat(10)
			->unsaturatedFat(11)
	)
	->ingredients([
		'1 ui',
		'1 groentebouillonblokje',
		'100 g groene aspergetips of kleine groene asperges',
		'450 g doperwtjes uit de vriezer',
		'1 takje verse munt',
		'4 el Griekse yoghurt',
	])
	->instructions(
		SchemaHowToStep::make('Preheat')
			->text('Preheat the oven to 350 degrees F. Grease and flour a 9x9 inch pan.')
			->url('https://example.com/party-coffee-cake#step1')
			->image('https://example.com/photos/party-coffee-cake/step1.jpg'),

		SchemaHowToStep::make('Mix dry ingredients')
			->text('In a large bowl, combine flour, sugar, baking powder, and salt.')
			->url('https://example.com/party-coffee-cake#step2')
			->image('https://example.com/photos/party-coffee-cake/step2.jpg'),

		SchemaHowToStep::make('Add wet ingredients')
			->text('Mix in the butter, eggs, and milk.')
			->url('https://example.com/party-coffee-cake#step3')
			->image('https://example.com/photos/party-coffee-cake/step3.jpg')
	)
	->aggregateRating(
		SchemaAggregateRating::make(9.5, 325)
			->bestRating(10)
			->worstRating(5)
	)
	->video(
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
	);
```

### The result
```json
{
	"@context": "https:\/\/schema.org\/",
	"@type": "Recipe",
	"name": "Recept naam",
	"image": ["image.jpg", "another-image.jpg"],
	"author": {
		"@type": "Person",
		"name": "Marshmallow"
	},
	"datePublished": "2021-01-09T18:01:26.487738Z",
	"description": "description",
	"prepTime": "PT20M",
	"cookTime": "PT50M",
	"totalTime": "PT70M",
	"keywords": "Marshmallows, Sugary",
	"recipeYield": 3,
	"recipeCategory": "Sweets",
	"recipeCuisine": "American",
	"nutrition": {
		"@type": "NutritionInformation",
		"calories": "1 calories",
		"carbohydrateContent": "2 grams",
		"cholesterolContent": "20 milligrams",
		"fatContent": "3 grams",
		"fiberContent": "4 grams",
		"proteinContent": "5 grams",
		"saturatedFatContent": "6 grams",
		"servingSize": 7,
		"sodiumContent": "8 milligrams",
		"sugarContent": "9 grams",
		"transFatContent": "10 grams",
		"unsaturatedFatContent": "11 grams"
	},
	"aggregateRating": {
		"@type": "AggregateRating",
		"ratingValue": 9.5,
		"reviewCount": 325,
		"bestRating": 10,
		"worstRating": 5
	},
	"recipeIngredient": ["1 ui", "1 groentebouillonblokje", "100 g groene aspergetips of kleine groene asperges", "450 g doperwtjes uit de vriezer", "1 takje verse munt", "4 el Griekse yoghurt"],
	"recipeInstructions": [{
		"@type": "HowToStep",
		"name": "Preheat",
		"text": "Preheat the oven to 350 degrees F. Grease and flour a 9x9 inch pan.",
		"url": "https:\/\/example.com\/party-coffee-cake#step1",
		"image": "https:\/\/example.com\/photos\/party-coffee-cake\/step1.jpg"
	}, {
		"@type": "HowToStep",
		"name": "Mix dry ingredients",
		"text": "In a large bowl, combine flour, sugar, baking powder, and salt.",
		"url": "https:\/\/example.com\/party-coffee-cake#step2",
		"image": "https:\/\/example.com\/photos\/party-coffee-cake\/step2.jpg"
	}, {
		"@type": "HowToStep",
		"name": "Add wet ingredients",
		"text": "Mix in the butter, eggs, and milk.",
		"url": "https:\/\/example.com\/party-coffee-cake#step3",
		"image": "https:\/\/example.com\/photos\/party-coffee-cake\/step3.jpg"
	}],
	"video": {
		"@type": "VideoObject",
		"name": "Video",
		"description": "Description",
		"thumbnailUrl": ["https:\/\/example.com\/photo-1.jpg", "https:\/\/example.com\/photo-2.jpg"],
		"contentUrl": "http:\/\/www.example.com\/video123.mp4",
		"embedUrl": "http:\/\/www.example.com\/videoplayer?video=123",
		"uploadDate": "2021-01-09T18:01:26.493684Z",
		"duration": "PT0H1M33S",
		"interactionStatistic": {
			"@type": "InteractionCounter",
			"interactionType": {
				"@type": "http:\/\/schema.org\/WatchAction"
			},
			"userInteractionCount": 2347
		},
		"expires": "2021-01-12T18:01:26.494856Z"
	}
}
```

<EditOnGithub repo_name="packages" edit_url="seo/rich-content/recipe.md"/>
