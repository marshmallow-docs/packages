# Nutrition Information

Below you will find the code you can use to generate a `Nutrition Information` rich data JSON.

### Your code
```php
SchemaNutritionInformation::make()
	->calories(170)
	->carbohydrate(3)
	->cholesterol(2)
	->fat(4)
	->fiber(3)
	->protein(6)
	->saturatedFat(4)
	->servingSize(2)
	->sodium(3)
	->sugar(76)
	->transFat(43)
	->unsaturatedFat(2)
	->addMass(3);
```

### The result
```json
{
	"@type": "NutritionInformation",
	"calories": "170 calories",
	"carbohydrateContent": "3 grams",
	"cholesterolContent": "2 milligrams",
	"fatContent": "4 grams",
	"fiberContent": "3 grams",
	"proteinContent": "6 grams",
	"saturatedFatContent": "4 grams",
	"servingSize": 2,
	"sodiumContent": "3 milligrams",
	"sugarContent": "76 grams",
	"transFatContent": "43 grams",
	"unsaturatedFatContent": "2 grams"
}
```

<EditOnGithub repo_name="packages" edit_url="seo/rich-content/mutrition-information.md"/>
