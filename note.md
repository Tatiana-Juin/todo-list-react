# Etapes et reflexions

## Récupérer la valeur saisie par l'utilisateur 
1. Récuperer la valeur saisie grâce a une fonction 
2. Ajouter la valeur saisie dans un tableau grâce a useState 


## Afficher le tableau dans le composant CardData

## Faire la modification dans Card.jsx

## faire la supression dans Card.jsx

# Note - Chose a faire 
## fichier Card.jsx
### Pour le bouton modifier 
- Quand on click dessus **onClick** on voie apparaitre un **input avec le texte** a l'interrieur et le **bouton modifier** est la .
- Dans  le input on a **la valeur récupéré** que l'on peut modifier .
- Quand on click sur modifier on voie apparaitre **la nouvelle valeur** (**Condition ternaire** avec un boolean pour savoir si il a le champs input qui est présent - si faux alors nouvelle valeurs sinon boolean est true donc on ne voie pas la nouvelle valeur)
- Utilise les **useState()**

#### Comment ? 
- **Récupérer id** de la tache 
- **Récupérer la nouvelle valeur** qui à était saisie 
- Pour **afficher** le **input** il va faloir faire une condition 

### Bouton supprimer 
- Récupérer la valeur et l'index
- Puis on le supprimer  

# Problème rencontrer
## App.jsx - Récuperer la valeur 

- Quand je saisie **une première tache** => console log avec un **tableau vide** . Quand tu **saisie une 2eme tache** => console log renvoie un **tableau avec la valeur prècèdente**.

- **CAUSE**
- problème de **mise a jours de l'état** tasks 
- **SOLUTION**
- Pour exécuter une action après la mise à jour de l'état avec useState, nous devons utiliser useEffect

````
    function handleTask(e){
      e.preventDefault();
      
      if(dataValue.trim() !== ""){
        setTasks(prevTasks => [
          ...prevTasks,
          {id: nextId++, name: dataValue}
        ]);
        setDataValue('');
      }
    }

    useEffect(() => {
      console.log(tasks); // S'exécute après chaque mise à jour de tasks
    }, [tasks]);
````

- **PROBLEME** \
Cela renvoie **3 tableau dans le console.log** 
- **Cause** \
    Le problème avec votre code réside dans le fait que console.log(tasks) dans l'effet useEffect est déclenché **chaque fois que tasks est mis à jour**, y compris lors **du rendu initial**. C'est pourquoi vous voyez trois tableaux vides lorsque vous saisissez une valeur. 

    Pour résoudre ce problème, vous pouvez utiliser un **état supplémentaire** pour garder une trace du moment où le composant est monté, et n'exécuter console.log(tasks) que lorsque le **composant est monté** et que **tasks a été mis à jour**. 
    
    ````  
    let nextId=0;  
        const [mounted, setMounted] = useState(false);

    function handleValue(e){
      setDataValue(e.target.value);
    }
    
    function handleTask(e){
      e.preventDefault();
      
      if(dataValue.trim() !== ""){
        setTasks(tasks => [
          ...tasks,
          {id: nextId++, name: dataValue}
        ]);
        setDataValue('');
      }
    }

    useEffect(() => {
      if (mounted) {
        console.log(tasks); // S'exécute après chaque mise à jour de tasks
      } else {
        setMounted(true);
      }
    }, [tasks, mounted]);

    ````
- **PB** => affiche 2 tableau dont le premier  vide et le id pour la key passe de 1 a 3

    - **cause et solution pour le key**
    On met un **id = 1** puis on ajoute **1 avant de creer la nouvelle tache** c'est pour cela que ca s'increment en 2\
    **SOLUTION** 
    ````
        setTasks(tasks => [
          ...tasks,
          {id: tasks.length+1, name: dataValue}
        ]);
    ````
    Récupere la taille du tableau et on ajoute 1  donc on part de 1 et non 0 

    - **cause et solution - 2 tableau**
    ````    
        useEffect(() => {
      if (mounted && tasks.length > 0) { // Vérifie si le composant est monté et si tasks n'est pas vide
        console.log(tasks); // S'exécute après chaque mise à jour de tasks
      } else {
        setMounted(true);
      }
    }, [tasks, mounted]);
    ````
   tasks.length > 0 ==> pour que le tableau  ne soit pas vide 

   ## Pourquoi avoir utiliser useEffect()
   Dans votre cas, vous utilisez useEffect pour afficher le contenu de tasks dans la console après chaque mise à jour de tasks. Cela permet de suivre les changements dans tasks et de voir son contenu mis à jour dans la console. 

    1.  Le premier argument de useEffect est une fonction qui contient le code que vous souhaitez exécuter après le rendu du composant. Dans ce cas, cette fonction contient console.log(tasks).

    2. Le deuxième argument de useEffect est un tableau de dépendances. L'effet sera réexécuté chaque fois que l'une de ces dépendances change. Dans votre cas, l'effet est déclenché chaque fois que tasks ou mounted change.

    3. À l'intérieur de la fonction de l'effet, vous vérifiez si le composant est monté (mounted) et si tasks n'est pas vide avant d'afficher le contenu de tasks dans la console. Cela évite d'afficher un tableau vide lors du premier rendu, car tasks est initialisé à un tableau vide.