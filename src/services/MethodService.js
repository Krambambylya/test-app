export const MethodService = {
    getTagsByText: (text) => {
      const regexp = /\B\#\w\w+\b/g;
      let result = text.match(regexp);

      if (result) {
          return result;
      } else {
          return [];
      }
    }
};
