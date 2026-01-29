
const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};

//1.Toggle theme between "light" and "dark"
settings.theme=settings.theme==="light"?"dark":"light"
console.log(settings.theme)
//2. Turn autoSave to true
settings.autoSave=true
//3. Remove the notifications setting
delete settings.notifications
// 4. Freeze the settings object so it cannot be modified
Object.freeze(settings)
console.log(settings)
