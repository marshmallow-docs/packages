# Translatable

[[toc]]

## Installation
```bash
# Require the package and its dependencies
composer require marshmallow/translatable

# Migrate the translations and translatable tables.
php artisan migrate

# Run the package installer
php artisan translatable:install

# Create the language resource
php artisan marshmallow:resource Language Translatable
php artisan marshmallow:resource Translation Translatable

# Seed your translations table
php artisan translatable:sync-file-to-database
php artisan translatable:sync-missing
```

## Preparing your models
The only thing you need to do to prepare your model to use translations is adding the `Translatable` trait to all the models you want to be translated.

```php
use Marshmallow\Translatable\Traits\Translatable;

class Page extends Model
{
	use Translatable;
}
```

## Preparing your Nova resources
The only thing you need to do to prepare your nova resources to use translations is adding the `Translatable` trait to all the models you want to be translated and change the `fields` method to `translatableFields`. The trait you are adding implements the `fields` method for you. When you are not translating a resource, it will just return the fields from `translatableFields` to Nova so you can edit all your fields. If you are translating, it will delete all the fields that you didn't include in you translatable columns. Please check the `options` chapter of this documentation to checkout how you can [exclude columns/fields](#excluding-from-translations) from translations.

```php
use Marshmallow\Translatable\Traits\Translatable;

class Page extends Resource
{
	use Translatable;

	//...

	public function translatableFields(Request $request)
    {
    	//
    }
}
```

## Manualy add translations
Manual translations:
```php
$page->setTranslation('nl', 'name', 'Artikelen');

$page->setTranslation('nl', [
	'name' => 'Artikelen',
]);
```

## Translate separate value
If you wish to also handle the translations in your application, you can add our translation tool. All strings that are in one of your language files or in a blade file using the `__('Text string')` function will be available for translation in this tool.

```php
use Marshmallow\NovaTranslation\NovaTranslation;

public function tools()
{
    return [
        new NovaTranslation,
    ];
}
```

## Options
### Excluding from translations
By default we set all columns to translatable except for the columns that are [marked as producted](#marked-as-protected) by us. You have two options to change this behaviour. You can set the translatable columns manualy or you can keep the default behaviour and exclude more columns.
::: details View examples
```php
# In this example, we have a resource with the columns:
# id, name, slug, image, created_at

/**
 * The default behaviour
 * Translatable: name, slug and image
 */

/**
 * Set the translatable columns manualy on your model.
 * Translatable: name and slug
 */
public $translatable = [
	'name',
	'slug',
];

/**
 * Use the default settings but exclude columns
 * Translatable: name and image
 */
public function ignoreFromTranslations(): array
{
	return [
		'slug'
	];
}
```
:::


### Marked as protected
```php
protected $protected_columns = [
	'id',
	'created_at',
	'updated_at',
	'deleted_at',
];
```

<EditOnGithub repo_name="packages" edit_url="nova/translatable.md"/>
