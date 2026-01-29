const user = {
    id: 101,
    name: "Ravi",
    preferences: {
      theme: "dark",
      language: "en"
    }
  };

//1. Create a shallow copy of user
const copiedUser = { ...user };
//2. Change:
//i. name in the copied object
copiedUser.name = "Amit";
//ii. preferences.theme in the copied object
copiedUser.preferences.theme="light";
//iii .Log both original and copied objects
console.log("Original User:", user);
console.log("Copied User:", copiedUser);
//iv. Observe what changes and what doesn’t
//The name in the original object remains unchanged.
//but the preferences.theme in the orginal objiect changes because prefencesis nested object and only shallow copy is created...
