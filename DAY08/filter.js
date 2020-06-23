// Challenge 1*

// Créer un fichier filter1.js.

// Créer une variable arr avec un array ['a', 'b', 'a', 'c', 'a', 'd'].

// En utilisant Array.filter(), créer arr2 qui n’affichera que les a.

// Résultat attendu
// ['a', 'a', 'a', 'a']
//////////////////////////////////////////////////////////////////////////////
// Challenge 2
// Créer un fichier filter2.js.

// Créer une variable arr avec un array ['a', 'b', 'a', 'c', 'a', 'd'].

// En utilisant Array.filter(), créer arr2 qui n’affichera tout sauf les a.

// Résultat attendu
// ['b', 'c', 'd']
//////////////////////////////////////////////////////////////////////////////
// Challenge 3
// Créer un fichier filter3.js.

// Créer une variable arr avec un array [1, 'a', 2, 'b'].

// En utilisant Array.filter(), créer arr2 qui n’affichera que les string.

// Indice
// Penser à utiliser typeof

// Résultat attendu
// ['a', 'b']
//////////////////////////////////////////////////////////////////////////////
// Challenge 4
// Créer un fichier filter4.js.

// Créer une variable arr avec un array [1, 2, 3, 4].

// En utilisant Array.filter() et la fonction isEven (que vous recopierez dans ce fichier), créer arr2 qui n’affichera que les nombre pairs.

// Résultat attendu
// [2, 4]
//////////////////////////////////////////////////////////////////////////////
// Challenge 5
// Créer un fichier filter5.js.

// Créer une variable arr avec un array

// [{
//     firstName: 'David',
//     surname: 'Beckham',
//     job: 'footballer'
// }, {
//     firstName: 'James',
//     surname: 'Corden',
//     job: 'tv host'
// }, {
//     firstName: 'Daniel',
//     surname: 'Craig',
//     job: 'actor'
// }, {
//     firstName: 'Graham',
//     surname: 'Norton',
//     job: 'tv host'
// }]
// En utilisant Array.filter(), créer arr2 qui n’affichera que les présentateurs télés.

// Résultat attendu
// [{
//     firstName: 'James',
//     surname: 'Corden',
//     job: 'tv host'
// }, {
//     firstName: 'Graham',
//     surname: 'Norton',
//     job: 'tv host'
// }]
//////////////////////////////////////////////////////////////////////////////
// Challenge 6
// Créer un fichier filter6.js.

// Créer une variable arr avec un array

// [{
//     firstName: 'David',
//     surname: 'Beckham'
// }, {
//     firstName: 'James',
//     surname: 'Corden'
// }, {
//     firstName: 'Daniel',
//     surname: 'Craig'
// }, {
//     firstName: 'Graham',
//     surname: 'Norton'
// }]
// En utilisant Array.filter(), créer arr2 qui n’affichera que les personnes dont le prénom commence par un D.

// Attention
// Il est interdit de remettre l’échantillon de l’exercice précédent

// Indice
// Utilise String.substr() pour récupérer la première lettre d’un string

// Résultat attendu
// [{
//     firstName: 'David',
//     surname: 'Beckham'
// }, {
//     firstName: 'Daniel',
//     surname: 'Craig'
// }]
//////////////////////////////////////////////////////////////////////////////
// Final challenge
// Créer un fichier filterMapFinal.js.

// Votre blog de philatélie bat son plein avec plus de 4 millions visiteurs / jours : les français adorent les timbres.

// Mais après 13 ans d’écriture sur les timbres, vous êtes fatigué.e, vous voulez une page sur la tech.

// Pour se faire, vous aller lister tous vos articles et ne récupérer que ceux qui ont le tag tech

// Créer une variable arr avec un array d’objets

// [{
//     title: "Philatélie représente",
//     timestamp: 11111111,
//     link: '/2006/04/12/philatelie-represente',
//     tags: ['timbres', 'philatelie', 'l-amour-du-timbre']
// }, {
//     title: "Philatélie t'as vu!",
//     timestamp: 11111112,
//     link: '/2008/09/03/philatelie-t-as-vu',
//     tags: ['musee-du-timbre', 'collection', 'timbre-meilleur-que-la-peinture', 'philatelie']
// }, {
//     title: "Grève des philatélistes : la fin du monde est vraie !",
//     timestamp: 11111113,
//     link: '/2012/12/12/greve-fin-du-monde',
//     tags: ['sport-national', 'philatelistes-en-greve', 'fin-du-monde', 'philatelie']
// }, {
//     title: "La tech, j'en veux plus. Les bébés, j'en veux moins",
//     timestamp: 11111114,
//     link: '/2014/11/30/philatelie-tu-peux-pas-test',
//     tags: ['resitance', 'tech']
// }, {
//     title: "Philatélie tu peux pas test!",
//     timestamp: 11111115,
//     link: '/2015/02/05/philatelie-tu-peux-pas-test',
//     tags: ['soyons-timbre', 'planche-de-timbre', 'timbre', 'philatelie']
// }, {
//     title: "La tech, la tech, la tech. Mieux que la mode",
//     timestamp: 11111116,
//     link: '/2018/03/19/philatelie-tu-peux-pas-test',
//     tags: ['fashion-week', 'fashion-geek', 'tech']
// }]
// En utilisant Array.filter(), créer arr2 qui n’affichera que les articles tech.

// Et avec Array.map, créer arr3 qui n’affichera que les titres des articles tech.

// Résultat attendu
// ["La tech, j'en veux plus. Les bébés, j'en veux moins", "La tech, la tech, la tech. Mieux que la mode"]