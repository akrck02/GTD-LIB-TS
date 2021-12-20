# GTD API - Getting things done.
Easy code :)

> This is a multi-language API with code snipets that let you develop software faster. 
>
> *Getting things done is our philosophy. Allowing developers to keep code clean and mantainable.*



## Supported languages

- Typescript - This is the main language we develop in.
- Javascript - compile the typescript to get this.
- Php - In development.
- Java - In development.
  

## How to use

Just import the library files.

> - Javascript  >> GTd-v1.0-js.zip
> - Typescript  >> GTd-v1.0-ts.zip
> - Php         >> GTd-v1.0-php.zip
> - Java        >> GTd-v1.0-java.jar


## Modular, Simple.

Keep it simple. We serve you the global versions of GTD with all modules inside.
But, you can bundle only the modules you need.



### Typescript / Javascript steps

> 1.  Go to **app.ts**
> 2.  Add / Remove modules from **MODULE_DEPENDENCIES**



```typescript
import * as myComponent from './my/url';


const MODULE_DEPENDENCIES = { 
    myComponent : myComponent,
}
```



## Typescript / Javascript modules

- Color 						| Color management
- Http                           | Http request handle 
- EasyFetch                 | Easy  async http calls based on fetchAPI
- Datetools                  | Date management tools
- Numeric                    | Numeric operations 
- URLtools                   | URL handle tools
- Materialcolors         | Material colors
- Materialicons           | Material icons
- Timetools                 | Runtime time / asyncronous handle
- Rexep                        | Regular expressions
- Responsivetools      | Web / display responsive tools
- UIcomponent           | Web UI component creation 



## Compile Typescript

Run the following command. This will clone the current project state.

```bash
git clone https://github.com/akrck02/GTD_LIB/ --branch latest
```



Install nodejs and npm from here

>  https://nodejs.org/en/download/



Then install dependencies **YOU MUST HAVE NODE & NPM INSTALLED**

```bash
cd ./GTD_LIB | npm install
```



Then use the typescript compiler

```bash
npm run ts
```



¡You have the typescript code compiled! Let's bundle it running: 

```bash
npm run dist
```



**GOOD TO GO! ENJOY DEVELOPING!**
