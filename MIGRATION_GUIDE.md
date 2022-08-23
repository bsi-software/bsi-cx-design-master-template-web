# Migration Guide

If you are migrating from an earlier version of the [@bsi-cx/design-master-template-web](https://github.com/bsi-software/bsi-cx-design-master-template-web), which itself references to an earlier version of [@bsi-cx/design-standard-library-web](https://github.com/bsi-software/bsi-cx-design-standard-library-web), consult the following section ([Migration from Version 1.0.x](#migration-from-version-1.0.x))

## Migration from Version 1.0.x

If you were an early adapter of our new templates, a refactoring may be needed. Content elements that have been overwritten in your template and are referring to the _standard-library_, may need a migration. If your content elements are using the `element.render(...)` function, those content elements need a rewrite. 

A content element that used to look like this:
```twig
{% apply spaceless %}
    {% import '@bsi-cx/design-standard-library-web/content-elements/base/figure/prototype/template.twig' as element %}

    {{ element.render('logo-pm7eOT', 'logo-part-image-1rKWxD', 'logo-part-text-ySZsrw', bsi_cx_asset('../../static/logo.svg'), 'Logo') }}
{% endapply %} 
```

must be rewritten to:
```twig
{% apply spaceless %}
    {% include '@bsi-cx/design-standard-library-web/content-elements/base/figure/prototype/template.twig' with {
        elementId: 'logo-pm7eOT',
        imagePartId: 'logo-part-image-1rKWxD',
        textPartId: 'logo-part-text-ySZsrw',
        imageSrc: bsi_cx_asset('../../static/logo.svg'),
        caption: 'Logo'
    } %}
{% endapply %} 
```

Make sure to:
- Switch from `import` to `include`
- Use `with` and pass in all customized variables instead of using `element.render(...)`

The customized variables can be picked from the content element implementation in the _standard-library_. In case of our example above, it looks like the following:

```twig
{% apply spaceless %}
    {% set figureElementId = elementId ?: 'figure-DWEfdD' %}
    {% set figureImagePartId = imagePartId ?: 'figure-part-image-JoCwpV' %}
    {% set figureTextPartId = textPartId ?: 'figure-part-text-Xbhmjk' %}
    {% set figureImageSrc = imageSrc ?: bsi_cx_asset('../../../../static/image.png') %}
    {% set figureCaption = caption ?: bsi_cx_lorem(3) %}

    <figure data-bsi-element="{{ figureElementId }}" class="figure {{ 'bsi-element-' ~ figureElementId }} bsi-caption-hide bsi-caption-medium bsi-shape-square bsi-orientation-landscape bsi-aspect-ratio-auto bsi-hover-effect-disabled bsi-overlay-hide bsi-overlay-opacity-0">
        <img src="{{ figureImageSrc }}" class="figure-img img-fluid" alt="{{ figureCaption }}" data-bsi-element-part="{{ figureImagePartId }}" srcset="{{ figureImageSrc }}"/>
        <figcaption class="figure-caption" data-bsi-element-part="{{ figureTextPartId }}">{{ figureCaption }}</figcaption>
    </figure>
{% endapply %}
```