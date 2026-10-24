# Scanner commande Dynacad

Application web mobile de préparation de commandes avec scan EAN, recherche et navigation par rayons/familles, modification des quantités et export CSV compatible avec le processus Dynacad du magasin.

## Fichiers

- `index.html` : application.
- `catalog.json` : catalogue produits.
- `thumbs-01.json` à `thumbs-13.json` : vignettes des produits, réparties en plusieurs fichiers pour faciliter l'hébergement.

## Publication avec GitHub Pages

Dans **Settings → Pages**, choisir **Deploy from a branch**, puis **main** et **/(root)**.

Adresse attendue après activation : https://ichris2611i.github.io/scanner-dynacad/

## À savoir

Les commandes sont enregistrées dans le navigateur du téléphone, et ne se synchronisent pas entre les appareils. L'export produit un fichier CSV à importer ensuite dans Dynacad. Éviter d'importer deux fois le même fichier.

Cette application est un outil indépendant et non une application officielle Carrefour.
