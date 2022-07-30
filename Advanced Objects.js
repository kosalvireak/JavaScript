const goat = {
    dietType: 'herbivore',
    makeSound() {
      console.log('baaa');
    },
    diet() {
      console.log(dietType)}};
  goat.diet(); 
  // Output will be "ReferenceError: dietType is not defined"