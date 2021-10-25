# Eumis angularjs package
The package contains angularjs directive for display markdown in template

## **Installation**  
Add package "eumis-markdown" to packаge.config file as follows:

```json

    dependencies:{
        "eumis-markdown": "github:mstamenov/eumis-markdown"
    }
```
then run **npm install**

## **Usage**  
Load the module in root application module i.e:
```ts
import MarkdownModule from 'eumis-markdown'
...
angular
  .module('main', [
      ...
      MarkdownModule,
      ...
  ])
```
 Add new directive in angular template
```html
    <markdown-viewer text="rawMdText"></markdown-viewer>
```
In corresponding controller set property $scope.rawMdText with markdown text.
```ts
    $scope.rawMdText = `Hello *World*   
**foo** 
> bar`;
```
