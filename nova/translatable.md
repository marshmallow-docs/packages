# Translatable

[[toc]]

## Installation
```bash
# Require the package and its dependencies
composer require marshmallow/translatable

# Publish the translateble config file.
php artisan vendor:publish --provider Marshmallow\\Translatable\\ServiceProvider

# Migrate the translations and translatable tables.
php artisan migrate

# Run the package installer
php artisan translatable:install
```

::: warning
Because of group by's in queries you probably need to change your database strict to `false`. If you get database errors during the installation, this is probebly the issue.
::: details config/database.php
```php
/**
 * Please change strict mode to false in config/database.php
 */
'connections' => [
	// ...
	'mysql' => [
		// ...
	    'strict' => false,
	],
],
```
:::

::: warning
Remember to call `henk` when you add a new language so the missing translations for that language will be added to your database.
:::

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
The only thing you need to do to prepare your nova resources to use translations is adding the `TranslatableFields` trait to all the models you want to be translated and change the `fields` method to `translatableFields`. The trait you are adding implements the `fields` method for you. When you are not translating a resource, it will just return the fields from `translatableFields` to Nova so you can edit all your fields. If you are translating, it will delete all the fields that you didn't include in you translatable columns. Please check the `options` chapter of this documentation to checkout how you can [exclude columns/fields](#excluding-from-translations) from translations.

```php
use Marshmallow\Translatable\Traits\TranslatableFields;

class Page extends Resource
{
	use TranslatableFields;

	//...

	public function translatableFields(Request $request)
    {
    	//
    }
}
```
## Routes
We have default routes available to use in your frontend so the user can switch there language. Use the route below to do so.
```php
use Marshmallow\Translatable\Models\Language;
$languages = Language::get();

# In your blade file
@foreach($languages as $language)
	<a href="{{ route('set-locale', $language) }}">
		{{ $language->name }}
	</a>
@endforeach
```

## Load default translations
We have presets of translations which you can use in your projects. When you run this command, we will only translate existing translation rows in your database. We won't add any new rows. This is done this way so we don't clutter your database with unnecessary data.

```bash
# The "nl" in this example is the country code in your database.
# We will check if we have a match for that, if we don't we will
# ask you to select the correct language so we know we import the
# correct data.
php artisan translatable:preset nl

# If you don't want the command to ask you any questions you
# can add the --force option. This will do the import directly.
php artisan translatable:preset nl --force
```

## Manualy add translations
Manual translations:
```php
$page->setTranslation('nl', 'name', 'Artikelen');

$page->setTranslation('nl', [
	'name' => 'Artikelen',
]);
```

## Options
### Excluding from translations
By default we set all columns to translatable except for the columns that are [marked as producted](#marked-as-protected) by us. You have two options to change this behaviour. You can set the translatable columns manualy or you can keep the default behaviour and exclude more columns.
::: details Display examples
```php
# In this example, we have a resource with the columns:
# id, name, slug, image, created_at

/**
 * The default behaviour
 * Translatable: name, slug and image. Id and created_at are protected by default
 */

/**
 * Set the translatable columns manualy on your model.
 * Translatable: name and slug
 */
public function translatableColumns(): array
{
    return [
        'name',
		'slug',
    ];
}

/**
 * Use the default settings but exclude columns
 * Translatable: name and image
 */
public function notTranslateColumns(): array
{
    return [
	    'slug',
	];
}
```
:::


### Marked as protected
```php
protected $protected_from_translations = [
	'id',
	'created_at',
	'updated_at',
	'deleted_at',
];
```

<EditOnGithub repo_name="packages" edit_url="nova/translatable.md"/>
