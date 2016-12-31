export default {

  /**
   * Returns a random number between [min, max)
   */
  getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  },

  /**
   * Returns a random ID between [0, max) 
   * 
   * Guarantees that the returned number is different than `currentId`.
   */
  getRandomId(currentId, max) {
    const id = this.getRandom(0, max); 

    // don't want a repeated piece on the next quote
    if (id === currentId) {
      return this.getRandomId(currentId, max);
    } else {
      return id;
    }
  }

}
