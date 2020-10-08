# Live update
Live update is a field resource for Laravel Nova with which you can edit texts inline on index pages. See the screenshot below for reference.

[[toc]]

## Screenshot

<img src="https://raw.githubusercontent.com/marshmallow-packages/live-update/main/resources/screenshots/inline-editable.png"/>

## Installation
```bash
# Require the package and its dependencies
composer require marshmallow/translatable
```

## Usage
Currently we only have a simple text field available for live updating. If you wish to have more fields available please create an issue or send us a pull request.

```php
use Marshmallow\LiveUpdate\TextLiveUpdate;

TextLiveUpdate::make('Name')
```

<EditOnGithub repo_name="packages" edit_url="nova/live-update.md"/>
