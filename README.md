# Computer store e-commerce template

[![Downloads](https://poser.pugx.org/vkovic/uikit-computer-store-template/downloads)](https://packagist.org/packages/vkovic/uikit-computer-store-template)
[![Stable](https://poser.pugx.org/vkovic/uikit-computer-store-template/v/stable)](https://packagist.org/packages/vkovic/uikit-computer-store-template)
[![License](https://poser.pugx.org/vkovic/uikit-computer-store-template/license)](https://packagist.org/packages/vkovic/uikit-computer-store-template)

### Computer store e-commerce template built with UIkIt, Sass and JS

- Minified size is just XXX kb
- Icons mention
- Ported from XXX


By default, from version 5 Laravel supports attribute casting. If we define `$cast` property on our model, Laravel will
help us convert defined attributes to common data types. Currently supported cast types (Laravel 5.6) are: `integer`,
`real`, `float`, `double`, `string`, `boolean`, `object`, `array`, `collection`, `date`, `datetime` and `timestamp`.

If those default cast types are not enough and you want to make your own, you'r on the right track.

---

## Compatibility

The package is compatible with Laravel versions `>= 5.5`

## Installation

Install the package via composer:

```bash
composer require vkovic/uikit-computer-store-template
```

## Example: Casting User Image

When saving an image, there is two things that needs to be done:
1. Save image name (sometimes with path) into corresponding database field
2. Save image physically on the disk

As a guidance for this example we'll use default Laravel user model found in `app/User.php`.

Beside basic, predefined fields: `name`, `email` and `password`, we also want to allow user to upload his avatar. Assume
that we already have `users` table with `image` field (you should create seeder for this).

To utilize custom casts, we'll need to add trait to user model, and via `$casts` property link it to the cast class.